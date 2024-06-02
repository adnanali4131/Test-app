import React, { useState, useEffect, useCallback } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";

import * as queries from "@/graphql/queries";
import { generateClient } from "aws-amplify/api";
import { subscriptionTabelColumns } from "./constants";
import { useAppContext } from "@/context/AppContext";

export default function SubscriptionTable({ user }) {
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  const [subscriptionData, setSubscriptionData] = useState(null);
  const { toast } = useToast();
  const {
    setOnTableDataUpdate,
    setOnTableDataAdded,
    user: fetchedUser,
  } = useAppContext();

  const table = useReactTable({
    data: subscriptionData
      ? subscriptionData?.listUserSubscriptions?.items
      : [],
    columns: subscriptionTabelColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      columnVisibility,
      rowSelection,
    },
  });

  const getSubscriptionData = useCallback(async () => {
    //if user is null then return
    if (!fetchedUser) {
      return;
    }
    try {
      //get graphql client
      const client = generateClient();

      // hit api call
      const subscriptionData = await client.graphql({
        query: queries.listUserSubscriptions,
        variables: {
          filter: {
            email: {
              eq: fetchedUser.signInDetails.loginId,
            },
          },
        },
      });
      // Sort the items based on the `checked` field
      const sortedItems =
        subscriptionData.data.listUserSubscriptions.items.sort((a, b) => {
          return a.checked === b.checked ? 0 : a.checked ? -1 : 1;
        });

      // Set the sorted data
      setSubscriptionData({
        ...subscriptionData.data,
        listUserSubscriptions: {
          ...subscriptionData.data.listUserSubscriptions,
          items: sortedItems,
        },
      });
    } catch (error) {
      console.log("error while fetching user subscriptions", error);
      toast({
        title: "Failure",
        description: "Something went wrong while fetching the subscription",
        variant: "destructive",
      });
    }
  }, [fetchedUser]);

  // callback to be triggered when data is updated in the table. triggered when status is checked
  const onTableUpdate = useCallback(() => {
    getSubscriptionData();
  }, []);

  //set the callback function in the app context
  setOnTableDataUpdate(() => onTableUpdate);

  // callback to be triggered when data is added in the table
  const onTableDataAdded = useCallback(() => {
    getSubscriptionData();
  }, []);

  //set the callback function in the app context
  setOnTableDataAdded(() => onTableDataAdded);

  useEffect(() => {
    //onlu get data if user is not null
    if (fetchedUser) {
      getSubscriptionData();
    }
  }, [fetchedUser]);

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter titles..."
          value={table.getColumn("title")?.getFilterValue() || ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }>
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => {
                const rowData = row.original;
                return (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className={`${
                      rowData.checked ? "bg-green-500/30" : "bg-red-500/30"
                    }`}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={subscriptionTabelColumns.length}
                  className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

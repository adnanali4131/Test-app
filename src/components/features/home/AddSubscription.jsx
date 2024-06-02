import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as mutations from "@/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import { useAppContext } from "@/context/AppContext";
import { Loader } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const AddSubscription = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const { user,onTableDataAdded } = useAppContext();
  const { toast } = useToast();

/**
 * The function `handleInsertSubscription` handles the insertion of a new subscription into a database,
 * displaying success or error messages accordingly.
 */
  const handleInsertSubscription = async () => {
    //if price or title is empty, return
    if (!title || !price) {
      toast({
        title: "Empty Fields",
        description: "Price and title cannot be empty",
        variant: "destructive",

      });
      return
    }


    try {
      setIsLoading(true);
      //get graphql client
      const graphqlClient = generateClient();
      //hit api
      const newSubscription = await graphqlClient.graphql({
        query: mutations.createUserSubscription,
        variables: {
          input: {
            title: title,
            description: description,
            checked: false,
            email: user.signInDetails.loginId,
            userId: user.userId,
            price: price,
          },
        },
      });
      //reset the fields
      setTitle("");
      setDescription("");
      setPrice("");
      //call the callback to make the subscriptionTable component to fetch the data again
      onTableDataAdded()
      //show a success message
      toast({
        title:"Success",
        description:"Subscription added successfully",
        variant: "success",


      })
    } catch (error) {
      console.log(error);
    } finally {
      //end the loading at the end
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button>Add Subscription</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Subscription</DialogTitle>
          <DialogDescription>
            Please fill out subscription details
          </DialogDescription>
        </DialogHeader>

        <div className="w-full h-max flex flex-col gap-3">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="w-full"
          />
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="w-full"
          />

          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            className="w-full"
            type="number"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <Button
            className="w-full mt-10 flex flex-row items-center gap-5"
            onClick={handleInsertSubscription}
            disabled={isLoading}>
            {isLoading && <Loader className="animate-spin" />}
            <p>Add Subscription</p>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddSubscription;

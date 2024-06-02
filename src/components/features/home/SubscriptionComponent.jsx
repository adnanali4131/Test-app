import { useAppContext } from "@/context/AppContext";
import React from "react";
import AddSubscription from "./AddSubscription";
import SubscriptionTable from "./SubscriptionTable";

const SubscriptionComponent = () => {
  const { user } = useAppContext();
  return (
    <div className="w-full max-w-screen-xl mx-auto h-max py-5 flex flex-col gap-4">
      <AddSubscription />
      {user&&<SubscriptionTable user={user} />}
    </div>
  );
};

export default SubscriptionComponent;

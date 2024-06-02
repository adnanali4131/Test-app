import { useAppContext } from "@/context/AppContext";
import HomePage from "@/pages/home-page/HomePage";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

const AppRouter = ({ user, signOut }) => {
  const { setUser, setSignout } = useAppContext();

  useEffect(() => {
    //adding the user details and the signout function to the app context toi avoid prop drilling
    setUser(user);
    setSignout(() => signOut);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AppRouter;

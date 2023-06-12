import React from "react";
import NavbarView from "./NavbarView";
import { withRouter } from "next/router";
import { useAuth } from "../../context/auth";

const Navbar = (props: any) => {
  const { user } = useAuth();

  return <NavbarView {...props} user={user}></NavbarView>;
};

export default withRouter(Navbar);

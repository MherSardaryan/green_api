import React, { useContext } from "react";
import { Route, Routes } from "react-router";
import { authRoutes, publicRoutes } from "./routes";
import { ClientContext } from "../context/ClientContext";

export default function Routing() {
  const { isAuth } = useContext(ClientContext);

  if ((localStorage.getItem("token") && localStorage.getItem("id")) || isAuth) {
    return (
      <Routes>
        {authRoutes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
      </Routes>
    );
  }

  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  );
}

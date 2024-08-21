import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Tabcontainer from "../components/Tabcontainer";

export function TabIndex() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Outlet />

      <Tabcontainer
        home="/home.svg"
        swapHoriz="/swap-horiz.svg"
        creditCard="/credit-card.svg"
      />
    </>
  );
}

import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { loggedIn$ } from "../config/firebaseinit";
import { getLoans, getNotification, getTransactions, getTransactionsType, getUserInfo } from "../config/services";

export function DashboardIndex() {
  const navigate = useNavigate();


  React.useEffect(() => {
    loggedIn$.subscribe((user) => {
      if (!user) {
        navigate("auth/login");
      } else {
        // console.log(user);
        getLoans(user.uid);
        getUserInfo(user.uid);
        getTransactions(user.uid);
        getTransactionsType(user.uid, "savings");
        getTransactionsType(user.uid, "overdraft");
        getNotification(user.uid);
      }
    });
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}

/*
 <Helmet>
      <script src="//code.tidio.co/y4qvyvglyyragn1zlquny8um9fpsgoyg.js" async></script>
      </Helmet>

      <Backdrop open={loading}>
        <CustomCirleLoader />
      </Backdrop>
*/

import React from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import DataList from "../DataList";
import EditUser from "../EditUser";
import { LoginPage } from "../LoginPage";
import PrivateRoute from "../PrivateRoute";
import SingUpPage from "../SingUpPage";

function Routes() {
  return (
    <Switch>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/sing-up' element={<SingUpPage />} />
      <Route
        path='/data-list'
        element={
          <PrivateRoute>
            <DataList />
          </PrivateRoute>
        }
      />
      <Route
        path='/edit-user'
        element={
          <PrivateRoute>
            <EditUser />
          </PrivateRoute>
        }
      />

      <Route path='*' element={<Navigate to={"/login"} />} />
    </Switch>
  );
}

export default Routes;

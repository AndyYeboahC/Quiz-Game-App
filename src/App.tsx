import React, { createContext } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Router } from "express";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import { useEffect, useState } from "react";
import { log } from "console";
import Header from "./components/header/header";
import Questionnaire from "./pages/Questionnaire/Questionnaire";
import Activity from "./pages/Activities/activity/Activity";
import ActivityTwo from "./pages/Activities/ActivityTwo/ActivityTwo";
import Loader from "./components/loader/loader";
import Results from "./pages/Results/Results";
import useFetch from "./hooks/useFetch";
import ProcessProvider from "./contexts/ProcessContext";
import { MESSAGE } from "./constants";

function App() {
  const { data, title, heading, isLoading } = useFetch();

  if (isLoading) {
    return <Loader message={MESSAGE.LOADING} />;
  }

  return (
    <div>
      <ProcessProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home data={data} />} />
            <Route path="/home" element={<Home data={data} />} />
            <Route
              path="/quiz/:activityId/:round?"
              element={<Activity data={data} />}
            />
            <Route path="/quiz/results" element={<Results />} />
            <Route
              path="*"
              element={<Loader message={MESSAGE.PAGE_NOT_FOUND} />}
            />
          </Routes>
        </BrowserRouter>
      </ProcessProvider>
    </div>
  );
}

export default App;

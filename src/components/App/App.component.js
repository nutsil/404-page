import React from "react";
import { TitlePage } from "../TitlePage/TitlePage.component";
import "./App.styles.scss";

export function App() {
  return (
    <div className="app-wrapper">
      <div className="header">
        <TitlePage />
      </div>
      <div className="area-2">
        <div className="area-2-a"></div>
        <div className="area-2-b"></div>
      </div>
      <div className="area-3"></div>
    </div>
  );
}

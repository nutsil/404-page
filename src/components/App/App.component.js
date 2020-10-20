import React from "react";
import { TitlePage } from "../TitlePage/TitlePage.component";
import "./App.styles.scss";

export function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <TitlePage />
      </header>
      <main className="area-2">
        <div className="area-2-a"></div>
        <div className="area-2-b"></div>
      </main>
      <footer className="area-3"></footer>
    </div>
  );
}

import React from "react";
import { TitlePage } from "../TitlePage/TitlePage.component";
import { ContentBody } from "../ContentBody/ContentBody.component";
import "./App.styles.scss";
import ScareCrow from "../../assets/images/Scarecrow.png";
import { Button } from "../Button/Button.component";

export function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <TitlePage />
      </header>
      <main className="area-2">
        <div className="area-2-a">
          <img
            src={ScareCrow}
            alt="scarecrow"
            width="286"
            height="238"
            className="scarecrow-image"
          />
        </div>
        <div className="area-2-b">
          <ContentBody />
          <Button />
        </div>
      </main>
      <footer className="area-3"></footer>
    </div>
  );
}

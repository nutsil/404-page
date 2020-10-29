import React from "react";
import { TitlePage } from "../TitlePage/TitlePage.component";
import { ContentBody } from "../ContentBody/ContentBody.component";
import "./App.styles.scss";
import ScareCrow from "../../assets/images/Scarecrow.png";

export function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <TitlePage title="404 NOT FOUND" />
      </header>
      {/* FIXME: cambiar nombres de clases, hacerlas mas descriptivas */}
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
          <ContentBody
            title="I have bad news for you"
            contentBody="The page you are looking for might be removed or is temporarily
        unavailable"
          />
        </div>
      </main>
      <footer className="area-3"></footer>
    </div>
  );
}

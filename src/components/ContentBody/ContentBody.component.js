import React from "react";
import "./ContentBody.styles.scss";
import { Button } from "../Button/Button.component";

export function ContentBody() {
  return (
    <div>
      <h2 className="body-title">I have bad news for you </h2>
      <p className="content-text">
        The page you are looking for might be removed or is temporarily
        unavailable
      </p>
      <Button />
    </div>
  );
}

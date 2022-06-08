/// <reference types="cypress" />
/// <reference path="../cypress.d.ts" />
import React from "react";
import App from "./App";

describe("App", () => {
  it("playground", () => {
    cy.mount(<App />);
    cy.get("button").click();
    cy.get("p").contains("count is: 1").should("exist");
  });
});

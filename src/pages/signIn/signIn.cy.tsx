/// <reference types="cypress" />
/// <reference path="../../../cypress.d.ts" />
import React from "react";
import { SignIn } from ".";
import { AppProviders } from "../../providers";

describe("SiginIn", () => {
  it("playground", () => {
    cy.mount(
      <AppProviders>
        <SignIn />
      </AppProviders>
    );
    cy.get("[data-testid=email]").type("crislerwintler@gmail.com");
    cy.get("[data-testid=password]").type("password");
    cy.intercept("POST", "/auth/signin", ({ body }) => {
      expect(body).to.deep.equal({
        email: "crislerwintler@gmail.com",
        password: "password",
      });
    });
    cy.get("[data-testid=submit").click();
  });
});

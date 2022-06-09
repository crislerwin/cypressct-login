/// <reference types="cypress" />
/// <reference path="../../../cypress.d.ts" />
import React from "react";
import { SignIn } from ".";
import { AppProviders } from "../../providers";

describe("Sign In Page", () => {
  it("Login in the App", () => {
    const mockedEmail = "test@email.com";
    const mockpassword = "testpassword";
    cy.mount(
      <AppProviders>
        <SignIn />
      </AppProviders>
    );
    cy.get("[data-testid=email]").type(mockedEmail);
    cy.get("[data-testid=password]").type(mockpassword);
    cy.intercept("POST", "/auth/signin", ({ body }) => {
      expect(body).to.deep.equal({
        email: mockedEmail,
        password: mockpassword,
      });
    });
    cy.get("[data-testid=submit").click();
  });
});

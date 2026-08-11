import { Users } from "../types/testData";

describe("Login flow", () => {
  let users: Users;

  before(() => {
    cy.fixture("users").then((data) => {
      users = data;
    });
  });

  beforeEach(() => {
    cy.visit("/");
  });

  it("does not allow locked_out_user to log in, and shows an error message", () => {
    cy.login(users.lockedOutUser.username, users.lockedOutUser.password);

    // Should NOT reach the inventory page
    cy.url().should("not.include", "/inventory.html");

    // An appropriate, visible error message should be shown
    cy.get('[data-test="error"]').should("be.visible").and("contain.text", "Sorry, this user has been locked out.");
  });

  it("allows standard_user to log in successfully", () => {
    cy.login(users.standardUser.username, users.standardUser.password);

    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_list").should("be.visible");
    cy.get(".title").should("have.text", "Products");
  });

  it("shows an appropriate error message for invalid credentials", () => {
    cy.login(users.invalidUser.username, users.invalidUser.password);
    
    cy.url().should("not.include", "/inventory.html");
    cy.get('[data-test="error"]').should("be.visible").and("contain.text", "Username and password do not match any user in this service");
  });
});

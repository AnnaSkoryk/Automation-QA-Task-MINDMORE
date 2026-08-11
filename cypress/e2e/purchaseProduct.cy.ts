import { Users, CustomerDetails } from "../types/testData";

describe("Purchase product flow (standard_user)", () => {
  let users: Users;
  let customer: CustomerDetails;

  before(() => {
    cy.fixture("users").then((data) => {
      users = data;
    });

    cy.fixture("customerDetails").then((data) => {
      customer = data;
    });
  });

  beforeEach(() => {
    cy.visit("/");
    cy.login(users.standardUser.username, users.standardUser.password);
    cy.url().should("include", "/inventory.html");
  });

  it("shows the header and footer while logged in", () => {
    cy.get(".primary_header").should("be.visible");
    cy.get(".footer").should("be.visible");
  });

  it("sorts, adds two products, checks out, and completes a purchase", () => {
    const addedItems : string[] = [];

    // 1. Sort by Price (low to high) and add the LAST product shown
    cy.get('[data-test="product-sort-container"]').select("lohi");

    // Verify that the prices are sorted low to high
    cy.get(".inventory_item_price").then(($prices) => {
      const prices = [...$prices].map((el) => Number(el.textContent?.replace("$", "")));
      expect(prices).to.deep.equal([...prices].sort((a, b) => a - b));
    });

    cy.get(".inventory_item").last().within(() => {
        cy.get(".inventory_item_name").invoke("text").then((name) => addedItems.push(name));
        cy.get("button").click();
      });

    // 2. Sort by Name (A to Z) and add the FIRST product shown
    cy.get('[data-test="product-sort-container"]').select("az");

    // Verify that the names are sorted A to Z
    cy.get(".inventory_item_name").then(($names) => {
      const names = [...$names].map((el) => el.textContent?.trim() ?? "");
      expect(names).to.deep.equal([...names].sort());
    });

    cy.get(".inventory_item").first().within(() => {
        cy.get(".inventory_item_name")
          .invoke("text")
          .then((name) => addedItems.push(name));
        cy.get("button").should("have.text", "Add to cart").click();
      });

    // Cart badge should reflect 2 items
    cy.get(".shopping_cart_badge").should("have.text", "2");

    // 3. Proceed to checkout
    cy.get(".shopping_cart_link").click();
    cy.url().should("include", "/cart.html");
    cy.get(".cart_item").should("have.length", 2);

    cy.get('[data-test="checkout"]').click();
    cy.url().should("include", "/checkout-step-one.html");

    // 4. Fill out customer details
    cy.get("#first-name").type(customer.firstName);
    cy.get("#last-name").type(customer.lastName);
    cy.get("#postal-code").type(customer.postalCode);
    cy.get('[data-test="continue"]').click();

    cy.url().should("include", "/checkout-step-two.html");

    // 5. Verify the items in the checkout overview match what we added
    cy.get(".cart_item .inventory_item_name").then(($names) => {
      const overviewNames = [...$names].map((el) => el.textContent.trim());
      expect(overviewNames.sort()).to.deep.equal([...addedItems].sort());
    });

    // Verify that the summary section is visible
    cy.get(".summary_subtotal_label").should("be.visible");
    cy.get(".summary_tax_label").should("be.visible");
    cy.get(".summary_total_label").should("be.visible");
    cy.get(".summary_total_label").should("be.visible").and("contain.text", "Total");
    
    // 6. Complete the purchase
    cy.get('[data-test="finish"]').click();

    cy.url().should("include", "/checkout-complete.html");
    cy.get(".complete-header").should("contain.text", "Thank you for your order!");
    cy.get(".complete-text").should("be.visible");
  });
});

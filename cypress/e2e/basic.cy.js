describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("opens the index page", () => {
    cy.get("h1").contains("Great coffee with a conscience");
  });

  it("navigates to the events page", () => {
    cy.get('a[href="/events"]').eq(0).click();
    cy.url().should("include", "/events");
    cy.get("h1").contains(/Ride Schedule/i);
  });

  it("navigates to the members page", () => {
    cy.get('a[href="/members"]').eq(0).click();
    cy.url().should("include", "/members");
    cy.get("h1").contains(/Latest stories/i);
  });

  it("navigates to the blog page", () => {
    cy.get('a[href="/post"]').eq(0).click();
    cy.url().should("include", "/post");
    cy.get("h1").contains(/Latest Stories/i);
  });
});

describe("validate blog", () => {
  it("should have only 3 blog posts by default", () => {
    cy.visit("/post");
    cy.get("ul#blog-list li").should("have.length", 3);
  });
});

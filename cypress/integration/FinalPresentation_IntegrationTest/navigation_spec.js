describe("Test navigation through links", function() {
    before(() => {
        cy.request("POST", "http://localhost:5000/repository/", {
            name: "cypress_test"
        });
    });

    after(() => {
        cy.request("POST", "http://localhost:5000/repository/delete/", {
            name: "cypress_test"
        });
    });

    it("Go to homepage", function() {
        cy.visit("http://localhost:5001/");
        cy.get(".section").should("contain", "cypress_test");
    });

    it("Navigate through scrape", function() {
        cy.visit("http://localhost:5001/");
        cy.wait(1000);
        cy.contains("cypress")
            .parent()
            .parent()
            .parent()
            .contains("Ready")
            .click();
        cy.get(".box > :nth-child(1)").should("contain", "Scrape");

        cy.contains("Primary Key").click();

        cy.get(".box").should("contain", "Base URL");

        cy.go("back");

        cy.contains("file").click();
        cy.get(".section").should("contain", "Scrape Using URL File");

        cy.contains("Go Back Home").click();
        cy.url().should("equal", "http://localhost:5001/#/");
    });

    it("Navigate through parse", function() {
        cy.visit("http://localhost:5001/");
        cy.wait(1000);
        cy.contains("test")
            .parent()
            .parent()
            .parent()
            .contains("Ready")
            .click();

        cy.get("canvas").should("exist");
        cy.url().should("equal", "http://localhost:5001/#/parse/test");
    });

    it("Navigate through export", function() {
        cy.visit("http://localhost:5001/");
        cy.wait(500);
        cy.contains("test")
            .parent()
            .parent()
            .parent()
            .contains("Ready")
            .next()
            .click();

        cy.url().should("equal", "http://localhost:5001/#/export/test");
    });
});

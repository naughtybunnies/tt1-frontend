describe("Scrape using primary key test", function() {
    beforeEach(function() {
        cy.request("POST", "http://localhost:5000/repository/", {
            name: "scraper_test"
        });
    });

    afterEach(function() {
        cy.request("POST", "http://localhost:5000/repository/delete/", {
            name: "scraper_test"
        });
        cy.visit("http://localhost:3000/");
    });

    it("Scrape using primary key", function() {
        cy.visit("http://localhost:3000/");
        cy.get("a > .sc-bdVaJa > .sc-bwzfXH").click();
        cy.get(":nth-child(1) > a > .sc-cSHVUG > .svg-inline--fa").click();

        cy.get(":nth-child(1) > .control > .input").type(
            "https://pantip.com/topic/{}"
        );
        cy.get(":nth-child(2) > .control > .input").type("38731688");
        cy.get(":nth-child(3) > .control > .input").type("38731689");

        cy.get(".button").click();

        cy.get(".sc-htoDjs", { timeout: 10000 }).should("exist");
    });

    it("Scrape using file upload", function() {
        cy.visit("http://localhost:3000/");
        cy.get("a > .sc-bdVaJa > .sc-bwzfXH").click();
        cy.get(":nth-child(2) > a > .sc-cSHVUG").click();
        cy.get(".file-cta").should("exist"); // cannot test file upload
    });

    
});

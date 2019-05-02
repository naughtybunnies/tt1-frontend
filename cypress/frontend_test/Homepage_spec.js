describe("Homepage Test", function() {
    it("Add repository", function() {
        cy.visit("http://localhost:3000");
        cy.contains("Add").click();
        cy.get(".input").type("NewRepo");
        cy.get(".Submit").click();

        cy.get(".section").should("not.contain", "Loading"); // reverse assertion
        cy.get(".sc-htoDjs").should("contain", "NewRepo");

        // Teardown
        cy.visit("http://localhost:3000");
        cy.get(".selemnium-repo-delete").click();
        cy.get(".sc-bZQynM > .box > :nth-child(1) > .control > .input").type("NewRepo");
        cy.get(".selemnium-delete-confirm").click();

    });

    it("Add duplicating name repository", function() {
        // Test
        cy.visit("http://localhost:3000");
        cy.contains("Add").click();
        cy.get(".input").type("NewRepo");
        cy.get(".Submit").click();

        cy.get(".section").should("not.contain", "Loading"); // reverse assertion
        cy.get(".sc-htoDjs").should("contain", "NewRepo");

        cy.contains("Add").click();
        cy.get('.sc-jTzLTM > .box > :nth-child(1) > .control > .input').type("NewRepo");
        cy.get(".Submit").click();

        cy.get('.sc-jTzLTM > .box > p').should("contain", "name already exists")  // Assert exising error message

        // Teardown
        cy.visit("http://localhost:3000");
        cy.get(".selemnium-repo-delete").click();
        cy.get(".sc-bZQynM > .box > :nth-child(1) > .control > .input").type("NewRepo");
        cy.get(".selemnium-delete-confirm").click();

    })

    it("Delete Repo", function() {
        // Setup
        cy.visit("http://localhost:3000");
        cy.contains("Add").click();
        cy.get(".input").type("NewRepo");
        cy.get(".Submit").click();

        cy.get(".section").should("not.contain", "Loading"); // reverse assertion
        cy.get(".sc-htoDjs").should("contain", "NewRepo");

        // Test
        cy.visit("http://localhost:3000");
        cy.get(".selemnium-repo-delete").click();
        cy.get(".sc-bZQynM > .box > :nth-child(1) > .control > .input").type("NewRepo");
        cy.get(".selemnium-delete-confirm").click();

        // cy.get(".section").should("not.contain", "Loading"); // reverse assertion
        // cy.get(".sc-htoDjs").should("not.exist");
    });

    it("Delete with invalid name", function() {
        // Setup
        cy.visit("http://localhost:3000");
        cy.contains("Add").click();
        cy.get(".input").type("NewRepo");
        cy.get(".Submit").click();

        cy.get(".section").should("not.contain", "Loading"); // reverse assertion
        cy.get(".sc-htoDjs").should("contain", "NewRepo");

        // Test
        cy.visit("http://localhost:3000");
        cy.get(".selemnium-repo-delete").click();
        cy.get(".sc-bZQynM > .box > :nth-child(1) > .control > .input").type("NewRepoWrongName");
        cy.get(".selemnium-delete-confirm").click();

        cy.get('.sc-bZQynM > .box > p').should('contain', 'Invalid')

        // Teardown
        cy.visit("http://localhost:3000");
        cy.get(".selemnium-repo-delete").click();
        cy.get(".sc-bZQynM > .box > :nth-child(1) > .control > .input").type("NewRepo");
        cy.get(".selemnium-delete-confirm").click();
    });
});
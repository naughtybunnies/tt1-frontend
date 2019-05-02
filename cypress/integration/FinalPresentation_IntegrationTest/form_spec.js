describe("Test forms", function() {
    before(() => {
        cy.request("POST", "http://localhost:5000/repository/", {
            name: "test"
        });
        cy.request(
            "POST",
            "http://localhost:5000/repository/scraper/seturl/",
            {
                baseurl: "https://pantip.com/topic/{}",
                start: "38798500",
                end: "38798502",
                reponame: "test"
            }
        );
    });

    it("Check homepage forms", function() {
        cy.visit("http://localhost:5001/");
        cy.contains("Add Repo").click();
        cy.get(".selenium-reponame-input")
            .type("hellostring")
            .should("have.value", "hellostring");

        cy.get(
            ".sc-jTzLTM > .box > .is-grouped > :nth-child(2) > .is-danger"
        ).click();
        cy.get(".selemnium-repo-delete").click();
        cy.get(".sc-bZQynM > .box > :nth-child(1) > .control > .input")
            .type("hellostring")
            .should("have.value", "hellostring");
    });

    it("Check scrape using PK form", function() {
        cy.request("POST", "http://localhost:5000/repository/", {
            name: "cypress_test"
        });

        cy.visit("http://localhost:5001/");
        cy.get(
            ":nth-child(2) > .sc-htoDjs > .media > .sc-gzVnrw > a > .sc-bdVaJa > .sc-bwzfXH"
        ).click();
        cy.get(":nth-child(1) > a > .sc-cSHVUG").click();

        cy.get(":nth-child(1) > .control > .input")
            .type("hellostring")
            .should("have.value", "hellostring");
        cy.get(":nth-child(2) > .control > .input")
            .type("hellostring")
            .should("have.value", "hellostring");
        cy.get(":nth-child(3) > .control > .input")
            .type("hellostring")
            .should("have.value", "hellostring");

        cy.request("POST", "http://localhost:5000/repository/delete/", {
            name: "cypress_test"
        });
    });
});

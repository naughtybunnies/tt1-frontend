import { watchFile } from "fs";

describe("Use case 1 : SIIT Professors", function() {
    it("Create new repository", function() {
        cy.visit("http://localhost:5001/");
        cy.contains('Add Repo').click();
        cy.get('.selenium-reponame-input').type('SIITProfessors');

        cy.get('.Submit').click();
    });

    it("Scrape using PK", function() {
        cy.visit("http://localhost:5001/");
        cy.get(':nth-child(2) > .sc-htoDjs > .media > .sc-gzVnrw > a > .sc-bdVaJa > .sc-bwzfXH').click();
        cy.get(':nth-child(1) > a > .sc-cSHVUG').click();

        cy.get(':nth-child(1) > .control > .input').type('https://www.siit.tu.ac.th/personnel.php?id={}')
        cy.get(':nth-child(2) > .control > .input').type('100')
        cy.get(':nth-child(3) > .control > .input').type('120')

        cy.get('.button').click()
    });

    it("Export into JSON", function() {
        cy.visit("http://localhost:5001/");
        cy.get('[href="#/export/SIITProfessors"] > .sc-bdVaJa > .sc-bwzfXH').click();

        // cy.get('.iDlptQ').click(); // see if data is exported
        cy.wait(1000)
    });

    it("Delete Repository", function() {
        cy.visit("http://localhost:5001/");
        cy.get(':nth-child(2) > .sc-htoDjs > .media > :nth-child(3) > :nth-child(1) > .selemnium-repo-delete').click()

        cy.get('[style="display: block;"] > .sc-bZQynM > .box > :nth-child(1) > .control > .input').type("SIITProfessors");
        cy.get('[style="display: block;"] > .sc-bZQynM > .box > .is-grouped > :nth-child(1) > .selemnium-delete-confirm').click();

        cy.get('.section').should('not.contain', 'SIITProfessors')
    })
});

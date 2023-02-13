import { When, Then, Given, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import { fonciaHomepage } from "../support/pages/fonciahomepage";
import { fonciaresultPage } from "../support/pages/fonciaresultspage";


const testData = require("../fixtures/data.json");


Given("l utilisateur navigue sur le site {string}", (site: string) => {
  cy.visit(site)
  //vérifier l'atterissage sur la bonne page 
  cy.url().should('eq', 'https://fr.foncia.com/')
  //vérifier la bare de recherche de la page d'acceuil 
  fonciaHomepage.searchbar.should('be.visible')
  //vérifier la liste du projet à selectionner
  fonciaHomepage.projectSelector.should('be.visible')
  //vérifier la liste Types de bien
  fonciaHomepage.typeBienSelector.should('be.visible')
  //vérifier le textbox du prix max 
  fonciaHomepage.prixSelector.should('be.visible')
  //vérifier le textbox de la ville,département région
  fonciaHomepage.villeSelector.should('be.visible')
  //vérifier le bouton rechercher
  fonciaHomepage.searchButtonSelector.should('be.visible')

})

When('l utilisateur effectue une recherche de location d appartement', (dataTable: DataTable) => {

  dataTable.hashes().forEach((element) => {
    //cliquer sur le bouton tout accepter du cookie
    fonciaHomepage.cookiesButton.click()

    //cliquer sur louer
    fonciaHomepage.projectSelector.click()
    fonciaHomepage.projet(element.action)

    //clicquer sur appartement
    fonciaHomepage.typeBienSelector.click()
    fonciaHomepage.typeBien(element.bien)
    // ajouter le prix 
    fonciaHomepage.prixSelector.type(element.prix)

    //ajouter la ville
    fonciaHomepage.villeSelector.type(element.ville).then(() => {
      fonciaHomepage.picklist.find('li').eq(1).click()
    })
    //clicquer sur rechercher 
    fonciaHomepage.searchButtonSelector.click()

  });

});

Then("l utilisateur verifie les resultats de sa recherche", () => {
  //je vérifie l'existence du bloc filtre
  fonciaresultPage.filter.should('be.visible');
  //je vérifie les prix qui doient étre au dessous de 1500 euro
  fonciaresultPage.checkPrix(`${testData.prixMax}`);
  // je vérifie la ville qui doit étre Paris
  fonciaresultPage.checkVille(`${testData.ville}`);
});

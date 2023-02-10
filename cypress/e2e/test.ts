import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

import { fonciaHomepage } from "../support/pages/fonciahomepage";
import { fonciaresultPage } from "../support/pages/fonciaresultspage";


const testData = require("../fixtures/data.json");



  When("aller au site {string}", (url: string) => {
    cy.visit(url)
  });

  Then("la page d acceuil d'affiche", () => {
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
  });

  When(`Je choisis {string} un {string} à {string} avec un loyer MAX {string} et je click sur le bouton rechercher`, () => {
    //cliquer sur le bouton tout accepter du cookie
    fonciaHomepage.cookiesButton.click()
    //cliquer sur louer
    fonciaHomepage.projectSelector.click().then(() => {
      fonciaHomepage.rentalcheckbox.click()
    })
    //clicquer sur appartement
    fonciaHomepage.typeBienSelector.click().then(() => {
      fonciaHomepage.appartementCheckBox.click()
    })
    // ajouter le prix 
   fonciaHomepage.prixSelector.type(testData.prixMax)
    //ajouter la ville
   fonciaHomepage.villeSelector.type(testData.ville).then(() => {
      fonciaHomepage.picklist.find('li').eq(1).click()
    })
    //clicquer sur rechercher 
    cy.xpath('(//button[@class="p-button p-button-help ng-star-inserted"])[1]').click()
  });


  Then("les resultats sont identiquent à mes critéres", () => {
    //je vérifie l'existence du bloc filtre
    fonciaresultPage.filter
      .should('be.visible');
      //je vérifie les prix qui doient étre au dessous de 1500 euro
    fonciaresultPage.checkPrix(`${testData.prixMax}`);
    // je vérifie la ville qui doit étre Paris
    fonciaresultPage.checkVille(`${testData.ville}`);
  });

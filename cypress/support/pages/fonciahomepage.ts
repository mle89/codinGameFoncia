import { fonciaHomepageSelector } from "../Selectors/fonciahomepageSelectors";

class fonciaHomepagePage {

    get searchbar() {
        return cy.get(fonciaHomepageSelector.searchBarSelectr)
    }
    get projectSelector() {
        return cy.get(fonciaHomepageSelector.projectSelector)
    }
    get typeBienSelector() {
        return cy.get(fonciaHomepageSelector.typeBienSelector)
    }
    get prixSelector() {
        return cy.get(fonciaHomepageSelector.prixSelector)
    }
    get villeSelector() {
        return cy.get(fonciaHomepageSelector.villeSelector)
    }
    get searchButtonSelector() {
        return cy.get(fonciaHomepageSelector.searchButtonSelector)
    }
    get cookiesButton() {
        return cy.get(fonciaHomepageSelector.cookiesButton)
    }
    get rentalcheckbox() {
        return cy.get(fonciaHomepageSelector.rentalcheckbox)
    }
    get appartementCheckBox() {
        return cy.get(fonciaHomepageSelector.appartementCheckBox)
    }
    get picklist() {
        return cy.get(fonciaHomepageSelector.picklist)
    }
}

export const fonciaHomepage = new fonciaHomepagePage();
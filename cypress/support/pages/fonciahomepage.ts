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
        return cy.xpath(fonciaHomepageSelector.searchButtonSelector)
    }
    get cookiesButton() {
        return cy.get(fonciaHomepageSelector.cookiesButton)
    }
    get rentalcheckbox() {
        return cy.xpath(fonciaHomepageSelector.rentalcheckbox)
    }
    get appartementCheckBox() {
        return cy.xpath(fonciaHomepageSelector.appartementCheckBox)
    }
    get picklist() {
        return cy.get(fonciaHomepageSelector.picklist)
    }
    projet(projet:string){
        if(projet == 'Louer'){
            this.rentalcheckbox.click()
        }
    }
    typeBien(type:string){
        if(type =='Appartement'){
            this.appartementCheckBox.click()
        }
    }
}

export const fonciaHomepage = new fonciaHomepagePage();
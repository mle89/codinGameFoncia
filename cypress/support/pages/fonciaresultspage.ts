import { fonciaResultPageSelector } from "../Selectors/fonciaresultPageSelector";

class FonciaResultsPage {
    
    get filter() {
        return cy.xpath(fonciaResultPageSelector.blocFilter);
    }

    checkPrix(price : string) {
        let result;
        
        // This will loop thru the list of prices on the result page
        cy.xpath(fonciaResultPageSelector.resultatPrix).each(($pr) => {
            let pr = $pr.text();
            let ln = pr.length;
            
            // This condition will allow to format the price to remove the space in case of 4 digits and replace the , with a . to be handled as a type Number
            if (pr.includes(",")) {
                result = Number(pr.substring(0,ln-2).replace(/\s/g, '').replace(/,/g, '.'));
            } else {
                result = Number(pr.substring(0,ln-2).replace(/\s/g, ''));
            }
            expect(result).to.be.lessThan(Number(price));
        });
    }

    checkVille(city : string) {

        // This will loop thru the list of cities on the result page
        cy.xpath(fonciaResultPageSelector.resultatVille).each(($pl) => {
            let pl = $pl.text();
            expect(pl).to.be.contain(city.toUpperCase());
        });
    }

}

export const fonciaresultPage = new FonciaResultsPage();
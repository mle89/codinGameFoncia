class FonciaHomepageSelector {
   public searchBarSelectr = '#search-bar';
   public projectSelector = '#projectToggle';
   public typeBienSelector = '#propertyToggle';
   public prixSelector = '#price';
   public villeSelector = '#city';
   public searchButtonSelector = '(//button[@class="p-button p-button-help ng-star-inserted"])[1]';
   public cookiesButton = 'button[class="p-button p-button-secondary ng-star-inserted"]';
   public rentalcheckbox = '(//p-radiobutton[@name="project"])[2]';
   public appartementCheckBox = '(//p-checkbox[@name="type"])[1]';
   public picklist = '#pr_id_6_list'; 

}
  
export const fonciaHomepageSelector = new FonciaHomepageSelector();
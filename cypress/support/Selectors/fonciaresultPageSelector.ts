class FonciaResultPageSelector {
    public blocFilter = '//div[@class="p-flex-wrap search-results-header p-d-sm-none p-d-md-flex search-form ng-untouched ng-pristine ng-valid ng-star-inserted"]';
    public resultatPrix = '//div[@class="foncia-card-price"]/span';
    public resultatVille = '//p[@class="foncia-card-place"]';
   
}
  
export const fonciaResultPageSelector = new FonciaResultPageSelector();
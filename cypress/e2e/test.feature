Feature: Recherche d'un bien de location sur le site de Foncia
  
  Scenario: Recherche d'un bien de location sur le site de Foncia
    Given l utilisateur navigue sur le site "https://fr.foncia.com"
    When  l utilisateur effectue une recherche de location d appartement
    | action | bien        | ville | prix |
    | Louer  | Appartement | paris | 1500 |
    Then  l utilisateur verifie les resultats de sa recherche
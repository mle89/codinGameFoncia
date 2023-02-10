Feature: en tant qu'utilisateur non connecte , je dois acceder au site de Foncia et rechercher un appartement
  Scenario: connexion au site de Foncia
    When aller au site "https://fr.foncia.com"
    Then la page d acceuil d'affiche

  Scenario: Louer un appartement
    When Je choisis "Louer" un "appartement" à "Paris" avec un loyer MAX "1500" et je click sur le bouton rechercher
    Then les resultats sont identiquent à mes critéres
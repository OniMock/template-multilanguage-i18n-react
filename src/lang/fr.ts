import { LanguageFile } from '../types/language';

const fr: LanguageFile = {
  config: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: 'fr',
  },
  translations: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',

    // Common
    'common.loading': 'Chargement...',
    'common.error': 'Erreur',
    'common.success': 'Succès',
    'common.cancel': 'Annuler',
    'common.save': 'Enregistrer',
    'common.edit': 'Modifier',
    'common.delete': 'Supprimer',
    'common.confirm': 'Confirmer',

    // Welcome
    'welcome.title': 'Bienvenue',
    'welcome.message': 'Bonjour {name}!',
    'welcome.description': 'Ceci est un projet modèle avec internationalisation.',

    // Footer
    'footer.text': '© {year} Votre Entreprise. Tous droits réservés.',
    'footer.madeWith': 'Fait avec ❤️',

    // Example with variables
    'user.greeting': 'Bon retour, {name}!',
    'items.count': 'Vous avez {count} éléments',
    'time.lastUpdate': 'Dernière mise à jour: {date}',
  },
};

export default fr;
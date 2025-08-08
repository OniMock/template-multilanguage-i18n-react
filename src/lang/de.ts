import { LanguageFile } from '../types/language';

const de: LanguageFile = {
  config: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: 'de',
  },
  translations: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.projects': 'Projekte',
    'nav.contact': 'Kontakt',

    // Common
    'common.loading': 'Laden...',
    'common.error': 'Fehler',
    'common.success': 'Erfolg',
    'common.cancel': 'Abbrechen',
    'common.save': 'Speichern',
    'common.edit': 'Bearbeiten',
    'common.delete': 'Löschen',
    'common.confirm': 'Bestätigen',

    // Welcome
    'welcome.title': 'Willkommen',
    'welcome.message': 'Hallo {name}!',
    'welcome.description': 'Dies ist ein Vorlagenprojekt mit Internationalisierung.',

    // Footer
    'footer.text': '© {year} Ihr Unternehmen. Alle Rechte vorbehalten.',
    'footer.madeWith': 'Gemacht mit ❤️',

    // Example with variables
    'user.greeting': 'Willkommen zurück, {name}!',
    'items.count': 'Sie haben {count} Elemente',
    'time.lastUpdate': 'Letzte Aktualisierung: {date}',
  },
};

export default de;
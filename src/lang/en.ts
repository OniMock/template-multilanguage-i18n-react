import { LanguageFile } from '../types/language';

const en: LanguageFile = {
  config: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: 'us',
  },
  translations: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.confirm': 'Confirm',

    // Welcome
    'welcome.title': 'Welcome',
    'welcome.message': 'Hello {name}!',
    'welcome.description': 'This is a template project with internationalization.',

    // Footer
    'footer.text': '© {year} Your Company. All rights reserved.',
    'footer.madeWith': 'Made with ❤️',

    // Example with variables
    'user.greeting': 'Welcome back, {name}!',
    'items.count': 'You have {count} items',
    'time.lastUpdate': 'Last updated: {date}',
  },
};

export default en;
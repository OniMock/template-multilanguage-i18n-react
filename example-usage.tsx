// Example of how to use the i18n system in your React components

import React from 'react';
import { LanguageProvider } from './src/contexts/LanguageProvider';
import LanguageSelector from './src/contexts/LanguageSelector';
import { useLanguage } from './src/hooks/use-language';

// Example component using translations
const ExampleComponent = () => {
  const { t, currentLanguage } = useLanguage();
  const userName = 'João';
  const itemCount = 5;
  const currentYear = new Date().getFullYear();

  return (
    <div className="p-6">
      <h1>{t('welcome.title')}</h1>
      <p>{t('welcome.message', { name: userName })}</p>
      <p>{t('welcome.description')}</p>
      
      <div className="mt-4">
        <p>{t('user.greeting', { name: userName })}</p>
        <p>{t('items.count', { count: itemCount })}</p>
        <p>{t('time.lastUpdate', { date: new Date().toLocaleDateString() })}</p>
      </div>

      <footer className="mt-8">
        <p>{t('footer.text', { year: currentYear })}</p>
        <p>{t('footer.madeWith')}</p>
      </footer>

      <div className="mt-4">
        <p>Current language: {currentLanguage}</p>
      </div>
    </div>
  );
};

// Example navigation component
const Navigation = () => {
  const { t } = useLanguage();

  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex space-x-4">
        <a href="#home">{t('nav.home')}</a>
        <a href="#about">{t('nav.about')}</a>
        <a href="#projects">{t('nav.projects')}</a>
        <a href="#contact">{t('nav.contact')}</a>
      </div>
      
      {/* Language selector in the navigation */}
      <LanguageSelector />
    </nav>
  );
};

// Main App component showing how to set up the provider
const App = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <main>
          <ExampleComponent />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default App;

// Don't forget to add this to your main CSS file:
// @import "flag-icons/css/flag-icons.min.css";
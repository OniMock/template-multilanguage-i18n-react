import { LanguageFile } from '../types/language';
import en from './en';
import ptBr from './ptBr';
import es from './es';
import fr from './fr';
import de from './de';

export const languageFiles: Record<string, LanguageFile> = {
  en, // English (global)
  'pt-br': ptBr, // Portuguese Brazil (local)
  es, // Spanish (global)
  fr, // French (global)
  de, // German
  // Add more languages here as needed
  // zh, // Chinese
  // hi, // Hindi
  // ar, // Arabic
  // ru, // Russian
  // it, // Italian
  // ja, // Japanese
  // ko, // Korean
};

export const getAvailableLanguages = (): string[] => {
  return Object.keys(languageFiles);
};
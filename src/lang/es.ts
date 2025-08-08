import { LanguageFile } from '../types/language';

const es: LanguageFile = {
  config: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: 'es',
  },
  translations: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',

    // Common
    'common.loading': 'Cargando...',
    'common.error': 'Error',
    'common.success': 'Éxito',
    'common.cancel': 'Cancelar',
    'common.save': 'Guardar',
    'common.edit': 'Editar',
    'common.delete': 'Eliminar',
    'common.confirm': 'Confirmar',

    // Welcome
    'welcome.title': 'Bienvenido',
    'welcome.message': '¡Hola {name}!',
    'welcome.description': 'Este es un proyecto plantilla con internacionalización.',

    // Footer
    'footer.text': '© {year} Tu Empresa. Todos los derechos reservados.',
    'footer.madeWith': 'Hecho con ❤️',

    // Example with variables
    'user.greeting': '¡Bienvenido de vuelta, {name}!',
    'items.count': 'Tienes {count} elementos',
    'time.lastUpdate': 'Última actualización: {date}',
  },
};

export default es;
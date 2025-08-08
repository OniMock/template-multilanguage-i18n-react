import { LanguageFile } from '../types/language';

const ptBr: LanguageFile = {
  config: {
    code: 'pt-br',
    name: 'Portuguese (Brazil)',
    nativeName: 'Português (Brasil)',
    flag: 'br',
  },
  translations: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',

    // Common
    'common.loading': 'Carregando...',
    'common.error': 'Erro',
    'common.success': 'Sucesso',
    'common.cancel': 'Cancelar',
    'common.save': 'Salvar',
    'common.edit': 'Editar',
    'common.delete': 'Excluir',
    'common.confirm': 'Confirmar',

    // Welcome
    'welcome.title': 'Bem-vindo',
    'welcome.message': 'Olá {name}!',
    'welcome.description': 'Este é um projeto template com internacionalização.',

    // Footer
    'footer.text': '© {year} Sua Empresa. Todos os direitos reservados.',
    'footer.madeWith': 'Feito com ❤️',

    // Example with variables
    'user.greeting': 'Bem-vindo de volta, {name}!',
    'items.count': 'Você tem {count} itens',
    'time.lastUpdate': 'Última atualização: {date}',
  },
};

export default ptBr;
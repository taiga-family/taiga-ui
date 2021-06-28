import {LanguageCore} from '@taiga-ui/i18n/interfaces';
import {TUI_ENGLISH_LANGUAGE_COUNTRIES} from '../english/countries';

export const TUI_FRENCH_LANGUAGE_CORE: LanguageCore = {
    months: [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre',
    ],
    close: 'Fermer',
    nothingFoundMessage: 'Rien trouvé',
    defaultErrorMessage: 'Valeur non valide',
    spinTexts: ['Précédent', 'Suivant'],
    shortWeekDays: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    // TODO: i18n replace with current language countries list
    countries: TUI_ENGLISH_LANGUAGE_COUNTRIES,
};

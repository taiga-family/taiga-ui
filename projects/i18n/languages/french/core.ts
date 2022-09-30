import {TuiLanguageCore} from '@taiga-ui/i18n/interfaces';

import {TUI_FRENCH_LANGUAGE_COUNTRIES} from './countries';

export const TUI_FRENCH_LANGUAGE_CORE: TuiLanguageCore = {
    months: [
        `Janvier`,
        `Février`,
        `Mars`,
        `Avril`,
        `Mai`,
        `Juin`,
        `Juillet`,
        `Août`,
        `Septembre`,
        `Octobre`,
        `Novembre`,
        `Décembre`,
    ],
    close: `Fermer`,
    nothingFoundMessage: `Rien trouvé`,
    defaultErrorMessage: `Valeur non valide`,
    spinTexts: [`Précédent`, `Suivant`],
    shortWeekDays: [`Lun`, `Mar`, `Mer`, `Jeu`, `Ven`, `Sam`, `Dim`],
    countries: TUI_FRENCH_LANGUAGE_COUNTRIES,
};

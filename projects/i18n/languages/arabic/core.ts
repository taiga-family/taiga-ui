import {type TuiLanguageCore} from '@taiga-ui/i18n/types';

import {TUI_ARABIC_LANGUAGE_COUNTRIES} from './countries';

export const TUI_ARABIC_LANGUAGE_CORE: TuiLanguageCore = {
    months: [
        'يناير',
        'فبراير',
        'مارس',
        'أبريل',
        'مايو',
        'يونيو',
        'يوليو',
        'أغسطس',
        'سبتمبر',
        'أكتوبر',
        'نوفمبر',
        'ديسمبر',
    ],
    close: 'إغلاق',
    back: 'رجوع',
    clear: 'مسح',
    nothingFoundMessage: 'لم يتم العثور على شيء',
    defaultErrorMessage: 'القيمة غير صالحة',
    spinTexts: ['السابق', 'التالي'],
    shortWeekDays: ['إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت', 'أحد'],
    countries: TUI_ARABIC_LANGUAGE_COUNTRIES,
};

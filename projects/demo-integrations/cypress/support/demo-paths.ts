import '@angular/localize/init';

import {TuiDocPage, TuiDocPages} from '@taiga-ui/addon-doc';

import {pages} from '../../../demo/src/modules/app/pages';

const EXCLUSION_SECTIONS = [`Documentation`, `Common`, `Tools`, `Testing`];
const EXCLUSION_ROUTES = [`i18n`, `LineDaysChart`, `PrimitiveCheckbox`, `ThemeNight`];

export const DEMO_PATHS = flatPages(pages)
    .filter(page => !EXCLUSION_SECTIONS.includes(page.section as unknown as string))
    .filter(page => !EXCLUSION_ROUTES.includes(page.title))
    .map(page => page.route.replace(`/`, ``));

export const isScrollbarPage = (path: string): boolean => path === `components/scrollbar`;
export const isMobileCalendarPage = (path: string): boolean =>
    path === `components/mobile-calendar`;
export const isInputNumberPage = (path: string): boolean =>
    path === `components/input-number`;

function flatPages(pages: TuiDocPages): readonly TuiDocPage[] {
    return pages.reduce(
        (prev: readonly TuiDocPage[], next) => [
            ...prev,
            ...(`subPages` in next ? next.subPages : [next]),
        ],
        [],
    );
}

import '@angular/localize/init';

import {TuiDocPage, TuiDocPages} from '@taiga-ui/addon-doc';

import {pages as PUBLIC_PAGES} from '../../../../demo/src/modules/app/pages';

export const EXCLUSION_SECTIONS = [`Documentation`, `Foundations`, `Tools`, `Testing`];
export const EXCLUSION_ROUTES = [`i18n`, `PrimitiveCheckbox`, `ThemeNight`, `Markdown`];
export const DEMO_PATHS = tuiMakeCypressDemoPath(
    PUBLIC_PAGES,
    EXCLUSION_SECTIONS,
    EXCLUSION_ROUTES,
);

export const isEmbedPage = (path: string): boolean => path.startsWith(`editor/embed`);
export const isTilesPage = (path: string): boolean => path === `components/tiles`;
export const isScrollbarPage = (path: string): boolean => path === `components/scrollbar`;
export const isInputNumberPage = (path: string): boolean =>
    path === `components/input-number`;
export const isIconsPage = (path: string): boolean => path.startsWith(`icons/`);

export function tuiMakeCypressDemoPath(
    pages: TuiDocPages,
    exclusionSection: string[] = EXCLUSION_SECTIONS,
    exclusionRoutes: string[] = EXCLUSION_ROUTES,
): string[] {
    return flatPages(pages)
        .filter(page => !exclusionSection.includes(page.section as unknown as string))
        .filter(page => !exclusionRoutes.includes(page.title))
        .map(page => page.route.replace(`/`, ``));
}

function flatPages(pages: TuiDocPages): readonly TuiDocPage[] {
    return pages.reduce(
        (prev: readonly TuiDocPage[], next) => [
            ...prev,
            ...(`subPages` in next ? next.subPages : [next]),
        ],
        [],
    );
}

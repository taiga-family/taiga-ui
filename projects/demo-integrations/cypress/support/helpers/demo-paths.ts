import '@angular/localize/init';

import {TuiDocPage, TuiDocPages} from '@taiga-ui/addon-doc';

import {pages} from '../../../../demo/src/modules/app/pages';

const EXCLUSION_SECTIONS = [`Documentation`, `Foundations`, `Tools`, `Testing`];
const EXCLUSION_ROUTES = [`i18n`, `PrimitiveCheckbox`, `ThemeNight`, `Markdown`];

export const DEMO_PATHS = Array.from(
    new Set( // filter duplicate
        flatPages(pages)
            .filter(
                page => !EXCLUSION_SECTIONS.includes(page.section as unknown as string),
            )
            .filter(page => !EXCLUSION_ROUTES.includes(page.title))
            .map(page => page.route.replace(`/`, ``)),
    ),
);

export const isEmbedPage = (path: string): boolean => path.startsWith(`editor/embed`);
export const isTilesPage = (path: string): boolean => path === `components/tiles`;
export const isScrollbarPage = (path: string): boolean => path === `components/scrollbar`;
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

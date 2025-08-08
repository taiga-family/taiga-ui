import {type TuiDocRoutePage, type TuiDocRoutePageGroup} from '@taiga-ui/addon-doc/types';

import {tuiIsRoutePageGroup} from './is-page-group';

export function tuiSortPages<T extends TuiDocRoutePage | TuiDocRoutePageGroup>(
    pages: readonly T[],
    excludeSections = new Set<string>(),
): readonly T[] {
    const sections = Array.from(new Set(pages.map((page) => page.section)));

    const sortedPages = pages.slice().sort((a, b) => {
        if (
            excludeSections.has(a.section ?? '') ||
            excludeSections.has(b.section ?? '')
        ) {
            return 0;
        }

        const aSectionIndex = sections.indexOf(a.section);
        const bSectionIndex = sections.indexOf(b.section);

        if (aSectionIndex !== bSectionIndex) {
            return aSectionIndex - bSectionIndex;
        }

        if (a.title > b.title) {
            return 1;
        }

        return a.title.localeCompare(b.title);
    });

    return sortedPages.map((page) =>
        tuiIsRoutePageGroup(page)
            ? {
                  ...page,
                  subPages: tuiSortPages(page.subPages, excludeSections),
              }
            : page,
    );
}

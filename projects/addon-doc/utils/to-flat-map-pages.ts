/// <reference types="@taiga-ui/tsconfig/ng-dev-mode" />
import type {TuiDocRoutePage, TuiDocRoutePages} from '@taiga-ui/addon-doc/types';

function assertTitle(page: TuiDocRoutePage, map: Map<string, TuiDocRoutePage>): void {
    if (map.has(page.title) && map.get(page.title)?.route !== page.route) {
        console.error(
            'Title for page should be unique for prevent inconsistent page names',
            page,
            '<== Collisions between ==>',
            map.get(page.title),
        );
    }
}

export function tuiToFlatMapPages(pages: TuiDocRoutePages): Map<string, TuiDocRoutePage> {
    const map = new Map<string, TuiDocRoutePage>();

    pages.forEach((page) => {
        if ('subPages' in page) {
            page.subPages.forEach((subPage) => {
                ngDevMode && assertTitle(subPage, map);
                map.set(subPage.title, subPage);
            });
        } else {
            ngDevMode && assertTitle(page, map);
            map.set(page.title, page);
        }
    });

    return map;
}

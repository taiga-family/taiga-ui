import type {TuiDocPage} from '../interfaces/page';
import type {TuiDocPages} from '../types/pages';

export function tuiToFlatMapPages(pages: TuiDocPages): Map<string, TuiDocPage> {
    const map = new Map<string, TuiDocPage>();

    for (const page of pages) {
        if (`subPages` in page) {
            for (const subPage of page.subPages) {
                ngDevMode && assertTitle(subPage, map);
                map.set(subPage.title, subPage);
            }
        } else {
            ngDevMode && assertTitle(page, map);
            map.set(page.title, page);
        }
    }

    return map;
}

function assertTitle(page: TuiDocPage, map: Map<string, TuiDocPage>): void {
    if (map.has(page.title) && map.get(page.title)?.route !== page.route) {
        console.error(
            `Title for page should be unique for prevent inconsistent page names`,
            page,
            `<== Collisions between ==>`,
            map.get(page.title),
        );
    }
}

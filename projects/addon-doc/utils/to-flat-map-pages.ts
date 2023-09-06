import type {TuiDocPage} from '@taiga-ui/addon-doc/interfaces';
import type {TuiDocPages} from '@taiga-ui/addon-doc/types';

export function tuiToFlatMapPages(pages: TuiDocPages): Map<string, TuiDocPage> {
    const map = new Map<string, TuiDocPage>();

    for (const page of pages) {
        if (`subPages` in page) {
            for (const subPage of page.subPages) {
                map.set(subPage.title, subPage);
            }
        } else {
            map.set(page.title, page);
        }
    }

    return map;
}

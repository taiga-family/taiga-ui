import '@angular/localize/init';
import {TuiDocPage, TuiDocPages} from '../../../addon-doc/src/public-api';
import {pages} from '../../../demo/src/modules/app/pages';

const EXCLUSION_SECTIONS = ['Documentation', 'Common', 'Tools'];
const EXCLUSION_ROUTES = ['i18n', 'LineDaysChart', 'PrimitiveCheckbox', 'ThemeNight'];

export const DEMO_PATHS = flatPages(pages)
    .filter(page => !EXCLUSION_SECTIONS.includes(page.section as string))
    .filter(page => !EXCLUSION_ROUTES.includes(page.title))
    .map(page => page.route.replace('/', ''));

function flatPages(pages: TuiDocPages): ReadonlyArray<TuiDocPage> {
    return pages.reduce(
        (prev: ReadonlyArray<TuiDocPage>, next) => [
            ...prev,
            ...('subPages' in next ? next.subPages : [next]),
        ],
        [],
    );
}

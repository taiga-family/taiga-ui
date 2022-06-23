import '@angular/localize/init';

import {TuiDocPage, TuiDocPages} from '@taiga-ui/addon-doc';

import {pages} from '../../../demo/src/modules/app/pages';
import {excluded} from './exclusions';
import {EXAMPLE_ID} from './shared.entities';

const EXCLUSION_SECTIONS = ['Documentation', 'Common', 'Tools'];
const EXCLUSION_ROUTES = ['i18n', 'LineDaysChart', 'PrimitiveCheckbox', 'ThemeNight'];

const DEMO_PATHS: string[] = flatPages(pages)
    .filter(page => !EXCLUSION_SECTIONS.includes(page.section as string))
    .filter(page => !EXCLUSION_ROUTES.includes(page.title))
    .map(page => page.route.replace('/', ''));

const COMPONENTS: string[] = [];
const WRAPPERS: string[] = [];

DEMO_PATHS.forEach(url =>
    url.startsWith('components') ? COMPONENTS.push(url) : WRAPPERS.push(url),
);

function flatPages(pages: TuiDocPages): readonly TuiDocPage[] {
    return pages.reduce(
        (prev: readonly TuiDocPage[], next) => [
            ...prev,
            ...('subPages' in next ? next.subPages : [next]),
        ],
        [],
    );
}

export function makeDemoIt(path: string): void {
    it(path, () => {
        cy.tuiVisit(path);

        cy.get('tui-doc-example').each((example, index) => {
            cy.wrap(example)
                .find('.t-example')
                .findByAutomationId(EXAMPLE_ID)
                .tuiScrollIntoView()
                .as('example');

            return excluded(path, index + 1)
                ? cy.get('@example')
                : cy.get('@example').matchImageSnapshot(`${path}/${index + 1}`);
        });
    });
}

export {COMPONENTS as DEMO_COMPONENTS};
export {WRAPPERS as DEMO_WRAPPERS};

import type {TuiDocPage, TuiDocPages} from '@taiga-ui/addon-doc';

function flatPages(pages: TuiDocPages): readonly TuiDocPage[] {
    return pages.reduce(
        (prev: readonly TuiDocPage[], next) => [
            ...prev,
            ...('subPages' in next ? next.subPages : [next]),
        ],
        [],
    );
}

export const EXCLUDED_SECTIONS = ['Documentation', 'Foundations', 'Tools', 'Testing'];
export const EXCLUDED_ROUTES = [
    '/i18n',
    '/components/primitive-checkbox',
    '/components/theme-night',
    '/components/preview', // no need take screenshot of buttons
    '/components/dialog', // just buttons
    '/dialog/custom', // just buttons
    '/dialog/routable', // just buttons
    '/dialog/lazy-routable', // just buttons
    '/components/sheet', // just buttons
    '/components/sheet-dialog', // just buttons
    '/components/error',
    '/icons/overview/Component',
    '/icons/overview',
    '/icons/mapping',
    '/components/mobile-calendar', // TODO: flaky test, need investigate
];

export function tuiGetDemoPathsForE2E(
    pages: TuiDocPages,
    exclusionSection: string[] = EXCLUDED_SECTIONS,
    exclusionRoutes: string[] = EXCLUDED_ROUTES,
): string[] {
    return Array.from(
        new Set(
            flatPages(pages)
                .filter(
                    page =>
                        !exclusionSection.includes(page.section!) &&
                        !exclusionRoutes.includes(page.route) &&
                        !page.route.includes('://'),
                )
                .map(({route}) => route),
        ),
    );
}

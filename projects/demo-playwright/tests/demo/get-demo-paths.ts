import {DemoRoute} from '@demo/routes';
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
    DemoRoute.I18N,
    DemoRoute.Preview, // no need take screenshot of buttons
    DemoRoute.Dialog, // just buttons
    DemoRoute.DialogCustom, // just buttons
    DemoRoute.DialogRoutable, // just buttons
    DemoRoute.DialogLazyRoutable, // just buttons
    DemoRoute.SheetDialog, // just buttons
    DemoRoute.Error,
    DemoRoute.MobileCalendar, // TODO: flaky test, need investigate
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

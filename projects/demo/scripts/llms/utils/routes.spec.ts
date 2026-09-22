import path from 'node:path';

import {buildFolderRouteMap, parseFolderRoutes} from './routes';

const APP_DIR = '/pages/app';

const DEMO_ROUTES = `
export const DemoRoute = {
    ActionBar: '/components/actions-bar',
    PieChart: '/charts/pie-chart',
    GettingStarted: '/getting-started',
    DialogRoutable: '/dialog/routable',
    NoImport: '/no-import',
};
`;

// ActionBar is a multi-line block, PieChart an inline one, GettingStarted's import is
// wrapped onto its own line — the parser must survive all of these formatting shapes.
const APP_ROUTES = `
export const ROUTES = [
    route({
        path: DemoRoute.ActionBar,
        loadComponent: async () => import('../components/action-bar'),
    }),
    route({path: DemoRoute.PieChart, loadComponent: async () => import('../components/pie-chart')}),
    route({
        path: DemoRoute.GettingStarted,
        loadComponent: async () =>
            import('./getting-started'),
    }),
    route({
        path: DemoRoute.DialogRoutable,
        loadChildren: async () => import('../components/dialog-routable/routes'),
    }),
    route({
        path: DemoRoute.NoImport,
    }),
    route({
        path: DemoRoute.Unknown,
        loadComponent: async () => import('../components/unknown'),
    }),
];
`;

describe('folder route map', () => {
    describe('parseFolderRoutes', () => {
        const map = parseFolderRoutes(DEMO_ROUTES, APP_ROUTES, APP_DIR);

        it('maps a folder to a URL that is not derivable from the folder name', () => {
            expect(map.get(path.resolve(APP_DIR, '../components/action-bar'))).toBe(
                'components/actions-bar',
            );
        });

        it('routes chart folders under /charts and reads inline route() blocks', () => {
            expect(map.get(path.resolve(APP_DIR, '../components/pie-chart'))).toBe(
                'charts/pie-chart',
            );
        });

        it('resolves app-level (./) imports split across lines', () => {
            expect(map.get(path.resolve(APP_DIR, './getting-started'))).toBe(
                'getting-started',
            );
        });

        it('keeps a loadChildren sub-router import as-is (folder resolved later)', () => {
            // parseFolderRoutes stays pure: it maps the raw import target. Climbing to the
            // folder that actually holds index.html happens in buildFolderRouteMap.
            expect(
                map.get(path.resolve(APP_DIR, '../components/dialog-routable/routes')),
            ).toBe('dialog/routable');
        });

        it('drops a block with no import or an unknown DemoRoute without throwing', () => {
            // NoImport has a path but no import; Unknown has an import but no URL in demo-routes.
            expect(map.size).toBe(4);
            expect([...map.values()]).not.toContain('no-import');
        });
    });

    describe('buildFolderRouteMap (live sources)', () => {
        it('parses the real demo routes without silently dropping the bulk of pages', async () => {
            const map = await buildFolderRouteMap();

            // Guards against a reformat of app.routes.ts quietly breaking the regex parser
            // (which would leave those pages without a .md twin for the Copy page action).
            expect(map.size).toBeGreaterThan(180);
            expect([...map.values()]).toContain('components/actions-bar');
            expect([...map.values()].some((route) => route.startsWith('charts/'))).toBe(
                true,
            );
        });

        it('resolves a loadChildren sub-router route to the folder that holds the page', async () => {
            const map = await buildFolderRouteMap();
            const entry = [...map].find(([, route]) => route === 'dialog/routable');

            // The route imports `.../dialog-routable/routes` (a sub-router); the resolved map
            // must point at the folder with the page's index.html, not the routes file path.
            expect(entry?.[0].endsWith(`components${path.sep}dialog-routable`)).toBe(
                true,
            );
        });
    });
});

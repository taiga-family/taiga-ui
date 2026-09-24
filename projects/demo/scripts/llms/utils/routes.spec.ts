import fs from 'node:fs/promises';
import {tmpdir} from 'node:os';
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

    // An app outside this repository names its route files and its route enum differently,
    // and may spell a path out instead of referencing an enum at all.
    describe('parseFolderRoutes (other apps)', () => {
        const PATHS = `
export const OtherRoute = {
    Panel: '/panel',
    Icons: '/other/icons',
};
`;

        const ROUTES = `
export const OTHER_ROUTES = [
    route({
        path: OtherRoute.Panel,
        loadComponent: async () => import('../components/panel'),
    }),
    route({
        path: 'getting-started',
        loadComponent: async () => import('./home'),
    }),
    route({
        path: '',
        loadComponent: async () => import('./landing'),
    }),
    route({
        path: '**',
        loadComponent: async () => import('./not-found'),
    }),
];
`;

        const map = parseFolderRoutes(PATHS, ROUTES, APP_DIR);

        it('resolves a path referencing any route enum, not just DemoRoute', () => {
            expect(map.get(path.resolve(APP_DIR, '../components/panel'))).toBe('panel');
        });

        it('takes a path spelled out in place of an enum reference', () => {
            expect(map.get(path.resolve(APP_DIR, './home'))).toBe('getting-started');
        });

        it('skips the empty route and the wildcard, which name no page', () => {
            expect(map.size).toBe(2);
            expect([...map.values()]).not.toContain('');
        });

        it('skips a path with a `:param` segment, which names no page of its own', () => {
            // ':' is also illegal in a Windows filename, so writing the twin would throw.
            const withParam = parseFolderRoutes(
                '',
                "route({path: 'edit/:id', loadComponent: async () => import('./edit')}),",
                APP_DIR,
            );

            expect(withParam.size).toBe(0);
        });

        it('reads route names off enums only, not off other objects in the same file', () => {
            // A route file also declares the page tree, whose entries carry `title` and a
            // `route` of their own. Taken in, they would invent names and — since a name is
            // written once — could answer a real lookup with a page title.
            const withPageTree = parseFolderRoutes(
                [
                    "export const OwnRoute = {\n    Panel: '/panel',\n};",
                    'export const PAGES: DocPages = [',
                    '    {',
                    "        title: 'Panel',",
                    "        route: '/typo/panel',",
                    '    },',
                    '];',
                ].join('\n'),
                `
export const ROUTES = [
    route({
        path: OwnRoute.Panel,
        loadComponent: async () => import('../panel'),
    }),
    route({
        path: title,
        loadComponent: async () => import('../title'),
    }),
];
`,
                APP_DIR,
            );

            expect(withPageTree.get(path.resolve(APP_DIR, '../panel'))).toBe('panel');
            expect(withPageTree.has(path.resolve(APP_DIR, '../title'))).toBe(false);
        });

        it('qualifies enum members so two apps sharing a name do not collide', () => {
            // Both apps declare `Icons`, and the one read first would otherwise win.
            const shared = parseFolderRoutes(
                [
                    "export const DemoRoute = {\n    Icons: '/icons',\n};",
                    "export const OtherRoute = {\n    Icons: '/other/icons',\n};",
                ].join('\n'),
                `
export const ROUTES = [
    route({
        path: OtherRoute.Icons,
        loadComponent: async () => import('../other/icons'),
    }),
];
`,
                APP_DIR,
            );

            expect(shared.get(path.resolve(APP_DIR, '../other/icons'))).toBe(
                'other/icons',
            );
        });
    });

    describe('buildFolderRouteMap (several roots)', () => {
        let dir = '';

        async function page(root: string, folder: string): Promise<void> {
            await fs.mkdir(path.join(dir, root, folder), {recursive: true});
            await fs.writeFile(path.join(dir, root, folder, 'index.html'), '<div></div>');
        }

        async function app(root: string, routes: string, paths: string): Promise<void> {
            await fs.mkdir(path.join(dir, root, 'app'), {recursive: true});
            await fs.writeFile(path.join(dir, root, 'app', 'own.routes.ts'), routes);
            await fs.writeFile(path.join(dir, root, 'app', 'own.pages.ts'), paths);
        }

        beforeAll(async () => {
            dir = await fs.mkdtemp(path.join(tmpdir(), 'tui-routes-'));

            // Both apps serve /panel; only the private one also serves /secret.
            await app(
                'private',
                `route({path: OwnRoute.Panel, loadComponent: async () => import('../panel')}),
                 route({path: OwnRoute.Secret, loadComponent: async () => import('../secret')}),`,
                "export const OwnRoute = {\n    Panel: '/panel',\n    Secret: '/secret',\n};",
            );
            await app(
                'public',
                "route({path: OwnRoute.Panel, loadComponent: async () => import('../panel')}),",
                "export const OwnRoute = {\n    Panel: '/panel',\n};",
            );

            await page('private', 'panel');
            await page('private', 'secret');
            await page('public', 'panel');
        });

        afterAll(async () => {
            await fs.rm(dir, {force: true, recursive: true});
        });

        it('serves both apps and lets the first root win a shared URL', async () => {
            const map = await buildFolderRouteMap([
                {
                    pagesPath: path.join(dir, 'private'),
                    routeFiles: ['own.routes.ts'],
                    pathFiles: ['own.pages.ts'],
                },
                {
                    pagesPath: path.join(dir, 'public'),
                    routeFiles: ['own.routes.ts'],
                    pathFiles: ['own.pages.ts'],
                },
            ]);

            expect([...map.values()].sort()).toEqual(['panel', 'secret']);
            expect(map.get(path.join(dir, 'private', 'panel'))).toBe('panel');
            expect(map.has(path.join(dir, 'public', 'panel'))).toBe(false);
        });

        it('skips a route file an app does not have', async () => {
            const map = await buildFolderRouteMap([
                {
                    pagesPath: path.join(dir, 'public'),
                    routeFiles: ['own.routes.ts', 'absent.routes.ts'],
                    pathFiles: ['own.pages.ts', 'absent.pages.ts'],
                },
            ]);

            expect([...map.values()]).toEqual(['panel']);
        });
    });

    describe('buildFolderRouteMap (overriding an inherited page)', () => {
        let dir = '';

        async function write(file: string, content: string): Promise<void> {
            await fs.mkdir(path.dirname(path.join(dir, file)), {recursive: true});
            await fs.writeFile(path.join(dir, file), content);
        }

        beforeAll(async () => {
            dir = await fs.mkdtemp(path.join(tmpdir(), 'tui-override-'));

            // The portal serves the public app's /panel from a page of its own, so it spells
            // the path as the public name. Only the public app declares that name.
            await write(
                'own/app/own.routes.ts',
                "route({path: PublicRoute.Panel, loadComponent: async () => import('../panel')}),",
            );
            await write('own/app/own.pages.ts', 'export const OWN_PAGES = [];');
            await write('own/panel/index.html', '<div>own</div>');

            await write(
                'public/app/app.routes.ts',
                "route({path: PublicRoute.Panel, loadComponent: async () => import('../panel')}),",
            );
            await write(
                'public/app/demo-routes.ts',
                "export const PublicRoute = {\n    Panel: '/panel',\n};",
            );
            await write('public/panel/index.html', '<div>public</div>');
        });

        afterAll(async () => {
            await fs.rm(dir, {force: true, recursive: true});
        });

        it('resolves a name declared only by the other root and serves the overriding page', async () => {
            const map = await buildFolderRouteMap([
                {
                    pagesPath: path.join(dir, 'own'),
                    routeFiles: ['own.routes.ts'],
                    pathFiles: ['own.pages.ts'],
                },
                {
                    pagesPath: path.join(dir, 'public'),
                    routeFiles: ['app.routes.ts'],
                    pathFiles: ['demo-routes.ts'],
                },
            ]);

            expect(map.get(path.join(dir, 'own', 'panel'))).toBe('panel');
            expect(map.has(path.join(dir, 'public', 'panel'))).toBe(false);
        });

        it('throws rather than let a root whose route file is misnamed pass as empty', async () => {
            await expect(
                buildFolderRouteMap([
                    {
                        pagesPath: path.join(dir, 'public'),
                        routeFiles: ['app.route.ts'],
                        pathFiles: ['demo-routes.ts'],
                    },
                ]),
            ).rejects.toThrow('No routed pages found');
        });

        it('does not climb out of its root into a sibling folder sharing its name', async () => {
            // `<dir>/public-internal` starts with `<dir>/public` as a string but is not inside
            // it, and climbing on would reach a folder whose page belongs to another route.
            await write('public-internal/panel/.gitkeep', '');
            await write('index.html', '<div>stray</div>');
            await write(
                'public/app/sibling.routes.ts',
                "route({path: PublicRoute.Panel, loadComponent: async () => import('../../public-internal/panel')}),",
            );

            const map = await buildFolderRouteMap([
                {
                    pagesPath: path.join(dir, 'public'),
                    routeFiles: ['sibling.routes.ts'],
                    pathFiles: ['demo-routes.ts'],
                },
            ]);

            expect([...map.keys()]).toEqual([path.join(dir, 'public-internal', 'panel')]);
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

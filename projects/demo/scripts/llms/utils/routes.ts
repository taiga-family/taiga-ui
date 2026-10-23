import fs from 'node:fs/promises';
import path from 'node:path';

import {fileExists, readIfExists} from './file-system';
import {getPagesPath} from './paths';

export interface ComponentInfo {
    name: string;
    section: string;
    route: string;
    title: string;
    deprecated: boolean;
    legacy: boolean;
}

export async function extractComponentsFromRoutes(): Promise<ComponentInfo[]> {
    const components: ComponentInfo[] = [];

    // Read the demo-routes.ts file
    const demoRoutesPath = path.join(getPagesPath(), 'app', 'demo-routes.ts');
    const demoRoutesContent = await fs.readFile(demoRoutesPath, 'utf-8');

    // Extract route definitions using a more robust regex
    const routeMatches = demoRoutesContent.match(/\w+:\s*'[^']+'/g);

    if (!routeMatches) {
        console.warn('No route matches found');

        return components;
    }

    console.info(`Found ${routeMatches.length} route matches`);

    for (const match of routeMatches) {
        const matchResult = /(\w+):\s*'([^']+)'/.exec(match);

        if (!matchResult) {
            continue;
        }

        const [, name, route] = matchResult;

        if (!name || !route) {
            continue;
        }

        // Extract section and component name from route
        const routeParts = route.split('/').filter((part) => part.length > 0);

        if (routeParts.length === 0) {
            continue;
        }

        let section: string;
        let componentName: string;

        if (routeParts.length === 1) {
            // Single-level route like /getting-started, /colors
            componentName = routeParts[0]!;
            section = 'documentation';
        } else {
            // Multi-level route like /components/button
            section = routeParts[0]!;
            componentName = routeParts[1]!;
        }

        if (!section || !componentName) {
            continue;
        }

        // Check if component should be excluded based on common patterns
        const nameLower = name.toLowerCase();
        const componentNameLower = componentName.toLowerCase();
        const sectionLower = section.toLowerCase();

        // Check for deprecated/legacy patterns
        const isDeprecated =
            nameLower.includes('deprecated') ||
            componentNameLower.includes('deprecated') ||
            sectionLower.includes('deprecated');

        const isLegacy =
            nameLower.includes('legacy') ||
            componentNameLower.includes('legacy') ||
            sectionLower.includes('legacy');

        // Convert component name to title (camelCase to Title Case)
        const title = componentName
            .split('-')
            .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
            .join(' ');

        components.push({
            name: componentName,
            section,
            route,
            title,
            deprecated: isDeprecated,
            legacy: isLegacy,
        });
    }

    console.info(`Extracted ${components.length} component routes`);

    return components;
}

/** Files a single documentation app declares its routes in. */
export interface PagesRoot {
    /** Absolute path of the pages folder — the one holding `app/`. */
    readonly pagesPath: string;
    /** Names of files under `app/` holding `route({...})` blocks. Missing ones are skipped. */
    readonly routeFiles: readonly string[];
    /** Names of files under `app/` mapping a route name to its URL. Missing ones are skipped. */
    readonly pathFiles: readonly string[];
}

export const DEFAULT_ROUTE_FILES = ['app.routes.ts'] as const;
export const DEFAULT_PATH_FILES = ['demo-routes.ts'] as const;

async function readAll(appDir: string, names: readonly string[]): Promise<string> {
    const sources = await Promise.all(
        names.map(async (name) => readIfExists(path.join(appDir, name))),
    );

    return sources.filter(Boolean).join('\n');
}

/**
 * Maps each page folder on disk to the URL it is actually served at.
 *
 * The docs route is not always derivable from the folder path: e.g. the folder
 * `components/action-bar` is served at `/components/actions-bar`, and every chart
 * folder `components/*-chart` is served under `/charts/...`. The link lives in
 * `app.routes.ts`, where a `path: DemoRoute.X` is paired with a lazy
 * `import('../<folder>')`, and `demo-routes.ts`, where `DemoRoute.X` resolves to a URL.
 *
 * An app may serve several roots at once — its own pages alongside another app's. Roots are
 * read in order and the first one to claim a URL keeps it, so a portal can override a page
 * it inherits rather than emit the twin twice.
 */
export async function buildFolderRouteMap(
    roots: readonly PagesRoot[] = [
        {
            pagesPath: getPagesPath(),
            routeFiles: DEFAULT_ROUTE_FILES,
            pathFiles: DEFAULT_PATH_FILES,
        },
    ],
): Promise<Map<string, string>> {
    const sources = await Promise.all(
        roots.map(async (root) => {
            const appDir = path.join(root.pagesPath, 'app');

            return {
                root,
                appDir,
                paths: await readAll(appDir, root.pathFiles),
                routes: await readAll(appDir, root.routeFiles),
            };
        }),
    );

    // Route names are collected across every root before any block is read: a portal
    // overriding a page it inherits spells the path as the *other* app's name
    // (`path: DemoRoute.Typography` next to its own folder), which resolves only when both
    // apps' names are in scope. Qualified keys keep the two from shadowing each other.
    const urlByName = parseUrlMap(sources.map(({paths}) => paths).join('\n'));
    const folderToRoute = new Map<string, string>();
    const claimed = new Set<string>();

    for (const {root, appDir, routes} of sources) {
        const parsed = parseRouteBlocks(urlByName, routes, appDir);

        // Missing files are skipped by name, so a renamed or mistyped one would otherwise
        // leave an empty map and let the caller wipe its output before noticing.
        if (!parsed.size) {
            throw new Error(
                `No routed pages found under ${appDir}. Looked for route blocks in ${
                    root.routeFiles.join(', ') || '(none)'
                } and route names in ${root.pathFiles.join(', ') || '(none)'}.`,
            );
        }

        for (const [folder, url] of parsed) {
            if (claimed.has(url)) {
                continue;
            }

            claimed.add(url);
            folderToRoute.set(await resolvePageFolder(folder, root.pagesPath), url);
        }
    }

    return folderToRoute;
}

/**
 * Nearest ancestor of `folder` (itself included) that actually holds a page — a folder with an
 * `index.html`. A `loadChildren` route imports a sub-router file (e.g. `.../tabs/routes`) rather
 * than a page folder, so climbing to the first `index.html` lands on the folder that renders the
 * page without hard-coding any file-name convention. Stays within the pages tree.
 */
async function resolvePageFolder(folder: string, root: string): Promise<string> {
    let current = folder;

    while (
        isInside(root, current) &&
        !(await fileExists(path.join(current, 'index.html')))
    ) {
        current = path.dirname(current);
    }

    return current;
}

/** Strictly below `root`. Compared as paths, so a `pages-internal` sibling of `pages` is out. */
function isInside(root: string, candidate: string): boolean {
    const relative = path.relative(root, candidate);

    return !!relative && !relative.startsWith('..') && !path.isAbsolute(relative);
}

/**
 * `Name: '/url'` pairs of every `const X = {...}` in the source, recorded under both
 * `X.Name` and the bare `Name`. Two apps read together may each declare a route enum, and
 * qualifying the key keeps a shared member name (`Icons`, say) from shadowing the other's.
 *
 * Only direct members of such an object count. A route file also holds unrelated structures —
 * a page tree whose entries carry `title: '...'` and `route: '...'` — and taking those in would
 * both invent route names and, since a name is written once, let the first one win a real one.
 * Nesting is tracked by counting brackets, which a bracket inside a string literal would
 * confuse; route tables do not contain any.
 */
function parseUrlMap(source: string): Map<string, string> {
    const urlByName = new Map<string, string>();
    let owner = '';
    let depth = 0;

    for (const line of source.split('\n')) {
        // A route enum is an object literal opening at the end of its own declaration. The
        // page tree next to it is an array, so its line ends in `[` and claims no name.
        if (!depth) {
            owner = /\{\s*$/.test(line)
                ? (/\b(?:const|enum)\s+(\w+)/.exec(line)?.[1] ?? '')
                : '';
        }

        const [, name = '', url = ''] =
            (depth === 1 && owner ? /^\s*(\w+):\s*'([^']+)'/.exec(line) : null) ?? [];

        depth += count(line, /[{[]/g) - count(line, /[}\]]/g);

        if (!name || !url) {
            continue;
        }

        urlByName.set(`${owner}.${name}`, url);

        if (!urlByName.has(name)) {
            urlByName.set(name, url);
        }
    }

    return urlByName;
}

function count(line: string, pattern: RegExp): number {
    return [...line.matchAll(pattern)].length;
}

/**
 * Pure parser behind {@link buildFolderRouteMap}: turns the raw route-name and route-block
 * sources into absolute-folder → served-URL pairs. Split out so the regex parsing can be
 * unit-tested against formatting variations without reading from disk.
 */
export function parseFolderRoutes(
    pathsContent: string,
    routesContent: string,
    appDir: string,
): Map<string, string> {
    return parseRouteBlocks(parseUrlMap(pathsContent), routesContent, appDir);
}

function parseRouteBlocks(
    urlByName: ReadonlyMap<string, string>,
    routesContent: string,
    appDir: string,
): Map<string, string> {
    const folderToRoute = new Map<string, string>();

    // Each `route({...})` block pairs one path with one lazy import. The path is either a
    // reference into a route enum (`DemoRoute.X`, `ProprietaryDemoRoute.X`) or the URL
    // spelled out. Imports are relative to the `app/` dir: `../components/x` for library
    // pages, `./getting-started` for app-level guide pages.
    for (const block of routesContent.split('route({')) {
        const [, reference = '', literal] =
            /\bpath:\s*(?:([\w.]+)|'([^']*)')/.exec(block) ?? [];

        const folder = /import\('(\.\.?\/[^']+)'\)/.exec(block)?.[1];

        if (!folder) {
            continue;
        }

        // Looked up exactly as written: a qualified reference names its own enum, and
        // falling back to the bare member would answer with whichever app declared that
        // name first — the collision the qualified key exists to prevent.
        const url = literal ?? urlByName.get(reference);

        // A wildcard or a `:param` segment is a route shape rather than a page, and an
        // empty path has no name to write under.
        if (!url || /[*:]/.test(url)) {
            continue;
        }

        folderToRoute.set(path.resolve(appDir, folder), url.replace(/^\/+/, ''));
    }

    return folderToRoute;
}

export function shouldIncludeComponent(
    component: ComponentInfo,
    excludeSections: string[],
): boolean {
    // Check if component is deprecated and deprecated sections are excluded
    if (component.deprecated && excludeSections.includes('deprecated')) {
        return false;
    }

    // Check if component is legacy and legacy sections are excluded
    if (component.legacy && excludeSections.includes('legacy')) {
        return false;
    }

    return true;
}

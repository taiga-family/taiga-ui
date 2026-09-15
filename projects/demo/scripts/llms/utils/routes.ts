import fs from 'node:fs/promises';
import path from 'node:path';

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

/**
 * Maps each page folder on disk to the URL it is actually served at.
 *
 * The docs route is not always derivable from the folder path: e.g. the folder
 * `components/action-bar` is served at `/components/actions-bar`, and every chart
 * folder `components/*-chart` is served under `/charts/...`. The link lives in
 * `app.routes.ts`, where a `path: DemoRoute.X` is paired with a lazy
 * `import('../<folder>')`, and `demo-routes.ts`, where `DemoRoute.X` resolves to a URL.
 */
export async function buildFolderRouteMap(): Promise<Map<string, string>> {
    const pagesPath = getPagesPath();
    const appDir = path.join(pagesPath, 'app');
    const demoRoutesContent = await fs.readFile(
        path.join(appDir, 'demo-routes.ts'),
        'utf-8',
    );

    const appRoutesContent = await fs.readFile(
        path.join(appDir, 'app.routes.ts'),
        'utf-8',
    );

    const urlByName = new Map<string, string>();

    for (const match of demoRoutesContent.matchAll(/(\w+):\s*'([^']+)'/g)) {
        const name = match[1];
        const url = match[2];

        if (name && url) {
            urlByName.set(name, url);
        }
    }

    const folderToRoute = new Map<string, string>();

    // Each `route({...})` block pairs one `path: DemoRoute.X` with one lazy import.
    // Imports are relative to `app.routes.ts` (the `app/` dir): `../components/x`
    // for library pages, `./getting-started` for app-level guide pages.
    for (const block of appRoutesContent.split('route({')) {
        const nameMatch = /path:\s*DemoRoute\.(\w+)/.exec(block);
        const importMatch = /import\('(\.\.?\/[^']+)'\)/.exec(block);
        const name = nameMatch?.[1];
        const folder = importMatch?.[1];

        if (!name || !folder) {
            continue;
        }

        const url = urlByName.get(name);

        if (!url) {
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

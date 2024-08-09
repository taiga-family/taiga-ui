import {readFileSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';

import {
    infoLog,
    SMALL_TAB_SYMBOL,
    titleLog,
} from '../projects/cdk/schematics/utils/colored-log';
import {DemoRoute} from '../projects/demo/src/modules/app/demo-routes';

const EXCEPTIONS = [
    '/',
    `${DemoRoute.Breakpoints}/Setup`,
    `${DemoRoute.Colors}/Status`,
    `${DemoRoute.Colors}/Base_palette`,
    `${DemoRoute.Colors}/Support_palette`,
    `${DemoRoute.Colors}/Setup`,
    `${DemoRoute.DialogLazyRoutable}/Setup`,
    `${DemoRoute.DialogRoutable}/NamedOutlet`,
    `${DemoRoute.DialogRoutable}/Setup`,
    `${DemoRoute.I18N}/Dynamic_loader`,
    `${DemoRoute.Portals}/Setup`,
    `${DemoRoute.Viewport}/Setup`,
    `${DemoRoute.Surface}/Layers`,
];

/**
 * This script is required for correct of `nx prerender demo` command.
 * `@nguniversal/builders:prerender` (version 16) can't extract routes for lazy-loading modules.
 * See: https://github.com/angular/universal/issues/1769
 * ___
 * TODO: after update to the newer version of Angular and start using of `@angular/ssr`, check if this script is still required.
 */
(function main(): void {
    const demoRoutesFileContent = readFileSync(
        join(
            process.cwd(),
            'projects',
            'demo',
            'src',
            'modules',
            'app',
            'demo-routes.ts',
        ),
        'utf-8',
    );
    const routes =
        demoRoutesFileContent
            .match(/['"`](.*)['"`]/g)
            // @ts-ignore Try changing the lib compiler option to es2021 or later
            ?.map((route) => route.replaceAll(/['"`]/g, '')) || [];

    routes.forEach((route) => {
        if (
            /**
             * Temporarily workaround!
             * False negatives (don't prerender existing `<path>/Setup` page) are more serious problem than
             * false positives (attempt to prerender not-existing <path>/Setup page).
             * False positives do not break build process
             * (application has wildcard route). They will just slow down the process of the whole prerender.
             * ___
             * TODO: after solving of this issue https://github.com/taiga-family/taiga-ui/issues/6957
             * (all routes will be standardized)
             * use ng-morph (DemoRoute + `app.routes.ts` file + `*pageTab` directive) to create more accurate algorithm.
             *
             */
            route.match(
                /^\/(components|directives|pipes|services|utils|layout|navigation|charts|experimental)/,
            )
        ) {
            routes.push(`${route}/API`, `${route}/Setup`);
        }
    });
    routes.push(...EXCEPTIONS);

    titleLog('Generated routes:');
    [...routes]
        .sort((a, b) => a.localeCompare(b))
        .forEach((route) => infoLog(`${SMALL_TAB_SYMBOL}* ${route}`));

    writeFileSync(
        join(process.cwd(), 'projects', 'demo', 'routes.txt'),
        routes?.join('\n') || '',
    );
})();

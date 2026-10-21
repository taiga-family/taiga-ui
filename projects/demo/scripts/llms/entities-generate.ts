// Emits assets/entities.json: the main export of every library entity that has its own demo page.
import fs from 'node:fs/promises';
import path from 'node:path';

import {
    buildFolderRouteMap,
    DEFAULT_PATH_FILES,
    DEFAULT_ROUTE_FILES,
    getComponentDescription,
    getComponentHeader,
    getPagesPath,
    type PagesRoot,
    readIndexHtml,
} from './utils';
import {fileExists} from './utils/file-system';
import {collectPublicExports} from './utils/public-exports';

interface DocumentedEntity {
    readonly name: string;
    readonly export: string;
    readonly package: string;
    readonly description?: string;
    readonly route: string;
}

interface CliOptions {
    roots: string[];
    output: string;
    routeFiles: string[];
    pathFiles: string[];
}

const OUTPUT_FILE = path.resolve(process.cwd(), 'projects/demo/src/assets/entities.json');

/**
 * Where `@taiga-ui/<package>` sources may live: the working directory's `projects/` first, so
 * an app embedding this repository as a git submodule finds its own packages, then this
 * repository's `projects/`, found from the script so the submodule's packages resolve too.
 */
const PROJECTS_PATHS = [
    path.resolve(process.cwd(), 'projects'),
    path.resolve(__dirname, '../../..'),
];

/**
 * Pages whose main export doesn't follow `Tui<Header>` (`Tui<Header>Pipe` for pipes), by route.
 * `null` marks a page that collects unrelated utilities rather than documenting one entity.
 */
const MAIN_EXPORT_OVERRIDES: Readonly<Record<string, string | null>> = {
    'components/calendar-experimental': 'TuiCalendar',
    'dialog/routable': 'tuiGenerateDialogableRoute',
    'directives/hovered-change': 'TuiHovered',
    viewport: 'TUI_VIEWPORT',
    'utils/dom': null,
    'utils/format': null,
    'utils/math': null,
    'utils/miscellaneous': null,
    'utils/tokens': null,
};

const FLAGS = ['output', 'pathFiles', 'root', 'routeFiles'] as const;

function list(value: string): string[] {
    return value
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean);
}

/**
 * `--root=a,b --output=file --routeFiles=x.ts --pathFiles=y.ts`, as
 * {@link ./markdown-pages-generate.ts} takes them. An app embedding this repository lists its
 * own pages root first.
 */
function parseArgs(argv: string[]): CliOptions {
    const options: CliOptions = {
        roots: [],
        output: OUTPUT_FILE,
        routeFiles: [...DEFAULT_ROUTE_FILES],
        pathFiles: [...DEFAULT_PATH_FILES],
    };

    for (const arg of argv.slice(2).filter((item) => item.startsWith('--'))) {
        const index = arg.indexOf('=');
        const key = index === -1 ? arg.slice(2) : arg.slice(2, index);
        const value = index === -1 ? '' : arg.slice(index + 1);

        if (!FLAGS.includes(key as (typeof FLAGS)[number]) || !value) {
            throw new Error(
                `Unusable argument "${arg}". Expected ${FLAGS.map(
                    (flag) => `--${flag}=<value>`,
                ).join(', ')}.`,
            );
        }

        switch (key) {
            case 'output':
                options.output = path.resolve(process.cwd(), value);
                break;
            case 'pathFiles':
                options.pathFiles = list(value);
                break;
            case 'root':
                options.roots = list(value).map((root) =>
                    path.resolve(process.cwd(), root),
                );
                break;
            default:
                options.routeFiles = list(value);
                break;
        }
    }

    return options;
}

function mainExportOf(route: string, header: string, type: string | null): string | null {
    if (route in MAIN_EXPORT_OVERRIDES) {
        return MAIN_EXPORT_OVERRIDES[route] ?? null;
    }

    return type === 'pipes' ? `Tui${header}Pipe` : `Tui${header}`;
}

async function findPackageDir(folder: string): Promise<string | null> {
    for (const projectsPath of PROJECTS_PATHS) {
        const candidate = path.join(projectsPath, folder);

        if (await fileExists(path.join(candidate, 'index.ts'))) {
            return candidate;
        }
    }

    return null;
}

async function main(): Promise<void> {
    const options = parseArgs(process.argv);
    const roots: PagesRoot[] = (
        options.roots.length ? options.roots : [getPagesPath()]
    ).map((pagesPath) => ({
        pagesPath,
        routeFiles: options.routeFiles,
        pathFiles: options.pathFiles,
    }));

    const packageExports = new Map<string, Set<string>>();
    const entities: DocumentedEntity[] = [];
    const missing: string[] = [];

    for (const [folder, route] of await buildFolderRouteMap(roots)) {
        const content = await readIndexHtml(folder);
        const {
            header,
            package: packageKey,
            type,
            deprecated,
        } = getComponentHeader(content);

        // Only pages about a library entity carry `package`; guides and markup pages don't.
        if (!header || !packageKey || deprecated) {
            continue;
        }

        const mainExport = mainExportOf(route, header, type);

        if (!mainExport) {
            continue;
        }

        const packageFolder = packageKey.toLowerCase();

        if (!packageExports.has(packageFolder)) {
            const packageDir = await findPackageDir(packageFolder);

            packageExports.set(
                packageFolder,
                packageDir ? await collectPublicExports(packageDir) : new Set(),
            );
        }

        if (!packageExports.get(packageFolder)!.has(mainExport)) {
            missing.push(`${route} (${mainExport} from @taiga-ui/${packageFolder})`);
            continue;
        }

        const description = getComponentDescription(content)
            ?.replaceAll(/\s+/g, ' ')
            .trim();

        entities.push({
            name: header,
            export: mainExport,
            package: `@taiga-ui/${packageFolder}`,
            ...(description && {description}),
            route,
        });
    }

    if (missing.length) {
        throw new Error(
            `Main export not found for ${missing.length} pages — fix \`header\` / \`package\` on their <tui-doc-page> or add them to MAIN_EXPORT_OVERRIDES:\n${missing.join('\n')}`,
        );
    }

    entities.sort(
        (a, b) => a.package.localeCompare(b.package) || a.export.localeCompare(b.export),
    );

    await fs.mkdir(path.dirname(options.output), {recursive: true});
    await fs.writeFile(options.output, `${JSON.stringify(entities, null, 4)}\n`);
    console.info(`Wrote ${entities.length} documented entities to ${options.output}`);
}

main().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
});

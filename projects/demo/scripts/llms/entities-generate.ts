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

/** Route → main export(s); `null` marks a page with no single main entity. */
type MainExportOverrides = Readonly<Record<string, string | readonly string[] | null>>;

interface CliOptions {
    roots: string[];
    output: string;
    routeFiles: string[];
    pathFiles: string[];
    overrides: MainExportOverrides;
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
 * A list emits one entity per export — for a page documenting several, e.g. desktop and mobile
 * variants. `null` marks a page that collects unrelated utilities rather than documenting one
 * entity.
 */
const MAIN_EXPORT_OVERRIDES: MainExportOverrides = {
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

const FLAGS = ['output', 'overrides', 'pathFiles', 'root', 'routeFiles'] as const;

function list(value: string): string[] {
    return value
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean);
}

function isMainExport(value: unknown): boolean {
    return (
        value === null ||
        typeof value === 'string' ||
        (Array.isArray(value) && value.every((item) => typeof item === 'string'))
    );
}

/** `--overrides='{"panel": ["TuiPanelDesktop", "TuiPanelMobile"]}'`, merged over the defaults. */
function parseOverrides(value: string): MainExportOverrides {
    let parsed: unknown;

    try {
        parsed = JSON.parse(value);
    } catch {
        parsed = undefined;
    }

    if (
        !parsed ||
        typeof parsed !== 'object' ||
        Array.isArray(parsed) ||
        !Object.values(parsed).every(isMainExport)
    ) {
        throw new Error(
            `Unusable --overrides="${value}". Expected a JSON object of route → export name, list of names or null, e.g. '{"component": ["TuiComponentDesktop", "TuiComponentMobile"]}'.`,
        );
    }

    return {...MAIN_EXPORT_OVERRIDES, ...(parsed as MainExportOverrides)};
}

/**
 * `--root=a,b --output=file --routeFiles=x.ts --pathFiles=y.ts`, as
 * {@link ./markdown-pages-generate.ts} takes them, plus `--overrides` (see
 * {@link parseOverrides}). An app embedding this repository lists its own pages root first.
 */
function parseArgs(argv: string[]): CliOptions {
    const options: CliOptions = {
        roots: [],
        output: OUTPUT_FILE,
        routeFiles: [...DEFAULT_ROUTE_FILES],
        pathFiles: [...DEFAULT_PATH_FILES],
        overrides: MAIN_EXPORT_OVERRIDES,
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
            case 'overrides':
                options.overrides = parseOverrides(value);
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

function mainExportsOf(
    route: string,
    header: string,
    type: string | null,
    overrides: MainExportOverrides,
): readonly string[] {
    return route in overrides
        ? [overrides[route] ?? []].flat()
        : [type === 'pipes' ? `Tui${header}Pipe` : `Tui${header}`];
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

        const mainExports = mainExportsOf(route, header, type, options.overrides);

        if (!mainExports.length) {
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

        const absent = mainExports.filter(
            (mainExport) => !packageExports.get(packageFolder)!.has(mainExport),
        );

        if (absent.length) {
            missing.push(
                `${route} (${absent.join(', ')} from @taiga-ui/${packageFolder})`,
            );
            continue;
        }

        const description = getComponentDescription(content)
            ?.replaceAll(/\s+/g, ' ')
            .trim();

        for (const mainExport of mainExports) {
            entities.push({
                name: header,
                export: mainExport,
                package: `@taiga-ui/${packageFolder}`,
                ...(description && {description}),
                route,
            });
        }
    }

    if (missing.length) {
        throw new Error(
            `Main export not found for ${missing.length} pages — fix \`header\` / \`package\` on their <tui-doc-page> or add them to MAIN_EXPORT_OVERRIDES / --overrides:\n${missing.join('\n')}`,
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

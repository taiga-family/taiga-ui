import {type Tree} from '@angular-devkit/schematics';
import {
    addPackageJsonDependency,
    type DevkitFileSystem,
    getPackageJsonDependency,
    getSourceFiles,
    NodeDependencyType,
} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants';
import {TAIGA_VERSION} from '../../../ng-add/constants/versions';
import {replacePackageName} from '../../steps';

export const TUI_POLYMORPHEUS_VERSION = '^5.0.0';
export const TUI_DOMPURIFY_VERSION = '^5.0.0';
export const TUI_EVENT_PLUGINS_VERSION = '^5.0.0';
export const TUI_EDITOR_VERSION = '^5.4.0';
export const NG_WEB_APIS = '^5.0.0';
export const MASKITO_VERSION = '^5.0.0';

interface IntroducedPackage {
    name: string;
    version: string;
    type: NodeDependencyType;
}

// Opt-in packages the migration may rewrite imports to, but that a v4 app may not have installed.
const MAYBE_INTRODUCED_PACKAGES: readonly IntroducedPackage[] = [
    {
        name: '@ng-web-apis/platform',
        version: NG_WEB_APIS,
        type: NodeDependencyType.Default,
    },
    {
        name: '@taiga-ui/editor',
        version: TUI_EDITOR_VERSION,
        type: NodeDependencyType.Default,
    },
    {name: '@taiga-ui/legacy', version: TAIGA_VERSION, type: NodeDependencyType.Default},
    {name: '@taiga-ui/layout', version: TAIGA_VERSION, type: NodeDependencyType.Default},
    {
        name: '@taiga-ui/addon-mobile',
        version: TAIGA_VERSION,
        type: NodeDependencyType.Default,
    },
    {name: '@maskito/kit', version: MASKITO_VERSION, type: NodeDependencyType.Default},
    {
        name: '@maskito/angular',
        version: MASKITO_VERSION,
        type: NodeDependencyType.Default,
    },
    {name: '@taiga-ui/jest-config', version: TAIGA_VERSION, type: NodeDependencyType.Dev},
];

export function updatePackages({tree}: DevkitFileSystem): void {
    addIntroducedPackages(tree);

    const packages = (
        [
            [TUI_POLYMORPHEUS_VERSION, ['@taiga-ui/polymorpheus']],
            [TUI_EVENT_PLUGINS_VERSION, ['@taiga-ui/event-plugins']],
            [MASKITO_VERSION, ['@maskito/core', '@maskito/angular', '@maskito/kit']],
            [
                NG_WEB_APIS,
                [
                    '@ng-web-apis/mutation-observer',
                    '@ng-web-apis/resize-observer',
                    '@ng-web-apis/screen-orientation',
                    '@ng-web-apis/common',
                    '@ng-web-apis/intersection-observer',
                    '@ng-web-apis/universal',
                    '@ng-web-apis/platform',
                ],
            ],
            [TUI_DOMPURIFY_VERSION, ['@taiga-ui/dompurify']],
            [TUI_EDITOR_VERSION, ['@taiga-ui/editor']],
        ] satisfies ReadonlyArray<readonly [string, readonly string[]]>
    ).flatMap(([version, names]) => names.map((name) => ({name, version})));

    for (const {name, version} of packages) {
        replacePackageName(name, {name, version}, tree);
    }
}

// Import rewrites never touch package.json, so add any now-imported package that is still missing.
function addIntroducedPackages(tree: Tree): void {
    const specifiers = getSourceFiles(ALL_TS_FILES).flatMap((sourceFile) =>
        sourceFile
            .getImportDeclarations()
            .map((declaration) => declaration.getModuleSpecifierValue()),
    );

    for (const dependency of MAYBE_INTRODUCED_PACKAGES) {
        const isImported = specifiers.some(
            (specifier) =>
                specifier === dependency.name ||
                specifier.startsWith(`${dependency.name}/`),
        );

        if (isImported && !getPackageJsonDependency(tree, dependency.name)) {
            addPackageJsonDependency(tree, dependency);
        }
    }
}

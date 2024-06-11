/// <reference lib="es2021" />
import type {DevkitFileSystem} from '@taiga-ui/morph';
import {
    addPackageJsonDependency,
    getActiveProject,
    getPackageJsonDependency,
    removePackageJsonDependency,
    saveActiveProject,
} from '@taiga-ui/morph';

import {TUI_VERSION} from '../../../../constants/version';
import type {TuiSchema} from '../../../ng-add/schema';
import {infoLog, REPLACE_SYMBOL, SMALL_TAB_SYMBOL} from '../../../utils/colored-log';

export function migrateProprietary(
    fileSystem: DevkitFileSystem,
    options: TuiSchema,
): void {
    try {
        const hasProprietary = !!getPackageJsonDependency(
            fileSystem.tree,
            '@taiga-ui/proprietary-core',
        )?.version;

        if (!hasProprietary) {
            return;
        }

        !options['skip-logs'] &&
            infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} migrating proprietary...`);

        replaceScopePackages();
        replaceProprietaryIconPath();
        removeProprietaryPackages(fileSystem);

        fileSystem.commitEdits();
        saveActiveProject();
    } catch {}
}

function replaceScopePackages(): void {
    getActiveProject()
        ?.getSourceFiles('**/**.{ts,less,scss}')
        .forEach(sourceFile => {
            let fullText = sourceFile.getFullText();

            fullText = fullText
                .replaceAll('@taiga-ui/proprietary-core', '@taiga-ui/proprietary')
                .replaceAll('@taiga-ui/proprietary-banking', '@taiga-ui/proprietary')
                .replaceAll('@taiga-ui/proprietary-navigation', '@taiga-ui/proprietary')
                .replaceAll('@taiga-ui/proprietary-icons', '@taiga-ui/proprietary')
                .replaceAll('@taiga-ui/proprietary-tds-icons', '@taiga-ui/proprietary')
                .replaceAll('@taiga-ui/proprietary-tds-palette', '@taiga-ui/proprietary');

            sourceFile.replaceWithText(fullText);
        });
}

function replaceProprietaryIconPath(): void {
    getActiveProject()
        ?.getSourceFiles('**/{angular,project}.json')
        .forEach(sourceFile => {
            let fullText = sourceFile.getFullText();

            fullText = fullText
                .replaceAll(
                    'node_modules/@taiga-ui/proprietary-icons/src',
                    '@taiga-ui/proprietary/design-tokens/icons/src',
                )
                .replaceAll(
                    '@taiga-ui/proprietary-icons/src',
                    '@taiga-ui/proprietary/design-tokens/icons/src',
                )
                .replaceAll(
                    'node_modules/@taiga-ui/proprietary-tds-icons/src',
                    '@taiga-ui/proprietary/design-tokens/icons/src',
                )
                .replaceAll(
                    '@taiga-ui/proprietary-tds-icons/src',
                    '@taiga-ui/proprietary/design-tokens/icons/src',
                );

            sourceFile.replaceWithText(fullText);
        });
}

export function removeProprietaryPackages(fileSystem: DevkitFileSystem): void {
    [
        '@taiga-ui/proprietary-core',
        '@taiga-ui/proprietary-navigation',
        '@taiga-ui/proprietary-banking',
        '@taiga-ui/proprietary-icons',
        '@taiga-ui/proprietary-tds-icons',
        '@taiga-ui/proprietary-tds-palette',
    ].forEach(name => removePackageJsonDependency(fileSystem.tree, name));

    addPackageJsonDependency(fileSystem.tree, {
        name: '@taiga-ui/proprietary',
        version: TUI_VERSION,
    });
}

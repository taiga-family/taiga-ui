import {type Tree} from '@angular-devkit/schematics';
import {infoLog} from 'ng-morph';

import {type TuiSchema} from '../../../../ng-add/schema';

const TAIGA_TS_CONFIG_PATH = 'node_modules/@taiga-ui/tsconfig';

/**
 * Updates tsconfig.json to include necessary type definitions
 * - Adds `@taiga-ui/tsconfig` to typeRoots
 * - Adds `node` and `ng-dev-mode` to types array
 *
 * This ensures proper type checking and IntelliSense for Taiga UI components
 * and prevents common TypeScript errors related to custom types and ngDevMode.
 */
export function updateTsConfig(tree: Tree, options: TuiSchema): void {
    const tsConfigPath = 'tsconfig.json';

    if (!tree.exists(tsConfigPath)) {
        if (!options['skip-logs']) {
            infoLog(`Could not find ${tsConfigPath}, skipping tsconfig update.`);
        }

        return;
    }

    const content = tree.readText(tsConfigPath);
    let tsConfig: any;

    try {
        tsConfig = JSON.parse(content);
    } catch (e) {
        if (!options['skip-logs']) {
            infoLog(
                `Error parsing ${tsConfigPath}: ${e instanceof Error ? e.message : e}. Skipping tsconfig update.`,
            );
        }

        return;
    }

    if (!tsConfig.compilerOptions) {
        tsConfig.compilerOptions = {};
    }

    // Track changes for logging
    let changesMade = false;
    const addedTypeRoots: string[] = [];
    const addedTypes: string[] = [];

    const typeRoots = tsConfig.compilerOptions.typeRoots || ['node_modules/@types'];

    if (!typeRoots.includes(TAIGA_TS_CONFIG_PATH)) {
        typeRoots.push(TAIGA_TS_CONFIG_PATH);
        tsConfig.compilerOptions.typeRoots = typeRoots;
        addedTypeRoots.push(TAIGA_TS_CONFIG_PATH);
        changesMade = true;
    }

    const types = tsConfig.compilerOptions.types || [];
    const requiredTypes = ['node', 'ng-dev-mode'];
    const missingTypes = requiredTypes.filter((type) => !types.includes(type));

    if (missingTypes.length > 0) {
        missingTypes.forEach((type) => {
            types.push(type);
            addedTypes.push(type);
        });
        tsConfig.compilerOptions.types = types;
        changesMade = true;
    }

    // Save changes if any modifications were made
    if (changesMade) {
        tree.overwrite(tsConfigPath, `${JSON.stringify(tsConfig, null, 2)}\n`);

        if (!options['skip-logs']) {
            if (addedTypeRoots.length > 0) {
                infoLog(`Added to typeRoots: ${addedTypeRoots.join(', ')}`);
            }

            if (addedTypes.length > 0) {
                infoLog(`Added to types: ${addedTypes.join(', ')}`);
            }

            infoLog(`Updated ${tsConfigPath} successfully`);
        }
    } else if (!options['skip-logs']) {
        infoLog(`No changes needed in ${tsConfigPath}, configuration already complete`);
    }
}

import {type Tree} from '@angular-devkit/schematics';
import {
    createProject,
    getSourceFiles,
    infoLog,
    Node,
    saveActiveProject,
    setActiveProject,
    SyntaxKind,
    titleLog,
} from 'ng-morph';
import {type CallExpression, type ImportDeclaration} from 'ts-morph';

import {ALL_TS_FILES} from '../../../../constants';
import {type TuiSchema} from '../../../../ng-add/schema';
import {getNamedImportReferences} from '../../../../utils/get-named-import-references';
import {removeImport} from '../../../../utils/import-manipulations';
import {insertTodo} from '../../../../utils/insert-todo';

const TOKEN_FUNCTIONS = ['tuiCreateToken', 'tuiCreateTokenFromFactory'];
const ANGULAR_CORE = '@angular/core';
const INJECTION_TOKEN = 'InjectionToken';

/**
 * Migrates Taiga UI token functions to Angular's InjectionToken
 *
 * This schematic:
 * 1. Finds all references to `tuiCreateToken` and `tuiCreateTokenFromFactory`
 * 2. Replaces them with equivalent `InjectionToken` implementations
 * 3. Handles proper import management for `InjectionToken`
 * 4. Preserves type parameters and factory functions
 * 5. Adds descriptive error handling and logging
 */
export function migrateTokens(tree: Tree, options: TuiSchema): void {
    if (!options['skip-logs']) {
        infoLog('Starting token migration to InjectionToken...');
    }

    const project = createProject(tree, '/', ALL_TS_FILES);

    setActiveProject(project);

    const allFiles = getSourceFiles();

    if (!options['skip-logs']) {
        infoLog(`Found ${allFiles.length} source files`);
    }

    TOKEN_FUNCTIONS.forEach((tokenFunction) => {
        const references = getNamedImportReferences(tokenFunction, '@taiga-ui/cdk');

        if (!options['skip-logs']) {
            infoLog(`Found ${references.length} references for ${tokenFunction}`);
        }

        references.forEach((ref) => {
            if (ref.wasForgotten()) {
                return;
            }

            try {
                const parent = ref.getParent();
                const sourceFile = ref.getSourceFile();

                if (Node.isImportSpecifier(parent)) {
                    removeImport(parent);

                    return;
                }

                if (Node.isCallExpression(parent)) {
                    const declaration = parent.getFirstAncestorByKind(
                        SyntaxKind.VariableDeclaration,
                    );

                    if (!declaration) {
                        if (!ref.wasForgotten()) {
                            insertTodo(ref, 'Could not find variable declaration');
                        }

                        return;
                    }

                    const constName = declaration.getName();

                    if (!constName) {
                        if (!ref.wasForgotten()) {
                            insertTodo(ref, 'Variable declaration has no name');
                        }

                        return;
                    }

                    const newExpression = createInjectionTokenExpression(
                        parent,
                        constName,
                        tokenFunction,
                    );

                    parent.replaceWithText(newExpression);

                    // handle InjectionToken imports
                    let hasValueImport = false;
                    const coreImports: ImportDeclaration[] = [];

                    sourceFile.getImportDeclarations().forEach((decl) => {
                        if (decl.getModuleSpecifierValue() !== ANGULAR_CORE) {
                            return;
                        }

                        coreImports.push(decl);
                        const namedImports = decl.getNamedImports();
                        const tokenImport = namedImports.find(
                            (i) => i.getName() === INJECTION_TOKEN,
                        );

                        if (!tokenImport) {
                            return;
                        }

                        // remove InjectionToken from type-only imports
                        if (tokenImport.isTypeOnly() || decl.isTypeOnly()) {
                            tokenImport.remove();

                            // remove the import declaration if it becomes empty
                            if (decl.getNamedImports().length === 0) {
                                decl.remove();
                            }
                        } else {
                            hasValueImport = true;
                        }
                    });

                    // add InjectionToken as regular import if needed
                    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                    if (!hasValueImport) {
                        sourceFile.addImportDeclaration({
                            moduleSpecifier: ANGULAR_CORE,
                            namedImports: [INJECTION_TOKEN],
                            isTypeOnly: false,
                        });
                    }
                }
            } catch (error) {
                const message = error instanceof Error ? error.message : String(error);

                if (!options['skip-logs']) {
                    infoLog(`Error migrating token: ${message}`);
                }

                if (!ref.wasForgotten()) {
                    insertTodo(ref, `Migration failed: ${message}`);
                }
            }
        });
    });

    saveActiveProject();

    if (!options['skip-logs']) {
        titleLog('Token migration completed!');
    }
}

/**
 * Creates InjectionToken expression to replace token functions
 *
 * This function:
 * - Preserves type parameters (<T> syntax)
 * - Converts token values to factory functions when needed
 * - Adds ngDevMode checks for token descriptions
 * - Handles different cases for tuiCreateToken vs tuiCreateTokenFromFactory
 *
 * Example conversions:
 * tuiCreateToken('default') → new InjectionToken(..., { factory: () => 'default' })
 * tuiCreateTokenFromFactory(() => value) → new InjectionToken(..., { factory: () => value })
 */
function createInjectionTokenExpression(
    callExpression: CallExpression,
    constName: string,
    tokenFunction: string,
): string {
    const typeArgs = callExpression.getTypeArguments();
    const typeArgsText = typeArgs.length
        ? `<${typeArgs.map((t) => t.getText()).join(', ')}>`
        : '';

    const args = callExpression.getArguments();
    const isFactory = tokenFunction === 'tuiCreateTokenFromFactory';
    const tokenDescription = `ngDevMode ? '${constName}' : ''`;

    if (args.length > 0 && args[0]) {
        const argText = args[0].getText();
        const isObjectOrArray = argText.startsWith('{') || argText.startsWith('[');

        if (isFactory) {
            return `new ${INJECTION_TOKEN}${typeArgsText}(${tokenDescription}, {
    factory: ${argText}
})`;
        }

        const factoryContent = isObjectOrArray
            ? `() => (${argText})`
            : `() => ${argText}`;

        return `new ${INJECTION_TOKEN}${typeArgsText}(${tokenDescription}, {
    factory: ${factoryContent}
})`;
    }

    return `new ${INJECTION_TOKEN}${typeArgsText}(${tokenDescription})`;
}

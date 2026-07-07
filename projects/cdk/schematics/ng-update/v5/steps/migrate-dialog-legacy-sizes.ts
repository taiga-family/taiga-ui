import {type Tree} from '@angular-devkit/schematics';
import {getSourceFiles, Node, type SourceFile, SyntaxKind} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants';
import {type TuiSchema} from '../../../ng-add/schema';
import {insertTodo} from '../../../utils/insert-todo';
import {
    getDialogOptions,
    TUI_DIALOG_FACTORY,
    TUI_DIALOG_OPTIONS_PROVIDER,
    TUI_DIALOG_SERVICE,
} from './utils/get-dialog-options';

const TAIGA_CORE = '@taiga-ui/core';
const TAIGA_LEGACY = '@taiga-ui/legacy';

const MIGRATE_TOKENS = [
    TUI_DIALOG_FACTORY,
    TUI_DIALOG_SERVICE,
    TUI_DIALOG_OPTIONS_PROVIDER,
];

const LEGACY_SIZE_FULLSCREEN = 'fullscreen';
const LEGACY_SIZES = ['auto', LEGACY_SIZE_FULLSCREEN, 'page'];
const TODO_MESSAGE = `legacy dialog size detected (deprecated size: ${LEGACY_SIZES.map((size) => `'${size}'`).join(', ')}); migration only moved imports. Review this call.`;

export function migrateDialogLegacySizes(_tree: Tree, _options: TuiSchema): void {
    getSourceFiles(ALL_TS_FILES).forEach((sourceFile) => {
        migrateSourceFile(sourceFile);
    });
}

function migrateSourceFile(sourceFile: SourceFile): void {
    const calls = sourceFile.getDescendantsOfKind(SyntaxKind.CallExpression);
    let hasLegacySize = false;

    calls.forEach((call) => {
        if (call.wasForgotten()) {
            return;
        }

        const options = getDialogOptions(call);

        if (!options) {
            return;
        }

        const sizeProperty = options.getProperty('size');

        if (!sizeProperty || !Node.isPropertyAssignment(sizeProperty)) {
            return;
        }

        const init = sizeProperty.getInitializer();

        if (
            !init ||
            (!Node.isStringLiteral(init) &&
                !Node.isNoSubstitutionTemplateLiteral(init)) ||
            !LEGACY_SIZES.includes(init.getLiteralValue())
        ) {
            return;
        }

        const appearanceProperty = options.getProperty('appearance');

        if (init.getLiteralValue() === LEGACY_SIZE_FULLSCREEN) {
            if (!appearanceProperty) {
                sizeProperty.replaceWithText(`appearance: '${LEGACY_SIZE_FULLSCREEN}'`);

                return;
            }

            if (Node.isPropertyAssignment(appearanceProperty)) {
                const appearanceInitializer = appearanceProperty.getInitializer();

                if (
                    appearanceInitializer &&
                    (Node.isStringLiteral(appearanceInitializer) ||
                        Node.isNoSubstitutionTemplateLiteral(appearanceInitializer)) &&
                    appearanceInitializer.getLiteralValue() === LEGACY_SIZE_FULLSCREEN
                ) {
                    sizeProperty.remove();

                    return;
                }
            }
        }

        hasLegacySize = true;
        insertTodo(sizeProperty, TODO_MESSAGE);
    });

    if (hasLegacySize) {
        moveDialogImportsToLegacy(sourceFile);
    }
}

function moveDialogImportsToLegacy(sourceFile: SourceFile): void {
    const moveToLegacy: string[] = [];

    sourceFile.getImportDeclarations().forEach((decl) => {
        if (!decl.getModuleSpecifierValue().startsWith(TAIGA_CORE)) {
            return;
        }

        decl.getNamedImports().forEach((spec) => {
            const name = spec.getName();

            if (MIGRATE_TOKENS.includes(name)) {
                moveToLegacy.push(name);
                spec.remove();
            }
        });

        if (
            decl.getNamedImports().length === 0 &&
            !decl.getDefaultImport() &&
            !decl.getNamespaceImport()
        ) {
            decl.remove();
        }
    });

    if (moveToLegacy.length === 0) {
        return;
    }

    let legacyDecl = sourceFile
        .getImportDeclarations()
        .find((d) => d.getModuleSpecifierValue() === TAIGA_LEGACY);

    if (!legacyDecl) {
        legacyDecl = sourceFile.addImportDeclaration({
            moduleSpecifier: TAIGA_LEGACY,
            namedImports: [],
        });
    }

    moveToLegacy.forEach((name) => {
        legacyDecl.addNamedImport({name});
    });
}

import {type Tree} from '@angular-devkit/schematics';
import {getSourceFiles, Node, SyntaxKind} from 'ng-morph';
import {type SourceFile} from 'ts-morph';

import {ALL_TS_FILES} from '../../../constants';
import {type TuiSchema} from '../../../ng-add/schema';
import {addUniqueImport} from '../../../utils/add-unique-import';
import {removeImport} from '../../../utils/import-manipulations';
import {TODO_MARK} from '../../../utils/insert-todo';

const TAIGA_CORE = '@taiga-ui/core';
const BREAKPOINT_SERVICE = 'TuiBreakpointService';
const BREAKPOINT_TOKEN = 'TUI_BREAKPOINT';
const RXJS_INTEROP = '@angular/core/rxjs-interop';
const TO_OBSERVABLE = 'toObservable';

const BREAKPOINT_TODO_MESSAGE =
    'TuiBreakpointService is deprecated. Use TUI_BREAKPOINT (signal token), wrap with toObservable(...) for Observable-based code if needed';

export function migrateBreakpointService(_tree: Tree, _options: TuiSchema): void {
    getSourceFiles(ALL_TS_FILES).forEach((sourceFile) => {
        const changed = migrateSourceFile(sourceFile);

        addTodoForUnsupportedUsages(sourceFile);

        if (!changed) {
            return;
        }

        addUniqueImport(sourceFile.getFilePath(), BREAKPOINT_TOKEN, TAIGA_CORE);
        addUniqueImport(sourceFile.getFilePath(), TO_OBSERVABLE, RXJS_INTEROP);
        cleanupBreakpointServiceImport(sourceFile);
    });
}

function migrateSourceFile(sourceFile: SourceFile): boolean {
    let changed = false;

    sourceFile.getDescendantsOfKind(SyntaxKind.CallExpression).forEach((call) => {
        if (call.getExpression().getText() !== 'inject') {
            return;
        }

        const [firstArg] = call.getArguments();

        if (firstArg?.getText() !== BREAKPOINT_SERVICE) {
            return;
        }

        firstArg.replaceWithText(BREAKPOINT_TOKEN);

        const parent = call.getParent();

        const isAlreadyWrapped =
            Node.isCallExpression(parent) &&
            parent.getExpression().getText() === TO_OBSERVABLE &&
            parent.getArguments()[0] === call;

        if (!isAlreadyWrapped) {
            call.replaceWithText(`${TO_OBSERVABLE}(${call.getText()})`);
        }

        changed = true;
    });

    return changed;
}

function cleanupBreakpointServiceImport(sourceFile: SourceFile): void {
    sourceFile
        .getImportDeclarations()
        .filter((decl) => decl.getModuleSpecifierValue() === TAIGA_CORE)
        .forEach((decl) => {
            const specifier = decl
                .getNamedImports()
                .find((namedImport) => namedImport.getName() === BREAKPOINT_SERVICE);

            if (!specifier) {
                return;
            }

            const nameNode = specifier.getNameNode();

            const refs = Node.isIdentifier(nameNode)
                ? nameNode
                      .findReferencesAsNodes()
                      .filter(
                          (ref) =>
                              ref.getSourceFile().getFilePath() ===
                              sourceFile.getFilePath(),
                      )
                : [];

            if (refs.length <= 1) {
                removeImport(specifier);
            }
        });
}

function addTodoForUnsupportedUsages(sourceFile: SourceFile): void {
    const linePositions = new Set<number>();

    sourceFile
        .getImportDeclarations()
        .filter((decl) => decl.getModuleSpecifierValue() === TAIGA_CORE)
        .forEach((decl) => {
            const specifier = decl
                .getNamedImports()
                .find((namedImport) => namedImport.getName() === BREAKPOINT_SERVICE);

            const nameNode = specifier?.getNameNode();

            if (!Node.isIdentifier(nameNode)) {
                return;
            }

            nameNode
                .findReferencesAsNodes()
                .filter(
                    (ref) =>
                        ref.getSourceFile().getFilePath() === sourceFile.getFilePath() &&
                        !Node.isImportSpecifier(ref.getParent()),
                )
                .forEach((ref) => {
                    // A single constructor parameter can reference the service twice
                    // (e.g. `@Inject(X)` decorator + `: X` type annotation). When
                    // prettier wraps it onto separate lines those references have
                    // different line positions, so anchor to the enclosing parameter
                    // to emit exactly one TODO per injection site.
                    const anchor =
                        ref.getFirstAncestorByKind(SyntaxKind.Parameter) ?? ref;

                    linePositions.add(anchor.getStartLinePos());
                });
        });

    // Positions are collected before any insertion: sourceFile.insertText forgets
    // every node in the file, so a held ref node would throw on the next iteration.
    // Insert bottom-up so each insertion cannot shift the offsets still pending.
    [...linePositions]
        .sort((a, b) => b - a)
        .forEach((pos) =>
            sourceFile.insertText(pos, `// ${TODO_MARK} ${BREAKPOINT_TODO_MESSAGE}\n`),
        );
}

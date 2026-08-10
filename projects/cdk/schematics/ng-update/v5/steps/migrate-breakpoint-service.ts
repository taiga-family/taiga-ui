import {type Tree} from '@angular-devkit/schematics';
import {getSourceFiles, Node, SyntaxKind} from 'ng-morph';
import {type ParameterDeclaration, type SourceFile} from 'ts-morph';

import {ALL_TS_FILES} from '../../../constants';
import {type TuiSchema} from '../../../ng-add/schema';
import {addUniqueImport} from '../../../utils/add-unique-import';
import {removeImport} from '../../../utils/import-manipulations';
import {TODO_MARK} from '../../../utils/insert-todo';

const TAIGA_CORE = '@taiga-ui/core';
const ANGULAR_CORE = '@angular/core';
const BREAKPOINT_SERVICE = 'TuiBreakpointService';
const BREAKPOINT_TOKEN = 'TUI_BREAKPOINT';
const RXJS_INTEROP = '@angular/core/rxjs-interop';
const TO_OBSERVABLE = 'toObservable';
const INJECT = 'inject';

const BREAKPOINT_TODO_MESSAGE =
    'TuiBreakpointService has been removed. Use TUI_BREAKPOINT (signal token); wrap with toObservable(...) for Observable-based code if needed';

export function migrateBreakpointService(_tree: Tree, _options: TuiSchema): void {
    getSourceFiles(ALL_TS_FILES).forEach((sourceFile) => {
        const changedInjectCalls = migrateInjectCalls(sourceFile);
        const changedConstructorInjections = migrateConstructorInjections(sourceFile);
        const changed = changedInjectCalls || changedConstructorInjections;

        addTodoForUnsupportedUsages(sourceFile);

        if (!changed) {
            return;
        }

        addUniqueImport(sourceFile.getFilePath(), BREAKPOINT_TOKEN, TAIGA_CORE);
        addUniqueImport(sourceFile.getFilePath(), TO_OBSERVABLE, RXJS_INTEROP);
        addUniqueImport(sourceFile.getFilePath(), INJECT, ANGULAR_CORE);
        cleanupBreakpointServiceImport(sourceFile);
    });
}

function migrateInjectCalls(sourceFile: SourceFile): boolean {
    let changed = false;

    sourceFile.getDescendantsOfKind(SyntaxKind.CallExpression).forEach((call) => {
        if (call.getExpression().getText() !== INJECT) {
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

/**
 * Constructor injection cannot stay as a parameter: TuiBreakpointService is
 * removed, so `@Inject(TuiBreakpointService)` / `: TuiBreakpointService` would
 * not compile. Convert each such parameter into a class field initialized with
 * `toObservable(inject(TUI_BREAKPOINT))`, preserving its access modifiers.
 */
function migrateConstructorInjections(sourceFile: SourceFile): boolean {
    let changed = false;

    sourceFile.getClasses().forEach((classDeclaration) => {
        classDeclaration.getConstructors().forEach((constructor) => {
            constructor
                .getParameters()
                .filter(isBreakpointParameter)
                .forEach((parameter) => {
                    const insertIndex = classDeclaration
                        .getMembers()
                        .indexOf(constructor);

                    classDeclaration.insertProperty(insertIndex, {
                        name: parameter.getName(),
                        isReadonly: parameter.isReadonly(),
                        scope: parameter.hasScopeKeyword()
                            ? parameter.getScope()
                            : undefined,
                        initializer: `${TO_OBSERVABLE}(${INJECT}(${BREAKPOINT_TOKEN}))`,
                    });

                    parameter.remove();
                    changed = true;
                });
        });
    });

    return changed;
}

function isBreakpointParameter(parameter: ParameterDeclaration): boolean {
    const injectDecorator = parameter.getDecorator('Inject');

    if (injectDecorator?.getArguments()[0]?.getText() === BREAKPOINT_SERVICE) {
        return true;
    }

    return parameter.getTypeNode()?.getText() === BREAKPOINT_SERVICE;
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

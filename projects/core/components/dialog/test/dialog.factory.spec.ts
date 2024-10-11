import * as fs from 'node:fs';
import * as path from 'node:path';

import ts from 'typescript';

import tsconfig from '../../../../../tsconfig.json';

describe('tuiDialog', () => {
    describe('typing tests', () => {
        let checker: ts.TypeChecker;
        let sourceFile: ts.SourceFile;

        function findVariable(variableName: string): ts.VariableDeclaration | undefined {
            function findVariableCb(node: ts.Node): ts.VariableDeclaration | undefined {
                if (
                    ts.isVariableDeclaration(node) &&
                    ts.isIdentifier(node.name) &&
                    node.name.text === variableName
                ) {
                    return node;
                }

                return ts.forEachChild(node, findVariableCb);
            }

            return findVariableCb(sourceFile);
        }

        function getVariableType(variableName: string): string {
            const variableNode = findVariable(variableName);

            if (!variableNode) {
                throw new Error(`Cannot find variable: ${variableName}`);
            }

            const type = checker.getTypeAtLocation(variableNode);

            return checker.typeToString(type);
        }

        beforeAll(() => {
            // language=TypeScript
            const sourceCode = `;
                import {tuiDialog} from "../dialog.factory";
                import {TuiDialogContext} from "../dialog.interfaces";

                class Test1Component {
                }

                const dialog1 = tuiDialog(Test1Component);

                class Test2Component {
                    context!: TuiDialogContext<string, number>;
                }

                const dialog2 = tuiDialog(Test2Component);

                class Test3Component {
                    context!: TuiDialogContext<string, number>;

                    otherMember: string;
                }

                const dialog3 = tuiDialog(Test3Component);

                class Test4Component {
                    context!: TuiDialogContext<string, number>;

                    otherMember: any;
                }

                const dialog4 = tuiDialog(Test4Component);
            `;

            const sourceFilePath = path.join(__dirname, 'input.ts');
            const options: ts.CompilerOptions = {
                noEmit: true,
                target: ts.ScriptTarget.ESNext,
                module: ts.ModuleKind.ES2020,
                lib: ['lib.esnext.d.ts', 'lib.dom.d.ts'],
                typeRoots: ['node_modules/@types'],
                types: ['node'],
                moduleResolution: ts.ModuleResolutionKind.Node10,
                paths: tsconfig.compilerOptions.paths,
                baseUrl: './',
                strict: true,
            };
            const host = ts.createCompilerHost(options);
            const program = ts.createProgram([sourceFilePath], options, {
                ...host,
                getSourceFile: (filePath, languageVersion) => {
                    if (filePath === sourceFilePath) {
                        return ts.createSourceFile(
                            filePath,
                            sourceCode,
                            languageVersion,
                            true,
                        );
                    }

                    const fileContent = fs.readFileSync(filePath, 'utf8');

                    return ts.createSourceFile(
                        filePath,
                        fileContent,
                        languageVersion,
                        true,
                    );
                },
                getCurrentDirectory: () => process.cwd(),
            });

            checker = program.getTypeChecker();
            sourceFile = program.getSourceFile(sourceFilePath)!;
        });

        it('should have void data and void result for empty component', () => {
            expect(getVariableType('dialog1')).toBe('(data: void) => Observable<void>');
        });

        it('should have number data and string result for component with TuiDialogContext<string, number>', () => {
            expect(getVariableType('dialog2')).toBe(
                '(data: number) => Observable<string>',
            );
        });

        it('should have number data and string result for component with TuiDialogContext<string, number> and other member', () => {
            expect(getVariableType('dialog3')).toBe(
                '(data: number) => Observable<string>',
            );
        });

        it('should have number data and string result for component with TuiDialogContext<string, number> and other member that any', () => {
            expect(getVariableType('dialog4')).toBe(
                '(data: number) => Observable<string>',
            );
        });
    });
});

import type {Tree} from '@angular-devkit/schematics';
import {
    addImportToComponent,
    createProject,
    getSourceFiles,
    Node,
    saveActiveProject,
    setActiveProject,
    SyntaxKind,
    titleLog,
} from 'ng-morph';

import {addUniqueImport} from '../../../../utils/add-unique-import';
import {getComponentTemplates} from '../../../../utils/templates/get-component-templates';

const patchOptions = (obj: string, addFullscreen: boolean): string => {
    const result = obj.trim();

    const inner = result.replace(/^\{/, '').replace(/\}$/, '').trim();

    const needsAppearance = !/appearance\s*:\s*['"]onboarding['"]/.test(inner);
    const needsFullscreen = addFullscreen && !/fullscreen\s*:/.test(inner);

    const newProps: string[] = [];

    if (needsFullscreen) {
        newProps.push('fullscreen: true');
    }

    if (needsAppearance) {
        newProps.push("appearance: 'onboarding'");
    }

    let newInner = inner;

    if (newProps.length) {
        if (inner.length === 0) {
            newInner = newProps.join(', ');
        } else {
            newInner = `${newProps.join(', ')}, ${inner}`;
        }
    }

    return `{${newInner}}`;
};

export function migrateTuiOnboardingToResponsiveDialog(tree: Tree): void {
    titleLog('Starting tuiOnboarding migration to tuiResponsiveDialog...');
    const project = createProject(tree, '/', ['**/*.ts', '**/*.html']);

    setActiveProject(project);
    const tsFiles = getSourceFiles('**/*.ts');
    const allFiles = [...tsFiles];

    let migratedTemplates = 0;
    let migratedOptions = 0;
    let migratedImports = 0;

    // --- TEMPLATE MIGRATION for Angular components with templateUrl ---
    const templateResources = getComponentTemplates(['**/*.ts']);

    for (const templateResource of templateResources) {
        if (!('templatePath' in templateResource)) {
            continue;
        }

        const filePath = templateResource.templatePath;
        const buffer = tree.read(filePath);

        if (!buffer) {
            continue;
        }

        const template = buffer.toString('utf-8');
        let newTemplate = template;

        newTemplate = newTemplate.replaceAll(
            '[tuiOnboardingOptions]',
            '[tuiResponsiveDialogOptions]',
        );
        newTemplate = newTemplate.replaceAll('(tuiOnboarding)', '(tuiResponsiveDialog)');
        newTemplate = newTemplate.replaceAll(
            '[(tuiOnboarding)]',
            '[(tuiResponsiveDialog)]',
        );

        newTemplate = newTemplate.replaceAll(
            /\[tuiResponsiveDialogOptions\]="([^"]*)"/g,
            (match: string, value: string) => {
                // Handle conditional expressions: isMobile ? {...} : {...}
                if (value.includes('?')) {
                    return match.replace(
                        /\?\s*({[^}]*})\s*:\s*({[^}]*})/,
                        (m: string, left: string, right: string) => {
                            return `? ${patchOptions(left, true)} : ${patchOptions(right, false)}`;
                        },
                    );
                } else if (/^\s*\{/.test(value)) {
                    const result = patchOptions(value, true);

                    return `[tuiResponsiveDialogOptions]="${result}"`;
                }

                // If value is a variable, return as is (handled in TS)
                return match;
            },
        );

        // If there was only a two-way binding, always add [tuiResponsiveDialogOptions]="{appearance: 'onboarding'}" before [(tuiResponsiveDialog)]
        if (
            /<ng-template[^>]*\[\((tuiOnboarding|tuiResponsiveDialog)\)\][^>]*>/.test(
                template,
            ) &&
            !template.includes('[tuiOnboardingOptions]') &&
            !newTemplate.includes('[tuiResponsiveDialogOptions]')
        ) {
            newTemplate = newTemplate.replace(
                /(\[\((tuiOnboarding|tuiResponsiveDialog)\)\][^>]*>)/,
                '[tuiResponsiveDialogOptions]="{appearance: \'onboarding\'}" $1',
            );
        }

        // --- Find the variable name passed to options using simple regex ---
        let optionsVar: string | null = null;
        const optionsMatch = /\[tuiResponsiveDialogOptions\]="([^"]*)"/.exec(newTemplate);

        if (
            optionsMatch?.[1] &&
            !/^\s*\{/.test(optionsMatch[1]) &&
            !optionsMatch[1].includes('?')
        ) {
            optionsVar = optionsMatch[1].trim();
        }

        if (newTemplate !== template) {
            tree.overwrite(filePath, newTemplate);
            migratedTemplates++;
        }

        // --- Patch the corresponding variable in the TS file ---
        if (optionsVar) {
            const componentPath = templateResource.componentPath;
            const componentFile = allFiles.find((f) => f.getFilePath() === componentPath);

            if (componentFile) {
                const fileText = componentFile.getFullText();

                // Only patch options if the file imports TuiOnboardingFlow from '@taiga-ui/proprietary'
                const hasOnboardingImport =
                    /import\s+\{[^}]*TuiOnboardingFlow[^}]*\}\s+from\s+['"]@taiga-ui\/proprietary['"]/.test(
                        fileText,
                    );

                if (hasOnboardingImport) {
                    addResponsiveDialogImportToComponent(componentPath);
                    migratedImports++;

                    migratedOptions += patchClassPropertyOptions(
                        componentFile,
                        optionsVar,
                    );
                }
            }
        }
    }

    // --- ADDITIONAL: Add TuiResponsiveDialog import to all files that import TuiOnboardingFlow ---
    for (const file of allFiles) {
        const fileText = file.getFullText();
        const filePath = file.getFilePath();

        const hasOnboardingImport =
            /import\s+\{[^}]*TuiOnboardingFlow[^}]*\}\s+from\s+['"]@taiga-ui\/proprietary['"]/.test(
                fileText,
            );

        if (hasOnboardingImport) {
            const hasResponsiveDialogImport =
                /import\s+\{[^}]*TuiResponsiveDialog[^}]*\}\s+from\s+['"]@taiga-ui\/addon-mobile['"]/.test(
                    fileText,
                );

            if (!hasResponsiveDialogImport) {
                addResponsiveDialogImportToComponent(filePath);
                migratedImports++;
            }
        }
    }

    saveActiveProject();
    titleLog(
        `tuiOnboarding migration completed!\nMigrated templates: ${migratedTemplates}, options: ${migratedOptions}, imports: ${migratedImports}`,
    );
}

function addResponsiveDialogImportToComponent(componentPath: string): void {
    addUniqueImport(componentPath, 'TuiResponsiveDialog', '@taiga-ui/addon-mobile');
    const sourceFile = getSourceFiles(componentPath)[0];

    if (!sourceFile) {
        return;
    }

    let componentClass = sourceFile.getClasses()[0];

    if (!componentClass && sourceFile.getDefaultExportSymbol) {
        const defaultExport = sourceFile
            .getDefaultExportSymbol()
            ?.getDeclarations?.()?.[0];

        if (defaultExport && Node.isClassDeclaration(defaultExport)) {
            componentClass = defaultExport;
        }
    }

    if (componentClass && Node.isClassDeclaration(componentClass)) {
        try {
            addImportToComponent(componentClass, 'TuiResponsiveDialog', {unique: true});
        } catch {}
    }
}

function patchClassPropertyOptions(componentFile: any, optionsVar: string): number {
    let migratedOptions = 0;

    const classes = componentFile.getClasses();

    for (const cls of classes) {
        const prop = cls.getInstanceProperty(optionsVar);

        if (prop && Node.isPropertyDeclaration(prop) && prop.getInitializer()) {
            let text = prop.getInitializer()!.getText();

            if (prop.getInitializer()!.getKind() === SyntaxKind.ConditionalExpression) {
                text = text.replace(
                    /\?\s*({[^}]*})\s*:\s*({[^}]*})/,
                    (_: string, left: string, right: string) => {
                        return `? ${patchOptions(left, true)} : ${patchOptions(right, false)}`;
                    },
                );
            } else if (
                prop.getInitializer()!.getKind() === SyntaxKind.ObjectLiteralExpression
            ) {
                text = patchOptions(text, true);
            }

            if (text !== prop.getInitializer()!.getText()) {
                prop.getInitializer()!.replaceWithText(text);
                migratedOptions++;
            }
        }
    }

    return migratedOptions;
}

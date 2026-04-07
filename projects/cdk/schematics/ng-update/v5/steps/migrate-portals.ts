import * as path from 'node:path';

import {type Tree} from '@angular-devkit/schematics';
import {getSourceFiles, Node} from 'ng-morph';
import {type SourceFile} from 'ts-morph';

import {ALL_TS_FILES} from '../../../constants';
import {type TuiSchema} from '../../../ng-add/schema';
import {addUniqueImport} from '../../../utils/add-unique-import';
import {pushToObjectArrayProperty} from '../../../utils/push-to-array-property';

const TUI_PORTALS = 'TuiPortals';
const TUI_VCR_CLASS = 'TuiVCR';
const TUI_VCR_DIRECTIVE = 'tuiVCR';
const TAIGA_CDK = '@taiga-ui/cdk';
const VIEW_CONTAINER_REF = '#viewContainer';

export function migratePortals(tree: Tree, _options: TuiSchema): void {
    getSourceFiles(ALL_TS_FILES).forEach((sourceFile) => {
        migrateSourceFile(sourceFile, tree);
    });
}

function migrateSourceFile(sourceFile: SourceFile, tree: Tree): void {
    const hasTuiPortalsImport = sourceFile
        .getImportDeclarations()
        .some(
            (imp) =>
                imp.getModuleSpecifierValue() === TAIGA_CDK &&
                imp.getNamedImports().some((ni) => ni.getName() === TUI_PORTALS),
        );

    if (!hasTuiPortalsImport) {
        return;
    }

    for (const classDecl of sourceFile.getClasses()) {
        const extendsClause = classDecl.getExtends();

        if (extendsClause?.getExpression().getText() !== TUI_PORTALS) {
            continue;
        }

        const decorator = classDecl.getDecorator('Component');

        if (!decorator) {
            continue;
        }

        const [metadata] = decorator.getArguments();

        if (!Node.isObjectLiteralExpression(metadata)) {
            continue;
        }

        const templateProp = metadata.getProperty('template');
        const templateUrlProp = metadata.getProperty('templateUrl');

        if (Node.isPropertyAssignment(templateProp)) {
            const initializer = templateProp.getInitializer();

            if (!initializer) {
                continue;
            }

            const text = initializer.getText();

            if (!text.includes(VIEW_CONTAINER_REF)) {
                continue;
            }

            const hasExistingImports = !!metadata.getProperty('imports');

            initializer.replaceWithText(
                text.replaceAll(VIEW_CONTAINER_REF, TUI_VCR_DIRECTIVE),
            );
            pushToObjectArrayProperty(metadata, 'imports', TUI_VCR_CLASS, {unique: true});

            if (hasExistingImports) {
                addUniqueImport(sourceFile.getFilePath(), TUI_VCR_CLASS, TAIGA_CDK);
            }
        } else if (Node.isPropertyAssignment(templateUrlProp)) {
            const templateUrlInit = templateUrlProp.getInitializer();

            if (!templateUrlInit) {
                continue;
            }

            const templateUrl = templateUrlInit.getText().replaceAll(/['"`]/g, '');
            const componentDir = path.dirname(sourceFile.getFilePath());
            const templatePath = path.join(componentDir, templateUrl);
            const content = tree.read(templatePath)?.toString();

            if (!content?.includes(VIEW_CONTAINER_REF)) {
                continue;
            }

            tree.overwrite(
                templatePath,
                content.replaceAll(VIEW_CONTAINER_REF, TUI_VCR_DIRECTIVE),
            );
            pushToObjectArrayProperty(metadata, 'imports', TUI_VCR_CLASS, {unique: true});
            addUniqueImport(sourceFile.getFilePath(), TUI_VCR_CLASS, TAIGA_CDK);
        }
    }
}

import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {
    createProject,
    DevkitFileSystem,
    getSourceFiles,
    saveActiveProject,
    setActiveProject,
    SourceFile,
} from 'ng-morph';
import {ts} from 'ts-morph';

import {ALL_FILES, ALL_TS_FILES} from '../../../constants';
import {TuiSchema} from '../../../ng-add/schema';
import {
    FINISH_SYMBOL,
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    titleLog,
} from '../../../utils/colored-log';
import {projectRoot} from '../../../utils/project-root';
import {getFileSystem} from '../../utils/get-file-system';
import {Replacement, replaceSubstrings} from './utils/replace-substrings';

export function restoreTuiMatcher(options: TuiSchema): Rule {
    return (tree: Tree, _: SchematicContext) => {
        const fileSystem = getFileSystem(tree);

        updateTuiMatcher(options, fileSystem);
        renameTuiTypedMatcher(options, fileSystem);

        !options[`skip-logs`] && titleLog(`${FINISH_SYMBOL} successfully migrated \n`);
    };
}

function updateTuiMatcher(options: TuiSchema, fileSystem: DevkitFileSystem): void {
    !options[`skip-logs`] &&
        infoLog(
            `${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} updating TuiMatcher typing to the typed version`,
        );

    getSourceFiles(ALL_TS_FILES).forEach(sourceFile => {
        const replacements = findTuiMatcherFirstTypeArgReplacements(sourceFile);
        const sourceText = sourceFile.getFullText();
        const transformed = replaceSubstrings(sourceText, replacements);

        sourceFile.replaceWithText(transformed);
    });

    fileSystem.commitEdits();
    saveActiveProject();
    setActiveProject(createProject(fileSystem.tree, projectRoot(), ALL_FILES));
}

function findTuiMatcherFirstTypeArgReplacements(sourceFile: SourceFile): Replacement[] {
    const replacements: Replacement[] = [];

    sourceFile.transform(traversal => {
        const node = traversal.visitChildren();

        if (!ts.isTypeReferenceNode(node) || node.typeName.getText() !== `TuiMatcher`) {
            return node;
        }

        const typeArguments = node.typeArguments;

        if (!typeArguments || typeArguments.length !== 1) {
            return node;
        }

        const [inputType] = typeArguments;

        replacements.push({
            start: inputType.getStart(),
            from: inputType.getText(),
            to: `[${inputType.getText()}, ...any]`,
        });

        return node;
    });

    return replacements;
}

function renameTuiTypedMatcher(options: TuiSchema, fileSystem: DevkitFileSystem): void {
    !options[`skip-logs`] &&
        infoLog(
            `${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} renaming TuiTypedMatcher to TuiMatcher`,
        );

    getSourceFiles(ALL_TS_FILES).forEach(sourceFile => {
        const replacements = findTuiTypedMatcherReplacements(sourceFile);
        const sourceText = sourceFile.getFullText();
        const transformed = replaceSubstrings(sourceText, replacements);

        sourceFile.replaceWithText(transformed);
        sourceFile.organizeImports();
    });

    fileSystem.commitEdits();
    saveActiveProject();
    setActiveProject(createProject(fileSystem.tree, projectRoot(), ALL_FILES));
}

function findTuiTypedMatcherReplacements(sourceFile: SourceFile): Replacement[] {
    const replacements: Replacement[] = [];

    sourceFile.transform(traversal => {
        const node = traversal.visitChildren();

        if (
            !ts.isTypeReferenceNode(node) ||
            node.typeName.getText() !== `TuiTypedMatcher`
        ) {
            return node;
        }

        replacements.push({
            start: node.getStart(),
            from: `TuiTypedMatcher`,
            to: `TuiMatcher`,
        });

        return node;
    });

    return replacements;
}

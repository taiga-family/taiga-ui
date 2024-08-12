import {Node, ts} from 'ng-morph';

import type {TuiSchema} from '../../ng-add/schema';
import {addUniqueImport} from '../../utils/add-unique-import';
import {
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from '../../utils/colored-log';
import {getNamedImportReferences} from '../../utils/get-named-import-references';
import {removeImport} from '../../utils/import-manipulations';
import {setupProgressLogger} from '../../utils/progress';
import type {ReplacementIdentifierMulti} from '../interfaces/replacement-identifier';

export function replaceIdentifiers(
    options: TuiSchema,
    constants: readonly ReplacementIdentifierMulti[],
): void {
    !options['skip-logs'] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing identifiers...`);

    const progressLog = setupProgressLogger({
        total: constants.length,
    });

    constants.forEach(({from, to}) => {
        toArray(from).forEach((x) => replaceIdentifier({from: x, to}));

        !options['skip-logs'] &&
            progressLog(
                toArray(from)
                    .map((x) => x.name)
                    .join(', '),
            );
    });

    !options['skip-logs'] &&
        successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} identifiers replaced \n`);
}

export function replaceIdentifier({from, to}: ReplacementIdentifierMulti): void {
    const references = toArray(from)
        .map(({name, moduleSpecifier}) => getNamedImportReferences(name, moduleSpecifier))
        .flat();

    references.forEach((ref) => {
        if (ref.wasForgotten()) {
            return;
        }

        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent)) {
            removeImport(parent);
            addImports(to, parent.getSourceFile().getFilePath());
        } else {
            const decorator = ref.getParentWhile(
                (node) => node.getKindName() !== 'Decorator',
            );

            const inModule =
                decorator?.getFirstChildIfKind(ts.SyntaxKind.Identifier)?.getText() ===
                'NgModule';

            ref.replaceWithText(getReplacementText(to, !!inModule));
        }
    });
}

function addImports(
    identifier: ReplacementIdentifierMulti['to'],
    filePath: string,
): void {
    toArray(identifier).forEach(({name, namedImport, moduleSpecifier}) => {
        addUniqueImport(filePath, namedImport || name, moduleSpecifier);
    });
}

function getReplacementText(
    to: ReplacementIdentifierMulti['to'],
    inModule: boolean,
): string {
    return toArray(to)
        .map(({name, spreadInModule}) =>
            spreadInModule && inModule ? `...${name}` : name,
        )
        .join(', ');
}

function toArray<T>(x: T | T[]): T[] {
    return Array.isArray(x) ? x : [x];
}

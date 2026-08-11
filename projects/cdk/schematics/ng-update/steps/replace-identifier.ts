import {Node, ts} from 'ng-morph';

import {type TuiSchema} from '../../ng-add/schema';
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
import {type ReplacementIdentifierMulti} from '../interfaces/replacement-identifier';

export function replaceIdentifiers(
    options: TuiSchema,
    constants: readonly ReplacementIdentifierMulti[],
): void {
    !options['skip-logs'] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing identifiers...`);

    const progressLog = setupProgressLogger({total: constants.length});

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

            replaceReference(ref, getReplacements(to, inModule));
        }
    });
}

function replaceReference(ref: Node, replacements: readonly string[]): void {
    const spread = replacements.some((text) => text.startsWith('...'));

    if (spread && Node.isSpreadElement(ref.getParent())) {
        // Reference already spread by a previous migration run (`...TuiTextfield`).
        // Replace only the inner identifier and keep the existing `...`, so the
        // node kind is preserved and we don't produce a doubled `......` spread
        // (which corrupts ts-morph's tree diff and aborts the whole migration).
        ref.replaceWithText(
            replacements.map((text) => text.replace(/^\.\.\./, '')).join(', '),
        );

        return;
    }

    ref.replaceWithText(replacements.join(', '));
}

function addImports(
    identifier: ReplacementIdentifierMulti['to'],
    filePath: string,
): void {
    toArray(identifier).forEach(({name, namedImport, moduleSpecifier}) => {
        if (moduleSpecifier) {
            addUniqueImport(filePath, namedImport || name, moduleSpecifier);
        }
    });
}

function getReplacements(
    to: ReplacementIdentifierMulti['to'],
    inModule: boolean,
): string[] {
    return toArray(to).map(({name, spreadInModule, callExpression}) => {
        if (spreadInModule && inModule) {
            return `...${name}`;
        }

        return callExpression ? `${name}()` : name;
    });
}

function toArray<T>(x: T | T[]): T[] {
    return Array.isArray(x) ? x : [x];
}

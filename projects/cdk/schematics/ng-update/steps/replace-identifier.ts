import {getImports, type ImportSpecifier, Node, ts} from 'ng-morph';

import {ALL_TS_FILES} from '../../constants';
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
    toArray(from).forEach(({name, moduleSpecifier}) => {
        const references = getNamedImportReferences(name, moduleSpecifier);
        let hasStaleReference = false;

        references.forEach((ref) => {
            if (ref.wasForgotten()) {
                return;
            }

            const parent = ref.getParent();

            if (Node.isImportSpecifier(parent)) {
                moveImportSpecifier(parent, to);

                return;
            }

            // A stale reference from an earlier edit (e.g. addUniqueImport on the same
            // declaration) can report its parent as NamedImports/ImportClause instead of
            // ImportSpecifier, with unreliable ancestor navigation. Defer to a fresh lookup
            // below instead of rewriting it in place — the case that left TuiMultiSelect /
            // TuiComboBox stuck in @taiga-ui/legacy.
            if (isImportContext(parent)) {
                hasStaleReference = true;

                return;
            }

            const decorator = ref.getParentWhile(
                (node) => node.getKindName() !== 'Decorator',
            );

            const inModule =
                decorator?.getFirstChildIfKind(ts.SyntaxKind.Identifier)?.getText() ===
                'NgModule';

            const removeSpread = toArray(to).some((x) => x.removeSpread);

            replaceReference(ref, getReplacements(to, inModule), removeSpread);
        });

        // Pay the whole-project scan only when a stale reference actually blocked the cheap
        // path above; otherwise the reference loop already moved the import. Keeps the common
        // case reference-local instead of re-reading every file's imports per entry.
        if (hasStaleReference && moduleSpecifier) {
            rewriteImportDeclarations(name, moduleSpecifier, to);
        }
    });
}

function isImportContext(parent: Node | undefined): boolean {
    const kind = parent?.getKindName();

    return kind === 'NamedImports' || kind === 'ImportClause';
}

function moveImportSpecifier(
    specifier: ImportSpecifier,
    to: ReplacementIdentifierMulti['to'],
): void {
    const targets = toArray(to);
    const [target] = targets;

    const alreadyImported =
        targets.length === 1 &&
        !!target &&
        !target.namedImport &&
        target.name === specifier.getName() &&
        target.moduleSpecifier ===
            specifier.getImportDeclaration().getModuleSpecifierValue();

    // A `removeSpread` entry keeps the same name and module, so the import is already
    // correct — only the `...` usage needs rewriting. Skip the remove/re-add churn that
    // would otherwise relocate an untouched import.
    if (!alreadyImported) {
        removeImport(specifier);
        addImports(to, specifier.getSourceFile().getFilePath());
    }
}

function rewriteImportDeclarations(
    name: string,
    moduleSpecifier: string[] | string,
    to: ReplacementIdentifierMulti['to'],
): void {
    const declarations = getImports(ALL_TS_FILES, {
        namedImports: [name],
        moduleSpecifier: Array.isArray(moduleSpecifier)
            ? moduleSpecifier
            : [moduleSpecifier, `${moduleSpecifier}/**`],
    });

    declarations.forEach((declaration) => {
        const specifier = declaration
            .getNamedImports()
            .find((namedImport) => namedImport.getName() === name);

        if (specifier) {
            moveImportSpecifier(specifier, to);
        }
    });
}

function replaceReference(
    ref: Node,
    replacements: readonly string[],
    removeSpread: boolean,
): void {
    const spread = replacements.some((text) => text.startsWith('...'));
    const parent = ref.getParent();

    if (spread && Node.isSpreadElement(parent)) {
        // Reference already spread by a previous migration run (`...TuiTextfield`).
        // Replace only the inner identifier and keep the existing `...`, so the
        // node kind is preserved and we don't produce a doubled `......` spread
        // (which corrupts ts-morph's tree diff and aborts the whole migration).
        ref.replaceWithText(
            replacements.map((text) => text.replace(/^\.\.\./, '')).join(', '),
        );

        return;
    }

    if (removeSpread && Node.isSpreadElement(parent)) {
        // A v4 barrel array collapsed into a single class in v5 under the same
        // name and module, so an existing `...Name` spread is now invalid
        // (spreading a class is TS2488). Drop the `...` by replacing the whole
        // spread element with the plain identifier.
        parent.replaceWithText(replacements.join(', '));

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

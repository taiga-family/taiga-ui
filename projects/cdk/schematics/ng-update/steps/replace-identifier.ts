import {Node} from '@taiga-ui/morph';

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
import type {ReplacementIdentifierMulti} from '../interfaces/replacement-identifier';

export function replaceIdentifiers(
    options: TuiSchema,
    constants: readonly ReplacementIdentifierMulti[],
): void {
    !options['skip-logs'] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing identifiers...`);

    constants.forEach(replaceIdentifier);

    !options['skip-logs'] &&
        successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} identifiers replaced \n`);
}

export function replaceIdentifier({from, to}: ReplacementIdentifierMulti): void {
    const references = getNamedImportReferences(from.name, from.moduleSpecifier);

    references.forEach(ref => {
        if (ref.wasForgotten()) {
            return;
        }

        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent)) {
            removeImport(parent);
            addImports(to, parent.getSourceFile().getFilePath());
        } else {
            ref?.replaceWithText(
                Array.isArray(to) ? to.map(({name}) => name).join(', ') : to.name,
            );
        }
    });
}

function addImports(
    identifier: ReplacementIdentifierMulti['to'],
    filePath: string,
): void {
    Array.isArray(identifier)
        ? identifier.forEach(({name, namedImport, moduleSpecifier}) => {
              addUniqueImport(filePath, namedImport || name, moduleSpecifier);
          })
        : addUniqueImport(
              filePath,
              identifier.namedImport || identifier.name,
              identifier.moduleSpecifier,
          );
}

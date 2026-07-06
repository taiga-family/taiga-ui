import {type Tree} from '@angular-devkit/schematics';
import {Node} from 'ng-morph';

import {type TuiSchema} from '../../../ng-add/schema';
import {addUniqueImport} from '../../../utils/add-unique-import';
import {getNamedImportReferences} from '../../../utils/get-named-import-references';
import {removeImport} from '../../../utils/import-manipulations';

const TAIGA_CDK = '@taiga-ui/cdk';
const RANGE_TOKEN = 'TUI_RANGE';
const ANGULAR_CORE = '@angular/core';
const ANGULAR_COMMON = '@angular/common';
const IS_PLATFORM_BROWSER = 'isPlatformBrowser';
const PLATFORM_ID = 'PLATFORM_ID';

const RANGE_REPLACEMENT = `${IS_PLATFORM_BROWSER}(inject(${PLATFORM_ID}))
    ? new Range()
    : ({} as unknown as Range)`;

export function migrateRangeToken(_tree: Tree, _options: TuiSchema): void {
    getNamedImportReferences(RANGE_TOKEN, TAIGA_CDK).forEach((ref) => {
        if (ref.wasForgotten()) {
            return;
        }

        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent)) {
            removeImport(parent);

            return;
        }

        const isRangeInjection =
            Node.isCallExpression(parent) &&
            parent.getExpression().getText() === 'inject';

        if (!isRangeInjection) {
            return;
        }

        const filePath = ref.getSourceFile().getFilePath();

        parent.replaceWithText(RANGE_REPLACEMENT);
        addUniqueImport(filePath, IS_PLATFORM_BROWSER, ANGULAR_COMMON);
        addUniqueImport(filePath, PLATFORM_ID, ANGULAR_CORE);
    });
}

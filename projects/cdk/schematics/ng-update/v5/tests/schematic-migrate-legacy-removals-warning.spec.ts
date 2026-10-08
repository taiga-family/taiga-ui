import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update legacy removals warnings', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    function importFrom(name: string): string {
        return /* TypeScript */ `
            import {${name}} from '@taiga-ui/legacy';

            export const ref = ${name};
        `;
    }

    it(
        'adds TODO for AbstractTuiControl',
        migrate({component: importFrom('AbstractTuiControl')}),
    );

    it(
        'adds TODO for AbstractTuiNullableControl',
        migrate({component: importFrom('AbstractTuiNullableControl')}),
    );

    it(
        'adds TODO for TuiPrimitiveTextfieldComponent',
        migrate({component: importFrom('TuiPrimitiveTextfieldComponent')}),
    );

    it(
        'adds TODO for TuiColorSelectorComponent',
        migrate({component: importFrom('TuiColorSelectorComponent')}),
    );

    it(
        'adds TODO for TuiValueAccessorModule',
        migrate({component: importFrom('TuiValueAccessorModule')}),
    );

    it(
        'adds TODO for TuiValueAccessorDirective',
        migrate({component: importFrom('TuiValueAccessorDirective')}),
    );

    it(
        'adds TODO for TuiTableBarComponent',
        migrate({component: importFrom('TuiTableBarComponent')}),
    );

    it(
        'adds TODO for TuiTextareaComponent',
        migrate({component: importFrom('TuiTextareaComponent')}),
    );

    it(
        'adds TODO for TuiNativeFocusableElement',
        migrate({component: importFrom('TuiNativeFocusableElement')}),
    );

    it(
        'adds TODO for TuiTableBarsHostComponent',
        migrate({component: importFrom('TuiTableBarsHostComponent')}),
    );

    afterEach(() => resetActiveProject());
});

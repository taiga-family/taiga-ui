import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update migrate @taiga-ui/kit imports to @taiga-ui/core', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'migrates all identifiers from @taiga-ui/kit to @taiga-ui/core',
        migrate({
            component: `
                import {TuiSlider, TuiSliderComponent, TuiCheckbox, TuiRadio, TuiKeySteps, tuiCheckboxOptionsProvider, TUI_FLOATING_PRECISION, TUI_CHECKBOX_OPTIONS, TUI_RADIO_OPTIONS, TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';
            `,
        }),
    );

    it(
        'migrates single identifier from @taiga-ui/kit to @taiga-ui/core',
        migrate({
            component: `
                import {TuiCheckbox} from '@taiga-ui/kit';
            `,
        }),
    );

    it(
        'does not affect other @taiga-ui/kit imports',
        migrate({
            component: `
                import {TuiCheckbox} from '@taiga-ui/kit';
                import {TuiSomethingElse} from '@taiga-ui/kit';
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});

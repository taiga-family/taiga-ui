import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update migrate @taiga-ui/kit imports to @taiga-ui/core', () => {
    async function migrate(source: string): Promise<string> {
        const {component} = await runMigration({
            component: source,
            collection,
        });

        return component;
    }

    it('migrates all identifiers from @taiga-ui/kit to @taiga-ui/core', async () => {
        const result = await migrate(`
            import {TuiSlider, TuiSliderComponent, TuiCheckbox, TuiRadio, TuiKeySteps, tuiCheckboxOptionsProvider, TUI_FLOATING_PRECISION, TUI_CHECKBOX_OPTIONS, TUI_RADIO_OPTIONS} from '@taiga-ui/kit';
        `);

        expect(result).toContain('@taiga-ui/core');
        expect(result).not.toContain('@taiga-ui/kit');
        expect(result).toContain('TuiSlider');
        expect(result).toContain('TuiSliderComponent');
        expect(result).toContain('TuiCheckbox');
        expect(result).toContain('TuiRadio');
        expect(result).toContain('TuiKeySteps');
        expect(result).toContain('tuiCheckboxOptionsProvider');
        expect(result).toContain('TUI_FLOATING_PRECISION');
        expect(result).toContain('TUI_CHECKBOX_OPTIONS');
        expect(result).toContain('TUI_RADIO_OPTIONS');
    });

    it('migrates single identifier from @taiga-ui/kit to @taiga-ui/core', async () => {
        const result = await migrate(`
            import {TuiCheckbox} from '@taiga-ui/kit';
        `);

        expect(result).toContain('@taiga-ui/core');
        expect(result).not.toContain('@taiga-ui/kit');
        expect(result).toContain('TuiCheckbox');
    });

    it('does not affect other @taiga-ui/kit imports', async () => {
        const result = await migrate(`
            import {TuiCheckbox} from '@taiga-ui/kit';
            import {TuiSomethingElse} from '@taiga-ui/kit';
        `);

        expect(result).toContain('@taiga-ui/core');
        expect(result).toContain('TuiCheckbox');
    });

    afterEach(() => resetActiveProject());
});

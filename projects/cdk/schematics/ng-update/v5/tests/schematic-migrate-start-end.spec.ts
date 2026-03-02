import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update start/end instead of left/right', () => {
    const migrateTemplate = async (template: string): Promise<string> => {
        const {template: result} = await runMigration({
            template,
            collection,
        });

        return result;
    };

    const migrateComponent = async (component: string): Promise<string> => {
        const {component: result} = await runMigration({
            component,
            collection,
        });

        return result;
    };

    it('replaces for tuiHintDirection', async () => {
        const result = await migrateTemplate(`
            <tui-icon tuiHintDirection="bottom-left" />
            <tui-icon tuiHintDirection="bottom" />
            <tui-icon tuiHintDirection="bottom-right" />
            <tui-icon tuiHintDirection="top-left" />
            <tui-icon tuiHintDirection="top" />
            <tui-icon tuiHintDirection="top-right" />
            <tui-icon tuiHintDirection="left-top" />
            <tui-icon tuiHintDirection="left" />
            <tui-icon tuiHintDirection="left-bottom" />
            <tui-icon tuiHintDirection="right-top" />
            <tui-icon tuiHintDirection="right" />
            <tui-icon tuiHintDirection="right-bottom" />
        `);
        const expected = `
            <tui-icon tuiHintDirection="bottom-start" />
            <tui-icon tuiHintDirection="bottom" />
            <tui-icon tuiHintDirection="bottom-end" />
            <tui-icon tuiHintDirection="top-start" />
            <tui-icon tuiHintDirection="top" />
            <tui-icon tuiHintDirection="top-end" />
            <tui-icon tuiHintDirection="start-top" />
            <tui-icon tuiHintDirection="start" />
            <tui-icon tuiHintDirection="start-bottom" />
            <tui-icon tuiHintDirection="end-top" />
            <tui-icon tuiHintDirection="end" />
            <tui-icon tuiHintDirection="end-bottom" />
        `;

        expect(result).toEqual(expected);
    });

    it('replaces for [tuiHintDirection]', async () => {
        const result = await migrateTemplate(`
            <div tuiHint [tuiHintDirection]="'bottom-left'"></div>
            <div tuiHint [tuiHintDirection]="'bottom'"></div>
            <div tuiHint [tuiHintDirection]="'bottom-right'"></div>
            <div tuiHint [tuiHintDirection]="'top-left'"></div>
            <div tuiHint [tuiHintDirection]="'top'"></div>
            <div tuiHint [tuiHintDirection]="'top-right'"></div>
            <div tuiHint [tuiHintDirection]="'left-top'"></div>
            <div tuiHint [tuiHintDirection]="'left'"></div>
            <div tuiHint [tuiHintDirection]="'left-bottom'"></div>
            <div tuiHint [tuiHintDirection]="'right-top'"></div>
            <div tuiHint [tuiHintDirection]="'right'"></div>
            <div tuiHint [tuiHintDirection]="'right-bottom'"></div>
        `);

        const expected = `
            <div tuiHint [tuiHintDirection]="'bottom-start'"></div>
            <div tuiHint [tuiHintDirection]="'bottom'"></div>
            <div tuiHint [tuiHintDirection]="'bottom-end'"></div>
            <div tuiHint [tuiHintDirection]="'top-start'"></div>
            <div tuiHint [tuiHintDirection]="'top'"></div>
            <div tuiHint [tuiHintDirection]="'top-end'"></div>
            <div tuiHint [tuiHintDirection]="'start-top'"></div>
            <div tuiHint [tuiHintDirection]="'start'"></div>
            <div tuiHint [tuiHintDirection]="'start-bottom'"></div>
            <div tuiHint [tuiHintDirection]="'end-top'"></div>
            <div tuiHint [tuiHintDirection]="'end'"></div>
            <div tuiHint [tuiHintDirection]="'end-bottom'"></div>
        `;

        expect(result).toEqual(expected);
    });

    it('replaces for tuiDropdownAlign', async () => {
        const result = await migrateTemplate(`
            <div tuiDropdownAlign="right" [tuiDropdown]="dropdown"></div>
            <div tuiDropdownAlign="center" [tuiDropdown]="dropdown"></div>
            <div tuiDropdownAlign="left" [tuiDropdown]="dropdown"></div>
        `);

        const expected = `
            <div tuiDropdownAlign="end" [tuiDropdown]="dropdown"></div>
            <div tuiDropdownAlign="center" [tuiDropdown]="dropdown"></div>
            <div tuiDropdownAlign="start" [tuiDropdown]="dropdown"></div>
        `;

        expect(result).toEqual(expected);
    });

    it('replaces for [tuiDropdownAlign]', async () => {
        const result = await migrateTemplate(`
            <div [tuiDropdown]="dropdown" [tuiDropdownAlign]="'right'"></div>
            <div [tuiDropdown]="dropdown" [tuiDropdownAlign]="'center'"></div>
            <div [tuiDropdown]="dropdown" [tuiDropdownAlign]="'left'"></div>
        `);

        const expected = `
            <div [tuiDropdown]="dropdown" [tuiDropdownAlign]="'end'"></div>
            <div [tuiDropdown]="dropdown" [tuiDropdownAlign]="'center'"></div>
            <div [tuiDropdown]="dropdown" [tuiDropdownAlign]="'start'"></div>
        `;

        expect(result).toEqual(expected);
    });

    it('replaces for tuiSlot', async () => {
        const result = await migrateTemplate(`
            <tui-item tuiSlot="right" />
            <tui-item tuiSlot="left" />
        `);

        const expected = `
            <tui-item tuiSlot="end" />
            <tui-item tuiSlot="start" />
        `;

        expect(result).toEqual(expected);
    });

    it('replaces for [tuiSlot]', async () => {
        const result = await migrateTemplate(`
            <tui-item [tuiSlot]="'right'" />
            <tui-item [tuiSlot]="'left'" />
        `);

        const expected = `
            <tui-item [tuiSlot]="'end'" />
            <tui-item [tuiSlot]="'start'" />
        `;

        expect(result).toEqual(expected);
    });

    it('replaces for tuiComment', async () => {
        const result = await migrateTemplate(`
            <div tuiComment="right">Right comment</div>
            <div tuiComment="left">Left comment</div>
        `);

        const expected = `
            <div tuiComment="end">Right comment</div>
            <div tuiComment="start">Left comment</div>
        `;

        expect(result).toEqual(expected);
    });

    it('replaces for [tuiComment]', async () => {
        const result = await migrateTemplate(`
            <div [tuiComment]="'right'">Right comment</div>
            <div [tuiComment]="'left'">Left comment</div>
        `);

        const expected = `
            <div [tuiComment]="'end'">Right comment</div>
            <div [tuiComment]="'start'">Left comment</div>
        `;

        expect(result).toEqual(expected);
    });

    it('replaces for direction on tui-avatar-stack', async () => {
        const result = await migrateTemplate(`
            <tui-avatar-stack direction="right" />
            <tui-avatar-stack direction="left" />

            <tui-item direction="right" />
            <tui-item direction="left" />
        `);

        const expected = `
            <tui-avatar-stack direction="end" />
            <tui-avatar-stack direction="start" />

            <tui-item direction="right" />
            <tui-item direction="left" />
        `;

        expect(result).toEqual(expected);
    });

    it('replaces for [direction] on tui-avatar-stack', async () => {
        const result = await migrateTemplate(`
            <tui-avatar-stack [direction]="'right'" />
            <tui-avatar-stack [direction]="'left'" />

            <tui-item [direction]="'right'" />
            <tui-item [direction]="'left'" />
        `);

        const expected = `
            <tui-avatar-stack [direction]="'end'" />
            <tui-avatar-stack [direction]="'start'" />

            <tui-item [direction]="'right'" />
            <tui-item [direction]="'left'" />
        `;

        expect(result).toEqual(expected);
    });

    it('replaces for direction on tui-drawer', async () => {
        const result = await migrateTemplate(`
            <tui-drawer direction="right">Right drawer</tui-drawer>
            <tui-drawer direction="left">Left drawer</tui-drawer>

            <tui-item direction="right" />
            <tui-item direction="left" />
        `);

        const expected = `
            <tui-drawer direction="end">Right drawer</tui-drawer>
            <tui-drawer direction="start">Left drawer</tui-drawer>

            <tui-item direction="right" />
            <tui-item direction="left" />
        `;

        expect(result).toEqual(expected);
    });

    it('replaces for [direction] on tui-drawer', async () => {
        const result = await migrateTemplate(`
            <tui-drawer [direction]="'right'">Right drawer</tui-drawer>
            <tui-drawer [direction]="'left'">Left drawer</tui-drawer>

            <tui-item [direction]="'right'" />
            <tui-item [direction]="'left'" />
        `);

        const expected = `
            <tui-drawer [direction]="'end'">Right drawer</tui-drawer>
            <tui-drawer [direction]="'start'">Left drawer</tui-drawer>

            <tui-item [direction]="'right'" />
            <tui-item [direction]="'left'" />
        `;

        expect(result).toEqual(expected);
    });

    it('replaces for vertical on tui-tabs', async () => {
        const result = await migrateTemplate(`
            <tui-tabs vertical="right" />
            <tui-tabs vertical="left" />

            <nav tuiTabs vertical="right" />
            <nav tuiTabs vertical="left" />

            <tui-item vertical="right" />
            <tui-item vertical="left" />
        `);

        const expected = `
            <tui-tabs vertical="end" />
            <tui-tabs vertical="start" />

            <tui-tabs  vertical="end" />
            <tui-tabs  vertical="start" />

            <tui-item vertical="right" />
            <tui-item vertical="left" />
        `;

        expect(result).toEqual(expected);
    });

    it('replaces for [vertical] on tui-tabs', async () => {
        const result = await migrateTemplate(`
            <tui-tabs [vertical]="'right'" />
            <tui-tabs [vertical]="'left'" />

            <nav tuiTabs [vertical]="'right'" />
            <nav tuiTabs [vertical]="'left'" />

            <tui-item [vertical]="'right'" />
            <tui-item [vertical]="'left'" />
        `);

        const expected = `
            <tui-tabs [vertical]="'end'" />
            <tui-tabs [vertical]="'start'" />

            <tui-tabs  [vertical]="'end'" />
            <tui-tabs  [vertical]="'start'" />

            <tui-item [vertical]="'right'" />
            <tui-item [vertical]="'left'" />
        `;

        expect(result).toEqual(expected);
    });

    it('replaces for align on input with tuiInputColor', async () => {
        const result = await migrateTemplate(`
            <input tuiInputColor align="right" />
            <input tuiInputColor align="left" />
            <input align="right" />
            <input align="left" />
        `);

        const expected = `
            <input tuiInputColor align="end" />
            <input tuiInputColor align="start" />
            <input align="right" />
            <input align="left" />
        `;

        expect(result).toEqual(expected);
    });

    it('replaces for [align] on input with tuiInputColor', async () => {
        const result = await migrateTemplate(`
            <input tuiInputColor [align]="'right'" />
            <input tuiInputColor [align]="'left'" />

            <input [align]="'right'" />
            <input [align]="'left'" />
        `);

        const expected = `
            <input tuiInputColor [align]="'end'" />
            <input tuiInputColor [align]="'start'" />

            <input [align]="'right'" />
            <input [align]="'left'" />
        `;

        expect(result).toEqual(expected);
    });

    it('replaces for currencyAlign on tuiAmount pipe', async () => {
        const result = await migrateTemplate(`
            <li>{{ -12345.1 | tuiAmount: 'USD' : 'left' }}</li>
            <li>{{ 100 | tuiAmount: '£' : 'right' | somePipe: 'left' }}</li>
        `);

        const expected = `
            <li>{{ -12345.1 | tuiAmount: 'USD' : 'start' }}</li>
            <li>{{ 100 | tuiAmount: '£' : 'end' | somePipe: 'left' }}</li>
        `;

        expect(result).toEqual(expected);
    });

    it('replaces for currencyAlign on tuiAmountOptionsProvider', async () => {
        const result = await migrateComponent(`
            import {tuiAmountOptionsProvider} from '@taiga-ui/addon-commerce';

            tuiAmountOptionsProvider({currencyAlign: 'left'});
            tuiAmountOptionsProvider({
                sign: 'always',
                currency: 'USD',
                currencyAlign: 'right',
            });
        `);

        const expected = `
            import {tuiAmountOptionsProvider} from '@taiga-ui/addon-commerce';

            tuiAmountOptionsProvider({currencyAlign: 'start'});
            tuiAmountOptionsProvider({
                sign: 'always',
                currency: 'USD',
                currencyAlign: 'end',
            });
        `;

        expect(result).toEqual(expected);
    });

    it('replaces for align on tuiDropdownOptionsProvider', async () => {
        const result = await migrateComponent(`
            import {tuiDropdownOptionsProvider} from '@taiga-ui/core';

            tuiDropdownOptionsProvider({align: 'left'});
            tuiDropdownOptionsProvider({
                limitWidth: 'fixed',
                align: 'right',
            });
        `);

        const expected = `
            import {tuiDropdownOptionsProvider} from '@taiga-ui/core';

            tuiDropdownOptionsProvider({align: 'start'});
            tuiDropdownOptionsProvider({
                limitWidth: 'fixed',
                align: 'end',
            });
        `;

        expect(result).toEqual(expected);
    });

    it('replaces for direction on tuiHintOptionsProvider', async () => {
        const result = await migrateComponent(`
            import {tuiHintOptionsProvider} from '@taiga-ui/core';

            tuiHintOptionsProvider({direction: 'bottom-left'});
            tuiHintOptionsProvider({direction: 'bottom'});
            tuiHintOptionsProvider({direction: 'bottom-right'});
            tuiHintOptionsProvider({direction: 'top-left'});
            tuiHintOptionsProvider({direction: 'top'});
            tuiHintOptionsProvider({direction: 'top-right'});
            tuiHintOptionsProvider({direction: 'left-top'});
            tuiHintOptionsProvider({direction: 'left'});
            tuiHintOptionsProvider({direction: 'left-bottom'});
            tuiHintOptionsProvider({direction: 'right-top'});
            tuiHintOptionsProvider({direction: 'right'});
            tuiHintOptionsProvider({direction: 'right-bottom'});
        `);

        const expected = `
            import {tuiHintOptionsProvider} from '@taiga-ui/core';

            tuiHintOptionsProvider({direction: 'bottom-start'});
            tuiHintOptionsProvider({direction: 'bottom'});
            tuiHintOptionsProvider({direction: 'bottom-end'});
            tuiHintOptionsProvider({direction: 'top-start'});
            tuiHintOptionsProvider({direction: 'top'});
            tuiHintOptionsProvider({direction: 'top-end'});
            tuiHintOptionsProvider({direction: 'start-top'});
            tuiHintOptionsProvider({direction: 'start'});
            tuiHintOptionsProvider({direction: 'start-bottom'});
            tuiHintOptionsProvider({direction: 'end-top'});
            tuiHintOptionsProvider({direction: 'end'});
            tuiHintOptionsProvider({direction: 'end-bottom'});
        `;

        expect(result).toEqual(expected);
    });

    afterEach(() => resetActiveProject());
});

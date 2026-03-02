import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update tag to chip', () => {
    it('migrates TuiTagModule and tuiTagOptionsProvider and updates template selectors', async () => {
        const {component, template} = await runMigration({
            collection,
            component: `
                import {Component} from '@angular/core';
                import {TuiTagModule, tuiTagOptionsProvider} from '@taiga-ui/legacy';

                @Component({
                    standalone: true,
                    imports: [TuiTagModule],
                    providers: [
                        tuiTagOptionsProvider({
                            size: 'l',
                        }),
                    ],
                    templateUrl: './test.html',
                })
                export class Example {}
            `,
            template: `
<tui-tag
    size="l"
    status="primary"
    removable
    value="Tag"
/>
<button
    size="l"
    [status]="status"
    tuiTag
    type="button"
    value="Button"
    class="tui-space_left-2"
    [autoColor]="true"
    [editable]="true"
    [hoverable]="true"
></button>
            `,
        });

        expect(component).toEqual(
            [
                'import { TuiChip, tuiChipOptionsProvider } from "@taiga-ui/kit";',
                '',
                "                import {Component} from '@angular/core';",
                '',
                '                @Component({',
                '                    standalone: true,',
                '                    imports: [TuiChip],',
                '                    providers: [',
                '                        tuiChipOptionsProvider({',
                "                            size: 'l',",
                '                        }),',
                '                    ],',
                "                    templateUrl: './test.html',",
                '                })',
                '                export class Example {}',
                '            ',
            ].join('\n'),
        );

        expect(template).toEqual(
            [
                '',
                '<!-- TODO: (Taiga UI migration) tui-tag/tuiTag migrated to tuiChip. Check visuals and content manually -->',
                '<!-- TODO: (Taiga UI migration) Interactive chip behavior changed. See https://taiga-ui.dev/components/chip#interactive -->',
                '<span tuiChip size="l" appearance="primary">Tag</span>',
                '<!-- TODO: (Taiga UI migration) tui-tag/tuiTag migrated to tuiChip. Check visuals and content manually -->',
                '<!-- TODO: (Taiga UI migration) Interactive chip behavior changed. See https://taiga-ui.dev/components/chip#interactive -->',
                '<button',
                '    size="l"',
                '    [appearance]="status"',
                '    tuiChip',
                '    type="button"',
                '   ',
                '    class="tui-space_left-2"',
                '   ',
                '   ',
                '   ',
                '>Button</button>',
                '            ',
            ].join('\n'),
        );
    });

    afterEach(() => resetActiveProject());
});

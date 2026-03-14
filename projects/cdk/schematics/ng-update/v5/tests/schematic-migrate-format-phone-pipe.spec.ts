import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update migrate TuiFormatPhonePipe to MaskitoPipe', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'renames tuiFormatPhone pipe to maskito in template',
        migrate({template: '{{ phone | tuiFormatPhone }}'}),
    );

    it(
        'renames tuiFormatPhone pipe with country code argument',
        migrate({template: "{{ phone | tuiFormatPhone:'+1' }}"}),
    );

    it(
        'renames tuiFormatPhone pipe with country code and mask arguments',
        migrate({template: "{{ phone | tuiFormatPhone:'+1':'(###) ###-####' }}"}),
    );

    it(
        'renames tuiFormatPhone inside element binding',
        migrate({
            template:
                '<span [title]="phone | tuiFormatPhone">{{ phone | tuiFormatPhone }}</span>',
        }),
    );

    it(
        'does not touch other pipes',
        migrate({template: '{{ phone | tuiFormatNumber }}'}),
    );

    it(
        'replaces TuiFormatPhonePipe import with MaskitoPipe',
        migrate({
            component: `
                import {TuiFormatPhonePipe} from '@taiga-ui/legacy';

                @Component({
                    standalone: true,
                    imports: [TuiFormatPhonePipe],
                    template: '{{ phone | tuiFormatPhone }}'
                })
                export class TestComponent {}
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});

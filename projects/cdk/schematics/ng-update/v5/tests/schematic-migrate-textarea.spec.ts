import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({collection: join(__dirname, '../../../migration.json')});

describe('ng-update legacy textarea', () => {
    it(
        'migrates TuiTextareaModule import and simple tui-textarea template',
        migrate({
            component: `
                import {TuiTextareaModule} from '@taiga-ui/legacy';

                @Component({
                  standalone: true,
                  imports: [TuiTextareaModule],
                  templateUrl: './test.html',
                })
                export class TestComponent {}
            `,
            template: /* HTML */ `
                <tui-textarea formControlName="testValue">Type a text</tui-textarea>
            `,
        }),
    );

    it(
        'migrates tui-textarea attributes: wrapper attrs, [maxLength], labelOutside=true adds TODO',
        migrate({
            template: /* HTML */ `
                <tui-textarea
                    formControlName="testValue"
                    tuiTextfieldSize="s"
                    [maxLength]="150"
                    [tuiTextfieldLabelOutside]="true"
                >
                    Label
                </tui-textarea>
            `,
        }),
    );

    it(
        'migrates tui-textarea with labelOutside=false: adds label tuiLabel inside tui-textfield',
        migrate({
            template: /* HTML */ `
                <tui-textarea
                    formControlName="testValue"
                    [tuiTextfieldLabelOutside]="false"
                >
                    Label
                </tui-textarea>
            `,
        }),
    );

    it(
        'removes [expandable] and maps [rows] to [max]',
        migrate({
            template: /* HTML */ `
                <tui-textarea
                    formControlName="testValue"
                    [expandable]="true"
                    [rows]="10"
                >
                    Type here
                </tui-textarea>
            `,
        }),
    );

    it(
        'removes expandable="false" and maps static rows to max',
        migrate({
            template:
                /* HTML */ '<tui-textarea formControlName="value" expandable="false" rows="5">Text</tui-textarea>',
        }),
    );

    it(
        'migrates rows without expandable and adds TODO about min',
        migrate({
            template:
                /* HTML */ '<tui-textarea formControlName="value" rows="5">Comment</tui-textarea>',
        }),
    );

    it(
        'handles tui-textarea without text content',
        migrate({
            template: /* HTML */ `
                <tui-textarea formControlName="value"></tui-textarea>
            `,
        }),
    );

    it(
        'reuses inner <textarea tuiTextfieldLegacy> instead of generating a new one',
        migrate({
            template: /* HTML */ `
                <tui-textarea [(ngModel)]="value">
                    Bio
                    <textarea
                        maxlength="97"
                        placeholder="Write a few words"
                        tuiTextfieldLegacy
                    ></textarea>
                </tui-textarea>
            `,
        }),
    );

    it(
        'keeps tuiTextfieldCleaner and tuiHintContent on tui-textfield wrapper',
        migrate({
            template: /* HTML */ `
                <tui-textarea
                    formControlName="value"
                    tuiHintContent="Hint text"
                    tuiHintDirection="bottom-right"
                    [tuiTextfieldCleaner]="true"
                >
                    Label
                </tui-textarea>
            `,
        }),
    );

    it(
        'migrates multiple tui-textarea elements in one template',
        migrate({
            template: /* HTML */ `
                <tui-textarea formControlName="a">First</tui-textarea>
                <tui-textarea formControlName="b">Second</tui-textarea>
            `,
        }),
    );

    it(
        'places unknown attributes on tui-textfield and adds TODO',
        migrate({
            template:
                /* HTML */ '<tui-textarea formControlName="value" someCustomDirective [anotherDirective]="config">Label</tui-textarea>',
        }),
    );

    afterEach(() => resetActiveProject());
});

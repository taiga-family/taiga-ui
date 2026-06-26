import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({collection: join(__dirname, '../../../migration.json')});

describe('ng-update @ViewChild setter with TuiTextfieldDropdownDirective', () => {
    it(
        'converts @ViewChild setter to viewChild() + effect when body calls this.X.set()',
        migrate({
            component: /* TypeScript */ `
                import {forwardRef, TemplateRef, ViewChild} from '@angular/core';
                import {TuiTextfieldDropdownDirective} from '@taiga-ui/core';
                import {tuiDropdown} from '@taiga-ui/core';
                import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

                export class MyComponent {
                    protected readonly dropdown = tuiDropdown(null);

                    @ViewChild(forwardRef(() => TuiTextfieldDropdownDirective), {
                        read: TemplateRef,
                    })
                    protected set template(template: PolymorpheusContent) {
                        this.dropdown.set(template);
                    }
                }
            `,
        }),
    );

    it(
        'converts @ViewChild setter without forwardRef',
        migrate({
            component: /* TypeScript */ `
                import {TemplateRef, ViewChild} from '@angular/core';
                import {TuiTextfieldDropdownDirective} from '@taiga-ui/core';
                import {tuiDropdown} from '@taiga-ui/core';

                export class MyComponent {
                    protected readonly content = tuiDropdown(null);

                    @ViewChild(TuiTextfieldDropdownDirective, {read: TemplateRef})
                    protected set dropdown(value: any) {
                        this.content.set(value);
                    }
                }
            `,
        }),
    );

    it(
        'does not touch @ViewChild setter with a different directive',
        migrate({
            component: /* TypeScript */ `
                import {TemplateRef, ViewChild} from '@angular/core';
                import {SomeOtherDirective} from '@taiga-ui/core';

                export class MyComponent {
                    @ViewChild(SomeOtherDirective, {read: TemplateRef})
                    protected set template(value: any) {
                        this.something.set(value);
                    }
                }
            `,
        }),
    );

    it(
        'does not touch @ViewChild setter with multi-statement body',
        migrate({
            component: /* TypeScript */ `
                import {forwardRef, TemplateRef, ViewChild} from '@angular/core';
                import {TuiTextfieldDropdownDirective} from '@taiga-ui/core';

                export class MyComponent {
                    @ViewChild(forwardRef(() => TuiTextfieldDropdownDirective), {
                        read: TemplateRef,
                    })
                    protected set template(value: any) {
                        this.dropdown.set(value);
                        this.other = value;
                    }
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});

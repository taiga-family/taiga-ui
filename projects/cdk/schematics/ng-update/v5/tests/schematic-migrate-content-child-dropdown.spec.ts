import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({collection: join(__dirname, '../../../migration.json')});

describe('ng-update', () => {
    it(
        'migrate contentChild with TuiTextfieldDropdownDirective to TuiDropdownContent',
        migrate({
            component: `
                import {contentChild, TemplateRef} from '@angular/core';
                import {TuiTextfieldDropdownDirective} from '@taiga-ui/core';

                export class MyComponent {
                    protected readonly dropdownContent = contentChild(
                        TuiTextfieldDropdownDirective,
                        {
                            read: TemplateRef,
                        },
                    );
                }
            `,
        }),
    );

    it(
        'migrate contentChild with TuiTextfieldDropdownDirective without options to TuiDropdownContent',
        migrate({
            component: `
                import {contentChild} from '@angular/core';
                import {TuiTextfieldDropdownDirective} from '@taiga-ui/core';

                export class MyComponent {
                    protected readonly dropdownContent = contentChild(
                        TuiTextfieldDropdownDirective,
                    );
                }
            `,
        }),
    );

    it(
        'migrate contentChildren with TuiTextfieldDropdownDirective to TuiDropdownContent',
        migrate({
            component: `
                import {contentChildren, TemplateRef} from '@angular/core';
                import {TuiTextfieldDropdownDirective} from '@taiga-ui/core';

                export class MyComponent {
                    protected readonly dropdownContents = contentChildren(
                        TuiTextfieldDropdownDirective,
                        {
                            read: TemplateRef,
                        },
                    );
                }
            `,
        }),
    );

    it(
        'migrate @ContentChild decorator with TuiTextfieldDropdownDirective to TuiDropdownContent',
        migrate({
            component: `
                import {ContentChild, TemplateRef} from '@angular/core';
                import {TuiTextfieldDropdownDirective} from '@taiga-ui/core';

                export class MyComponent {
                    @ContentChild(TuiTextfieldDropdownDirective, {
                        read: TemplateRef,
                    })
                    protected readonly dropdownContent: TemplateRef<any>;
                }
            `,
        }),
    );

    it(
        'migrate @ContentChild decorator with TuiTextfieldDropdownDirective without options',
        migrate({
            component: `
                import {ContentChild} from '@angular/core';
                import {TuiTextfieldDropdownDirective} from '@taiga-ui/core';

                export class MyComponent {
                    @ContentChild(TuiTextfieldDropdownDirective)
                    protected readonly dropdownContent: any;
                }
            `,
        }),
    );

    it(
        'migrate @ContentChildren decorator with TuiTextfieldDropdownDirective to TuiDropdownContent',
        migrate({
            component: `
                import {ContentChildren, QueryList, TemplateRef} from '@angular/core';
                import {TuiTextfieldDropdownDirective} from '@taiga-ui/core';

                export class MyComponent {
                    @ContentChildren(TuiTextfieldDropdownDirective, {
                        read: TemplateRef,
                    })
                    protected readonly dropdownContents: QueryList<TemplateRef<any>>;
                }
            `,
        }),
    );

    it(
        'migrate @ContentChildren decorator with TuiTextfieldDropdownDirective without options',
        migrate({
            component: `
                import {ContentChildren, QueryList} from '@angular/core';
                import {TuiTextfieldDropdownDirective} from '@taiga-ui/core';

                export class MyComponent {
                    @ContentChildren(TuiTextfieldDropdownDirective)
                    protected readonly dropdownContents: QueryList<any>;
                }
            `,
        }),
    );

    it(
        'migrate multiple contentChild, contentChildren and @ContentChild, @ContentChildren usages in same file',
        migrate({
            component: `
                import {ContentChild, ContentChildren, contentChild, contentChildren, TemplateRef, QueryList} from '@angular/core';
                import {TuiTextfieldDropdownDirective} from '@taiga-ui/core';

                export class MyComponent {
                    @ContentChild(TuiTextfieldDropdownDirective, {
                        read: TemplateRef,
                    })
                    protected readonly decoratorDropdown: TemplateRef<any>;

                    @ContentChildren(TuiTextfieldDropdownDirective, {
                        read: TemplateRef,
                    })
                    protected readonly decoratorDropdowns: QueryList<TemplateRef<any>>;

                    protected readonly functionDropdown = contentChild(
                        TuiTextfieldDropdownDirective,
                        {
                            read: TemplateRef,
                        },
                    );

                    protected readonly functionDropdowns = contentChildren(
                        TuiTextfieldDropdownDirective,
                    );
                }
            `,
        }),
    );

    it(
        'does not modify contentChild with other directives',
        migrate({
            component: `
                import {contentChild, TemplateRef} from '@angular/core';
                import {TuiSomeOtherDirective} from '@taiga-ui/core';

                export class MyComponent {
                    protected readonly otherContent = contentChild(
                        TuiSomeOtherDirective,
                        {
                            read: TemplateRef,
                        },
                    );
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});

import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TuiPopover migration', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    afterEach(() => resetActiveProject());

    describe('TuiPopover → TuiPortalContext', () => {
        it(
            'renames TuiPopover type to TuiPortalContext',
            migrate({
                component: `
                    import {Component} from '@angular/core';
                    import {type TuiPopover} from '@taiga-ui/cdk';
                    import {injectContext} from '@taiga-ui/polymorpheus';

                    interface PromptOptions {
                        heading: string;
                    }

                    @Component({template: ''})
                    export class PromptComponent {
                        protected readonly context = injectContext<TuiPopover<PromptOptions, boolean>>();
                    }
                `,
            }),
        );

        it(
            'renames TuiPopover used as type annotation',
            migrate({
                component: `
                    import {type TuiPopover} from '@taiga-ui/cdk';

                    export function openDialog(context: TuiPopover<{label: string}, string>): void {}
                `,
            }),
        );

        it(
            'does not rename TuiPopover from unrelated packages',
            migrate({
                component: `
                    import {type TuiPopover} from '@some-other/library';

                    export class SomeClass {
                        protected context!: TuiPopover<{}, void>;
                    }
                `,
            }),
        );
    });

    describe('TuiPopoverContext → warning', () => {
        it(
            'adds TODO comment for TuiPopoverContext (generic params changed)',
            migrate({
                component: `
                    import {Component} from '@angular/core';
                    import {type TuiPopoverContext} from '@taiga-ui/cdk';
                    import {injectContext} from '@taiga-ui/polymorpheus';

                    @Component({template: ''})
                    export class DialogComponent {
                        protected readonly context = injectContext<TuiPopoverContext<boolean>>();
                    }
                `,
            }),
        );
    });

    describe('TuiPopoverService → TuiPortal + warning', () => {
        it(
            'renames TuiPopoverService to TuiPortal and adds TODO comment',
            migrate({
                component: `
                    import {inject, Injectable} from '@angular/core';
                    import {TuiPopoverService} from '@taiga-ui/cdk';
                    import {TUI_DIALOGS} from '@taiga-ui/core';

                    import {PromptComponent} from './prompt.component';
                    import {type PromptOptions} from './prompt-options';

                    @Injectable({
                        providedIn: 'root',
                        useFactory: () =>
                            new PromptService(TUI_DIALOGS, PromptComponent, {heading: 'Are you sure?'}),
                    })
                    export class PromptService extends TuiPopoverService<PromptOptions, boolean> {}
                `,
            }),
        );

        it(
            'renames TuiPopoverService in inject() call',
            migrate({
                component: `
                    import {inject} from '@angular/core';
                    import {TuiPopoverService} from '@taiga-ui/cdk';

                    export const service = inject(TuiPopoverService);
                `,
            }),
        );
    });

    describe('TuiPopoverDirective → TuiPortalDirective + warning', () => {
        it(
            'renames TuiPopoverDirective to TuiPortalDirective and adds TODO comment',
            migrate({
                component: `
                    import {Directive} from '@angular/core';
                    import {TuiPopoverDirective, TuiPopoverService} from '@taiga-ui/cdk';

                    import {CustomDialogService} from './custom-dialog.service';

                    @Directive({
                        selector: 'ng-template[tuiCustomDialog]',
                        inputs: ['open: tuiCustomDialog', 'options: tuiCustomDialogOptions'],
                        outputs: ['openChange: tuiCustomDialogChange'],
                        providers: [
                            {provide: TuiPopoverService, useExisting: CustomDialogService},
                        ],
                    })
                    export class CustomDialogDirective<T> extends TuiPopoverDirective<T> {}
                `,
            }),
        );
    });

    describe('tuiAsPopover → tuiAsPortal', () => {
        it(
            'renames tuiAsPopover to tuiAsPortal',
            migrate({
                component: `
                    import {Directive} from '@angular/core';
                    import {tuiAsPopover} from '@taiga-ui/cdk';

                    import {CustomDialogService} from './custom-dialog.service';

                    @Directive({
                        selector: 'ng-template[tuiCustomDialog]',
                        providers: [tuiAsPopover(CustomDialogService)],
                    })
                    export class CustomDialog {}
                `,
            }),
        );

        it(
            'does not rename tuiAsPopover from unrelated packages',
            migrate({
                component: `
                    import {tuiAsPopover} from '@some-other/library';

                    export const providers = [tuiAsPopover(SomeService)];
                `,
            }),
        );
    });

    describe('combined usage', () => {
        it(
            'migrates all popover identifiers in one file',
            migrate({
                component: `
                    import {inject, Injectable} from '@angular/core';
                    import {
                        type TuiPopover,
                        TuiPopoverDirective,
                        TuiPopoverService,
                        tuiAsPopover,
                    } from '@taiga-ui/cdk';
                    import {injectContext} from '@taiga-ui/polymorpheus';

                    interface MyOptions {
                        label: string;
                    }

                    @Injectable({providedIn: 'root'})
                    export class MyService extends TuiPopoverService<MyOptions, string> {}

                    export function getContext(): TuiPopover<MyOptions, string> {
                        return injectContext<TuiPopover<MyOptions, string>>();
                    }

                    export const providers = [tuiAsPopover(MyService)];
                `,
            }),
        );
    });
});

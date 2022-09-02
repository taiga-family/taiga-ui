import {Component, Inject, Injector} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import type {TuiBaseDialogContext} from '@taiga-ui/cdk';
import type {TuiAlertOptions} from '@taiga-ui/core';
import {TuiAlertService, TuiNotification} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {switchMap} from 'rxjs/operators';

import {AlertExampleWithDataComponent} from './examples/4/alert-example-with-data/alert-example-with-data.component';

@Component({
    selector: `example-tui-alerts`,
    templateUrl: `./alerts.template.html`,
    styleUrls: [`./alerts.style.less`],
    changeDetection,
})
export class ExampleTuiAlertsComponent {
    readonly method = import(`./method.md?raw`);

    readonly exampleImportModuleComponent = import(
        `./examples/import/import-module-component.md?raw`
    );

    readonly exampleServiceUsage = import(`./examples/import/service-usage.md?raw`);

    readonly exampleServiceUsageComponent = import(
        `./examples/import/service-usage-component.md?raw`
    );

    readonly exampleCustomAlert = import(`./examples/import/custom-alert.md?raw`);

    readonly exampleLazyModule = import(`./examples/import/lazy-module.md?raw`);
    readonly exampleModule = import(`./examples/import/module.md?raw`);
    readonly exampleOptions = import(`./examples/import/define-options.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        HTML: import(`./examples/2/index.html?raw`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`./examples/3/index.ts?raw`),
        HTML: import(`./examples/3/index.html?raw`),
        'alert-example/alert-example.component.ts': import(
            `./examples/3/alert-example/alert-example.component.ts?raw`
        ),
        'alert-example/alert-example.template.html': import(
            `./examples/3/alert-example/alert-example.template.html?raw`
        ),
        'alert-example/alert-example.module.ts': import(
            `./examples/3/alert-example/alert-example.module.ts?raw`
        ),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`./examples/4/index.ts?raw`),
        HTML: import(`./examples/4/index.html?raw`),
        'alert-example-with-data/alert-example-with-data.component.ts': import(
            `./examples/4/alert-example-with-data/alert-example-with-data.component.ts?raw`
        ),
        'alert-example-with-data/alert-example-with-data.template.html': import(
            `./examples/4/alert-example-with-data/alert-example-with-data.template.html?raw`
        ),
        'alert-example-with-data/alert-example-with-data.style.less': import(
            `./examples/4/alert-example-with-data/alert-example-with-data.style.less?raw`
        ),
        'alert-example-with-data/alert-example-with-data.module.ts': import(
            `./examples/4/alert-example-with-data/alert-example-with-data.module.ts?raw`
        ),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import(`./examples/5/index.ts?raw`),
        HTML: import(`./examples/5/index.html?raw`),
        'custom-label/custom-label.module.ts': import(
            `./examples/5/custom-label/custom-label.module.ts?raw`
        ),
        'custom-label/custom-label.component.ts': import(
            `./examples/5/custom-label/custom-label.component.ts?raw`
        ),
        'custom-label/custom-label.style.less': import(
            `./examples/5/custom-label/custom-label.style.less?raw`
        ),
        'custom-label/custom-label.template.html': import(
            `./examples/5/custom-label/custom-label.template.html?raw`
        ),
        'alert-example-with-custom-label/alert-example-with-custom-label.module.ts':
            import(
                `./examples/5/alert-example-with-custom-label/alert-example-with-custom-label.module.ts?raw`
            ),
        'alert-example-with-custom-label/alert-example-with-custom-label.component.ts':
            import(
                `./examples/5/alert-example-with-custom-label/alert-example-with-custom-label.component.ts?raw`
            ),
        'alert-example-with-custom-label/alert-example-with-custom-label.template.html':
            import(
                `./examples/5/alert-example-with-custom-label/alert-example-with-custom-label.template.html?raw`
            ),
    };

    data = 100;

    label = `Heading`;

    readonly statusVariants: readonly TuiNotification[] = [
        TuiNotification.Info,
        TuiNotification.Success,
        TuiNotification.Error,
        TuiNotification.Warning,
    ];

    status = this.statusVariants[0];

    readonly contentVariants = [`String`, `Component`];

    content = this.contentVariants[0];

    readonly autoCloseVariants = [true, false, 5000, 1000, 500];

    autoClose = this.autoCloseVariants[0];

    hasCloseButton = true;

    hasIcon = true;

    readonly component: PolymorpheusComponent<
        AlertExampleWithDataComponent,
        TuiBaseDialogContext<number> & TuiAlertOptions<number>
    >;

    constructor(
        @Inject(TuiAlertService)
        private readonly alertService: TuiAlertService,
        @Inject(Injector) injector: Injector,
    ) {
        this.component = new PolymorpheusComponent(
            AlertExampleWithDataComponent,
            injector,
        );
    }

    get selectedContent(): PolymorpheusContent<
        TuiBaseDialogContext<number> & TuiAlertOptions<number>
    > {
        return this.content === `String` ? this.content : this.component;
    }

    showNotification(): void {
        this.alertService
            .open(this.selectedContent, {
                label: this.label,
                data: this.data,
                status: this.status,
                autoClose: this.autoClose,
                hasCloseButton: this.hasCloseButton,
                hasIcon: this.hasIcon,
            })
            .pipe(
                switchMap(response =>
                    this.alertService.open(response, {
                        label: `Notification responded with:`,
                    }),
                ),
            )
            .subscribe();
    }
}

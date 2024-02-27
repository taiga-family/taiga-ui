import {Component, inject, INJECTOR} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiPopoverContext} from '@taiga-ui/cdk';
import {
    TUI_NOTIFICATION_OPTIONS,
    TuiAlertOptions,
    TuiAlertService,
    TuiNotification,
} from '@taiga-ui/core';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {switchMap} from 'rxjs';

import {AlertExampleWithDataComponent} from './examples/4/alert-example-with-data/alert-example-with-data.component';

@Component({
    selector: 'example-tui-alert',
    templateUrl: './alert.template.html',
    styleUrls: ['./alert.style.less'],
    changeDetection,
})
export class ExampleTuiAlertComponent {
    private readonly alerts = inject(TuiAlertService);

    private readonly defaultIcon = inject(TUI_NOTIFICATION_OPTIONS).icon;

    protected readonly method = import('./method.md?raw');

    protected readonly exampleServiceUsage = import(
        './examples/import/service-usage.md?raw'
    );

    protected readonly exampleServiceUsageComponent = import(
        './examples/import/service-usage-component.md?raw'
    );

    protected readonly exampleCustomAlert = import(
        './examples/import/custom-alert.md?raw'
    );

    protected readonly exampleLazyModule = import('./examples/import/lazy-module.md?raw');
    protected readonly exampleOptions = import('./examples/import/define-options.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
        'alert-example/alert-example.component.ts': import(
            './examples/3/alert-example/alert-example.component.ts?raw'
        ),
        'alert-example/alert-example.template.html': import(
            './examples/3/alert-example/alert-example.template.html?raw'
        ),
        'alert-example/alert-example.module.ts': import(
            './examples/3/alert-example/alert-example.module.ts?raw'
        ),
    };

    protected readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        'alert-example-with-data/alert-example-with-data.component.ts': import(
            './examples/4/alert-example-with-data/alert-example-with-data.component.ts?raw'
        ),
        'alert-example-with-data/alert-example-with-data.template.html': import(
            './examples/4/alert-example-with-data/alert-example-with-data.template.html?raw'
        ),
        'alert-example-with-data/alert-example-with-data.style.less': import(
            './examples/4/alert-example-with-data/alert-example-with-data.style.less?raw'
        ),
        'alert-example-with-data/alert-example-with-data.module.ts': import(
            './examples/4/alert-example-with-data/alert-example-with-data.module.ts?raw'
        ),
    };

    protected readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
        'custom-label/custom-label.module.ts': import(
            './examples/5/custom-label/custom-label.module.ts?raw'
        ),
        'custom-label/custom-label.component.ts': import(
            './examples/5/custom-label/custom-label.component.ts?raw'
        ),
        'custom-label/custom-label.style.less': import(
            './examples/5/custom-label/custom-label.style.less?raw'
        ),
        'custom-label/custom-label.template.html': import(
            './examples/5/custom-label/custom-label.template.html?raw'
        ),
        'alert-example-with-custom-label/alert-example-with-custom-label.module.ts':
            import(
                './examples/5/alert-example-with-custom-label/alert-example-with-custom-label.module.ts?raw'
            ),
        'alert-example-with-custom-label/alert-example-with-custom-label.component.ts':
            import(
                './examples/5/alert-example-with-custom-label/alert-example-with-custom-label.component.ts?raw'
            ),
        'alert-example-with-custom-label/alert-example-with-custom-label.template.html':
            import(
                './examples/5/alert-example-with-custom-label/alert-example-with-custom-label.template.html?raw'
            ),
    };

    protected readonly example6: TuiDocExample = {
        TypeScript: import('./examples/6/index.ts?raw'),
        HTML: import('./examples/6/index.html?raw'),
    };

    protected data = 100;

    protected label = 'Heading';

    protected readonly statusVariants: TuiNotification[] = [
        'info',
        'success',
        'error',
        'warning',
    ];

    protected status = this.statusVariants[0];

    protected readonly iconVariants = ['Default', 'tuiIconHeart'];

    protected icon = this.iconVariants[0];

    protected readonly contentVariants = ['String', 'Component'];

    protected content = this.contentVariants[0];

    protected readonly autoCloseVariants = [0, 3000, 5000, 1000, 500];

    protected autoClose = this.autoCloseVariants[1];

    protected closeable = true;

    protected readonly component = new PolymorpheusComponent(
        AlertExampleWithDataComponent,
        inject(INJECTOR),
    );

    protected get selectedContent(): PolymorpheusContent<
        TuiAlertOptions<number> & TuiPopoverContext<number>
    > {
        return this.content === 'String' ? this.content : this.component;
    }

    protected showNotification(): void {
        this.alerts
            .open(this.selectedContent, {
                label: this.label,
                data: this.data,
                status: this.status,
                autoClose: this.autoClose,
                closeable: this.closeable,
                icon: this.icon === this.iconVariants[0] ? this.defaultIcon : this.icon,
            })
            .pipe(
                switchMap(response =>
                    this.alerts.open(response, {
                        label: 'Notification responded with:',
                    }),
                ),
            )
            .subscribe();
    }
}

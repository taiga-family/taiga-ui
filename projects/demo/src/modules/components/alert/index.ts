import {Component, inject, INJECTOR} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {type TuiPopoverContext} from '@taiga-ui/cdk';
import {
    TUI_NOTIFICATION_OPTIONS,
    type TuiAlertOptions,
    TuiAlertService,
    TuiButton,
} from '@taiga-ui/core';
import {PolymorpheusComponent, type PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {switchMap} from 'rxjs';

import {AlertExampleWithData} from './examples/4';

@Component({
    imports: [TuiButton, TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    private readonly alerts = inject(TuiAlertService);

    private readonly defaultIcon = inject(TUI_NOTIFICATION_OPTIONS).icon;

    protected readonly routes = DemoRoute;
    protected readonly examples = [
        'Text',
        'Template',
        'Component',
        'Component with data',
        'Component with custom label',
        'Directive',
        'Concurrency limit',
    ];

    protected readonly method = import('./examples/import/method.md?raw');

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

    protected data = 100;

    protected label = 'Heading';

    protected readonly appearanceVariants = [
        'info',
        'positive',
        'negative',
        'warning',
        'neutral',
    ];

    protected appearance = this.appearanceVariants[0]!;

    protected readonly iconVariants = ['Default', '@tui.heart'];

    protected icon = this.iconVariants[0]!;

    protected readonly contentVariants = ['String', 'Component'];

    protected content = this.contentVariants[0]!;

    protected readonly autoCloseVariants = [0, 3000, 5000, 1000, 500];

    protected autoClose = this.autoCloseVariants[1]!;

    protected closable = true;

    protected readonly component = new PolymorpheusComponent(
        AlertExampleWithData,
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
                appearance: this.appearance,
                autoClose: this.autoClose,
                closable: this.closable,
                icon: this.icon === this.iconVariants[0] ? this.defaultIcon : this.icon,
            })
            .pipe(
                switchMap((response) =>
                    this.alerts.open(response, {
                        label: 'Notification responded with:',
                    }),
                ),
            )
            .subscribe();
    }
}

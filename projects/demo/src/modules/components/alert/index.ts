import {Component, inject, INJECTOR} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiTextCodeDirective} from '@taiga-ui/addon-doc';
import type {TuiPopoverContext} from '@taiga-ui/cdk';
import type {TuiAlertOptions, TuiNotification} from '@taiga-ui/core';
import {
    TUI_NOTIFICATION_OPTIONS,
    TuiAlertService,
    TuiButtonDirective,
    TuiLinkDirective,
} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {switchMap} from 'rxjs';

import {AlertExampleWithDataComponent} from './examples/4';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiLinkDirective,
        TuiButtonDirective,
        TuiTextCodeDirective,
        RouterLink,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    private readonly alerts = inject(TuiAlertService);

    private readonly defaultIcon = inject(TUI_NOTIFICATION_OPTIONS).icon;

    protected readonly docRoutes = DemoRoute;
    protected readonly examples = [
        'Text',
        'Template',
        'Component',
        'Component with data',
        'Component with custom label',
        'Directive',
        'Concurrency limit',
    ];

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

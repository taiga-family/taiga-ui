import type {TemplateRef} from '@angular/core';
import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import type {TuiDialogContext, TuiDialogSize} from '@taiga-ui/core';
import {
    TuiAlertService,
    TuiButtonDirective,
    TuiDialogService,
    TuiLinkDirective,
    TuiNotificationComponent,
} from '@taiga-ui/core';
import {TuiAccordion} from '@taiga-ui/kit';
import {switchMap} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiLinkDirective,
        RouterLink,
        TuiNotificationComponent,
        TuiButtonDirective,
        TuiAccordion,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class PageComponent {
    private readonly alerts = inject(TuiAlertService);
    private readonly dialogs = inject(TuiDialogService);

    protected readonly docRoutes = DemoRoute;
    protected readonly method = import('./method.md?raw');

    protected readonly dialogsCloseToken = import(
        './examples/import/dialogs-close-token.md?raw'
    );

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        'dialog-example/dialog-example.component.ts': import(
            './examples/2/dialog-example/dialog-example.component.ts?raw'
        ),
        'dialog-example/dialog-example.style.less': import(
            './examples/2/dialog-example/dialog-example.style.less?raw'
        ),
        'dialog-example/dialog-example.template.html': import(
            './examples/2/dialog-example/dialog-example.template.html?raw'
        ),
    };

    protected readonly example7: TuiDocExample = {
        TypeScript: import('./examples/7/index.ts?raw'),
        HTML: import('./examples/7/index.html?raw'),
        'search-example/search-dialog-example.component.ts': import(
            './examples/7/search-example/search-dialog-example.component.ts?raw'
        ),
        'search-example/search-dialog-example.template.html': import(
            './examples/7/search-example/search-dialog-example.template.html?raw'
        ),
        'search-example/search-dialog-example.component.less': import(
            './examples/7/search-example/search-dialog-example.component.less?raw'
        ),
    };

    protected readonly example9: TuiDocExample = {
        TypeScript: import('./examples/9/index.ts?raw'),
        HTML: import('./examples/9/index.html?raw'),
        LESS: import('./examples/9/index.less?raw'),
        'helpers/mock-cards.ts': import('./examples/9/helpers/mock-cards.ts?raw'),
        'helpers/models.ts': import('./examples/9/helpers/models.ts?raw'),
        'helpers/pay.service.ts': import('./examples/9/helpers/pay.service.ts?raw'),
        'helpers/validator.ts': import('./examples/9/helpers/validator.ts?raw'),
        'pay-modal/pay-modal.component.ts': import(
            './examples/9/pay-modal/pay-modal.component.ts?raw'
        ),
        'pay-modal/pay-modal.component.less': import(
            './examples/9/pay-modal/pay-modal.component.less?raw'
        ),
        'pay-modal/pay-modal.component.html': import(
            './examples/9/pay-modal/pay-modal.component.html?raw'
        ),
    };

    protected readonly exampleServiceUsage = import(
        './examples/import/service-usage.md?raw'
    );

    protected readonly exampleCustomDialog = import(
        './examples/import/custom-dialog.md?raw'
    );

    protected readonly exampleLazyModule = import('./examples/import/lazy-module.md?raw');

    protected data = 100;

    protected closeable = true;

    protected dismissible = true;

    protected required = false;

    protected readonly sizeVariants: readonly TuiDialogSize[] = [
        's',
        'm',
        'l',
        'fullscreen',
        'page',
        'auto',
    ];

    protected size: TuiDialogSize = this.sizeVariants[1];

    protected label = '';

    protected appearance = '';

    protected showDialog(content: TemplateRef<TuiDialogContext<number, number>>): void {
        const {data, label, required, closeable, dismissible, size, appearance} = this;

        this.dialogs
            .open(content, {
                data,
                label,
                required,
                closeable,
                dismissible,
                size,
                appearance,
            })
            .pipe(switchMap(response => this.alerts.open(String(response))))
            .subscribe();
    }
}

import {Component, inject, type TemplateRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiAlertService, TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiAccordion} from '@taiga-ui/kit';
import {
    type TuiDialogContext,
    TuiDialogService,
    type TuiDialogSize,
} from '@taiga-ui/legacy';
import {switchMap} from 'rxjs';

@Component({
    imports: [TuiAccordion, TuiButton, TuiDemo, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    private readonly alerts = inject(TuiAlertService);
    private readonly dialogs = inject(TuiDialogService);

    protected readonly routes = DemoRoute;
    protected readonly method = import('./method.md');

    protected readonly dialogsCloseToken = import(
        './examples/import/dialogs-close-token.md'
    );

    protected readonly example2 = {
        'dialog-example/dialog-example.component.ts': import(
            './examples/2/dialog-example/dialog-example.component.ts?raw',
            {with: {loader: 'text'}}
        ),
        'dialog-example/dialog-example.style.less': import(
            './examples/2/dialog-example/dialog-example.style.less'
        ),
        'dialog-example/dialog-example.template.html': import(
            './examples/2/dialog-example/dialog-example.template.html'
        ),
    };

    protected readonly example7 = {
        'search-example/search-dialog-example.component.ts': import(
            './examples/7/search-example/search-dialog-example.component.ts?raw',
            {with: {loader: 'text'}}
        ),
        'search-example/search-dialog-example.template.html': import(
            './examples/7/search-example/search-dialog-example.template.html'
        ),
        'search-example/search-dialog-example.component.less': import(
            './examples/7/search-example/search-dialog-example.component.less'
        ),
    };

    protected readonly example9 = {
        'helpers/mock-cards.ts': import('./examples/9/helpers/mock-cards.ts?raw', {
            with: {loader: 'text'},
        }),
        'helpers/models.ts': import('./examples/9/helpers/models.ts?raw', {
            with: {loader: 'text'},
        }),
        'helpers/pay.service.ts': import('./examples/9/helpers/pay.service.ts?raw', {
            with: {loader: 'text'},
        }),
        'helpers/validator.ts': import('./examples/9/helpers/validator.ts?raw', {
            with: {loader: 'text'},
        }),
        'pay-modal/pay-modal.component.ts': import(
            './examples/9/pay-modal/pay-modal.component.ts?raw',
            {with: {loader: 'text'}}
        ),
        'pay-modal/pay-modal.component.less': import(
            './examples/9/pay-modal/pay-modal.component.less'
        ),
        'pay-modal/pay-modal.component.html': import(
            './examples/9/pay-modal/pay-modal.component.html'
        ),
    };

    protected readonly exampleServiceUsage = import('./examples/import/service-usage.md');

    protected readonly exampleCustomDialog = import('./examples/import/custom-dialog.md');

    protected readonly exampleLazyDialog = import('./examples/import/lazy-dialog.md');

    protected data = 100;

    protected closable = true;

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

    protected size: TuiDialogSize = this.sizeVariants[1]!;

    protected label = '';

    protected appearance = '';

    protected showDialog(content: TemplateRef<TuiDialogContext<number, number>>): void {
        const {data, label, required, closable, dismissible, size, appearance} = this;

        this.dialogs
            .open(content, {
                data,
                label,
                required,
                closable,
                dismissible,
                size,
                appearance,
            })
            .pipe(switchMap((response) => this.alerts.open(String(response))))
            .subscribe();
    }
}

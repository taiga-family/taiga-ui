import"./chunk-HU6DUUP4.js";var o=`import {Component, inject, type TemplateRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {
    TUI_DIALOG_OPTIONS,
    TuiButton,
    type TuiDialogContext,
    TuiDialogService,
    TuiInput,
    TuiNotificationService,
} from '@taiga-ui/core';
import {TuiForm} from '@taiga-ui/layout';
import {switchMap} from 'rxjs';

@Component({
    imports: [TuiAutoFocus, TuiButton, TuiDemo, TuiForm, TuiInput],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page extends Array {
    private readonly alerts = inject(TuiNotificationService);
    private readonly dialogs = inject(TuiDialogService);
    private readonly options = inject(TUI_DIALOG_OPTIONS);

    protected readonly routes = DemoRoute;
    protected readonly examples = [
        'String',
        'Directive',
        'Component',
        'Confirmation',
        'Closing',
        'Fullscreen',
        'Customization',
    ];

    protected readonly [2] = {
        'component.ts': import('./examples/3/component.ts?raw', {with: {loader: 'text'}}),
    };

    protected readonly [4] = {
        'service.ts': import('./examples/5/service.ts?raw', {with: {loader: 'text'}}),
    };

    protected data = 'Data';
    protected label = 'Label';
    protected closable = this.options.closable;
    protected required = this.options.required;
    protected dismissible = this.options.dismissible;

    protected readonly appearances = ['taiga', 'fullscreen'] as const;
    protected appearance = this.options.appearance;

    protected readonly sizes = ['s', 'm', 'l'] as const;
    protected size = this.options.size;

    protected showDialog(content: TemplateRef<TuiDialogContext<number, number>>): void {
        const {data, label, required, closable, dismissible, size, appearance} = this;

        this.dialogs
            .open<string>(content, {
                data,
                label,
                required,
                closable,
                dismissible,
                size,
                appearance,
            })
            .pipe(switchMap((response) => this.alerts.open(response)))
            .subscribe();
    }
}
`;export{o as default};

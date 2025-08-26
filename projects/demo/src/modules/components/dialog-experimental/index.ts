import {Component, inject, type TemplateRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {
    TuiAlertService,
    TuiButton,
    type TuiDialogContext,
    TuiTextfield,
} from '@taiga-ui/core';
import {TUI_DIALOG_OPTIONS, TuiDialogService} from '@taiga-ui/experimental';
import {TuiForm} from '@taiga-ui/layout';
import {switchMap} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiAutoFocus, TuiButton, TuiDemo, TuiForm, TuiTextfield],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page extends Array {
    private readonly alerts = inject(TuiAlertService);
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
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
        'component.ts': import('./examples/3/component.ts?raw'),
    };

    protected readonly [4] = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
        'service.ts': import('./examples/5/service.ts?raw'),
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

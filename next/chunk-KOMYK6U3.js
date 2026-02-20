import"./chunk-HU6DUUP4.js";var o=`import {Component, inject, type TemplateRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {
    TUI_SHEET_DIALOG_DEFAULT_OPTIONS,
    TuiSheetDialogService,
} from '@taiga-ui/addon-mobile';
import {TuiButton, type TuiDialogContext, TuiNotificationService} from '@taiga-ui/core';
import {TuiFloatingContainer} from '@taiga-ui/layout';
import {switchMap} from 'rxjs';

@Component({
    imports: [TuiButton, TuiDemo, TuiFloatingContainer],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    private readonly router = inject(Router);
    private readonly route = inject(ActivatedRoute);
    private readonly sheetDialogs = inject(TuiSheetDialogService);
    private readonly alerts = inject(TuiNotificationService);

    protected readonly exampleComponent = import('./examples/import/component.md');
    protected readonly examples = [
        'String',
        'Basic',
        'Advanced',
        'Sticky elements',
        'Responsive',
        'AppBar',
        'Fullscreen',
    ];

    protected closable = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.closable;
    protected appearance = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.appearance;
    protected bar = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.bar;
    protected initial = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.initial;
    protected stops = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.stops;
    protected label = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.label;
    protected offset = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.offset;
    protected required = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.required;

    protected open = false;

    protected readonly stopsVariants = [this.stops, ['100px'], ['10rem', '20rem']];
    protected readonly appearanceVariants = [this.appearance, 'fullscreen'];

    protected showDialog(content: TemplateRef<TuiDialogContext<number, number>>): void {
        const {appearance, required, closable, stops, initial, bar, offset, label} = this;

        this.sheetDialogs
            .open(content, {
                appearance,
                label,
                stops,
                initial,
                bar,
                offset,
                required,
                closable,
            })
            .pipe(switchMap((response) => this.alerts.open(String(response))))
            .subscribe();
    }

    protected navigate(): void {
        void this.router.navigate(['./'], {relativeTo: this.route});
    }
}
`;export{o as default};

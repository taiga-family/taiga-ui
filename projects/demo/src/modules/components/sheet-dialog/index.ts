import {Component, inject, type TemplateRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {
    TUI_SHEET_DIALOG_DEFAULT_OPTIONS,
    type TuiSheetDialogOptions,
    TuiSheetDialogService,
} from '@taiga-ui/addon-mobile';
import {TuiLet} from '@taiga-ui/cdk';
import {
    TuiAlertService,
    TuiButton,
    type TuiDialogContext,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiFloatingContainer} from '@taiga-ui/kit';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {switchMap} from 'rxjs';

@Component({
    imports: [TuiAvatar, TuiButton, TuiDemo, TuiFloatingContainer, TuiLet, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    private readonly router = inject(Router);
    private readonly route = inject(ActivatedRoute);
    private readonly sheetDialogs = inject(TuiSheetDialogService);
    private readonly alerts = inject(TuiAlertService);

    protected readonly exampleComponent = import('./examples/import/component.md?raw');
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
    protected fullscreen = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.fullscreen;
    protected bar = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.bar;
    protected initial = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.initial;
    protected stops = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.stops;
    protected label = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.label;
    protected offset = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.offset;
    protected required = TUI_SHEET_DIALOG_DEFAULT_OPTIONS.required;

    protected open = false;

    protected readonly stopsVariants = [this.stops, ['100px'], ['10rem', '20rem']];
    protected readonly labelVariants = [this.label, 'String label', 'Template'];

    protected showDialog(
        content: TemplateRef<TuiDialogContext<number, number>>,
        label?: PolymorpheusContent<TuiSheetDialogOptions>,
    ): void {
        const {required, closable, fullscreen, stops, initial, bar, offset} = this;

        this.sheetDialogs
            .open(content, {
                label,
                fullscreen,
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

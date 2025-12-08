import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';
import {tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_BUTTON_OPTIONS} from '@taiga-ui/core/components/button';
import {TuiLoader} from '@taiga-ui/core/components/loader';
import {type TuiSizeS} from '@taiga-ui/core/types';
import {tuiSizeBigger} from '@taiga-ui/core/utils/miscellaneous';

@Component({
    selector: '[tuiButton][loading],[tuiIconButton][loading]',
    imports: [TuiLoader],
    template: `
        <ng-content />
        <tui-loader
            aria-live="polite"
            role="status"
            class="t-loader"
            [inheritColor]="true"
            [loading]="!!loading()"
            [size]="loaderSize()"
            [textContent]="label()"
        />
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.aria-disabled]': 'loading()',
        '[class._loading]': 'loading()',
        '(click.capture)': 'onClick($event)',
    },
})
export class TuiButtonLoading {
    private readonly options = inject(TUI_BUTTON_OPTIONS);

    public readonly size = input(this.options.size);

    public readonly loading = input<boolean | string | null>(false);

    protected readonly loaderSize = computed<TuiSizeS>(() =>
        tuiSizeBigger(this.size()) ? 'm' : 's',
    );

    protected readonly label = computed(() =>
        tuiIsString(this.loading()) ? this.loading() : '',
    );

    protected onClick(event: MouseEvent): void {
        if (this.loading()) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
}

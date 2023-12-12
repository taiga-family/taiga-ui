import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DoCheck,
    ElementRef,
    inject,
    Input,
    OnInit,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    tuiControlValue,
    TuiDestroyService,
    tuiIsString,
    TuiNativeValidatorDirective,
    tuiWatch,
} from '@taiga-ui/cdk';
import {TuiSizeS} from '@taiga-ui/core';
import {
    TUI_APPEARANCE,
    TuiAppearanceDirective,
} from '@taiga-ui/experimental/directives/appearance';
import {TUI_ICON_RESOLVER} from '@taiga-ui/experimental/tokens';
import {distinctUntilChanged, takeUntil} from 'rxjs/operators';

import {TUI_CHECKBOX_OPTIONS} from './checkbox.options';

@Component({
    selector: 'input[type="checkbox"][tuiCheckbox]',
    template: '',
    styleUrls: ['./checkbox.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
    hostDirectives: [TUI_APPEARANCE, TuiNativeValidatorDirective],
    host: {
        '[disabled]': '!control || control.disabled',
        '[attr.data-size]': 'size',
        '[class._readonly]': '!control',
        '[style.--t-mask]': 'icon',
    },
})
export class TuiCheckboxComponent implements OnInit, DoCheck {
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly appearance = inject(TuiAppearanceDirective);
    private readonly options = inject(TUI_CHECKBOX_OPTIONS);
    private readonly resolver = inject(TUI_ICON_RESOLVER);
    private readonly destroy$ = inject(TuiDestroyService, {self: true});
    private readonly el: HTMLInputElement = inject(ElementRef).nativeElement;

    @Input()
    size: TuiSizeS = this.options.size;

    readonly control: NgControl | null = inject(NgControl, {optional: true});

    get icon(): string {
        const option = this.el.indeterminate
            ? this.options.icons.indeterminate
            : this.options.icons.checked;
        const icon = tuiIsString(option) ? option : option(this.size);

        return `url(${this.resolver(icon)})`;
    }

    ngOnInit(): void {
        if (!this.control?.valueChanges) {
            return;
        }

        tuiControlValue(this.control)
            .pipe(distinctUntilChanged(), tuiWatch(this.cdr), takeUntil(this.destroy$))
            .subscribe(value => {
                this.el.indeterminate = value === null;
            });
    }

    ngDoCheck(): void {
        this.appearance.tuiAppearance = this.options.appearance(this.el);
    }
}

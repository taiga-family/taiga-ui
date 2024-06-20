import type {DoCheck, OnInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
    Input,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {NgControl, NgModel} from '@angular/forms';
import {
    tuiControlValue,
    tuiInjectElement,
    tuiIsString,
    TuiNativeValidatorDirective,
} from '@taiga-ui/cdk';
import type {TuiSizeS} from '@taiga-ui/core';
import {TuiAppearance, tuiInjectIconResolver} from '@taiga-ui/core';

import {TUI_CHECKBOX_OPTIONS} from './checkbox.options';

@Component({
    standalone: true,
    selector: 'input[type="checkbox"][tuiCheckbox]',
    template: '',
    styleUrls: ['./checkbox.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [
        {
            directive: TuiAppearance,
            inputs: [
                'tuiAppearance: appearance',
                'tuiAppearanceState',
                'tuiAppearanceFocus',
            ],
        },
        TuiNativeValidatorDirective,
    ],
    host: {
        '[disabled]': '!control || control.disabled',
        '[attr.data-size]': 'size',
        '[class._readonly]': '!control',
        '[style.--t-checked]': 'getIcon("checked")',
        '[style.--t-indeterminate]': 'getIcon("indeterminate")',
    },
})
export class TuiCheckbox implements OnInit, DoCheck {
    private readonly appearance = inject(TuiAppearance);
    private readonly options = inject(TUI_CHECKBOX_OPTIONS);
    private readonly resolver = tuiInjectIconResolver();
    private readonly destroyRef = inject(DestroyRef);
    private readonly el = tuiInjectElement<HTMLInputElement>();

    @Input()
    public size: TuiSizeS = this.options.size;

    public readonly control: NgControl | null = inject(NgControl, {
        optional: true,
        self: true,
    });

    public ngOnInit(): void {
        if (!this.control?.valueChanges) {
            return;
        }

        tuiControlValue(this.control)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(value => {
                // https://github.com/angular/angular/issues/14988
                const fix = this.control instanceof NgModel ? this.control.model : value;

                this.el.indeterminate = fix === null;
            });
    }

    public ngDoCheck(): void {
        this.appearance.tuiAppearance = this.options.appearance(this.el);
    }

    protected getIcon(state: 'checked' | 'indeterminate'): string {
        const option = this.options.icons[state];
        const icon = tuiIsString(option) ? option : option(this.size);

        return `url(${this.resolver(icon)})`;
    }
}

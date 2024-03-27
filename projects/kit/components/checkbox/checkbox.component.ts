import type {DoCheck, OnInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    Input,
} from '@angular/core';
import {NgControl, NgModel} from '@angular/forms';
import {
    tuiControlValue,
    TuiDestroyService,
    tuiIsString,
    TuiNativeValidatorDirective,
} from '@taiga-ui/cdk';
import type {TuiSizeS} from '@taiga-ui/core';
import {TUI_ICON_RESOLVER, TuiAppearanceDirective} from '@taiga-ui/core';
import {takeUntil} from 'rxjs';

import {TUI_CHECKBOX_OPTIONS} from './checkbox.options';

@Component({
    standalone: true,
    selector: 'input[type="checkbox"][tuiCheckbox]',
    template: '',
    styleUrls: ['./checkbox.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
    hostDirectives: [
        {
            directive: TuiAppearanceDirective,
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
export class TuiCheckboxComponent implements OnInit, DoCheck {
    private readonly appearance = inject(TuiAppearanceDirective);
    private readonly options = inject(TUI_CHECKBOX_OPTIONS);
    private readonly resolver = inject(TUI_ICON_RESOLVER);
    private readonly destroy$ = inject(TuiDestroyService, {self: true});
    private readonly el: HTMLInputElement = inject(ElementRef).nativeElement;

    @Input()
    public size: TuiSizeS = this.options.size;

    protected readonly control: NgControl | null = inject(NgControl, {
        optional: true,
        self: true,
    });

    public ngOnInit(): void {
        if (!this.control?.valueChanges) {
            return;
        }

        tuiControlValue(this.control)
            .pipe(takeUntil(this.destroy$))
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

import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    type DoCheck,
    inject,
    input,
    type OnInit,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {NgControl, NgModel} from '@angular/forms';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {tuiControlValue} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiAppearance, tuiAppearance} from '@taiga-ui/core/directives/appearance';
import {distinctUntilChanged} from 'rxjs';

import {TUI_RADIO_OPTIONS, type TuiRadioOptions} from './radio.options';

@Component({
    selector: 'input[type="radio"][tuiRadio]',
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import '@taiga-ui/styles/components/radio.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [
        {
            directive: TuiAppearance,
            inputs: ['tuiAppearanceState', 'tuiAppearanceFocus', 'tuiAppearanceMode'],
        },
        TuiNativeValidator,
    ],
    host: {
        '[disabled]': '!control || control.disabled',
        '[attr.data-size]': 'size()',
        '[class._readonly]': '!control',
    },
})
export class TuiRadioComponent<T extends TuiRadioOptions> implements DoCheck, OnInit {
    private readonly destroyRef = inject(DestroyRef);

    protected readonly el = tuiInjectElement<HTMLInputElement>();
    protected readonly options = inject<T>(TUI_RADIO_OPTIONS);
    protected readonly appearance = tuiAppearance(this.options.appearance(this.el));
    protected readonly control = inject(NgControl, {self: true, optional: true});

    public readonly size = input(this.options.size);

    public ngOnInit(): void {
        tuiControlValue(this.control)
            .pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
            .subscribe((value) => {
                // https://github.com/angular/angular/issues/14988
                const fix =
                    this.control instanceof NgModel && value == null
                        ? this.control.model
                        : value;

                this.el.indeterminate = fix == null && this.el.matches('[tuiCheckbox]');
                this.ngDoCheck();
            });
    }

    public ngDoCheck(): void {
        this.appearance.set(this.options.appearance(this.el));
    }
}

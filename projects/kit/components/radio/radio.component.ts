import type {DoCheck, OnInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {NgControl} from '@angular/forms';
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiAppearance} from '@taiga-ui/core/directives/appearance';
import type {TuiSizeS} from '@taiga-ui/core/types';

import {TUI_RADIO_OPTIONS} from './radio.options';

@Component({
    standalone: true,
    selector: 'input[type="radio"][tuiRadio]',
    template: '',
    styles: ['@import "@taiga-ui/kit/styles/components/radio.less";'],
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
        '[attr.data-size]': 'size',
        '[class._readonly]': '!control',
    },
})
export class TuiRadioComponent implements DoCheck, OnInit {
    private readonly appearance = inject(TuiAppearance);
    private readonly destroyRef = inject(DestroyRef);
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly options = inject(TUI_RADIO_OPTIONS);
    private readonly el = tuiInjectElement<HTMLInputElement>();

    protected readonly control = inject(NgControl, {self: true, optional: true});

    @Input()
    public size: TuiSizeS = this.options.size;

    public ngOnInit(): void {
        this.control?.valueChanges
            ?.pipe(tuiWatch(this.cdr), takeUntilDestroyed(this.destroyRef))
            .subscribe();
    }

    public ngDoCheck(): void {
        this.appearance.tuiAppearance = tuiIsString(this.options.appearance)
            ? this.options.appearance
            : this.options.appearance(this.el);
    }
}

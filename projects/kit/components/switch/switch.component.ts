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
import {tuiInjectIconResolver} from '@taiga-ui/core/tokens';
import type {TuiSizeS} from '@taiga-ui/core/types';

import {TUI_SWITCH_OPTIONS} from './switch.options';

@Component({
    standalone: true,
    selector: 'input[type="checkbox"][tuiSwitch]',
    template: '',
    styles: ['@import "@taiga-ui/kit/styles/components/switch.less";'],
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
        role: 'switch',
        '[disabled]': '!control || control.disabled',
        '[attr.data-size]': 'size',
        '[class._readonly]': '!control',
        '[style.--t-checked-icon]': 'icon',
    },
})
export class TuiSwitch implements DoCheck, OnInit {
    private readonly appearance = inject(TuiAppearance);
    private readonly resolver = tuiInjectIconResolver();
    private readonly destroyRef = inject(DestroyRef);
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly options = inject(TUI_SWITCH_OPTIONS);
    private readonly el = tuiInjectElement<HTMLInputElement>();

    protected readonly control = inject(NgControl, {self: true, optional: true});

    @Input()
    public size: TuiSizeS = this.options.size;

    @Input()
    public showIcons = this.options.showIcons;

    public ngOnInit(): void {
        this.control?.valueChanges
            ?.pipe(tuiWatch(this.cdr), takeUntilDestroyed(this.destroyRef))
            .subscribe();
    }

    public ngDoCheck(): void {
        this.appearance.tuiAppearance = this.options.appearance(this.el);
    }

    protected get icon(): string | null {
        const {options, resolver, size} = this;
        const icon = tuiIsString(options.icon) ? options.icon : options.icon(size);

        return this.showIcons && icon ? `url(${resolver(icon)})` : null;
    }
}

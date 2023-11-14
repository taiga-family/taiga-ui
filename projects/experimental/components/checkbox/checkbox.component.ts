import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    Input,
    OnInit,
    Optional,
    Self,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    TUI_PLATFORM,
    tuiControlValue,
    TuiDestroyService,
    tuiIsString,
    TuiPlatform,
    TuiStringHandler,
    tuiWatch,
} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TUI_MODE, TuiBrightness} from '@taiga-ui/core';
import {TUI_ICON_RESOLVER} from '@taiga-ui/experimental/tokens';
import {Observable} from 'rxjs';
import {distinctUntilChanged, takeUntil} from 'rxjs/operators';

import {TUI_CHECKBOX_OPTIONS, TuiCheckboxOptions} from './checkbox.options';

@Component({
    selector: 'input[type="checkbox"][tuiCheckbox]',
    template: '',
    styleUrls: ['./checkbox.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [MODE_PROVIDER, TuiDestroyService],
    host: {
        '($.data-mode.attr)': 'mode$',
        '[disabled]': '!control || control.disabled',
        '[attr.data-size]': 'size',
        '[attr.data-platform]': 'platform',
        '[class._invalid]': 'control?.invalid && control?.touched',
        '[class._readonly]': '!control',
    },
})
export class TuiCheckboxComponent implements OnInit {
    @Input()
    size = this.options.size;

    constructor(
        @Inject(ChangeDetectorRef) private readonly cdr: ChangeDetectorRef,
        @Inject(TUI_ICON_RESOLVER) private readonly resolver: TuiStringHandler<string>,
        @Inject(TUI_CHECKBOX_OPTIONS) private readonly options: TuiCheckboxOptions,
        @Self() @Inject(TuiDestroyService) private readonly destroy$: Observable<unknown>,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLInputElement>,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_PLATFORM) readonly platform: TuiPlatform,
        @Optional() @Inject(NgControl) readonly control: NgControl | null,
    ) {}

    @HostBinding('style.--t-mask')
    get icon(): string {
        const option = this.el.nativeElement.indeterminate
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
                this.el.nativeElement.indeterminate = value === null;
            });
    }
}

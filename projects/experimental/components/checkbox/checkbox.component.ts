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
    TUI_BASE_HREF,
    TUI_PLATFORM,
    tuiControlValue,
    TuiDestroyService,
    tuiIsString,
    TuiPlatform,
    tuiWatch,
} from '@taiga-ui/cdk';
import {
    MODE_PROVIDER,
    TUI_MODE,
    TUI_SVG_OPTIONS,
    TuiBrightness,
    TuiSvgOptions,
} from '@taiga-ui/core';
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
        @Inject(TUI_BASE_HREF) private readonly baseHref: string,
        @Inject(TUI_SVG_OPTIONS) private readonly svg: TuiSvgOptions,
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
        const mask = icon.includes('/') ? icon : this.svg.path(icon, this.baseHref);

        return `url(${mask})`;
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

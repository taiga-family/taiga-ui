import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    inject,
    Input,
} from '@angular/core';
import {
    AbstractTuiInteractive,
    tuiAsFocusableItemAccessor,
    TuiDestroyService,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
} from '@taiga-ui/cdk';
import {TuiModeDirective} from '@taiga-ui/core/directives';
import {TuiSizeS} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {distinctUntilChanged, EMPTY, map, Observable, startWith} from 'rxjs';

import {TUI_BUTTON_OPTIONS, TuiButtonOptions} from './button.options';

@Component({
    selector: 'button[tuiButton], button[tuiIconButton], a[tuiButton], a[tuiIconButton]',
    templateUrl: './button.template.html',
    styleUrls: ['./button.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsFocusableItemAccessor(TuiButtonComponent), TuiDestroyService],
})
export class TuiButtonComponent
    extends AbstractTuiInteractive
    implements TuiFocusableElementAccessor, TuiButtonOptions
{
    private readonly mode = inject(TuiModeDirective, {optional: true});
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly options = inject(TUI_BUTTON_OPTIONS);
    private readonly mode$: Observable<unknown> = this.mode?.change$ || EMPTY;

    @Input()
    public appearance: TuiButtonOptions['appearance'] = null;

    @Input()
    public disabled = false;

    @Input()
    public icon: PolymorpheusContent;

    @Input()
    public iconRight: PolymorpheusContent;

    @Input()
    @HostBinding('attr.data-shape')
    public shape = this.options.shape;

    @Input()
    @HostBinding('class._loading')
    public showLoader = false;

    @Input()
    @HostBinding('attr.data-size')
    public size = this.options.size;

    protected readonly appearance$ = this.mode$.pipe(
        startWith(null),
        map(() => this.computedAppearance),
        distinctUntilChanged(),
    );

    public get nativeFocusableElement(): HTMLElement | null {
        return this.nativeDisabled ? null : this.el;
    }

    public get focused(): boolean {
        return !this.showLoader && tuiIsNativeFocused(this.el);
    }

    @HostBinding('attr.data-appearance')
    protected get computedAppearance(): string {
        return this.appearance ?? (this.options.appearance || '');
    }

    @HostBinding('attr.disabled')
    protected get nativeDisabled(): '' | null {
        return this.computedDisabled || this.showLoader ? '' : null;
    }

    @HostBinding('tabIndex')
    protected get tabIndex(): number {
        return this.focusable ? 0 : -1;
    }

    protected get loaderSize(): TuiSizeS {
        return this.size === 'l' || this.size === 'xl' ? 'm' : 's';
    }

    @HostListener('focusin', ['true'])
    @HostListener('focusout', ['false'])
    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }
}

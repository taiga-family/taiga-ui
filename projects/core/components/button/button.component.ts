import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
    Optional,
} from '@angular/core';
import {
    AbstractTuiInteractive,
    tuiAsFocusableItemAccessor,
    tuiDefaultProp,
    TuiDestroyService,
    TuiFocusableElementAccessor,
    TuiFocusVisibleService,
    tuiIsNativeFocused,
} from '@taiga-ui/cdk';
import {TuiModeDirective} from '@taiga-ui/core/directives';
import {TuiSizeS} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {EMPTY, Observable} from 'rxjs';
import {distinctUntilChanged, map, startWith} from 'rxjs/operators';

import {TUI_BUTTON_OPTIONS, TuiButtonOptions} from './button-options';

@Component({
    selector: `button[tuiButton], button[tuiIconButton], a[tuiButton], a[tuiIconButton]`,
    templateUrl: `./button.template.html`,
    styleUrls: [`./button.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiButtonComponent),
        TuiDestroyService,
        TuiFocusVisibleService,
    ],
})
export class TuiButtonComponent
    extends AbstractTuiInteractive
    implements TuiFocusableElementAccessor, TuiButtonOptions
{
    private readonly mode$: Observable<unknown> = this.mode?.change$ || EMPTY;

    @Input()
    @tuiDefaultProp()
    appearance: TuiButtonOptions['appearance'] = null;

    @Input()
    @tuiDefaultProp()
    disabled = false;

    @Input()
    @tuiDefaultProp()
    icon: PolymorpheusContent = ``;

    @Input()
    @tuiDefaultProp()
    iconRight: PolymorpheusContent = ``;

    @Input()
    @HostBinding(`attr.data-shape`)
    @tuiDefaultProp()
    shape = this.options.shape;

    @Input()
    @HostBinding(`class._loading`)
    @tuiDefaultProp()
    showLoader = false;

    @Input()
    @HostBinding(`attr.data-size`)
    @tuiDefaultProp()
    size = this.options.size;

    readonly appearance$ = this.mode$.pipe(
        startWith(null),
        map(() => this.computedAppearance),
        distinctUntilChanged(),
    );

    constructor(
        @Optional()
        @Inject(TuiModeDirective)
        private readonly mode: TuiModeDirective | null,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TuiFocusVisibleService) focusVisible$: TuiFocusVisibleService,
        @Inject(TUI_BUTTON_OPTIONS) private readonly options: TuiButtonOptions,
    ) {
        super();
        focusVisible$.subscribe(focusVisible => {
            this.updateFocusVisible(focusVisible);
        });
    }

    get nativeFocusableElement(): HTMLElement | null {
        return this.nativeDisabled ? null : this.elementRef.nativeElement;
    }

    get focused(): boolean {
        return !this.showLoader && tuiIsNativeFocused(this.elementRef.nativeElement);
    }

    get loaderSize(): TuiSizeS {
        return this.size === `l` || this.size === `xl` ? `m` : `s`;
    }

    @HostBinding(`attr.data-appearance`)
    get computedAppearance(): string {
        return this.appearance ?? (this.options.appearance || ``);
    }

    @HostBinding(`attr.disabled`)
    get nativeDisabled(): '' | null {
        return this.computedDisabled || this.showLoader ? `` : null;
    }

    @HostBinding(`tabIndex`)
    get tabIndex(): number {
        return this.focusable ? 0 : -1;
    }

    @HostListener(`focusin`, [`true`])
    @HostListener(`focusout`, [`false`])
    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }
}

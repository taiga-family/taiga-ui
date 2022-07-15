import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    forwardRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
} from '@angular/core';
import {
    AbstractTuiInteractive,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiDefaultProp,
    TuiDestroyService,
    TuiFocusableElementAccessor,
    TuiFocusVisibleService,
    tuiIsNativeFocused,
} from '@taiga-ui/cdk';
import {TuiSizeS} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_BUTTON_OPTIONS, TuiButtonOptions} from './button-options';

@Component({
    selector: `button[tuiButton], button[tuiIconButton], a[tuiButton], a[tuiIconButton]`,
    templateUrl: `./button.template.html`,
    styleUrls: [`./button.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiButtonComponent),
        },
        TuiDestroyService,
        TuiFocusVisibleService,
    ],
})
export class TuiButtonComponent
    extends AbstractTuiInteractive
    implements TuiFocusableElementAccessor, TuiButtonOptions
{
    @Input()
    @HostBinding(`attr.data-appearance`)
    @tuiDefaultProp()
    appearance = this.options.appearance || ``;

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

    constructor(
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

import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
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
    isNativeFocused,
    pressedObservable,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiDefaultProp,
    TuiDestroyService,
    TuiFocusableElementAccessor,
    TuiFocusVisibleService,
    TuiHoveredService,
    watch,
} from '@taiga-ui/cdk';
import {TuiAppearance, TuiButtonShape} from '@taiga-ui/core/enums';
import {TuiSizeS, TuiSizeXL, TuiSizeXS} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'button[tuiButton], button[tuiIconButton], a[tuiButton], a[tuiIconButton]',
    templateUrl: './button.template.html',
    styleUrls: ['./button.style.less'],
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
    implements TuiFocusableElementAccessor {
    @Input()
    @HostBinding('attr.data-appearance')
    @tuiDefaultProp()
    appearance: TuiAppearance | string = TuiAppearance.Primary;

    @Input()
    @tuiDefaultProp()
    disabled = false;

    @Input()
    @tuiDefaultProp()
    icon: PolymorpheusContent = '';

    @Input()
    @tuiDefaultProp()
    iconRight: PolymorpheusContent = '';

    @Input()
    @HostBinding('attr.data-tui-host-shape')
    @tuiDefaultProp()
    shape: TuiButtonShape | null = null;

    @Input()
    @HostBinding('class._loading')
    @tuiDefaultProp()
    showLoader = false;

    @Input()
    @HostBinding('attr.data-tui-host-size')
    @tuiDefaultProp()
    size: TuiSizeXS | TuiSizeXL = 'l';

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TuiFocusVisibleService) focusVisible$: TuiFocusVisibleService,
        @Inject(TuiHoveredService) hoveredService: TuiHoveredService,
        @Inject(TuiDestroyService) destroy$: Observable<void>,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    ) {
        super();

        hoveredService
            .createHovered$(elementRef.nativeElement)
            .pipe(watch(changeDetectorRef), takeUntil(destroy$))
            .subscribe(hovered => {
                this.updateHovered(hovered);
            });
        pressedObservable(elementRef.nativeElement)
            .pipe(watch(changeDetectorRef), takeUntil(destroy$))
            .subscribe(pressed => {
                this.updatePressed(pressed);
            });
        focusVisible$.subscribe(focusVisible => {
            this.updateFocusVisible(focusVisible);
        });
    }

    get nativeFocusableElement(): HTMLElement | null {
        return this.nativeDisabled ? null : this.elementRef.nativeElement;
    }

    get focused(): boolean {
        return isNativeFocused(this.elementRef.nativeElement);
    }

    get loaderSize(): TuiSizeS {
        return this.size === 'l' || this.size === 'xl' ? 'm' : 's';
    }

    @HostBinding('attr.disabled')
    get nativeDisabled(): '' | null {
        return this.computedDisabled || this.showLoader ? '' : null;
    }

    @HostBinding('tabIndex')
    get tabIndex(): number {
        return this.focusable ? 0 : -1;
    }

    @HostListener('focusin', ['true'])
    @HostListener('focusout', ['false'])
    onFocused(focused: boolean) {
        this.updateFocused(focused);
    }
}

import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    forwardRef,
    HostListener,
    Inject,
    Input,
    ViewChild,
} from '@angular/core';
import {
    AbstractTuiInteractive,
    isNativeFocused,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiDefaultProp,
    TuiDestroyService,
    TuiFocusVisibleService,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-action, a[tuiAction]',
    templateUrl: './action.template.html',
    styleUrls: ['./action.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDestroyService,
        TuiFocusVisibleService,
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiActionComponent),
        },
    ],
})
export class TuiActionComponent extends AbstractTuiInteractive {
    @Input()
    @tuiDefaultProp()
    icon = '';

    readonly isLink = this.elementRef.nativeElement.tagName.toLowerCase() === 'a';

    readonly disabled = false;

    @ViewChild('focusableElement')
    private readonly focusableElement?: ElementRef<TuiNativeFocusableElement>;

    constructor(
        @Inject(TuiFocusVisibleService) focusVisible$: TuiFocusVisibleService,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {
        super();

        if (!this.isLink) {
            return;
        }

        focusVisible$.subscribe(visible => {
            this.updateFocusVisible(visible);
        });
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        if (this.isLink) {
            return this.elementRef.nativeElement;
        }

        return this.focusableElement ? this.focusableElement.nativeElement : null;
    }

    get focused(): boolean {
        return isNativeFocused(this.nativeFocusableElement);
    }

    @HostListener('focusin', ['true'])
    @HostListener('focusout', ['false'])
    onFocused(focused: boolean) {
        this.updateFocused(focused);
    }

    @HostListener('mouseenter', ['true'])
    @HostListener('mouseleave', ['false'])
    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    onFocusVisible(focusVisible: boolean) {
        this.updateFocusVisible(focusVisible);
    }
}

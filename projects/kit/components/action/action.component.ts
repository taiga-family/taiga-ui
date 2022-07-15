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
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiDefaultProp,
    TuiDestroyService,
    TuiFocusVisibleService,
    tuiIsNativeFocused,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';

// TODO: 3.0 Refactor to button[tuiAction]
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
    @ViewChild('focusableElement')
    private readonly focusableElement?: ElementRef<TuiNativeFocusableElement>;

    @Input()
    @tuiDefaultProp()
    icon = '';

    readonly isLink = this.elementRef.nativeElement.matches('a');

    readonly disabled = false;

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
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    @HostListener('focusin', ['true'])
    @HostListener('focusout', ['false'])
    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    onFocusVisible(focusVisible: boolean): void {
        this.updateFocusVisible(focusVisible);
    }
}

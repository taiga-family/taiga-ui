import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostBinding,
    Inject,
    Input,
    Optional,
    Output,
    ViewChild,
} from '@angular/core';
import {
    AbstractTuiInteractive,
    isNativeFocused,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {TuiBrightness, TuiModeDirective, TuiSizeS} from '@taiga-ui/core';
import {TuiBorders} from '@taiga-ui/kit/enums';
import {TuiAccordionItemContentDirective} from './accordion-item-content.directive';

@Component({
    selector: 'tui-accordion-item',
    templateUrl: './accordion-item.template.html',
    styleUrls: ['./accordion-item.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiAccordionItemComponent),
        },
    ],
})
export class TuiAccordionItemComponent
    extends AbstractTuiInteractive
    implements TuiFocusableElementAccessor {
    @Input()
    @HostBinding('class._no-padding')
    @tuiDefaultProp()
    noPadding = false;

    @Input()
    @HostBinding('class._has-arrow')
    @tuiDefaultProp()
    showArrow = true;

    @Input()
    @HostBinding('attr.data-tui-host-borders')
    @tuiDefaultProp()
    borders: TuiBorders | null = TuiBorders.All;

    @Input()
    @HostBinding('attr.data-tui-host-size')
    @tuiDefaultProp()
    size: TuiSizeS = 'm';

    @Input()
    @HostBinding('class._disabled')
    @tuiDefaultProp()
    disabled = false;

    @Input()
    @tuiDefaultProp()
    disableHover = false;

    @Input()
    @tuiDefaultProp()
    open = false;

    @Input()
    @tuiDefaultProp()
    async = false;

    @Output()
    readonly openChange = new EventEmitter<boolean>();

    @ContentChild(TuiAccordionItemContentDirective)
    readonly content?: TuiAccordionItemContentDirective;

    @ViewChild('focusableElement')
    private readonly focusableElement?: ElementRef<TuiNativeFocusableElement>;

    constructor(
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
        @Optional()
        @Inject(TuiModeDirective)
        private readonly modeDirective: TuiModeDirective | null,
    ) {
        super();
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.disabled || !this.focusableElement
            ? null
            : this.focusableElement.nativeElement;
    }

    get focused(): boolean {
        return isNativeFocused(this.nativeFocusableElement);
    }

    @HostBinding('attr.data-tui-host-mode')
    get hostMode(): TuiBrightness | null {
        return this.modeDirective ? this.modeDirective.mode : null;
    }

    onHovered(hovered: boolean) {
        if (this.disableHover) {
            return;
        }

        this.updateHovered(hovered);
    }

    onFocused(focused: boolean) {
        this.updateFocused(focused);
    }

    onFocusVisible(focusVisible: boolean) {
        this.updateFocusVisible(focusVisible);
    }

    onRowToggle() {
        if (this.disabled) {
            return;
        }

        this.updateOpen(!this.open);
    }

    onItemKeyDownEsc(event: KeyboardEvent) {
        if (!this.focused || !this.open) {
            return;
        }

        event.stopPropagation();
        this.updateOpen(false);
    }

    onItemKeyDownSpace(event: KeyboardEvent) {
        if (!this.focused) {
            return;
        }

        event.preventDefault();
        this.onRowToggle();
    }

    close() {
        this.updateOpen(false);
        this.changeDetectorRef.markForCheck();
    }

    private updateOpen(open: boolean) {
        if (this.open === open) {
            return;
        }

        this.open = open;
        this.openChange.emit(open);
    }
}

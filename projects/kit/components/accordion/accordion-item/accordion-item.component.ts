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
    Output,
    ViewChild,
} from '@angular/core';
import {
    AbstractTuiInteractive,
    isNativeFocused,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiDefaultProp,
    TuiDestroyService,
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TUI_MODE, TuiBrightness, TuiSizeS} from '@taiga-ui/core';
import {TuiBorders} from '@taiga-ui/kit/enums';
import {Observable} from 'rxjs';
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
        TuiDestroyService,
        MODE_PROVIDER,
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

    @HostBinding('attr.data-tui-host-mode')
    mode: TuiBrightness | null = null;

    @ViewChild('focusableElement')
    private readonly focusableElement?: ElementRef<TuiNativeFocusableElement>;

    constructor(
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_MODE) mode$: Observable<TuiBrightness | null>,
    ) {
        super();

        mode$.subscribe(mode => {
            this.mode = mode;
        });
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.disabled || !this.focusableElement
            ? null
            : this.focusableElement.nativeElement;
    }

    get focused(): boolean {
        return isNativeFocused(this.nativeFocusableElement);
    }

    onHovered(hovered: boolean) {
        if (!this.disableHover) {
            this.updateHovered(hovered);
        }
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

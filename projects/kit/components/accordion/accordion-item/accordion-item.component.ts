import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    HostBinding,
    Inject,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import {
    AbstractTuiInteractive,
    tuiAsFocusableItemAccessor,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TUI_MODE, TuiBrightness, TuiSizeS} from '@taiga-ui/core';
import {Observable} from 'rxjs';

import {TuiAccordionItemContentDirective} from './accordion-item-content.directive';
import {TuiAccordionItemEagerContentDirective} from './accordion-item-eager-content.directive';

@Component({
    selector: `tui-accordion-item`,
    templateUrl: `./accordion-item.template.html`,
    styleUrls: [`./accordion-item.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsFocusableItemAccessor(TuiAccordionItemComponent), MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': `mode$`,
    },
})
export class TuiAccordionItemComponent
    extends AbstractTuiInteractive
    implements TuiFocusableElementAccessor
{
    @ViewChild(`focusableElement`)
    private readonly focusableElement?: ElementRef<TuiNativeFocusableElement>;

    @Input()
    @HostBinding(`class._no-padding`)
    @tuiDefaultProp()
    noPadding = false;

    @Input()
    @HostBinding(`class._has-arrow`)
    @tuiDefaultProp()
    showArrow = true;

    @Input()
    @HostBinding(`attr.data-tui-host-borders`)
    @tuiDefaultProp()
    borders: 'all' | 'top-bottom' | null = `all`;

    @Input()
    @HostBinding(`attr.data-size`)
    @tuiDefaultProp()
    size: TuiSizeS = `m`;

    @Input()
    @HostBinding(`class._disabled`)
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

    @ContentChild(TuiAccordionItemEagerContentDirective)
    readonly eagerContent?: TuiAccordionItemEagerContentDirective;

    @ContentChild(TuiAccordionItemContentDirective)
    readonly lazyContent?: TuiAccordionItemContentDirective;

    constructor(
        @Inject(ChangeDetectorRef) private readonly changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
    ) {
        super();
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.disabled || !this.focusableElement
            ? null
            : this.focusableElement.nativeElement;
    }

    get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    onFocusVisible(focusVisible: boolean): void {
        this.updateFocusVisible(focusVisible);
    }

    onRowToggle(): void {
        if (!this.disabled) {
            this.updateOpen(!this.open);
        }
    }

    onItemKeyDownEsc(event: Event): void {
        if (!this.focused || !this.open) {
            return;
        }

        event.stopPropagation();
        this.updateOpen(false);
    }

    onItemKeyDownSpace(event: Event): void {
        if (!this.focused) {
            return;
        }

        event.preventDefault();
        this.onRowToggle();
    }

    close(): void {
        this.updateOpen(false);
        this.changeDetectorRef.markForCheck();
    }

    private updateOpen(open: boolean): void {
        if (this.open === open) {
            return;
        }

        this.open = open;
        this.openChange.emit(open);
    }
}

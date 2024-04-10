import type {ElementRef} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    EventEmitter,
    HostBinding,
    inject,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import type {TuiFocusableElementAccessor, TuiNativeFocusableElement} from '@taiga-ui/cdk';
import {
    AbstractTuiInteractive,
    tuiAsFocusableItemAccessor,
    tuiIsNativeFocused,
} from '@taiga-ui/cdk';
import type {TuiSizeS} from '@taiga-ui/core';
import {TUI_ARROW_OPTIONS} from '@taiga-ui/kit/components/arrow';

import {TuiAccordionItemContentDirective} from './accordion-item-content.directive';
import {TuiAccordionItemEagerContentDirective} from './accordion-item-eager-content.directive';

@Component({
    selector: 'tui-accordion-item',
    templateUrl: './accordion-item.template.html',
    styleUrls: ['./accordion-item.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsFocusableItemAccessor(TuiAccordionItemComponent)],
})
export class TuiAccordionItemComponent
    extends AbstractTuiInteractive
    implements TuiFocusableElementAccessor
{
    @ViewChild('focusableElement')
    private readonly focusableElement?: ElementRef<TuiNativeFocusableElement>;

    private readonly cdr = inject(ChangeDetectorRef);

    @Input()
    @HostBinding('class._no-padding')
    public noPadding = false;

    @Input()
    @HostBinding('class._has-arrow')
    public showArrow = true;

    @Input()
    @HostBinding('attr.data-borders')
    public borders: 'all' | 'top-bottom' | null = 'all';

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeS = 'm';

    @Input()
    @HostBinding('class._disabled')
    public disabled = false;

    @Input()
    public disableHover = false;

    @Input()
    public open = false;

    @Input()
    public async = false;

    @Output()
    public readonly openChange = new EventEmitter<boolean>();

    @ContentChild(TuiAccordionItemEagerContentDirective)
    protected readonly eagerContent?: TuiAccordionItemEagerContentDirective;

    @ContentChild(TuiAccordionItemContentDirective)
    protected readonly lazyContent?: TuiAccordionItemContentDirective;

    protected readonly options = inject(TUI_ARROW_OPTIONS);

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.disabled || !this.focusableElement
            ? null
            : this.focusableElement.nativeElement;
    }

    public get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    public close(): void {
        this.updateOpen(false);
        this.cdr.markForCheck();
    }

    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected onFocusVisible(focusVisible: boolean): void {
        this.updateFocusVisible(focusVisible);
    }

    protected onRowToggle(): void {
        if (!this.disabled) {
            this.updateOpen(!this.open);
        }
    }

    protected onItemKeyDownEsc(event: Event): void {
        if (!this.open) {
            return;
        }

        event.stopPropagation();
        this.updateOpen(false);
    }

    private updateOpen(open: boolean): void {
        if (this.open === open) {
            return;
        }

        this.open = open;
        this.openChange.emit(open);
    }
}

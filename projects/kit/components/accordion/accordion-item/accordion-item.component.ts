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
} from '@angular/core';
import type {TuiSizeS} from '@taiga-ui/core';
import {TUI_ARROW_OPTIONS} from '@taiga-ui/kit/components/arrow';

import {TuiAccordionItemContentDirective} from './accordion-item-content.directive';
import {TuiAccordionItemEagerContentDirective} from './accordion-item-eager-content.directive';

@Component({
    selector: 'tui-accordion-item',
    templateUrl: './accordion-item.template.html',
    styleUrls: ['./accordion-item.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAccordionItemComponent {
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

    public close(): void {
        this.updateOpen(false);
        this.cdr.markForCheck();
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

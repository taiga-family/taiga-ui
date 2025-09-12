import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {TuiExpand} from '@taiga-ui/core/components/expand';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {type TuiSizeS} from '@taiga-ui/core/types';
import {TuiChevron} from '@taiga-ui/kit/directives';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiAccordionItemContent} from './accordion-item-content.directive';
import {TuiAccordionItemEagerContent} from './accordion-item-eager-content.directive';

@Component({
    selector: 'tui-accordion-item',
    imports: [NgIf, PolymorpheusOutlet, TuiChevron, TuiExpand, TuiIcon],
    templateUrl: './accordion-item.template.html',
    styleUrls: ['./accordion-item.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._no-padding]': 'noPadding',
        '[class._has-arrow]': 'showArrow',
        '[attr.data-borders]': 'borders',
        '[attr.data-size]': 'size',
        '[class._disabled]': 'disabled',
    },
})
export class TuiAccordionItem {
    private readonly cdr = inject(ChangeDetectorRef);

    @ContentChild(TuiAccordionItemEagerContent)
    protected readonly eagerContent?: TuiAccordionItemEagerContent;

    @ContentChild(TuiAccordionItemContent)
    protected readonly lazyContent?: TuiAccordionItemContent;

    @Input()
    public noPadding = false;

    @Input()
    public showArrow = true;

    @Input()
    public borders: 'all' | 'top-bottom' | null = 'all';

    @Input()
    public size: TuiSizeS = 'm';

    @Input()
    public disabled = false;

    @Input()
    public disableHover = false;

    @Input()
    public open = false;

    @Input()
    public async = false;

    @Output()
    public readonly openChange = new EventEmitter<boolean>();

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

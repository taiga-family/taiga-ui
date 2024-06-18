import {NgIf} from '@angular/common';
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
import {TuiExpand, TuiIcon} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit/directives';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiAccordionItemContentDirective} from './accordion-item-content.directive';
import {TuiAccordionItemEagerContentDirective} from './accordion-item-eager-content.directive';

@Component({
    standalone: true,
    selector: 'tui-accordion-item',
    imports: [
        NgIf,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiIcon,
        TuiChevron,
        TuiExpand,
    ],
    templateUrl: './accordion-item.template.html',
    styleUrls: ['./accordion-item.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAccordionItemComponent {
    private readonly cdr = inject(ChangeDetectorRef);

    @ContentChild(TuiAccordionItemEagerContentDirective)
    protected readonly eagerContent?: TuiAccordionItemEagerContentDirective;

    @ContentChild(TuiAccordionItemContentDirective)
    protected readonly lazyContent?: TuiAccordionItemContentDirective;

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

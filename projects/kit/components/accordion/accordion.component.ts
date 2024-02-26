import {
    AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    inject,
    Input,
    QueryList,
} from '@angular/core';
import {
    EMPTY_QUERY,
    TuiDestroyService,
    tuiIsPresent,
    tuiQueryListChanges,
} from '@taiga-ui/cdk';
import {filter, identity, map, merge, pairwise, switchMap, takeUntil} from 'rxjs';

import {TuiAccordionItemComponent} from './accordion-item/accordion-item.component';

@Component({
    selector: 'tui-accordion',
    templateUrl: './accordion.template.html',
    styleUrls: ['./accordion.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class TuiAccordionComponent implements AfterContentInit {
    private readonly destroy$ = inject(TuiDestroyService, {self: true});

    @Input()
    public closeOthers = true;

    @Input()
    public rounded = true;

    @ContentChildren(TuiAccordionItemComponent)
    protected readonly accordionItems: QueryList<TuiAccordionItemComponent> = EMPTY_QUERY;

    public ngAfterContentInit(): void {
        const {accordionItems} = this;
        const rows$ = tuiQueryListChanges(accordionItems);
        const newOpenRow$ = rows$.pipe(
            pairwise(),
            map(([previous, current]) =>
                current.find(item => !previous.includes(item) && item.open),
            ),
            filter(tuiIsPresent),
        );
        const rowsOpen$ = merge(
            rows$.pipe(
                switchMap(rows =>
                    merge(
                        ...rows.map(row =>
                            row.openChange.pipe(
                                filter(identity),
                                map(() => row),
                            ),
                        ),
                    ),
                ),
            ),
            newOpenRow$,
        ).pipe(
            filter(() => this.closeOthers),
            takeUntil(this.destroy$),
        );

        rowsOpen$.subscribe(currentRow => {
            accordionItems.forEach(row => {
                if (currentRow !== row) {
                    row.close();
                }
            });
        });
    }
}

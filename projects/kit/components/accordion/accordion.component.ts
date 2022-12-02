import {
    AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    Inject,
    Input,
    QueryList,
    Self,
} from '@angular/core';
import {
    EMPTY_QUERY,
    tuiDefaultProp,
    TuiDestroyService,
    tuiIsPresent,
    tuiItemsQueryListObservable,
} from '@taiga-ui/cdk';
import {identity, merge} from 'rxjs';
import {filter, map, mapTo, pairwise, switchMap, takeUntil} from 'rxjs/operators';

import {TuiAccordionItemComponent} from './accordion-item/accordion-item.component';

@Component({
    selector: `tui-accordion`,
    styleUrls: [`./accordion.style.less`],
    templateUrl: `accordion.template.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class TuiAccordionComponent implements AfterContentInit {
    @Input()
    @tuiDefaultProp()
    closeOthers = true;

    @Input()
    @tuiDefaultProp()
    rounded = true;

    @ContentChildren(TuiAccordionItemComponent)
    readonly accordionItems: QueryList<TuiAccordionItemComponent> = EMPTY_QUERY;

    constructor(
        @Self()
        @Inject(TuiDestroyService)
        private readonly destroy$: TuiDestroyService,
    ) {}

    ngAfterContentInit(): void {
        const {accordionItems} = this;
        const rows$ = tuiItemsQueryListObservable(accordionItems);
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
                            row.openChange.pipe(filter(identity), mapTo(row)),
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

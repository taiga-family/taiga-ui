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
    tuiDefaultProp,
    TuiDestroyService,
    tuiEmptyQuery,
    tuiIsPresent,
    tuiQueryListChanges,
} from '@taiga-ui/cdk';
import {identity, merge} from 'rxjs';
import {filter, map, pairwise, switchMap, takeUntil} from 'rxjs/operators';

import {TuiAccordionItemComponent} from './accordion-item/accordion-item.component';

@Component({
    selector: 'tui-accordion',
    templateUrl: './accordion.template.html',
    styleUrls: ['./accordion.style.less'],
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
    readonly accordionItems: QueryList<TuiAccordionItemComponent> = tuiEmptyQuery();

    constructor(
        @Self()
        @Inject(TuiDestroyService)
        private readonly destroy$: TuiDestroyService,
    ) {}

    ngAfterContentInit(): void {
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

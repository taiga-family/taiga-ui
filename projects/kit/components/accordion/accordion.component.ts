import type {AfterContentInit, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    DestroyRef,
    inject,
    Input,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {EMPTY_QUERY, tuiIsPresent, tuiQueryListChanges} from '@taiga-ui/cdk';
import {filter, identity, map, merge, pairwise, switchMap} from 'rxjs';

import {TuiAccordionItemComponent} from './accordion-item/accordion-item.component';

@Component({
    selector: 'tui-accordion',
    templateUrl: './accordion.template.html',
    styleUrls: ['./accordion.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAccordionComponent implements AfterContentInit {
    private readonly destroyRef = inject(DestroyRef);

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
            takeUntilDestroyed(this.destroyRef),
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

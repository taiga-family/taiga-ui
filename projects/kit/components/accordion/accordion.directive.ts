import type {AfterContentInit, QueryList} from '@angular/core';
import {ContentChildren, DestroyRef, Directive, inject, Input} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {EMPTY_QUERY, tuiIsPresent, tuiQueryListChanges} from '@taiga-ui/cdk';
import {TuiGroupDirective, tuiGroupOptionsProvider} from '@taiga-ui/core';
import {filter, identity, map, merge, pairwise, switchMap} from 'rxjs';

import {TuiAccordionItemComponent} from './accordion-item.component';

@Directive({
    standalone: true,
    selector: 'tui-accordion',
    hostDirectives: [
        {
            directive: TuiGroupDirective,
            inputs: ['rounded'],
        },
    ],
    providers: [
        tuiGroupOptionsProvider({
            orientation: 'vertical',
            size: 'l',
            collapsed: true,
        }),
    ],
})
export class TuiAccordionDirective implements AfterContentInit {
    private readonly destroyRef = inject(DestroyRef);

    @ContentChildren(TuiAccordionItemComponent)
    protected readonly accordionItems: QueryList<TuiAccordionItemComponent> = EMPTY_QUERY;

    @Input()
    public closeOthers = true;

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

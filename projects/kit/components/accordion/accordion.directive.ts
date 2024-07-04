import type {AfterContentInit, QueryList} from '@angular/core';
import {ContentChildren, DestroyRef, Directive, inject, Input} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {tuiQueryListChanges} from '@taiga-ui/cdk/observables';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiGroup, tuiGroupOptionsProvider} from '@taiga-ui/core/components/group';
import {filter, identity, map, merge, pairwise, switchMap} from 'rxjs';

import {TuiAccordionItem} from './accordion-item.component';

@Directive({
    standalone: true,
    selector: 'tui-accordion',
    providers: [
        tuiGroupOptionsProvider({
            orientation: 'vertical',
            size: 'l',
            collapsed: true,
        }),
    ],
    hostDirectives: [
        {
            directive: TuiGroup,
            inputs: ['rounded'],
        },
    ],
})
export class TuiAccordionDirective implements AfterContentInit {
    private readonly destroyRef = inject(DestroyRef);

    @ContentChildren(TuiAccordionItem)
    protected readonly accordionItems: QueryList<TuiAccordionItem> = EMPTY_QUERY;

    @Input()
    public closeOthers = true;

    public ngAfterContentInit(): void {
        const {accordionItems} = this;
        const rows$ = tuiQueryListChanges(accordionItems);
        const newOpenRow$ = rows$.pipe(
            pairwise(),
            map(([previous, current]) =>
                current.find((item) => !previous.includes(item) && item.open),
            ),
            filter(tuiIsPresent),
        );
        const rowsOpen$ = merge(
            rows$.pipe(
                switchMap((rows) =>
                    merge(
                        ...rows.map((row) =>
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

        rowsOpen$.subscribe((currentRow) => {
            accordionItems.forEach((row) => {
                if (currentRow !== row) {
                    row.close();
                }
            });
        });
    }
}

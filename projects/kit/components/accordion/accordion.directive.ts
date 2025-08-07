import {
    type AfterContentInit,
    ContentChildren,
    DestroyRef,
    Directive,
    inject,
    Input,
    type QueryList,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {tuiQueryListChanges} from '@taiga-ui/cdk/observables';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiGroup} from '@taiga-ui/core/directives/group';
import {filter, identity, map, merge, pairwise, switchMap} from 'rxjs';

import {TuiAccordionItem} from './accordion-item.component';

@Directive({
    standalone: true,
    selector: 'tui-accordion',
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

    constructor() {
        // Not using DI options to avoid changed defaults spilling to content
        const group = inject(TuiGroup);

        group.orientation = 'vertical';
        group.collapsed = true;
    }

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

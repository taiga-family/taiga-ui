import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ContentChildren,
    forwardRef,
    HostBinding,
    HostListener,
    Inject,
    QueryList,
} from '@angular/core';
import {
    INTERSECTION_ROOT_MARGIN,
    IntersectionObserverService,
} from '@ng-web-apis/intersection-observer';
import {EMPTY_QUERY} from '@taiga-ui/cdk';
import {asCallable} from '@tinkoff/ng-event-plugins';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {TuiHeadDirective} from '../directives/head.directive';
import {TuiTableDirective} from '../directives/table.directive';
import {TUI_WATCHED_TABLE_PROVIDER} from '../providers/common.providers';
import {TuiThGroupComponent} from '../th-group/th-group.component';

@Component({
    selector: 'thead[tuiThead]',
    templateUrl: './thead.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TUI_WATCHED_TABLE_PROVIDER,
        IntersectionObserverService,
        {
            provide: INTERSECTION_ROOT_MARGIN,
            useValue: '0px 10000px 10000px 10000px',
        },
    ],
})
export class TuiTheadComponent<T> {
    @HostBinding('$.class._stuck')
    @HostListener('$.class._stuck')
    readonly stuck$ = asCallable(
        this.entries$.pipe(map(([{intersectionRatio}]) => intersectionRatio < 1)),
    );

    @ContentChildren(forwardRef(() => TuiHeadDirective))
    readonly heads: QueryList<TuiHeadDirective<T>> = EMPTY_QUERY;

    @ContentChild(forwardRef(() => TuiThGroupComponent))
    readonly tr: unknown;

    readonly heads$ = this.heads.changes.pipe(
        startWith(null),
        map(() =>
            this.heads.reduce<Record<any, TuiHeadDirective<T>>>(
                (record, item) => ({...record, [item.tuiHead]: item}),
                {},
            ),
        ),
    );

    constructor(
        @Inject(IntersectionObserverService)
        private readonly entries$: Observable<IntersectionObserverEntry[]>,
        @Inject(forwardRef(() => TuiTableDirective))
        readonly table: TuiTableDirective<T>,
    ) {}

    extract(
        record: Record<any, TuiHeadDirective<T>>,
        key: keyof T | string,
    ): TuiHeadDirective<T> | undefined {
        return record[key];
    }
}

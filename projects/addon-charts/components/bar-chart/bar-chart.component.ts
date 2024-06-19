import {AsyncPipe, NgForOf} from '@angular/common';
import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    ViewChildren,
} from '@angular/core';
import {TuiBarSet} from '@taiga-ui/addon-charts/components/bar-set';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {TuiMapperPipe} from '@taiga-ui/cdk/pipes/mapper';
import {TuiIdService} from '@taiga-ui/cdk/services';
import type {TuiContext, TuiMapper} from '@taiga-ui/cdk/types';
import {tuiSum} from '@taiga-ui/cdk/utils/math';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TuiHint,
    TuiHintHover,
    TuiHintOptionsDirective,
    tuiHintOptionsProvider,
} from '@taiga-ui/core/directives/hint';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import type {Observable} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-bar-chart',
    imports: [NgForOf, TuiHint, TuiMapperPipe, AsyncPipe, TuiBarSet],
    templateUrl: './bar-chart.template.html',
    styleUrls: ['./bar-chart.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [tuiHintOptionsProvider({direction: 'top'})],
})
export class TuiBarChart {
    private readonly hintOptions = inject(TuiHintOptionsDirective, {optional: true});
    private readonly autoIdString = inject(TuiIdService).generate();

    @ViewChildren(TuiHintHover)
    protected readonly drivers: QueryList<Observable<boolean>> = EMPTY_QUERY;

    @Input()
    public value: ReadonlyArray<readonly number[]> = [];

    @Input()
    public max = NaN;

    @Input()
    public size: TuiSizeL | TuiSizeS | null = 'm';

    @Input()
    public collapsed = false;

    public get transposed(): ReadonlyArray<readonly number[]> {
        return this.transpose(this.value);
    }

    public get computedMax(): number {
        return this.max || this.getMax(this.value, this.collapsed);
    }

    public readonly percentMapper: TuiMapper<
        [readonly number[], boolean, number],
        number
    > = (set, collapsed, max) =>
        (100 * (collapsed ? tuiSum(...set) : Math.max(...set))) / max;

    protected get hintContent(): PolymorpheusContent<TuiContext<number>> {
        return this.hintOptions?.content || '';
    }

    protected getHintId(index: number): string {
        return `${this.autoIdString}_${index}`;
    }

    @tuiPure
    private transpose(
        value: ReadonlyArray<readonly number[]>,
    ): ReadonlyArray<readonly number[]> {
        return value.reduce<ReadonlyArray<readonly number[]>>(
            (result, next) =>
                next.map((_, index) => [...(result[index] || []), next[index]]),
            [],
        );
    }

    @tuiPure
    private getMax(values: ReadonlyArray<readonly number[]>, collapsed: boolean): number {
        return collapsed
            ? Math.max(
                  // eslint-disable-next-line no-restricted-syntax
                  ...values.reduce((result, next) =>
                      result.map((value, index) => value + next[index]),
                  ),
              )
            : values.reduce((max, value) => Math.max(...value, max), 0);
    }
}

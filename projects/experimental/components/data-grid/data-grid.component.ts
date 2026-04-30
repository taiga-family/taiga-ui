import {coerceArray} from '@angular/cdk/coercion';
import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

/**
 * @deprecated: work in progress, do not use!
 */
@Component({
    selector: 'tui-data-grid',
    imports: [PolymorpheusOutlet],
    templateUrl: './data-grid.component.html',
    styleUrl: './data-grid.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDataGrid<T> {
    public readonly pick = output<T>();
    public readonly items = input<readonly T[]>([]);
    public readonly content = input<PolymorpheusContent<TuiContext<T>>>();
    public readonly value = input([], {transform: coerceArray<T>});
}

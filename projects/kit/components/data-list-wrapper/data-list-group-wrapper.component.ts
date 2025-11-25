import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {tuiAsDataListAccessor, TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiLoader} from '@taiga-ui/core/components/loader';
import {
    TuiMultiSelect,
    TuiMultiSelectGroupDirective,
} from '@taiga-ui/kit/components/multi-select';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiDataListWrapperComponent} from './data-list-wrapper.component';

@Component({
    selector: 'tui-data-list-wrapper[labels]',
    imports: [PolymorpheusOutlet, TuiDataList, TuiLoader, TuiMultiSelect],
    templateUrl: './data-list-group-wrapper.template.html',
    styleUrl: './data-list-wrapper.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsDataListAccessor(TuiDataListGroupWrapperComponent)],
})
export class TuiDataListGroupWrapperComponent<T> extends TuiDataListWrapperComponent<
    T,
    readonly T[]
> {
    protected readonly multi = inject(TuiMultiSelectGroupDirective, {optional: true});

    public readonly labels = input<readonly string[]>([]);
}

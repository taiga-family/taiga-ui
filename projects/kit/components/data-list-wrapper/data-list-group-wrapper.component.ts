import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TuiElement} from '@taiga-ui/cdk/directives/element';
import {tuiAsDataListAccessor, TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiLoader} from '@taiga-ui/core/components/loader';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiDataListWrapperComponent} from './data-list-wrapper.component';

@Component({
    selector: 'tui-data-list-wrapper[labels]',
    imports: [PolymorpheusOutlet, TuiDataList, TuiElement, TuiLoader],
    templateUrl: './data-list-group-wrapper.template.html',
    styleUrl: './data-list-wrapper.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsDataListAccessor(TuiDataListGroupWrapperComponent)],
})
export class TuiDataListGroupWrapperComponent<T> extends TuiDataListWrapperComponent<
    T,
    readonly T[]
> {
    @Input()
    public labels: readonly string[] = [];
}

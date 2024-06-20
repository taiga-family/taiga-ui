import {NgForOf, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TuiElement} from '@taiga-ui/cdk/directives/element';
import {tuiAsDataListAccessor, TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiLoader} from '@taiga-ui/core/components/loader';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiDataListWrapperComponent} from './data-list-wrapper.component';

@Component({
    standalone: true,
    selector: 'tui-data-list-wrapper[labels]',
    imports: [TuiDataList, NgIf, NgForOf, TuiElement, PolymorpheusOutlet, TuiLoader],
    templateUrl: './data-list-group-wrapper.template.html',
    styleUrls: ['./data-list-wrapper.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsDataListAccessor(TuiDataListGroupWrapperComponent)],
})
export class TuiDataListGroupWrapperComponent<T> extends TuiDataListWrapperComponent<T> {
    @Input()
    // @ts-ignore
    public override items: readonly T[][] | null = [];

    @Input()
    public labels: readonly string[] = [];
}

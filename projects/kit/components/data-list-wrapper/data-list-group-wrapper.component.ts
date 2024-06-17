import {NgForOf, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TuiElementDirective} from '@taiga-ui/cdk';
import {tuiAsDataListAccessor, TuiDataList, TuiLoader} from '@taiga-ui/core';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiDataListWrapperComponent} from './data-list-wrapper.component';

@Component({
    standalone: true,
    selector: 'tui-data-list-wrapper[labels]',
    imports: [
        NgIf,
        NgForOf,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiDataList,
        TuiElementDirective,
        TuiLoader,
    ],
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

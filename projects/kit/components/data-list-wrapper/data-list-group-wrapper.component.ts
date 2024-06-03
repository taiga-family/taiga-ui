import {NgForOf, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TuiElementDirective} from '@taiga-ui/cdk';
import {tuiAsDataListAccessor, TuiDataList, TuiLoaderComponent} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiDataListWrapperComponent} from './data-list-wrapper.component';

@Component({
    standalone: true,
    selector: 'tui-data-list-wrapper[labels]',
    imports: [
        NgIf,
        NgForOf,
        PolymorpheusModule,
        TuiDataList,
        TuiElementDirective,
        TuiLoaderComponent,
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

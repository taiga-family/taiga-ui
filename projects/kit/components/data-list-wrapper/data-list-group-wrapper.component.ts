import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {tuiAsDataListAccessor} from '@taiga-ui/core';

import {TuiDataListWrapperComponent} from './data-list-wrapper.component';

@Component({
    selector: 'tui-data-list-wrapper[labels]',
    templateUrl: './data-list-group-wrapper.template.html',
    styleUrls: ['./data-list-wrapper.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsDataListAccessor(TuiDataListGroupWrapper)],
})
export class TuiDataListGroupWrapper<T> extends TuiDataListWrapperComponent<T> {
    @Input()
    // @ts-ignore
    public override items: readonly T[][] | null = [];

    @Input()
    public labels: readonly string[] = [];
}

import {ChangeDetectionStrategy, Component, computed} from '@angular/core';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiSizeS} from '@taiga-ui/core/types';
import {TuiSelectOptionComponent} from '@taiga-ui/legacy/components/select-option';

@Component({
    standalone: false,
    selector: 'tui-multi-select-option',
    templateUrl: './multi-select-option.template.html',
    styleUrl: './multi-select-option.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiMultiSelectOptionComponent<
    T extends any[],
> extends TuiSelectOptionComponent<T> {
    protected readonly size = computed<TuiSizeS>(() =>
        this.dataList?.size() === 'l' ? 'm' : 's',
    );

    protected override get selected(): boolean {
        const {value} = this.option;

        return (
            tuiIsPresent(value) &&
            tuiIsPresent(this.value) &&
            this.value.some((item) => this.matcher(item, value))
        );
    }
}

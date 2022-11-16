import {ChangeDetectionStrategy, Component} from '@angular/core';
import {tuiIsPresent} from '@taiga-ui/cdk';
import {TuiSizeL} from '@taiga-ui/core';
import {TuiSelectOptionComponent} from '@taiga-ui/kit/components/select-option';

@Component({
    selector: `tui-multi-select-option`,
    templateUrl: `./multi-select-option.template.html`,
    styleUrls: [`./multi-select-option.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiMultiSelectOptionComponent<T> extends TuiSelectOptionComponent<T> {
    get size(): TuiSizeL {
        return this.option.size === `l` ||
            this.option.size === `m` ||
            this.dataList?.size === `l` ||
            (this.dataList?.size === `m` && !this.option.size)
            ? `l`
            : `m`;
    }

    protected override get selected(): boolean {
        const {value} = this.option;

        return (
            tuiIsPresent(value) &&
            tuiIsPresent(this.control.value) &&
            this.control.value.some((item: T) => this.matcher(item, value))
        );
    }
}

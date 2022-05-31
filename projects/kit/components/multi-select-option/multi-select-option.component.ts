import {ChangeDetectionStrategy, Component} from '@angular/core';
import {isPresent} from '@taiga-ui/cdk';
import {sizeBigger, TuiSizeL} from '@taiga-ui/core';
import {TuiSelectOptionComponent} from '@taiga-ui/kit/components/select-option';

@Component({
    selector: 'tui-multi-select-option',
    templateUrl: './multi-select-option.template.html',
    styleUrls: ['./multi-select-option.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiMultiSelectOptionComponent<T> extends TuiSelectOptionComponent<T> {
    get size(): TuiSizeL {
        return sizeBigger(this.option.size) ? 'l' : 'm';
    }

    protected get selected(): boolean {
        return (
            isPresent(this.option.value) &&
            isPresent(this.control.value) &&
            !!this.control.value.find((item: T) => this.matcher(item, this.option.value))
        );
    }
}

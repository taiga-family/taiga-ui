import {ChangeDetectionStrategy, Component} from '@angular/core';
import {isPresent, tuiReplayedValueChangesFrom} from '@taiga-ui/cdk';
import {sizeBigger, TuiSizeL} from '@taiga-ui/core';
import {TuiSelectOptionComponent} from '@taiga-ui/kit/components/select-option';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-multi-select-option',
    templateUrl: './multi-select-option.template.html',
    styleUrls: ['./multi-select-option.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiMultiSelectOptionComponent<T> extends TuiSelectOptionComponent<T> {
    readonly selected$ = tuiReplayedValueChangesFrom<ReadonlyArray<T>>(this.control).pipe(
        map(
            value =>
                isPresent(this.option.value) &&
                !!value &&
                !!value.find(item => this.matcher(item, this.option.value!)),
        ),
    );

    get size(): TuiSizeL {
        return sizeBigger(this.option.size) ? 'l' : 'm';
    }
}

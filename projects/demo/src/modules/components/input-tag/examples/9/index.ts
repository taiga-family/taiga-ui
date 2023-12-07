import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {MaskitoOptions} from '@maskito/core';
import {maskitoDateOptionsGenerator} from '@maskito/kit';
import {TuiBooleanHandler, TuiDay} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-input-tag-example-9',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputTagExample9 {
    readonly control = new UntypedFormControl([]);
    readonly min = new Date(2000, 0, 1);
    readonly max = new Date(2025, 4, 10);

    readonly options: MaskitoOptions = maskitoDateOptionsGenerator({
        mode: 'dd/mm/yyyy',
        separator: '.',
        min: this.min,
        max: this.max,
    });

    tagValidator: TuiBooleanHandler<string> = (tag: string) => {
        const {year, month, day} = TuiDay.parseRawDateString(tag);

        return (
            TuiDay.isValidDay(year, month, day) &&
            TuiDay.normalizeOf(year, month, day).toLocalNativeDate() >= this.min &&
            TuiDay.normalizeOf(year, month, day).toLocalNativeDate() <= this.max
        );
    };
}

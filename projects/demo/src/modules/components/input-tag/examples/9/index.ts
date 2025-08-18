import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {MaskitoDirective} from '@maskito/angular';
import {type MaskitoOptions} from '@maskito/core';
import {maskitoDateOptionsGenerator} from '@maskito/kit';
import {type TuiBooleanHandler, TuiDay} from '@taiga-ui/cdk';
import {TuiInputTagModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        MaskitoDirective,
        ReactiveFormsModule,
        TuiInputTagModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<string[]>([]);
    protected readonly min = new Date(2000, 0, 1);
    protected readonly max = new Date(2025, 4, 10);

    protected readonly options: MaskitoOptions = maskitoDateOptionsGenerator({
        mode: 'dd/mm/yyyy',
        separator: '.',
        min: this.min,
        max: this.max,
    });

    protected tagValidator: TuiBooleanHandler<string> = (tag: string) => {
        const {year, month, day} = TuiDay.parseRawDateString(tag);

        return (
            TuiDay.isValidDay(year, month, day) &&
            TuiDay.normalizeOf(year, month, day).toLocalNativeDate() >= this.min &&
            TuiDay.normalizeOf(year, month, day).toLocalNativeDate() <= this.max
        );
    };
}

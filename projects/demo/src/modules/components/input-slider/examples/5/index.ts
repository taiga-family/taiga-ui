import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiContext} from '@taiga-ui/cdk';
import {TuiInputSliderModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputSliderModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly max = 100;
    protected readonly min = 0;

    protected readonly smallControl = new FormControl(this.min);
    protected readonly bigControl = new FormControl(this.max);

    protected readonly customLabel = ({
        $implicit,
    }: TuiContext<number | null>): number | string => {
        switch ($implicit) {
            case (this.max - this.min) / 2:
                return 'Middle';
            case this.max:
                return "Digits can't describe my love!";
            case this.min:
                return 'Just a label for min value';
            default:
                return $implicit ?? '';
        }
    };
}

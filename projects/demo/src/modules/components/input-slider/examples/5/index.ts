import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-input-slider-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiInputSliderExample5 {
    readonly max = 100;
    readonly min = 0;

    readonly smallControl = new UntypedFormControl(this.min);
    readonly bigControl = new UntypedFormControl(this.max);

    readonly customLabel = ({
        $implicit,
    }: TuiContextWithImplicit<number>): number | string => {
        switch ($implicit) {
            case this.max:
                // eslint-disable-next-line @typescript-eslint/quotes
                return "Digits can't describe my love!";
            case this.min:
                return 'Just a label for min value';
            case (this.max - this.min) / 2:
                return 'Middle';
            default:
                return $implicit;
        }
    };
}

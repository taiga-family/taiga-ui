import"./chunk-HU6DUUP4.js";var u=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiValueTransformer} from '@taiga-ui/cdk';
import {TuiInputNumber, tuiInputNumberOptionsProvider} from '@taiga-ui/kit';

class NaNTransformer extends TuiValueTransformer<number | null, number> {
    public override fromControlValue(value: number): number | null {
        return Number.isNaN(value) ? null : value;
    }

    public override toControlValue(value: number | null): number {
        return value ?? NaN;
    }
}

@Component({
    imports: [FormsModule, TuiInputNumber],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiInputNumberOptionsProvider({valueTransformer: new NaNTransformer()})],
})
export default class Example {
    protected value = NaN;
}
`;export{u as default};

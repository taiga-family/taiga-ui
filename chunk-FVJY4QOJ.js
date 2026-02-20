import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {MaskitoDirective} from '@maskito/angular';
import {type MaskitoOptions} from '@maskito/core';
import {
    maskitoAddOnFocusPlugin,
    maskitoCaretGuard,
    maskitoNumberOptionsGenerator,
    maskitoRemoveOnBlurPlugin,
} from '@maskito/kit';
import {TuiButtonX, TuiInput} from '@taiga-ui/core';

const postfix = ' rad';
const numberOptions = maskitoNumberOptionsGenerator({
    postfix,
    decimalSeparator: ',',
    maximumFractionDigits: 8,
    min: 0,
});

@Component({
    imports: [FormsModule, MaskitoDirective, TuiButtonX, TuiInput],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = Math.PI.toFixed(8);
    protected readonly options: MaskitoOptions = {
        ...numberOptions,
        plugins: [
            ...numberOptions.plugins,
            maskitoCaretGuard((value) => [0, value.length - postfix.length]),
            maskitoAddOnFocusPlugin(postfix),
            maskitoRemoveOnBlurPlugin(postfix),
        ],
    };

    protected clear(): void {
        this.value = postfix;
    }
}
`;export{i as default};

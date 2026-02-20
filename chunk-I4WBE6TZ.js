import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiValueTransformer} from '@taiga-ui/cdk';
import {TuiInputPhone, tuiInputPhoneOptionsProvider} from '@taiga-ui/kit';

const VALUE_TRANSFORMER: TuiValueTransformer<string, string> = {
    fromControlValue: (value) => \`+\${value}\`,
    toControlValue: (value) => value.slice(1),
};

@Component({
    imports: [FormsModule, TuiInputPhone],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiInputPhoneOptionsProvider({valueTransformer: VALUE_TRANSFORMER})],
})
export default class Example {
    public value = '';
}
`;export{t as default};

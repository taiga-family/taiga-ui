import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSwitch, tuiSwitchOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiSwitch],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [
        tuiSwitchOptionsProvider({showIcons: false, appearance: () => 'primary'}),
    ],
})
export default class Example {
    protected value = false;
}
`;export{t as default};

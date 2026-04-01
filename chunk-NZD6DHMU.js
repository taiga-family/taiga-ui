import"./chunk-HU6DUUP4.js";var t=`import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMonth} from '@taiga-ui/cdk';
import {TuiLink} from '@taiga-ui/core';
import {TuiInputMonth} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputMonth, TuiLink],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiMonth | null = null;
    protected readonly open = signal(false);

    protected chooseTheOnlyCorrectOption(): void {
        this.value = new TuiMonth(1998, 2);
        this.open.set(false);
    }
}
`;export{t as default};

import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type MaskitoTimeMode} from '@maskito/kit';
import {TuiTime} from '@taiga-ui/cdk';
import {TuiInputTime} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputTime],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly supportedModes: readonly MaskitoTimeMode[] = [
        'HH:MM',
        'HH:MM AA',
        'HH:MM:SS',
        'HH:MM:SS AA',
        'HH:MM:SS.MSS',
        'HH:MM:SS.MSS AA',
    ];

    protected readonly initialValue = new TuiTime(23, 59, 59, 999);
}
`;export{t as default};

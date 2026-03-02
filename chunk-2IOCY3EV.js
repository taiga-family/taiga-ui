import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCell, TuiExpand, TuiLabel, TuiTitle} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiInputColor,
    tuiInputColorOptionsProvider,
    TuiSwitch,
} from '@taiga-ui/kit';
import {TuiFloatingContainer} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiExpand,
        TuiFloatingContainer,
        TuiInputColor,
        TuiLabel,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiInputColorOptionsProvider({format: 'hexa', align: 'end'})],
})
export default class Example {
    protected floating = true;
    protected secondAction = false;
    protected background = true;
    protected color = 'rgba(255, 221, 45, 0.8)';
}
`;export{i as default};

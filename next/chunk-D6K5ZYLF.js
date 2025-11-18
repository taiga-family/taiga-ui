import"./chunk-42JZD6NG.js";var e=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimesPipe} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiCell,
    tuiCrossFade,
    TuiIcon,
    TuiLabel,
    tuiSlideInTop,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiElasticContainer,
    TuiFloatingContainer,
    TuiSwitch,
} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiElasticContainer,
        TuiFloatingContainer,
        TuiIcon,
        TuiLabel,
        TuiRepeatTimesPipe,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    animations: [tuiSlideInTop, tuiCrossFade],
})
export default class Example {
    protected floating = true;
    protected additional = false;
}
`;export{e as default};

import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, tuiButtonOptionsProvider} from '@taiga-ui/core';

@Component({
    selector: `tui-button-example-5`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
    providers: [
        tuiButtonOptionsProvider({
            shape: `rounded`,
            appearance: TuiAppearance.Outline,
            size: `m`,
        }),
    ],
})
export class TuiButtonExample5 {}

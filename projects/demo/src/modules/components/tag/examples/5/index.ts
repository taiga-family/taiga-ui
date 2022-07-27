import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiTagOptionsProvider} from '@taiga-ui/kit';

@Component({
    selector: `tui-tag-example-5`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
    providers: [
        tuiTagOptionsProvider({
            size: `l`,
            status: `success`,
        }),
    ],
})
export class TuiTagExample5 {
    tag = `Hello`;
}

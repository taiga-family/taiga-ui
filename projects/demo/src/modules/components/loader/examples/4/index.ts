import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiLoaderOptionsProvider} from '@taiga-ui/core';

@Component({
    selector: `tui-loader-example-4`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
    providers: [
        tuiLoaderOptionsProvider({
            size: `l`,
            inheritColor: false,
            overlay: true,
        }),
    ],
})
export class TuiLoaderExample4 {}

import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiButtonOptionsProvider} from '@taiga-ui/experimental';

@Component({
    selector: 'tui-button-example-5',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiButtonOptionsProvider({size: 's'})],
})
export class TuiButtonExample5 {}

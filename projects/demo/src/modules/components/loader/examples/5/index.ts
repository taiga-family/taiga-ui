import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLoaderComponent, tuiLoaderOptionsProvider} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiLoaderComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [tuiLoaderOptionsProvider({size: 'xl'})],
})
export default class ExampleComponent {}

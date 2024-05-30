import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButtonDirective,
    TuiLoaderComponent,
    tuiLoaderOptionsProvider,
} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiLoaderComponent, TuiButtonDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiLoaderOptionsProvider({
            size: 'l',
            inheritColor: false,
            overlay: true,
        }),
    ],
})
export default class ExampleComponent {}

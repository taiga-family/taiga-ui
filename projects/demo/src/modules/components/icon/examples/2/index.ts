import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIconComponent, tuiIconResolverProvider} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiIconComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiIconResolverProvider(icon =>
            icon.includes('/') ? icon : `/assets/icons/${icon}.svg`,
        ),
    ],
})
export default class ExampleComponent {}

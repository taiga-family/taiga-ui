import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, tuiIconResolverProvider} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiIcon],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiIconResolverProvider((icon) =>
            icon.includes('/') ? icon : `/assets/icons/${icon}.svg`,
        ),
    ],
})
export default class Example {}

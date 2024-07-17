import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import type {IsActiveMatchOptions} from '@angular/router';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiButton, TuiIcon} from '@taiga-ui/core';
import {TuiSegmented} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiSegmented,
        FormsModule,
        TuiIcon,
        RouterLink,
        RouterLinkActive,
        TuiButton,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected selected = 'a';

    protected readonly options: IsActiveMatchOptions = {
        matrixParams: 'exact',
        queryParams: 'exact',
        paths: 'exact',
        fragment: 'exact',
    };

    protected readonly routes = DemoRoute;
}

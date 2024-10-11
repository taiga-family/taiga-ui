import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import type {TuiResponsiveDialogOptions} from '@taiga-ui/addon-mobile';
import {TuiResponsiveDialog} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiLink} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiButton, TuiResponsiveDialog, RouterLink, TuiLink],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly routes = DemoRoute;
    protected open = false;

    protected readonly options: Partial<TuiResponsiveDialogOptions> = {
        label: 'Responsive',
        size: 's',
    };
}

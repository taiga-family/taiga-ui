import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiLink} from '@taiga-ui/core';
import {TuiBreadcrumbs, tuiBreadcrumbsOptionsProvider, TuiFade} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiBreadcrumbs, TuiItem, TuiLink, NgForOf, TuiFade],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [tuiBreadcrumbsOptionsProvider({icon: '/'})],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        'Short item',
        'Very very long item that must overflow',
        'Another item',
        'One more super long item that is never gonna fit',
    ];
}

import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiHint, TuiLink, TuiTitle} from '@taiga-ui/core';
import {TuiBreadcrumbs, tuiBreadcrumbsOptionsProvider, TuiFade} from '@taiga-ui/kit';

@Component({
    imports: [RouterLink, TuiBreadcrumbs, TuiFade, TuiHint, TuiItem, TuiLink, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiBreadcrumbsOptionsProvider({icon: '/'})],
})
export default class Example {
    protected readonly fade = DemoRoute.Fade;
    protected readonly items = [
        'First item',
        'Very very long second item that must overflow',
        'Third item',
        'One last super long item that is never gonna fit',
    ];
}
`;export{i as default};

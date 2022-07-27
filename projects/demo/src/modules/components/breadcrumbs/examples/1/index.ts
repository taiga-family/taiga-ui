import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-breadcrumbs-example-1`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiBreadcrumbsExample1 {
    items = [
        {
            caption: `Selects`,
            routerLink: `/components/select`,
        },
        {
            caption: `Multi`,
            routerLink: `/components/multi-select`,
        },
        {
            caption: `With tags`,
            routerLink: `/components/multi-select`,
        },
        {
            caption: `Current`,
            routerLink: `/navigation/breadcrumbs`,
            routerLinkActiveOptions: {exact: true},
        },
    ];
}

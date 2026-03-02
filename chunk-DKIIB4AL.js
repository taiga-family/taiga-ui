import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiLink} from '@taiga-ui/core';

@Component({
    imports: [RouterLink, TuiDemo, TuiLink],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly routes = DemoRoute;
}
`;export{t as default};

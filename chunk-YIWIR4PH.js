import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiTabBar} from '@taiga-ui/addon-mobile';

@Component({
    imports: [RouterLink, RouterLinkActive, TuiTabBar],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly routes = DemoRoute;
}
`;export{t as default};

import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiTabs} from '@taiga-ui/kit';

@Component({
    imports: [RouterLink, RouterLinkActive, TuiTabs],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly routes = DemoRoute;
}
`;export{t as default};

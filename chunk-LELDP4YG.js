import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiButton, TuiIcon} from '@taiga-ui/core';
import {TuiPush} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiDemo, TuiIcon, TuiPush],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Page {
    protected readonly examples = ['Basic', 'Service', 'Directive'];
    protected heading = '';
    protected type = '';
    protected lines = 2;

    protected readonly timestampVars = ['', 'A moment ago', 123456789];
    protected timestamp = this.timestampVars[0]!;
    protected readonly routes = DemoRoute;
}
`;export{o as default};

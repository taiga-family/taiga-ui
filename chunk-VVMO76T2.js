import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {TuiDocHint} from '@demo/components/hint';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiHint} from '@taiga-ui/core';

@Component({
    imports: [TuiDemo, TuiDocHint, TuiHint],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly examples = ['Basic', 'Customizing', 'Nested', 'Auto', 'Form'];

    protected showDelay = 500;
    protected hideDelay = 200;
    protected readonly routes = DemoRoute;
}
`;export{t as default};

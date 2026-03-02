import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';

@Component({
    imports: [TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly examples = [
        'Avatar and text',
        'Icon',
        'Badge',
        'Stacking',
        'Customization',
        'Long text',
        'Selectable',
    ];

    protected readonly surface = DemoRoute.Surface;
}
`;export{t as default};

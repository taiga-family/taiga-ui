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
        'Behaviors',
        'Presets',
        'Blur',
        'Video',
        'Selectable',
        'Spacing compensation',
    ];

    protected readonly layerExample = {
        'surface.less': import('./examples/7/surface.less'),
    };

    protected readonly routes = DemoRoute;
}
`;export{t as default};

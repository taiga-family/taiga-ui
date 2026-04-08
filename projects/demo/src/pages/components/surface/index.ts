import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiTitle} from '@taiga-ui/core';

@Component({
    imports: [TuiDemo, TuiTitle],
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

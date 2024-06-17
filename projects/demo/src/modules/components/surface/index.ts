import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiLink, TuiNotificationComponent} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiLink, RouterLink, TuiNotificationComponent],
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

    protected readonly layerExample: TuiDocExample = {
        HTML: import('./examples/7/index.html?raw'),
        'surface.less': import('./examples/7/surface.less?raw'),
        LESS: import('./examples/7/index.less?raw'),
    };

    protected readonly routes = DemoRoute;
}

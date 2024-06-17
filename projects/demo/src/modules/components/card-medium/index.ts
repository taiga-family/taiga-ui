import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiLinkDirective} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDemo, RouterLink, TuiLinkDirective],
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

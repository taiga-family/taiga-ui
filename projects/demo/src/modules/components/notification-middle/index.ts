import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';

@Component({
    standalone: true,
    imports: [TuiDemo],
    templateUrl: './index.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class Page {
    protected routes = DemoRoute;
    protected readonly examples = ['Default', 'Content', 'Transition'];
}

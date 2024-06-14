import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DemoRoute} from '@demo/routes';
import {TuiLinkDirective} from '@taiga-ui/core';
import {TuiSvgComponent} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiLinkDirective, RouterLink, TuiSvgComponent],
    templateUrl: './index.html',
})
export default class ExampleComponent {
    protected readonly routes = DemoRoute;
}

import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DemoRoute} from '@demo/routes';
import {TuiLinkDirective, TuiSvgComponent} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiLinkDirective, RouterLink, TuiSvgComponent],
    templateUrl: './index.html',
})
export default class ExampleComponent {
    protected readonly docRoutes = DemoRoute;
}

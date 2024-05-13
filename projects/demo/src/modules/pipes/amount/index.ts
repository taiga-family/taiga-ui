import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemoModule} from '@demo/utils';
import {TuiLinkDirective} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDemoModule, RouterLink, TuiLinkDirective],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly examples = ['base', 'format', 'options'];
}

import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocPageModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDocPageModule, TuiLinkModule],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {}

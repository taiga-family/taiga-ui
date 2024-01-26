import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocPageModule} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    selector: 'browsers',
    imports: [TuiDocPageModule],
    templateUrl: './browsers.template.html',
    styleUrls: ['./browsers.style.less'],
    changeDetection,
})
export default class BrowsersComponent {}

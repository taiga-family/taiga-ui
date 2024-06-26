import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiSensitive} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiSensitive],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected sensitive = true;
}

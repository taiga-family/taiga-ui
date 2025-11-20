import {Component} from '@angular/core';
import {TuiDocHint} from '@demo/components/hint';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiHint} from '@taiga-ui/core';

@Component({
    imports: [TuiDemo, TuiDocHint, TuiHint],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected id = '';
}

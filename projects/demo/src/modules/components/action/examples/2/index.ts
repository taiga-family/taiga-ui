import {Component} from '@angular/core';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-action-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiActionExample2 {}

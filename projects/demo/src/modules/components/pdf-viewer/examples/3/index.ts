import {Component} from '@angular/core';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-pdf-viewer-example-3',
    templateUrl: 'index.html',
    styleUrls: ['index.less'],
    changeDetection,
    encapsulation,
})
export class TuiPdfViewerExample3 {
    open = false;
}

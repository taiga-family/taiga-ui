import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: 'doc',
    templateUrl: './doc.template.html',
    styleUrls: ['./doc.style.less'],
    changeDetection,
    encapsulation: ViewEncapsulation.None,
})
export class DocComponent {}

import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: 'doc',
    templateUrl: 'doc.template.html',
    styleUrls: ['./doc.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class DocComponent {}

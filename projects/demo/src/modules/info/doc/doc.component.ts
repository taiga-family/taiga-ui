import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: 'doc',
    templateUrl: './doc.template.html',
    changeDetection,
})
export class DocComponent {}

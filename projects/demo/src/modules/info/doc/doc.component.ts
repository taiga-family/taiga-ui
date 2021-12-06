import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import {default as docReadme} from '!!raw-loader!../../../../../addon-doc/README.md';

@Component({
    selector: 'doc',
    templateUrl: 'doc.template.html',
    styleUrls: ['./doc.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class DocComponent {
    readonly docReadme = docReadme;
}

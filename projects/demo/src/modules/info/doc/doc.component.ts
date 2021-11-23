import {Component, ViewEncapsulation} from '@angular/core';

import {default as docReadme} from '!!raw-loader!../../../../../addon-doc/README.md';

import {changeDetection} from '../../../change-detection-strategy';

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

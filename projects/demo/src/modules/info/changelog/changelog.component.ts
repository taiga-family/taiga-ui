import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

import {default as changelog} from '!!raw-loader!../../../../../../CHANGELOG.md';

@Component({
    selector: 'changelog',
    templateUrl: 'changelog.template.html',
    styleUrls: ['./changelog.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class ChangelogComponent {
    readonly changelog = changelog;
}

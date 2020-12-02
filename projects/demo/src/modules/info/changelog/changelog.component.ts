import {default as changelog} from '!!raw-loader!../../../../../../CHANGELOG.md';
import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';

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

import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'changelog',
    templateUrl: './changelog.template.html',
    styleUrls: ['./changelog.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangelogComponent {
    readonly changelog = import('../../../../../../CHANGELOG.md?raw');
}

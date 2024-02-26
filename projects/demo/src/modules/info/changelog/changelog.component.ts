import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocPageModule, TuiMarkdownPipe} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    selector: 'changelog',
    imports: [TuiDocPageModule, TuiMarkdownPipe, AsyncPipe],
    templateUrl: './changelog.template.html',
    styleUrls: ['./changelog.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangelogComponent {
    protected readonly changelog = import('../../../../../../CHANGELOG.md?raw');
}

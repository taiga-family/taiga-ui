import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDemo} from '@demo/utils';
import {TuiMarkdownPipe} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiMarkdownPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PageComponent {
    protected readonly changelog = import('../../../../../../CHANGELOG.md?raw');
}

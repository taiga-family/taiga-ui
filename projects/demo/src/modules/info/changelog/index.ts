import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDemo} from '@demo/utils';
import {TuiDocMarkdownPipe} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiDocMarkdownPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Page {
    protected readonly changelog = import('../../../../../../CHANGELOG.md?raw');
}

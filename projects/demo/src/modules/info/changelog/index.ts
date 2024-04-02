import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocPageModule, TuiMarkdownPipe} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    imports: [TuiDocPageModule, TuiMarkdownPipe, AsyncPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PageComponent {
    protected readonly changelog = import('../../../../../../CHANGELOG.md?raw');
}

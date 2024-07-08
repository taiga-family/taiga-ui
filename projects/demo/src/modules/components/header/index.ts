import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {tuiDocExampleOptionsProvider} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    imports: [TuiDemo],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
    providers: [tuiDocExampleOptionsProvider({fullsize: true})],
})
export default class Page {
    protected readonly import: TuiRawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    protected readonly template: TuiRawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );
}

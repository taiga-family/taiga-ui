import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiComponentPipe, TuiExamplePipe, TuiSetupComponent} from '@demo/utils';
import type {TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {TuiAddonDocModule, tuiDocExampleOptionsProvider} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    imports: [TuiExamplePipe, TuiComponentPipe, TuiAddonDocModule, TuiSetupComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
    providers: [tuiDocExampleOptionsProvider({fullsize: true})],
})
export default class ExampleComponent {
    protected readonly import: TuiRawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    protected readonly template: TuiRawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );
}

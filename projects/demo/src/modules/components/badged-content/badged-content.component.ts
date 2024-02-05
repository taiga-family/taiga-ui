import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample, TuiRawLoaderContent} from '@taiga-ui/addon-doc';

const content = `<tui-badge-notification tuiSlot="top">1</tui-badge-notification>
<tui-avatar
    size="l"
    [round]="radius === '50%'"
    [src]="
        'https://avatars.githubusercontent.com/u/11832552' | tuiFallbackSrc: 'tuiIconUserLarge' | async
    "
></tui-avatar>`;

@Component({
    selector: 'example-badged-content',
    templateUrl: './badged-content.template.html',
    changeDetection,
})
export class ExampleTuiBadgedContentComponent {
    readonly exampleModule: TuiRawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    readonly exampleHtml: TuiRawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );

    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
    };

    readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
    };

    readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
    };

    radiusVariants = ['0.75rem', '50%'];
    radius = this.radiusVariants[0];

    readonly content = content;
}

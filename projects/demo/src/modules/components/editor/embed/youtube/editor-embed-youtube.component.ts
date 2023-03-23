import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {defaultEditorExtensions, TUI_EDITOR_EXTENSIONS} from '@taiga-ui/addon-editor';

@Component({
    selector: 'editor-embed-youtube',
    templateUrl: './editor-embed-youtube.component.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
    ],
})
export class ExampleTuiEditorEmbedComponent {
    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
        LESS: import('./examples/1/index.less?raw'),
        'youtube-tool/youtube-tool.component.ts': import(
            './examples/1/youtube-tool/youtube-tool.component.ts?raw'
        ),
        'youtube-tool/youtube-tool.template.html': import(
            './examples/1/youtube-tool/youtube-tool.template.html?raw'
        ),
        'youtube-tool/youtube-tool.styles.less': import(
            './examples/1/youtube-tool/youtube-tool.styles.less?raw'
        ),
        'youtube-tool/youtube-tool.module.ts': import(
            './examples/1/youtube-tool/youtube-tool.module.ts?raw'
        ),
    };
}

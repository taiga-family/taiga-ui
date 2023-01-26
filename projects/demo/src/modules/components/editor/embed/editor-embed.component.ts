import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {defaultEditorExtensions, TUI_EDITOR_EXTENSIONS} from '@taiga-ui/addon-editor';

@Component({
    selector: 'editor-embed',
    templateUrl: './editor-embed.component.html',
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

    readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
        TypeScript: import('./examples/2/index.ts?raw'),
        LESS: import('./examples/2/index.less?raw'),
        'embed-tool/embed-tool.component.ts': import(
            './examples/2/embed-tool/embed-tool.component.ts?raw'
        ),
        'embed-tool/embed-tool.template.html': import(
            './examples/2/embed-tool/embed-tool.template.html?raw'
        ),
        'embed-tool/embed-tool.styles.less': import(
            './examples/2/embed-tool/embed-tool.styles.less?raw'
        ),
        'embed-tool/embed-tool.module.ts': import(
            './examples/2/embed-tool/embed-tool.module.ts?raw'
        ),
    };
}

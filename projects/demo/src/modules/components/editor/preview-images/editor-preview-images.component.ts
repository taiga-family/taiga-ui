import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {defaultEditorExtensions, TUI_EDITOR_EXTENSIONS} from '@taiga-ui/addon-editor';

@Component({
    selector: `editor-preview-images`,
    templateUrl: `./editor-preview-images.component.html`,
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
    ],
})
export class ExampleTuiEditorResizableImagesComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
        LESS: import(`./examples/1/index.less?raw`),
        'image-preview/image-preview.component.ts': import(
            `./examples/1/image-preview/image-preview.component.ts?raw`
        ),
        'image-preview/image-preview.module.ts': import(
            `./examples/1/image-preview/image-preview.module.ts?raw`
        ),
        'image-preview/image-preview.style.less': import(
            `./examples/1/image-preview/image-preview.style.less?raw`
        ),
        'image-preview.template.html': import(
            `./examples/1/image-preview/image-preview.template.html?raw`
        ),
    };
}

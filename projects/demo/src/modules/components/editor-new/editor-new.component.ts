import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {
    defaultEditorExtensions,
    defaultEditorTools,
    TUI_EDITOR_EXTENSIONS,
    TuiEditorTool,
} from '@taiga-ui/addon-editor';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-editor-new',
    templateUrl: './editor-new.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleEditorNewComponent),
        },
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
    ],
})
export class ExampleEditorNewComponent extends AbstractExampleTuiControl {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');
    readonly provideExtensions = import('./examples/import/provide-extensions.md?raw');

    readonly exampleEditorOptionsToken = import(
        './examples/import/editor-options-token.md?raw'
    );

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
        TypeScript: import('./examples/2/index.ts?raw'),
        LESS: import('./examples/2/index.less?raw'),
        'smiles-tool/emoji.extension.ts': import(
            './examples/2/smiles-tool/emoji.extension.ts?raw'
        ),
        'smiles-tool/smiles-tool.component.ts': import(
            './examples/2/smiles-tool/smiles-tool.component.ts?raw'
        ),
        'smiles-tool/smiles-tool.template.html': import(
            './examples/2/smiles-tool/smiles-tool.template.html?raw'
        ),
        'smiles-tool/smiles-tool.styles.less': import(
            './examples/2/smiles-tool/smiles-tool.styles.less?raw'
        ),
        'smiles-tool/smiles-tool.module.ts': import(
            './examples/2/smiles-tool/smiles-tool.module.ts?raw'
        ),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
        'image-preview/image-preview.component.ts': import(
            './examples/4/image-preview/image-preview.component.ts?raw'
        ),
        'image-preview/image-preview.module.ts': import(
            './examples/4/image-preview/image-preview.module.ts?raw'
        ),
        'image-preview/image-preview.style.less': import(
            './examples/4/image-preview/image-preview.style.less?raw'
        ),
        'image-preview.template.html': import(
            './examples/4/image-preview/image-preview.template.html?raw'
        ),
    };

    readonly example7: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/7/index.ts`),
        HTML: import(`!!raw-loader!./examples/7/index.html`),
        LESS: import(`!!raw-loader!./examples/7/index.less`),
        './image-loader.ts': import(`!!raw-loader!./examples/7/image-loader`),
        './imgbb.service.ts': import(`!!raw-loader!./examples/7/imgbb.service`),
    };

    readonly control = new FormControl();

    readonly toolsVariants: readonly TuiEditorTool[][] = [
        defaultEditorTools,
        [
            TuiEditorTool.Bold,
            TuiEditorTool.Italic,
            TuiEditorTool.Strikethrough,
            TuiEditorTool.HR,
        ],
    ];

    tools = this.toolsVariants[0];
}

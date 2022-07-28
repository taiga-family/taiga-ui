import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {
    defaultEditorExtensions,
    defaultEditorTools,
    tiptapEditorStyles,
    TUI_EDITOR_EXTENSIONS,
    TUI_EDITOR_STYLES,
    TuiEditorTool,
} from '@taiga-ui/addon-editor';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: `example-tui-editor-new`,
    templateUrl: `./editor-new.template.html`,
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
        {
            provide: TUI_EDITOR_STYLES,
            useValue: tiptapEditorStyles,
        },
    ],
})
export class ExampleEditorNewComponent extends AbstractExampleTuiControl {
    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);
    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);
    readonly provideExtensions = import(
        `!!raw-loader!./examples/import/provide-extensions.md`
    );

    readonly exampleEditorOptionsToken = import(
        `!!raw-loader!./examples/import/editor-options-token.md`
    );

    readonly example1: TuiDocExample = {
        HTML: import(`!!raw-loader!./examples/1/index.html`),
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        LESS: import(`!!raw-loader!./examples/1/index.less`),
        'smiles-tool/emoji.extension.ts': import(
            `!!raw-loader!./examples/1/smiles-tool/emoji.extension.ts`
        ),
        'smiles-tool/smiles-tool.component.ts': import(
            `!!raw-loader!./examples/1/smiles-tool/smiles-tool.component.ts`
        ),
        'smiles-tool/smiles-tool.template.html': import(
            `!!raw-loader!./examples/1/smiles-tool/smiles-tool.template.html`
        ),
        'smiles-tool/smiles-tool.styles.less': import(
            `!!raw-loader!./examples/1/smiles-tool/smiles-tool.styles.less`
        ),
        'smiles-tool/smiles-tool.module.ts': import(
            `!!raw-loader!./examples/1/smiles-tool/smiles-tool.module.ts`
        ),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/2/index.ts`),
        HTML: import(`!!raw-loader!./examples/2/index.html`),
        LESS: import(`!!raw-loader!./examples/2/index.less`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/3/index.ts`),
        HTML: import(`!!raw-loader!./examples/3/index.html`),
        LESS: import(`!!raw-loader!./examples/3/index.less`),
        'image-preview/image-preview.component.ts': import(
            `!!raw-loader!./examples/3/image-preview/image-preview.component.ts`
        ),
        'image-preview/image-preview.module.ts': import(
            `!!raw-loader!./examples/3/image-preview/image-preview.module.ts`
        ),
        'image-preview/image-preview.style.less': import(
            `!!raw-loader!./examples/3/image-preview/image-preview.style.less`
        ),
        'image-preview.template.html': import(
            `!!raw-loader!./examples/3/image-preview/image-preview.template.html`
        ),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/4/index.ts`),
        HTML: import(`!!raw-loader!./examples/4/index.html`),
        LESS: import(`!!raw-loader!./examples/4/index.less`),
        'legacy-editor.ts': import(
            `!!raw-loader!./../../../../../addon-editor/utils/legacy-converter.ts`
        ),
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

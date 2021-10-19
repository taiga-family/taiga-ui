import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Less} from '!!raw-loader!./examples/1/index.less';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';

import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Less} from '!!raw-loader!./examples/2/index.less';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as exampleSmilesToolComponent} from '!!raw-loader!./examples/2/smiles-tool/smiles-tool.component.ts';
import {default as exampleSmilesToolModule} from '!!raw-loader!./examples/2/smiles-tool/smiles-tool.module.ts';
import {default as exampleSmilesToolStyles} from '!!raw-loader!./examples/2/smiles-tool/smiles-tool.styles.less';
import {default as exampleSmilesToolTemplate} from '!!raw-loader!./examples/2/smiles-tool/smiles-tool.template.html';

import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {
    defaultEditorExtensions,
    defaultEditorTools,
    TUI_EDITOR_EXTENSIONS,
    TuiEditorTool,
} from '@taiga-ui/addon-editor';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';
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
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };

    readonly example2 = {
        HTML: example2Html,
        TypeScript: example2Ts,
        LESS: example2Less,
        'smiles-tool/smiles-tool.component.ts': exampleSmilesToolComponent,
        'smiles-tool/smiles-tool.template.html': exampleSmilesToolTemplate,
        'smiles-tool/smiles-tool.styles.less': exampleSmilesToolStyles,
        'smiles-tool/smiles-tool.module.ts': exampleSmilesToolModule,
    };

    readonly control = new FormControl();

    readonly toolsVariants: ReadonlyArray<TuiEditorTool[]> = [
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

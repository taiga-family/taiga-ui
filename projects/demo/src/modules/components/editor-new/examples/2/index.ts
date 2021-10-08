import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';
import {TuiEditor} from '@taiga-ui/addon-editor/abstract';
import {tuiPure} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

export function importStarterKit(): Promise<unknown> {
    return import('@tiptap/starter-kit').then(m => m.default);
}

@Component({
    selector: 'tui-editor-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [importStarterKit()],
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiEditorNewExample2 {
    readonly builtInTools = [TuiEditorTool.Undo];
    /* More smiles: https://www.w3schools.com/charsets/ref_emoji.asp */
    readonly smiles = [
        '&#129409;',
        '&#9200;',
        '&#9749;',
        '&#9989;',
        '&#10060;',
        '&#10071;',
        '&#10133;',
        '&#128064;',
        '&#128070;',
        '&#128076;',
        '&#128522;',
        '&#128640;',
    ];
    readonly control = new FormControl('', Validators.required);

    @tuiPure
    getTools(
        builtInTools: TuiEditorTool[],
        ...customTools: PolymorpheusContent[]
    ): Array<TuiEditorTool | PolymorpheusContent> {
        return [...builtInTools, ...customTools];
    }

    insertSmile(editor: TuiEditor, smile: string): void {
        editor.getOriginTiptapEditor().chain().focus().insertContent(`${smile} `).run();
    }
}

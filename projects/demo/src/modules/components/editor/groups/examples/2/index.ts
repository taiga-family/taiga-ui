import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';
import {TuiDestroyService} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-editor-groups-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [
        TuiDestroyService,
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@taiga-ui/addon-editor/extensions/starter-kit').then(
                    ({StarterKit}) => StarterKit,
                ),
                import('@taiga-ui/addon-editor/extensions/group').then(
                    ({createGroupExtension}) =>
                        createGroupExtension({
                            nested: false,
                            draggable: false,
                            createOnEnter: true,
                            // @note: you can override css styles with your own classes
                            groupNodeClass: 'filled-group',
                            groupPointerNodeClass: '', // anyway element doesn't exists if `draggable` is false
                        }),
                ),
                import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),
                import('@taiga-ui/addon-editor/extensions/background-color').then(
                    ({BackgroundColor}) => BackgroundColor,
                ),
            ],
        },
    ],
    changeDetection,
})
export class TuiEditorGroupExample2 {
    readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Group,
        TuiEditorTool.Hilite,
    ];

    control = new FormControl('');

    constructor() {
        this.control.patchValue(
            '<div data-type="group" style="background-color: blue"><p>This is a boring paragraph.</p></div><div data-type="group"><p>And another paragraph.</p></div><div data-type="group" style="background-color: green"><p>Let’s finish with a boring paragraph.</p></div>',
        );
    }
}

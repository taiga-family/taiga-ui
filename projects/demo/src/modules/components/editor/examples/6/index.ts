import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';
import {TuiDestroyService} from '@taiga-ui/cdk';

@Component({
    selector: `tui-editor-example-6`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    providers: [
        TuiDestroyService,
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import(`@tiptap/starter-kit`).then(({default: module}) => module),
                import(`@taiga-ui/addon-editor/extensions/group`).then(
                    ({createGroupExtension}) =>
                        createGroupExtension({
                            draggable: false,

                            // @note: you can override css styles with your own classes
                            groupNodeClass: `group`,
                            groupPointerNodeClass: ``, // anyway element doesn't exists if `draggable` is false
                        }),
                ),
            ],
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiEditorExample6 {
    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Group];

    control = new FormControl(``);

    constructor() {
        this.control.patchValue(
            `<p>This is a boring paragraph.</p><div data-type="group"><p>And another paragraph.</p><div data-type="group"><p>And a nested paragraph.</p><div data-type="group"><p>But can we go deeper?</p></div></div></div><p>Let’s finish with a boring paragraph.</p>`,
        );
    }
}

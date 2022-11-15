import {Component, Inject, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TUI_ATTACH_FILES_LOADER,
    TUI_EDITOR_EXTENSIONS,
    TuiEditorAttachedFile,
    TuiEditorComponent,
    TuiEditorTool,
} from '@taiga-ui/addon-editor';
import {forkJoin} from 'rxjs';
import {finalize} from 'rxjs/operators';

import {FileIoService} from './filesio.service';

@Component({
    selector: `tui-editor-example-9`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import(`@taiga-ui/addon-editor/extensions/starter-kit`).then(
                    ({StarterKit}) => StarterKit,
                ),
                import(`@tiptap/extension-text-style`).then(({TextStyle}) => TextStyle),
                import(`@taiga-ui/addon-editor/extensions/link`).then(
                    ({TuiLink}) => TuiLink,
                ),
                import(`@taiga-ui/addon-editor/extensions/jump-anchor`).then(
                    ({TuiJumpAnchor}) => TuiJumpAnchor,
                ),
                import(`@taiga-ui/addon-editor/extensions/file-link`).then(
                    ({TuiFileLink}) => TuiFileLink,
                ),
            ],
        },
        {
            provide: TUI_ATTACH_FILES_LOADER,
            deps: [FileIoService],
            useFactory: (service: FileIoService) => (files: File[]) => {
                service.loading$.next(true);

                return forkJoin(files.map(file => service.upload(file))).pipe(
                    finalize(() => service.loading$.next(false)),
                );
            },
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiEditorExample9 {
    @ViewChild(TuiEditorComponent)
    private readonly wysiwyg?: TuiEditorComponent;

    readonly builtInTools = [
        TuiEditorTool.Undo,
        TuiEditorTool.Link,
        TuiEditorTool.Attach,
    ];

    control = new FormControl(``);

    constructor(@Inject(FileIoService) readonly fileIoService: FileIoService) {}

    /**
     * @note: attach file as a link
     * you can also implement your own file mapping mechanism
     * because you have all the necessary data for this
     */
    attach(files: TuiEditorAttachedFile[]): void {
        files.forEach(file => this.wysiwyg?.editor?.setFileLink(file));
    }
}

import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    forwardRef,
    Inject,
    OnInit,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {Editor} from '@tiptap/core';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import TextAlign from '@tiptap/extension-text-align';
import {TextStyle} from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';
import {defaultEditorTools} from '../../../addon-editor/constants';
import {AbstractTuiControl, TUI_FOCUSABLE_ITEM_ACCESSOR} from '../../../cdk';
import {BackgroundColor} from '../../extensions/background-color';
import {FontColor} from '../../extensions/font-color';

@Component({
    selector: 'tui-editor-new',
    templateUrl: './editor-new.component.html',
    styleUrls: ['./editor-new.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiEditorNewComponent),
        },
    ],
})
export class TuiEditorNewComponent extends AbstractTuiControl<string> implements OnInit {
    @ViewChild('editorRef', {static: true})
    elementRef?: ElementRef<HTMLElement>;

    @ViewChild('.ProseMirror', {static: true})
    proseMirrorRef?: ElementRef<HTMLElement>;

    editor?: Editor;

    tools = defaultEditorTools;

    editorFocused = false;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    ) {
        super(control, changeDetectorRef);
    }

    ngOnInit() {
        this.editor = new Editor({
            element: this.elementRef?.nativeElement,
            extensions: [
                StarterKit.configure({
                    heading: {
                        levels: [1, 2, 4, 5, 6],
                    },
                }),
                TextAlign.configure({
                    types: ['heading', 'paragraph'],
                }),
                TextStyle,
                Underline,
                Subscript,
                Superscript,
                FontColor,
                BackgroundColor,
                Table.configure({
                    resizable: true,
                }),
                TableRow,
                TableCell,
                TableHeader,
            ],
            content: '<p>Hello World!</p>',
        });
    }

    protected getFallbackValue(): string {
        return '';
    }

    get focused(): boolean {
        return !!this.editor?.isFocused;
    }
}

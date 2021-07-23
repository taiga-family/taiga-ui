import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    forwardRef,
    Inject,
    Input,
    OnInit,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {BackgroundColor} from '@taiga-ui/addon-editor-new/components/extensions';
import {FontColor} from '@taiga-ui/addon-editor-new/components/extensions';
import {TuiToolbarComponent} from '@taiga-ui/addon-editor-new/components/toolbar';
import {Editor} from '@tiptap/core';
import Image from '@tiptap/extension-image';
import {Link} from '@tiptap/extension-link';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import {TextAlign} from '@tiptap/extension-text-align';
import {TextStyle} from '@tiptap/extension-text-style';
import {Underline} from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';
import {
    AbstractTuiControl,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiBooleanHandler,
    tuiDefaultProp,
} from '../../../cdk';
import {defaultEditorTools} from '../../constants';

const EMPTY_PARAGRAPH = '<p></p>';

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
    @Input()
    @tuiDefaultProp()
    exampleText = '';

    @ViewChild('editorRef', {static: true})
    elementRef?: ElementRef<HTMLElement>;

    @ViewChild(TuiToolbarComponent)
    toolbar?: TuiToolbarComponent;

    editor: Editor | null = null;

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
                        levels: [1, 2],
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
                Image.configure({inline: true}),
                Link.configure({
                    openOnClick: false,
                }),
                BackgroundColor,
                Table.configure({
                    resizable: true,
                }),
                TableRow,
                TableCell,
                TableHeader,
            ],
        });

        this.editor.on('update', () => {
            if (this.editor?.getHTML() === EMPTY_PARAGRAPH) {
                this.updateValue('');

                return;
            }

            this.updateValue(this.editor?.getHTML() || '');
        });
        this.editor.on('transaction', () => this.changeDetectorRef.markForCheck());
    }

    protected getFallbackValue(): string {
        return '';
    }

    get focused(): boolean {
        return !!this.editor?.isFocused || (!!this.toolbar && this.toolbar.focused);
    }

    get dropdownSelectionHandler(): TuiBooleanHandler<any> {
        return () => !!this.editor?.isActive('link');
    }

    get placeholderRaised(): boolean {
        return (this.computedFocused && !this.readOnly) || this.hasValue;
    }

    get hasExampleText(): boolean {
        return (
            !!this.exampleText && this.computedFocused && !this.hasValue && !this.readOnly
        );
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    private get hasValue(): boolean {
        return !!this.value;
    }
}

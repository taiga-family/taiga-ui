import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    inject,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {type TuiSizeL, type TuiSizeS, type TuiSizeXS} from '@taiga-ui/core/types';
import {tuiStringHashToHsl} from '@taiga-ui/core/utils/format';
import {tuiSizeBigger} from '@taiga-ui/core/utils/miscellaneous';
import {type TuiStatus} from '@taiga-ui/legacy/utils';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TUI_TAG_OPTIONS} from './tag.options';

/**
 * @deprecated: drop in v5.0 use {@link TuiChip}
 * https://taiga-ui.dev/components/chip
 */
@Component({
    standalone: false,
    selector: 'tui-tag, a[tuiTag], button[tuiTag]',
    templateUrl: './tag.template.html',
    styleUrls: ['./tag.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-size]': 'size',
        '[attr.data-status]': 'status',
        '[class._editing]': 'editing',
        '[class._hoverable]': 'hoverable',
        '[class._autocolor]': 'autoColor',
        '[class._disabled]': 'disabled',
        '(keydown.delete)': 'remove($event)',
        '(keydown.backspace)': 'remove($event)',
        '(keydown.enter)': 'edit($event)',
    },
})
export class TuiTagComponent {
    private readonly el = tuiInjectElement();
    private readonly options = inject(TUI_TAG_OPTIONS);

    protected editing = false;

    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected editedText: string | null = null;

    @Input()
    public value = '';

    @Input()
    public editable = false;

    @Input()
    public separator: RegExp | string = ',';

    @Input()
    public maxLength: number | null = null;

    @Input()
    public size: TuiSizeL | TuiSizeS = this.options.size;

    @Input()
    public showLoader = false;

    @Input()
    public status: TuiStatus = this.options.status;

    @Input()
    public hoverable = false;

    @Input()
    public removable = false;

    @Input()
    public disabled = false;

    @Input()
    public autoColor: boolean = this.options.autoColor;

    @Input()
    public leftContent: PolymorpheusContent;

    @Output()
    public readonly edited = new EventEmitter<string>();

    @ViewChild('input', {read: ElementRef})
    protected set input(input: ElementRef<HTMLInputElement>) {
        if (input) {
            input.nativeElement.focus();
        }
    }

    protected get backgroundColor(): string | null {
        return this.autoColor ? tuiStringHashToHsl(this.value) : null;
    }

    protected get canRemove(): boolean {
        return this.removable && !this.disabled && !this.showLoader;
    }

    protected get displayText(): string {
        return this.editedText ?? this.value;
    }

    protected get loaderSize(): TuiSizeXS {
        return tuiSizeBigger(this.size) ? 's' : 'xs';
    }

    protected edit(event: Event): void {
        if (!this.canEdit) {
            return;
        }

        event.preventDefault();
        this.editing = true;
        this.editedText = this.value;
    }

    protected remove(event: Event): void {
        if (!this.canRemove) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();
        this.edited.emit('');
    }

    protected onInput(value: string): void {
        const newTags = value.split(this.separator);

        if (newTags.length > 1) {
            this.save(String(newTags));

            return;
        }

        this.editedText = value;
    }

    protected onKeyDown(event: KeyboardEvent): void {
        event.stopPropagation();

        switch (event.key.toLowerCase()) {
            case 'enter':
                event.preventDefault();
                this.save(this.editedText || '');
                break;
            case 'esc':
            case 'escape':
                event.preventDefault();
                this.stopEditing();
                this.el.focus();
                break;
            default:
                break;
        }
    }

    protected onBlur(): void {
        if (this.editedText !== null) {
            this.save(this.editedText);
        }
    }

    private get canEdit(): boolean {
        return this.editable && !this.disabled && !this.showLoader;
    }

    private stopEditing(): void {
        this.editing = false;
        this.editedText = null;
    }

    private save(value: string): void {
        this.stopEditing();
        this.edited.emit(value.trim());
    }
}

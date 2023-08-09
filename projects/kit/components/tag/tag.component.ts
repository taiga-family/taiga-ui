import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    Inject,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import {
    MODE_PROVIDER,
    TUI_COMMON_ICONS,
    TUI_MODE,
    TuiBrightness,
    TuiCommonIcons,
    tuiSizeBigger,
    TuiSizeL,
    TuiSizeS,
    TuiSizeXS,
} from '@taiga-ui/core';
import {TuiStatus} from '@taiga-ui/kit/types';
import {tuiStringHashToHsl} from '@taiga-ui/kit/utils/format';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

import {TUI_TAG_OPTIONS, TuiTagOptions} from './tag.options';

@Component({
    selector: 'tui-tag, a[tuiTag], button[tuiTag]',
    templateUrl: './tag.template.html',
    styleUrls: ['./tag.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiTagComponent {
    // TODO: Possibly implement standard focus mechanisms and outline
    @Input()
    value = '';

    @Input()
    editable = false;

    @Input()
    separator: RegExp | string = ',';

    @Input()
    maxLength: number | null = null;

    @Input()
    @HostBinding('attr.data-size')
    size: TuiSizeL | TuiSizeS = this.options.size;

    @Input()
    showLoader = false;

    @Input()
    @HostBinding('attr.data-status')
    status: TuiStatus = this.options.status;

    @Input()
    @HostBinding('class._hoverable')
    hoverable = false;

    @Input()
    removable = false;

    @Input()
    @HostBinding('class._disabled')
    disabled = false;

    @Input()
    @HostBinding('class._autocolor')
    autoColor: boolean = this.options.autoColor;

    @Input()
    leftContent: PolymorpheusContent;

    @Output()
    readonly edited = new EventEmitter<string>();

    @HostBinding('class._editing')
    editing = false;

    editedText: string | null = null;

    @ViewChild('input', {read: ElementRef})
    set input(input: ElementRef<HTMLInputElement>) {
        if (input) {
            input.nativeElement.focus();
        }
    }

    constructor(
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_TAG_OPTIONS) private readonly options: TuiTagOptions,
        @Inject(TUI_COMMON_ICONS) readonly icons: TuiCommonIcons,
    ) {}

    get backgroundColor(): string | null {
        return this.autoColor ? tuiStringHashToHsl(this.value) : null;
    }

    get canRemove(): boolean {
        return this.removable && !this.disabled && !this.showLoader;
    }

    get displayText(): string {
        return this.editedText === null ? this.value : this.editedText;
    }

    get loaderSize(): TuiSizeXS {
        return tuiSizeBigger(this.size) ? 's' : 'xs';
    }

    @HostListener('keydown.enter', ['$event'])
    edit(event: Event): void {
        if (!this.canEdit) {
            return;
        }

        event.preventDefault();
        this.editing = true;
        this.editedText = this.value;
    }

    @HostListener('keydown.delete', ['$event'])
    @HostListener('keydown.backspace', ['$event'])
    remove(event: Event): void {
        if (!this.canRemove) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();
        this.edited.emit('');
    }

    onInput(value: string): void {
        const newTags = value.split(this.separator);

        if (newTags.length > 1) {
            this.save(String(newTags));

            return;
        }

        this.editedText = value;
    }

    onKeyDown(event: KeyboardEvent): void {
        event.stopPropagation();

        switch (event.key.toLowerCase()) {
            case 'enter':
                event.preventDefault();
                this.save(this.editedText || '');
                break;
            case 'escape':
            case 'esc':
                event.preventDefault();
                this.stopEditing();
                this.el.nativeElement.focus();
                break;
            default:
                break;
        }
    }

    onBlur(): void {
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

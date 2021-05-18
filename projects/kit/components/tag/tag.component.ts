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
import {setNativeFocused, tuiDefaultProp} from '@taiga-ui/cdk';
import {
    MODE_PROVIDER,
    sizeBigger,
    TUI_MODE,
    TuiBrightness,
    TuiSizeL,
    TuiSizeS,
    TuiSizeXS,
} from '@taiga-ui/core';
import {TuiStatus} from '@taiga-ui/kit/enums';
import {stringHashToHsl} from '@taiga-ui/kit/utils/format';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

export const ALLOWED_SPACE_REGEXP = new RegExp(`\,|[\\s]`);

@Component({
    selector: 'tui-tag, a[tuiTag]',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './tag.template.html',
    styleUrls: ['./tag.style.less'],
    providers: [MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiTagComponent {
    // TODO: Possibly implement standard focus mechanisms and outline
    @Input()
    @tuiDefaultProp()
    value = '';

    @Input()
    @tuiDefaultProp()
    editable = false;

    @Input()
    @tuiDefaultProp()
    allowSpaces = true;

    @Input()
    @tuiDefaultProp()
    maxLength: number | null = null;

    @Input()
    @HostBinding('attr.data-tui-host-size')
    @tuiDefaultProp()
    size: TuiSizeS | TuiSizeL = 'm';

    @Input()
    @tuiDefaultProp()
    showLoader = false;

    @Input()
    @HostBinding('attr.data-tui-host-status')
    @tuiDefaultProp()
    status: TuiStatus = TuiStatus.Default;

    @Input()
    @HostBinding('class._hoverable')
    @tuiDefaultProp()
    hoverable = false;

    @Input()
    @tuiDefaultProp()
    removable = false;

    @Input()
    @HostBinding('class._disabled')
    @tuiDefaultProp()
    disabled = false;

    @Input()
    @HostBinding('class._autocolor')
    @tuiDefaultProp()
    autoColor = false;

    @Input()
    @tuiDefaultProp()
    leftContent: PolymorpheusContent | null = null;

    @Output()
    readonly edited = new EventEmitter<string>();

    @HostBinding('class._editing')
    editing = false;

    editedText: string | null = null;

    @ViewChild('input', {read: ElementRef})
    set input(input: ElementRef<HTMLInputElement>) {
        if (input) {
            setNativeFocused(input.nativeElement);
        }
    }

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
    ) {}

    get backgroundColor(): string | null {
        return this.autoColor ? stringHashToHsl(this.value) : null;
    }

    get canRemove(): boolean {
        return this.removable && !this.disabled && !this.showLoader;
    }

    get displayText(): string {
        return this.editedText === null ? this.value : this.editedText;
    }

    get loaderSize(): TuiSizeXS {
        return sizeBigger(this.size) ? 's' : 'xs';
    }

    @HostBinding('class._has-icon')
    get hasIcon(): boolean {
        return this.showLoader || this.removable;
    }

    @HostListener('keydown.enter', ['$event'])
    edit(event: Event) {
        if (!this.canEdit) {
            return;
        }

        event.preventDefault();
        this.editing = true;
        this.editedText = this.value;
    }

    @HostListener('keydown.delete', ['$event'])
    @HostListener('keydown.backspace', ['$event'])
    remove(event: Event) {
        if (!this.canRemove) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();
        this.edited.emit('');
    }

    onInput(value: string) {
        const newTags = this.allowSpaces
            ? value.split(',')
            : value.split(ALLOWED_SPACE_REGEXP);

        if (newTags.length > 1) {
            this.save(newTags.toString());

            return;
        }

        this.editedText = value;
    }

    onKeyDown(event: KeyboardEvent) {
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
                setNativeFocused(this.elementRef.nativeElement);
                break;
            default:
                break;
        }
    }

    onBlur() {
        if (this.editedText !== null) {
            this.save(this.editedText);
        }
    }

    private get canEdit(): boolean {
        return this.editable && !this.disabled && !this.showLoader;
    }

    private stopEditing() {
        this.editing = false;
        this.editedText = null;
    }

    private save(value: string) {
        this.stopEditing();
        this.edited.emit(value.trim());
    }
}

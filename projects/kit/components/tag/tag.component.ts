import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    inject,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import {
    MODE_PROVIDER,
    TUI_COMMON_ICONS,
    TUI_MODE,
    tuiSizeBigger,
    TuiSizeL,
    TuiSizeS,
    TuiSizeXS,
} from '@taiga-ui/core';
import {TuiStatus} from '@taiga-ui/kit/types';
import {tuiStringHashToHsl} from '@taiga-ui/kit/utils/format';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_TAG_OPTIONS} from './tag.options';

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
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly options = inject(TUI_TAG_OPTIONS);

    @HostBinding('class._editing')
    protected editing = false;

    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly mode$ = inject(TUI_MODE);
    protected editedText: string | null = null;

    // TODO: Possibly implement standard focus mechanisms and outline
    @Input()
    public value = '';

    @Input()
    public editable = false;

    @Input()
    public separator: RegExp | string = ',';

    @Input()
    public maxLength: number | null = null;

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeL | TuiSizeS = this.options.size;

    @Input()
    public showLoader = false;

    @Input()
    @HostBinding('attr.data-status')
    public status: TuiStatus = this.options.status;

    @Input()
    @HostBinding('class._hoverable')
    public hoverable = false;

    @Input()
    public removable = false;

    @Input()
    @HostBinding('class._disabled')
    public disabled = false;

    @Input()
    @HostBinding('class._autocolor')
    public autoColor: boolean = this.options.autoColor;

    @Input()
    public leftContent: PolymorpheusContent;

    @Output()
    public readonly edited = new EventEmitter<string>();

    @ViewChild('input', {read: ElementRef})
    public set input(input: ElementRef<HTMLInputElement>) {
        if (input) {
            input.nativeElement.focus();
        }
    }

    public get backgroundColor(): string | null {
        return this.autoColor ? tuiStringHashToHsl(this.value) : null;
    }

    public get canRemove(): boolean {
        return this.removable && !this.disabled && !this.showLoader;
    }

    public get displayText(): string {
        return this.editedText === null ? this.value : this.editedText;
    }

    public get loaderSize(): TuiSizeXS {
        return tuiSizeBigger(this.size) ? 's' : 'xs';
    }

    @HostListener('keydown.enter', ['$event'])
    public edit(event: Event): void {
        if (!this.canEdit) {
            return;
        }

        event.preventDefault();
        this.editing = true;
        this.editedText = this.value;
    }

    @HostListener('keydown.delete', ['$event'])
    @HostListener('keydown.backspace', ['$event'])
    public remove(event: Event): void {
        if (!this.canRemove) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();
        this.edited.emit('');
    }

    public onInput(value: string): void {
        const newTags = value.split(this.separator);

        if (newTags.length > 1) {
            this.save(String(newTags));

            return;
        }

        this.editedText = value;
    }

    public onKeyDown(event: KeyboardEvent): void {
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
                this.el.focus();
                break;
            default:
                break;
        }
    }

    public onBlur(): void {
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

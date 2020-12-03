import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {DomSanitizer, SafeValue} from '@angular/platform-browser';
import {TUI_IS_MOBILE, tuiDefaultProp, tuiPure} from '@taiga-ui/cdk';
import {TuiSizeL} from '@taiga-ui/core';
import {TuiFileState} from '@taiga-ui/kit/enums';
import {TuiFileLike} from '@taiga-ui/kit/interfaces';
import {TUI_DIGITAL_INFORMATION_UNITS, TUI_FILE_TEXTS} from '@taiga-ui/kit/tokens';
import {formatSize} from '@taiga-ui/kit/utils/files';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

// @dynamic
@Component({
    selector: 'tui-file',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './file.template.html',
    styleUrls: ['./file.style.less'],
})
export class TuiFileComponent {
    @Input()
    @tuiDefaultProp()
    file: TuiFileLike = {name: ''};

    @Input()
    @tuiDefaultProp()
    state: TuiFileState = TuiFileState.Normal;

    @Input()
    @tuiDefaultProp()
    size: TuiSizeL = 'm';

    @Input()
    @tuiDefaultProp()
    allowDelete = true;

    @Input()
    @tuiDefaultProp()
    showSize = true;

    @Output()
    readonly fileRemoved = new EventEmitter<void>();

    @HostBinding('class._focused')
    focused = false;

    constructor(
        @Inject(TUI_IS_MOBILE) readonly isMobile: boolean,
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
        @Inject(TUI_FILE_TEXTS)
        readonly fileTexts: Record<'loadingError' | 'preview' | 'remove', string>,
        @Inject(TUI_DIGITAL_INFORMATION_UNITS)
        private readonly units: [string, string, string],
    ) {}

    get preview(): SafeValue {
        return this.isBig ? this.createPreview(this.file, this.sanitizer) : '';
    }

    get isBig(): boolean {
        return this.size === 'l';
    }

    get isLoading(): boolean {
        return this.state === TuiFileState.Loading;
    }

    get isError(): boolean {
        return this.state === TuiFileState.Error;
    }

    get isDeleted(): boolean {
        return this.state === TuiFileState.Deleted;
    }

    get icon(): string {
        if (this.state === TuiFileState.Normal && this.isBig) {
            return 'tuiIconDefaultDocLarge';
        }

        switch (this.state) {
            case TuiFileState.Deleted:
                return 'tuiIconTrashLarge';
            case TuiFileState.Error:
                return 'tuiIconAlertCircleLarge';
            default:
                return 'tuiIconCheckCircleLarge';
        }
    }

    @HostBinding('class._link')
    get src(): string {
        return this.file.src || '';
    }

    get name(): string {
        return this.file.name.split('.').slice(0, -1).join('.');
    }

    get type(): string {
        return '.' + this.file.name.split('.').pop() || '';
    }

    get fileSize(): string | null {
        return formatSize(this.units, this.file.size);
    }

    get content(): PolymorpheusContent {
        return this.state === TuiFileState.Error && !this.file.content
            ? this.fileTexts['loadingError']
            : this.file.content || '';
    }

    onRemoveClick() {
        this.fileRemoved.emit();
    }

    onFocusVisible(focusVisible: boolean) {
        this.focused = focusVisible;
    }

    @tuiPure
    private createPreview(file: TuiFileLike, sanitizer: DomSanitizer): SafeValue {
        if (file.src) {
            return file.src;
        }

        if (file instanceof File && file.type && file.type.startsWith('image/')) {
            return sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
        }

        return '';
    }
}

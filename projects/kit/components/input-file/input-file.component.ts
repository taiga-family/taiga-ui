import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    Inject,
    Input,
    Optional,
    Output,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiNullableControl,
    EMPTY_ARRAY,
    isNativeFocused,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TUI_IS_MOBILE,
    tuiDefaultProp,
    TuiDestroyService,
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
    tuiPure,
} from '@taiga-ui/cdk';
import {
    MODE_PROVIDER,
    TUI_MODE,
    TuiAppearance,
    TuiBrightness,
    TuiSizeL,
} from '@taiga-ui/core';
import {TuiFileLike} from '@taiga-ui/kit/interfaces';
import {TUI_DIGITAL_INFORMATION_UNITS, TUI_INPUT_FILE_TEXTS} from '@taiga-ui/kit/tokens';
import {formatSize} from '@taiga-ui/kit/utils/files';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

const DEFAULT_MAX_SIZE = 30 * 1000 * 1000; // 30 MB

// @dynamic
@Component({
    selector: 'tui-input-file',
    templateUrl: './input-file.template.html',
    styleUrls: ['./input-file.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiInputFileComponent),
        },
        TuiDestroyService,
        MODE_PROVIDER,
    ],
})
export class TuiInputFileComponent
    extends AbstractTuiNullableControl<TuiFileLike | ReadonlyArray<TuiFileLike>>
    implements TuiFocusableElementAccessor {
    @Input()
    @tuiDefaultProp()
    link: PolymorpheusContent = this.inputFileTexts['defaultLinkSingle'];

    @Input()
    @tuiDefaultProp()
    label: PolymorpheusContent = this.inputFileTexts['defaultLabelSingle'];

    @Input()
    @tuiDefaultProp()
    accept = '';

    @Input()
    @tuiDefaultProp()
    multiple = false;

    @Input()
    @tuiDefaultProp()
    size: TuiSizeL = 'm';

    @Input()
    @tuiDefaultProp()
    showSize = true;

    @Input()
    @tuiDefaultProp()
    maxFileSize = DEFAULT_MAX_SIZE;

    @Input()
    @tuiDefaultProp()
    loadingFiles: ReadonlyArray<TuiFileLike> = [];

    @Input()
    @tuiDefaultProp()
    rejectedFiles: ReadonlyArray<TuiFileLike> = [];

    @Output()
    rejectedFilesChange = new EventEmitter<ReadonlyArray<TuiFileLike>>();

    @ViewChild('input')
    readonly input?: ElementRef<HTMLInputElement>;

    readonly isMobile: boolean;

    private dataTransfer: DataTransfer | null = null;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef)
        changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_IS_MOBILE)
        isMobile: boolean,
        @Inject(TUI_INPUT_FILE_TEXTS)
        readonly inputFileTexts: Record<
            | 'defaultLabelSingle'
            | 'defaultLabelMultiple'
            | 'defaultLinkSingle'
            | 'defaultLinkMultiple'
            | 'maxSizeRejectionReason'
            | 'formatRejectionReason'
            | 'drop'
            | 'dropMultiple',
            string
        >,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_DIGITAL_INFORMATION_UNITS)
        private readonly units: [string, string, string],
    ) {
        super(control, changeDetectorRef);

        this.isMobile = isMobile;
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.input ? this.input.nativeElement : null;
    }

    get focused(): boolean {
        return isNativeFocused(this.nativeFocusableElement);
    }

    get allowDelete(): boolean {
        return !this.computedDisabled && !this.readOnly;
    }

    get computedLink(): PolymorpheusContent {
        if (this.fileDragged) {
            return '';
        }

        return this.multiple && this.link === this.inputFileTexts['defaultLinkSingle']
            ? this.inputFileTexts['defaultLinkMultiple']
            : this.link;
    }

    get computedLabel(): PolymorpheusContent {
        if (this.isMobile) {
            return '';
        }

        if (this.fileDragged) {
            return this.inputFileTexts[this.multiple ? 'dropMultiple' : 'drop'];
        }

        return this.multiple && this.label === this.inputFileTexts['defaultLabelSingle']
            ? this.inputFileTexts['defaultLabelMultiple']
            : this.label;
    }

    get maxSizeRejectionReason(): string {
        return (
            this.inputFileTexts['maxSizeRejectionReason'] +
            formatSize(this.units, this.maxFileSize)
        );
    }

    // @bad TODO: refactor after IE is dropped
    get fileDragged(): boolean {
        return (
            !!this.dataTransfer &&
            Array.prototype.indexOf.call(this.dataTransfer.types, 'Files') !== -1
        );
    }

    get acceptArray(): ReadonlyArray<string> {
        return this.getAcceptArray(this.accept);
    }

    get arrayValue(): ReadonlyArray<TuiFileLike> {
        return this.getValueArray(this.value);
    }

    get readyFiles(): ReadonlyArray<TuiFileLike> {
        return this.getReadyFiles(this.arrayValue, this.loadingFiles);
    }

    get computedLoading(): ReadonlyArray<TuiFileLike> {
        return this.getLoadingFiles(this.arrayValue, this.loadingFiles);
    }

    get hasFiles(): boolean {
        return !!this.rejectedFiles.length || !!this.arrayValue.length;
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    onFocused(focused: boolean) {
        this.updateFocused(focused);
    }

    onPressed(pressed: boolean) {
        this.updatePressed(pressed);
    }

    onFilesSelected(input: HTMLInputElement) {
        this.processSelectedFiles(input.files);
        input.value = '';
    }

    onDropped(event: DataTransfer) {
        this.processSelectedFiles(event.files);
    }

    onDragOver(dataTransfer: DataTransfer | null) {
        this.dataTransfer = dataTransfer;
    }

    removeFile(removedFile: TuiFileLike) {
        this.updateValue(
            this.multiple ? this.arrayValue.filter(file => file !== removedFile) : null,
        );
    }

    removeRejectedFile(removedFile: TuiFileLike) {
        this.updateRejectedFiles(this.rejectedFiles.filter(file => file !== removedFile));
    }

    getAppearance(mode: null | unknown): string {
        return mode === null ? '' : TuiAppearance.Outline;
    }

    @tuiPure
    private getValueArray(
        value: TuiFileLike | ReadonlyArray<TuiFileLike> | null,
    ): ReadonlyArray<TuiFileLike> {
        if (!value) {
            return EMPTY_ARRAY;
        }

        return value instanceof Array ? value : [value];
    }

    @tuiPure
    private getReadyFiles(
        value: ReadonlyArray<TuiFileLike>,
        loading: ReadonlyArray<TuiFileLike>,
    ): ReadonlyArray<TuiFileLike> {
        return value.filter(file => loading.indexOf(file) === -1);
    }

    @tuiPure
    private getLoadingFiles(
        value: ReadonlyArray<TuiFileLike>,
        loading: ReadonlyArray<TuiFileLike>,
    ): ReadonlyArray<TuiFileLike> {
        return loading.filter(file => value.indexOf(file) !== -1);
    }

    @tuiPure
    private getAcceptArray(accept: string): ReadonlyArray<string> {
        return accept.toLowerCase().split(',');
    }

    private processSelectedFiles(files: FileList | null) {
        // IE11 после выбора файла через диалог открытия генерирует второе событие, передавая пустой FileList.
        if (files === null || files.length === 0) {
            return;
        }

        const newFiles = this.multiple ? Array.from(files) : [files[0]];
        const tooBigFiles = newFiles.filter(file => file.size > this.maxFileSize);
        const wrongFormatFiles = newFiles.filter(
            file => !this.isFormatAcceptable(file) && tooBigFiles.indexOf(file) === -1,
        );
        const acceptedFiles = newFiles.filter(
            file =>
                tooBigFiles.indexOf(file) === -1 && wrongFormatFiles.indexOf(file) === -1,
        );

        this.updateRejectedFiles([
            ...tooBigFiles.map(file => ({
                name: file.name,
                type: file.type,
                size: file.size,
                content: this.maxSizeRejectionReason,
            })),
            ...wrongFormatFiles.map(file => ({
                name: file.name,
                type: file.type,
                size: file.size,
                content: this.inputFileTexts['formatRejectionReason'],
            })),
        ]);
        this.updateValue(
            this.multiple
                ? [...this.readyFiles, ...acceptedFiles]
                : acceptedFiles[0] || null,
        );
    }

    private isFormatAcceptable(file: File): boolean {
        if (!this.accept) {
            return true;
        }

        const extension = '.' + (file.name.split('.').pop() || '').toLowerCase();

        return this.acceptArray.some(
            format =>
                format === extension ||
                format === file.type ||
                (format.split('/')[1] === '*' &&
                    file.type.split('/')[0] === format.split('/')[0]),
        );
    }

    private updateRejectedFiles(rejectedFiles: ReadonlyArray<TuiFileLike>) {
        this.rejectedFiles = rejectedFiles;
        this.rejectedFilesChange.emit(rejectedFiles);
    }
}

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
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

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
    link: PolymorpheusContent = '';

    @Input()
    @tuiDefaultProp()
    label: PolymorpheusContent = '';

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

    private dataTransfer: DataTransfer | null = null;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef)
        changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_IS_MOBILE)
        readonly isMobile: boolean,
        @Inject(TUI_INPUT_FILE_TEXTS)
        readonly inputFileTexts$: Observable<
            Record<
                | 'defaultLabelSingle'
                | 'defaultLabelMultiple'
                | 'defaultLinkSingle'
                | 'defaultLinkMultiple'
                | 'maxSizeRejectionReason'
                | 'formatRejectionReason'
                | 'drop'
                | 'dropMultiple',
                string
            >
        >,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_DIGITAL_INFORMATION_UNITS)
        readonly units$: Observable<[string, string, string]>,
    ) {
        super(control, changeDetectorRef);
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

    get computedLink$(): Observable<PolymorpheusContent> {
        return this.computeLink$(this.fileDragged, this.multiple, this.link);
    }

    get computedLabel$(): Observable<PolymorpheusContent> {
        return this.computeLabel$(
            this.isMobile,
            this.fileDragged,
            this.multiple,
            this.label,
        );
    }

    // @bad TODO: refactor after IE is dropped
    get fileDragged(): boolean {
        return (
            !!this.dataTransfer &&
            Array.prototype.indexOf.call(this.dataTransfer.types, 'Files') !== -1
        );
    }

    get acceptArray(): readonly string[] {
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

    // TODO: refactor i18n messages
    onFilesSelected(
        input: HTMLInputElement,
        texts: Record<'maxSizeRejectionReason' | 'formatRejectionReason', string>,
        units: [string, string, string],
    ) {
        this.processSelectedFiles(input.files, texts, units);
        input.value = '';
    }

    onDropped(
        event: DataTransfer,
        texts: Record<'maxSizeRejectionReason' | 'formatRejectionReason', string>,
        units: [string, string, string],
    ) {
        this.processSelectedFiles(event.files, texts, units);
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
    private computeLink$(
        fileDragged: boolean,
        multiple: boolean,
        link: PolymorpheusContent,
    ): Observable<PolymorpheusContent> {
        if (fileDragged) {
            return of('');
        }

        return this.inputFileTexts$.pipe(
            map(texts =>
                multiple && link === ''
                    ? texts.defaultLinkMultiple
                    : link || texts.defaultLinkSingle,
            ),
        );
    }

    @tuiPure
    private computeLabel$(
        isMobile: boolean,
        fileDragged: boolean,
        multiple: boolean,
        label: PolymorpheusContent,
    ): Observable<PolymorpheusContent> {
        if (isMobile) {
            return of('');
        }

        if (fileDragged) {
            return this.inputFileTexts$.pipe(
                map(texts => (multiple ? texts.dropMultiple : texts.drop)),
            );
        }

        return this.inputFileTexts$.pipe(
            map(texts =>
                multiple && label === ''
                    ? texts.defaultLabelMultiple
                    : label || texts.defaultLabelSingle,
            ),
        );
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
    private getAcceptArray(accept: string): readonly string[] {
        return accept.toLowerCase().split(',');
    }

    private processSelectedFiles(
        files: FileList | null,
        texts: Record<'maxSizeRejectionReason' | 'formatRejectionReason', string>,
        units: [string, string, string],
    ) {
        // IE11 after selecting a file through the open dialog generates a second event passing an empty FileList.
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
                content:
                    texts.maxSizeRejectionReason + formatSize(units, this.maxFileSize),
            })),
            ...wrongFormatFiles.map(file => ({
                name: file.name,
                type: file.type,
                size: file.size,
                content: texts.formatRejectionReason,
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

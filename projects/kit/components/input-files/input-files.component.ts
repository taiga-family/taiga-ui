import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    Optional,
    Output,
    Self,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiNullableControl,
    EMPTY_ARRAY,
    TUI_IS_MOBILE,
    tuiAsFocusableItemAccessor,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
    TuiNativeFocusableElement,
    tuiPure,
} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TuiSizeL} from '@taiga-ui/core';
import {TuiFileLike} from '@taiga-ui/kit/interfaces';
import {TUI_INPUT_FILE_TEXTS} from '@taiga-ui/kit/tokens';
import {tuiGetAcceptArray} from '@taiga-ui/kit/utils/files';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

const DEFAULT_MAX_SIZE = 30 * 1000 * 1000; // 30 MB

@Component({
    selector: `tui-input-files`,
    templateUrl: `./input-files.template.html`,
    styleUrls: [`./input-files.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [MODE_PROVIDER, tuiAsFocusableItemAccessor(TuiInputFilesComponent)],
})
export class TuiInputFilesComponent
    extends AbstractTuiNullableControl<TuiFileLike | readonly TuiFileLike[]>
    implements TuiFocusableElementAccessor
{
    @ViewChild(`input`)
    private readonly input?: ElementRef<HTMLInputElement>;

    private dataTransfer: DataTransfer | null = null;

    @Input()
    @tuiDefaultProp()
    link: PolymorpheusContent = ``;

    @Input()
    @tuiDefaultProp()
    label: PolymorpheusContent = ``;

    @Input()
    @tuiDefaultProp()
    accept = ``;

    @Input()
    @tuiDefaultProp()
    multiple = false;

    @Input()
    @tuiDefaultProp()
    size: TuiSizeL = `m`;

    @Input()
    @tuiDefaultProp()
    maxFileSize = DEFAULT_MAX_SIZE;

    @Output()
    reject = new EventEmitter<TuiFileLike | readonly TuiFileLike[]>();

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
    ) {
        super(control, changeDetectorRef);
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.input?.nativeElement || null;
    }

    get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    get computedPseudoHovered(): boolean | null {
        return this.pseudoHover || (this.fileDragged || null);
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

    get fileDragged(): boolean {
        return !!this.dataTransfer?.types.includes(`Files`);
    }

    get arrayValue(): readonly TuiFileLike[] {
        return this.getValueArray(this.value);
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    onFilesSelected(
        input: HTMLInputElement,
        errors: Record<'maxSizeRejection' | 'formatRejection', PolymorpheusContent>,
    ): void {
        this.processSelectedFiles(input.files, errors);
        input.value = ``;
    }

    onDropped(
        event: DataTransfer,
        errors: Record<'maxSizeRejection' | 'formatRejection', PolymorpheusContent>,
    ): void {
        this.processSelectedFiles(event.files, errors);
    }

    onDragOver(dataTransfer: DataTransfer | null): void {
        this.dataTransfer = dataTransfer;
    }

    removeFile(removedFile: TuiFileLike): void {
        this.updateValue(
            this.multiple ? this.arrayValue.filter(file => file !== removedFile) : null,
        );
    }

    @tuiPure
    private computeLink$(
        fileDragged: boolean,
        multiple: boolean,
        link: PolymorpheusContent,
    ): Observable<PolymorpheusContent> {
        return fileDragged
            ? of(``)
            : this.inputFileTexts$.pipe(
                  map(texts =>
                      multiple && link === ``
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
            return of(``);
        }

        if (fileDragged) {
            return this.inputFileTexts$.pipe(
                map(texts => (multiple ? texts.dropMultiple : texts.drop)),
            );
        }

        return this.inputFileTexts$.pipe(
            map(texts =>
                multiple && label === ``
                    ? texts.defaultLabelMultiple
                    : label || texts.defaultLabelSingle,
            ),
        );
    }

    @tuiPure
    private getValueArray(
        value: TuiFileLike | readonly TuiFileLike[] | null,
    ): readonly TuiFileLike[] {
        if (!value) {
            return EMPTY_ARRAY;
        }

        return Array.isArray(value) ? value : [value];
    }

    private processSelectedFiles(
        files: FileList | null,
        errors: Record<'maxSizeRejection' | 'formatRejection', PolymorpheusContent>,
    ): void {
        // IE11 after selecting a file through the open dialog generates a second event passing an empty FileList.
        if (!files?.length) {
            return;
        }

        const newFiles = this.multiple ? Array.from(files) : [files[0]];
        const tooBigFiles = newFiles.filter(file => file.size > this.maxFileSize);
        const wrongFormatFiles = newFiles.filter(
            file => !this.isFormatAcceptable(file) && !tooBigFiles.includes(file),
        );
        const acceptedFiles = newFiles.filter(
            file => !tooBigFiles.includes(file) && !wrongFormatFiles.includes(file),
        );

        if (tooBigFiles.length || wrongFormatFiles.length) {
            this.rejectFiles([
                ...tooBigFiles.map(file => ({
                    name: file.name,
                    type: file.type,
                    size: file.size,
                    content: errors.maxSizeRejection,
                })),
                ...wrongFormatFiles.map(file => ({
                    name: file.name,
                    type: file.type,
                    size: file.size,
                    content: errors.formatRejection,
                })),
            ]);
        }

        this.updateValue(
            this.multiple
                ? [...this.arrayValue, ...acceptedFiles]
                : acceptedFiles[0] || null,
        );
    }

    private isFormatAcceptable(file: File): boolean {
        if (!this.accept) {
            return true;
        }

        const extension = `.${(file.name.split(`.`).pop() || ``).toLowerCase()}`;

        return tuiGetAcceptArray(this.accept).some(
            format =>
                format === extension ||
                format === file.type ||
                (format.split(`/`)[1] === `*` &&
                    file.type.split(`/`)[0] === format.split(`/`)[0]),
        );
    }

    private rejectFiles(rejectedFiles: readonly TuiFileLike[]): void {
        this.reject.emit(this.multiple ? rejectedFiles : rejectedFiles[0]);
    }
}

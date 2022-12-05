import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    ElementRef,
    EventEmitter,
    HostListener,
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

// eslint-disable-next-line import/no-cycle
import {TuiInputFilesDirective} from './input-files.directive';
import {TUI_INPUT_FILES_OPTIONS, TuiInputFilesOptions} from './input-files.options';

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

    @ContentChild(TuiInputFilesDirective, {read: TuiInputFilesDirective})
    readonly nativeInput?: TuiInputFilesDirective;

    @ViewChild(`formatRejection`)
    readonly formatRejection!: PolymorpheusContent;

    @ViewChild(`maxSizeRejection`)
    readonly maxSizeRejection!: PolymorpheusContent;

    @Input()
    @tuiDefaultProp()
    link: PolymorpheusContent = ``;

    @Input()
    @tuiDefaultProp()
    label: PolymorpheusContent = ``;

    /**
     * @deprecated: use `<input tuiInputFiles accept="image/*" />`
     */
    @Input()
    @tuiDefaultProp()
    accept = this.options.accepts;

    /**
     * @deprecated: use `<input tuiInputFiles multiple />`
     */
    @Input()
    @tuiDefaultProp()
    multiple = this.options.multiple;

    @Input()
    @tuiDefaultProp()
    size: TuiSizeL = this.options.size;

    @Input()
    @tuiDefaultProp()
    maxFileSize = this.options.maxFileSize;

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
                | 'defaultLabelMultiple'
                | 'defaultLabelSingle'
                | 'defaultLinkMultiple'
                | 'defaultLinkSingle'
                | 'drop'
                | 'dropMultiple'
                | 'formatRejectionReason'
                | 'maxSizeRejectionReason',
                string
            >
        >,
        @Inject(TUI_INPUT_FILES_OPTIONS)
        readonly options: TuiInputFilesOptions,
    ) {
        super(control, changeDetectorRef);
    }

    get computedMultiple(): boolean {
        return this.nativeInput?.multiple ?? this.multiple;
    }

    get computedAccept(): string {
        return this.nativeInput?.accept ?? this.accept;
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.input?.nativeElement || null;
    }

    get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    get computedPseudoHovered(): boolean | null {
        return this.pseudoHover ?? (this.fileDragged || null);
    }

    get computedLink$(): Observable<PolymorpheusContent> {
        return this.computeLink$(this.fileDragged, this.computedMultiple, this.link);
    }

    get computedLabel$(): Observable<PolymorpheusContent> {
        return this.computeLabel$(
            this.isMobile,
            this.fileDragged,
            this.computedMultiple,
            this.label,
        );
    }

    get fileDragged(): boolean {
        return !!this.dataTransfer?.types.includes(`Files`);
    }

    get arrayValue(): readonly TuiFileLike[] {
        return this.getValueArray(this.value);
    }

    @HostListener(`focusin`, [`true`])
    @HostListener(`focusout`, [`false`])
    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    @HostListener(`change`)
    onFilesSelected(): void {
        const input = this.nativeInput?.input ?? this.input?.nativeElement;

        if (!input) {
            return;
        }

        this.processSelectedFiles(input.files);

        input.value = ``;
    }

    onDropped(event: DataTransfer): void {
        this.processSelectedFiles(event.files);
    }

    onDragOver(dataTransfer: DataTransfer | null): void {
        this.dataTransfer = dataTransfer;
    }

    removeFile(removedFile: TuiFileLike): void {
        this.updateValue(
            this.computedMultiple
                ? this.arrayValue.filter(file => file !== removedFile)
                : null,
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

    private processSelectedFiles(files: FileList | null): void {
        // IE11 after selecting a file through the open dialog generates a second event passing an empty FileList.
        if (!files?.length) {
            return;
        }

        const errors: Record<
            'formatRejection' | 'maxSizeRejection',
            PolymorpheusContent
        > = {
            formatRejection: this.formatRejection,
            maxSizeRejection: this.maxSizeRejection,
        };

        const newFiles = this.computedMultiple ? Array.from(files) : [files[0]];
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
            this.computedMultiple
                ? [...this.arrayValue, ...acceptedFiles]
                : acceptedFiles[0] || null,
        );
    }

    private isFormatAcceptable(file: File): boolean {
        if (!this.computedAccept) {
            return true;
        }

        const extension = `.${(file.name.split(`.`).pop() || ``).toLowerCase()}`;

        return tuiGetAcceptArray(this.computedAccept).some(
            format =>
                format === extension ||
                format === file.type ||
                (format.split(`/`)[1] === `*` &&
                    file.type.split(`/`)[0] === format.split(`/`)[0]),
        );
    }

    private rejectFiles(rejectedFiles: readonly TuiFileLike[]): void {
        this.reject.emit(this.computedMultiple ? rejectedFiles : rejectedFiles[0]);
    }
}

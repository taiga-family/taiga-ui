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
import {TUI_IS_MOBILE, tuiDefaultProp, tuiIsObserved, tuiPure} from '@taiga-ui/cdk';
import {TuiSizeL} from '@taiga-ui/core';
import {TuiFileLike} from '@taiga-ui/kit/interfaces';
import {TUI_DIGITAL_INFORMATION_UNITS, TUI_FILE_TEXTS} from '@taiga-ui/kit/tokens';
import {TuiFileState} from '@taiga-ui/kit/types';
import {tuiFormatSize} from '@taiga-ui/kit/utils/files';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

type FileTexts = 'loadingError' | 'preview' | 'remove';

@Component({
    selector: `tui-file`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: `./file.template.html`,
    styleUrls: [`./file.style.less`],
})
export class TuiFileComponent {
    @Input()
    @tuiDefaultProp()
    file: TuiFileLike = {name: ``};

    @Input()
    @tuiDefaultProp()
    state: TuiFileState = `normal`;

    @Input()
    @tuiDefaultProp()
    size: TuiSizeL = `m`;

    @Input()
    @tuiDefaultProp()
    showSize = true;

    @Input()
    @tuiDefaultProp()
    leftContent: PolymorpheusContent = ``;

    @Output()
    readonly removed = new EventEmitter<void>();

    @HostBinding(`class._focused`)
    focused = false;

    constructor(
        @Inject(TUI_IS_MOBILE) readonly isMobile: boolean,
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
        @Inject(TUI_FILE_TEXTS)
        readonly fileTexts$: Observable<Record<FileTexts, string>>,
        @Inject(TUI_DIGITAL_INFORMATION_UNITS)
        private readonly units$: Observable<[string, string, string]>,
    ) {}

    get preview(): SafeValue {
        return this.isBig ? this.createPreview(this.file, this.sanitizer) : ``;
    }

    get isBig(): boolean {
        return this.size === `l`;
    }

    get isLoading(): boolean {
        return this.state === `loading`;
    }

    get isError(): boolean {
        return this.state === `error`;
    }

    get isDeleted(): boolean {
        return this.state === `deleted`;
    }

    get allowDelete(): boolean {
        return tuiIsObserved(this.removed);
    }

    get icon(): string {
        if (this.state === `normal` && this.isBig) {
            return `tuiIconDefaultDocLarge`;
        }

        switch (this.state) {
            case `deleted`:
                return `tuiIconTrashLarge`;
            case `error`:
                return `tuiIconAlertCircleLarge`;
            default:
                return `tuiIconCheckCircleLarge`;
        }
    }

    @HostBinding(`class._link`)
    get src(): string {
        return this.file.src || ``;
    }

    get name(): string {
        return this.getName(this.file);
    }

    get type(): string {
        return this.getType(this.file);
    }

    get content$(): Observable<PolymorpheusContent> {
        return this.calculateContent$(this.state, this.file, this.fileTexts$);
    }

    get fileSize$(): Observable<string | null> {
        return this.calculateFileSize$(this.file, this.units$);
    }

    onRemoveClick(): void {
        this.removed.emit();
    }

    onFocusVisible(focusVisible: boolean): void {
        this.focused = focusVisible;
    }

    @tuiPure
    private calculateContent$(
        state: TuiFileState,
        file: TuiFileLike,
        fileTexts$: Observable<Record<'loadingError' | 'preview' | 'remove', string>>,
    ): Observable<PolymorpheusContent> {
        return state === `error` && !file.content
            ? fileTexts$.pipe(map(texts => texts.loadingError))
            : of(this.file.content || ``);
    }

    @tuiPure
    private calculateFileSize$(
        file: TuiFileLike,
        units$: Observable<[string, string, string]>,
    ): Observable<string | null> {
        return units$.pipe(map(units => tuiFormatSize(units, file.size)));
    }

    @tuiPure
    private createPreview(file: TuiFileLike, sanitizer: DomSanitizer): SafeValue {
        if (file.src) {
            return file.src;
        }

        // TODO: iframe warning
        if (file instanceof File && file.type && file.type.startsWith(`image/`)) {
            return sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
        }

        return ``;
    }

    @tuiPure
    private getName(file: TuiFileLike): string {
        return file.name.split(`.`).slice(0, -1).join(`.`);
    }

    @tuiPure
    private getType(file: TuiFileLike): string {
        return `.${file.name.split(`.`).pop()}` || ``;
    }
}

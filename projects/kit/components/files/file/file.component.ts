import {CommonModule} from '@angular/common';
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
import {TuiContext, TuiInjectionTokenType, tuiIsObserved, tuiPure} from '@taiga-ui/cdk';
import {
    TUI_COMMON_ICONS,
    TuiAppearanceDirective,
    tuiAppearanceOptionsProvider,
    TuiButtonModule,
    TuiCommonIcons,
    TuiLoaderModule,
    TuiSizeL,
    TuiSvgModule,
} from '@taiga-ui/core';
import {TuiLanguage} from '@taiga-ui/i18n';
import {TUI_DIGITAL_INFORMATION_UNITS, TUI_FILE_TEXTS} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent, PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {map, Observable, of} from 'rxjs';

import {TuiFileLike, TuiFileState} from '../files.types';
import {TUI_FILE_OPTIONS} from './file.options';

@Component({
    standalone: true,
    selector: 'tui-file,a[tuiFile],button[tuiFile]',
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiLoaderModule,
        TuiSvgModule,
        TuiButtonModule,
    ],
    templateUrl: './file.template.html',
    styleUrls: ['./file.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAppearanceOptionsProvider(TUI_FILE_OPTIONS)],
    hostDirectives: [TuiAppearanceDirective],
})
export class TuiFileComponent {
    @Input()
    file: TuiFileLike = {name: ''};

    @Input()
    state: TuiFileState = 'normal';

    @Input()
    size: TuiSizeL = 'm';

    @Input()
    @HostBinding('attr.data-delete')
    showDelete: boolean | 'always' = true;

    @Input()
    showSize = true;

    @Input()
    leftContent: PolymorpheusContent;

    @Output()
    readonly remove = new EventEmitter<void>();

    @HostBinding('class._focused')
    focused = false;

    constructor(
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
        @Inject(TUI_COMMON_ICONS) readonly icons: TuiCommonIcons,
        @Inject(TUI_FILE_TEXTS)
        readonly fileTexts$: TuiInjectionTokenType<typeof TUI_FILE_TEXTS>,
        @Inject(TUI_FILE_OPTIONS)
        private readonly options: TuiInjectionTokenType<typeof TUI_FILE_OPTIONS>,
        @Inject(TUI_DIGITAL_INFORMATION_UNITS)
        private readonly units$: TuiInjectionTokenType<
            typeof TUI_DIGITAL_INFORMATION_UNITS
        >,
    ) {}

    get preview(): SafeValue {
        return this.isBig ? this.createPreview(this.file, this.sanitizer) : '';
    }

    get isBig(): boolean {
        return this.size === 'l';
    }

    get isLoading(): boolean {
        return this.state === 'loading';
    }

    get isError(): boolean {
        return this.state === 'error';
    }

    get isDeleted(): boolean {
        return this.state === 'deleted';
    }

    get allowDelete(): boolean {
        return this.showDelete && tuiIsObserved(this.remove);
    }

    get icon(): PolymorpheusContent<TuiContext<TuiSizeL>> {
        return this.state === 'loading' ? '' : this.options.icons[this.state];
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
        this.remove.emit();
    }

    onFocusVisible(focusVisible: boolean): void {
        this.focused = focusVisible;
    }

    @tuiPure
    private calculateContent$(
        state: TuiFileState,
        file: TuiFileLike,
        fileTexts$: Observable<Record<keyof TuiLanguage['fileTexts'], string>>,
    ): Observable<PolymorpheusContent> {
        return state === 'error' && !file.content
            ? fileTexts$.pipe(map(texts => texts.loadingError))
            : of(this.file.content || '');
    }

    @tuiPure
    private calculateFileSize$(
        file: TuiFileLike,
        units$: Observable<[string, string, string]>,
    ): Observable<string | null> {
        return units$.pipe(map(units => this.options.formatSize(units, file.size)));
    }

    @tuiPure
    private createPreview(file: TuiFileLike, sanitizer: DomSanitizer): SafeValue {
        if (file.src) {
            return file.src;
        }

        // TODO: iframe warning
        if (file instanceof File && file.type && file.type.startsWith('image/')) {
            return sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
        }

        return '';
    }

    @tuiPure
    private getName(file: TuiFileLike): string {
        return file.name.split('.').slice(0, -1).join('.');
    }

    @tuiPure
    private getType(file: TuiFileLike): string {
        return `.${file.name.split('.').pop()}` || '';
    }
}

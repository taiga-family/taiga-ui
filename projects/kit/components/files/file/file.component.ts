import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    inject,
    Input,
    Output,
} from '@angular/core';
import type {SafeValue} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {WINDOW} from '@ng-web-apis/common';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiLoader} from '@taiga-ui/core/components/loader';
import {
    TuiAppearance,
    tuiAppearanceOptionsProvider,
} from '@taiga-ui/core/directives/appearance';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import type {TuiSizeL} from '@taiga-ui/core/types';
import type {TuiLanguage} from '@taiga-ui/i18n/interfaces';
import {TUI_DIGITAL_INFORMATION_UNITS, TUI_FILE_TEXTS} from '@taiga-ui/kit/tokens';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';
import type {Observable} from 'rxjs';
import {map, of} from 'rxjs';

import type {TuiFileLike, TuiFileState} from '../files.types';
import {TUI_FILE_OPTIONS} from './file.options';

@Component({
    standalone: true,
    selector: 'tui-file,a[tuiFile],button[tuiFile]',
    imports: [
        CommonModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiLoader,
        TuiButton,
        TuiIcon,
    ],
    templateUrl: './file.template.html',
    styleUrls: ['./file.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAppearanceOptionsProvider(TUI_FILE_OPTIONS)],
    hostDirectives: [TuiAppearance],
})
export class TuiFile {
    private readonly sanitizer = inject(DomSanitizer);
    private readonly options = inject(TUI_FILE_OPTIONS);
    private readonly units$ = inject(TUI_DIGITAL_INFORMATION_UNITS);
    private readonly win = inject(WINDOW) as Window & {File: typeof File};

    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly fileTexts$ = inject(TUI_FILE_TEXTS);

    @Input()
    public file: TuiFileLike = {name: ''};

    @Input()
    public state: TuiFileState = 'normal';

    @Input()
    public size: TuiSizeL = 'm';

    @Input()
    @HostBinding('attr.data-delete')
    public showDelete: boolean | 'always' = true;

    @Input()
    public showSize = true;

    @Input()
    public leftContent: PolymorpheusContent;

    @Output()
    public readonly remove = new EventEmitter<void>();

    protected get preview(): SafeValue {
        return this.isBig ? this.createPreview(this.file) : '';
    }

    protected get isBig(): boolean {
        return this.size === 'l';
    }

    protected get isLoading(): boolean {
        return this.state === 'loading';
    }

    protected get isError(): boolean {
        return this.state === 'error';
    }

    protected get isDeleted(): boolean {
        return this.state === 'deleted';
    }

    protected get allowDelete(): boolean {
        return this.showDelete && this.remove.observed;
    }

    protected get icon(): PolymorpheusContent<TuiContext<TuiSizeL>> {
        return this.state === 'loading' ? '' : this.options.icons[this.state];
    }

    protected get name(): string {
        return this.getName(this.file);
    }

    protected get type(): string {
        return this.getType(this.file);
    }

    protected get content$(): Observable<PolymorpheusContent> {
        return this.calculateContent$(this.state, this.file, this.fileTexts$);
    }

    protected get fileSize$(): Observable<string | null> {
        return this.calculateFileSize$(this.file, this.units$);
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
    private createPreview(file: TuiFileLike): SafeValue {
        if (file.src) {
            return file.src;
        }

        if (
            this.win.File &&
            file instanceof this.win.File &&
            file.type?.startsWith('image/')
        ) {
            return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
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

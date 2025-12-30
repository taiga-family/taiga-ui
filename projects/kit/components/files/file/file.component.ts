import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    LOCALE_ID,
    output,
} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiLoader} from '@taiga-ui/core/components/loader';
import {
    TuiAppearance,
    tuiAppearanceOptionsProvider,
} from '@taiga-ui/core/directives/appearance';
import {TuiHintOverflow} from '@taiga-ui/core/portals/hint';
import {TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';
import {type TuiSizeL} from '@taiga-ui/core/types';
import {TUI_DIGITAL_INFORMATION_UNITS, TUI_FILE_TEXTS} from '@taiga-ui/kit/tokens';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {type TuiFileLike, type TuiFileState} from '../files.types';
import {TUI_FILE_OPTIONS} from './file.options';

@Component({
    selector: 'tui-file,a[tuiFile],button[tuiFile]',
    imports: [PolymorpheusOutlet, TuiButton, TuiHintOverflow, TuiIcon, TuiLoader],
    templateUrl: './file.template.html',
    styleUrl: './file.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAppearanceOptionsProvider(TUI_FILE_OPTIONS)],
    hostDirectives: [TuiAppearance],
    host: {'[attr.data-delete]': 'showDelete()'},
})
export class TuiFile {
    private readonly options = inject(TUI_FILE_OPTIONS);
    private readonly locale = inject(LOCALE_ID);
    private readonly units = inject(TUI_DIGITAL_INFORMATION_UNITS);
    private readonly win = inject(WA_WINDOW) as Window & {File: typeof File};

    protected readonly icons = inject(TUI_COMMON_ICONS);
    protected readonly fileTexts = inject(TUI_FILE_TEXTS);
    protected readonly content = computed<PolymorpheusContent>(() =>
        this.state() === 'error' && !this.file().content
            ? this.fileTexts().loadingError
            : this.file().content || '',
    );

    protected readonly fileSize = computed<string | null>(() =>
        this.options.formatSize(this.units(), this.file().size, this.locale),
    );

    protected readonly preview = computed(() =>
        this.size() === 'l' ? this.createPreview(this.file()) : '',
    );

    protected readonly name = computed(() => {
        const dot = this.file().name.lastIndexOf('.');
        // a dot at position 0 means a “hidden” file, not an extension

        return dot > 0 ? this.file().name.slice(0, dot) : this.file().name;
    });

    protected readonly type = computed(() => {
        const dot = this.file().name.lastIndexOf('.');
        // only return an extension when there is one

        return dot > 0 ? this.file().name.slice(dot) : '';
    });

    protected readonly icon = computed((state = this.state()) =>
        state === 'loading' ? '' : this.options.icons[state],
    );

    public readonly file = input<TuiFileLike>({name: ''});
    public readonly state = input<TuiFileState>('normal');
    public readonly size = input<TuiSizeL>('m');
    public readonly showDelete = input<boolean | 'always'>(true);
    public readonly showSize = input(true);
    public readonly leftContent = input<PolymorpheusContent>();
    public readonly remove = output();

    protected get allowDelete(): boolean {
        return this.showDelete() && !!this.remove['listeners']?.length;
    }

    private createPreview(file: TuiFileLike): string {
        if (file.src) {
            return file.src;
        }

        return this.win.File &&
            file instanceof this.win.File &&
            file.type?.startsWith('image/')
            ? URL.createObjectURL(file)
            : '';
    }
}

import {DOCUMENT, TitleCasePipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {NonNullableFormBuilder, ReactiveFormsModule} from '@angular/forms';
import {WA_LOCAL_STORAGE} from '@ng-web-apis/common';
import {tuiIsString} from '@taiga-ui/cdk';
import {
    TUI_DARK_MODE,
    TUI_DARK_MODE_KEY,
    TUI_OPTIONS,
    TuiButton,
    tuiButtonOptionsProvider,
    TuiCheckbox,
    TuiDataList,
    TuiDropdown,
    TuiDropdownDirective,
    tuiDropdownOptionsProvider,
    TuiIcon,
    TuiLabel,
    TuiTitle,
    TuiWithDropdownOpen,
} from '@taiga-ui/core';
import {
    type TuiCountryIsoCode,
    type TuiLanguageName,
    TuiLanguageSwitcherService,
} from '@taiga-ui/i18n';
import {
    TuiBadge,
    TuiButtonSelect,
    TuiChevron,
    TuiChip,
    TuiFlagPipe,
    TuiSegmented,
    tuiSegmentedOptionsProvider,
} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';

@Component({
    selector: '[appSettings]',
    imports: [
        ReactiveFormsModule,
        TitleCasePipe,
        TuiBadge,
        TuiButton,
        TuiButtonSelect,
        TuiChevron,
        TuiChip,
        TuiDataList,
        TuiDropdown,
        TuiFlagPipe,
        TuiForm,
        TuiIcon,
        TuiSegmented,
        TuiTitle,
    ],
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiSegmentedOptionsProvider({size: 's'}),
        tuiButtonOptionsProvider({appearance: '', size: 's'}),
        tuiDropdownOptionsProvider({align: 'end', maxHeight: 500}),
    ],
    hostDirectives: [TuiDropdownDirective, TuiWithDropdownOpen],
})
export class SettingsComponent {
    private readonly doc = inject(DOCUMENT);
    private readonly switcher = inject(TuiLanguageSwitcherService);
    private readonly theme = inject(TUI_DARK_MODE);
    private readonly options = inject(TUI_OPTIONS);

    private readonly stored = inject(WA_LOCAL_STORAGE)?.getItem(
        inject(TUI_DARK_MODE_KEY),
    );

    protected readonly flags = new Map<TuiLanguageName, TuiCountryIsoCode>([
        ['arabic', 'SA'],
        ['belarusian', 'BY'],
        ['chinese', 'CN'],
        ['dutch', 'NL'],
        ['english', 'GB'],
        ['french', 'FR'],
        ['german', 'DE'],
        ['hebrew', 'IL'],
        ['italian', 'IT'],
        ['japanese', 'JP'],
        ['kazakh', 'KZ'],
        ['korean', 'KR'],
        ['lithuanian', 'LT'],
        ['malay', 'MY'],
        ['polish', 'PL'],
        ['portuguese', 'PT'],
        ['russian', 'RU'],
        ['spanish', 'ES'],
        ['turkish', 'TR'],
        ['ukrainian', 'UA'],
        ['vietnamese', 'VN'],
    ]);

    protected readonly names: TuiLanguageName[] = Array.from(this.flags.keys());

    protected readonly form = inject(NonNullableFormBuilder).group({
        theme: tuiIsString(this.stored) ? this.theme() : null,
        direction: 'ltr',
        language: this.switcher.language,
        platform: 'web',
        liquid: this.options.apis !== 'stable' && !!this.options.apis.liquidGlass?.(),
    });

    protected readonly sync = this.form.valueChanges
        .pipe(takeUntilDestroyed())
        .subscribe(() => {
            const {theme, direction, language, platform, liquid} =
                this.form.getRawValue();

            this.switcher.setLanguage(language);
            this.doc.documentElement.setAttribute('dir', direction);
            this.doc.documentElement.setAttribute('data-platform', platform);
            this.doc.documentElement.classList.toggle('_liquid-glass', liquid);

            if (this.options.apis !== 'stable') {
                this.options.apis.liquidGlass?.set(liquid);
            }

            if (theme === null) {
                this.theme.reset();
            } else {
                this.theme.set(theme);
            }
        });
}

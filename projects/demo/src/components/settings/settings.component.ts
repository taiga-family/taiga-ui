import {DOCUMENT, TitleCasePipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {NonNullableFormBuilder, ReactiveFormsModule} from '@angular/forms';
import {WA_LOCAL_STORAGE} from '@ng-web-apis/common';
import {tuiIsString, TuiPlatform, tuiSetSignal} from '@taiga-ui/cdk';
import {
    TUI_DARK_MODE,
    TUI_DARK_MODE_KEY,
    TuiButton,
    tuiButtonOptionsProvider,
    TuiDataList,
    TuiDropdown,
    TuiDropdownDirective,
    tuiDropdownOptionsProvider,
    TuiIcon,
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
        tuiDropdownOptionsProvider({align: 'end'}),
    ],
    hostDirectives: [TuiDropdownDirective, TuiWithDropdownOpen],
})
export class SettingsComponent {
    private readonly doc = inject(DOCUMENT);
    private readonly platform = inject(TuiPlatform);
    private readonly switcher = inject(TuiLanguageSwitcherService);
    private readonly theme = inject(TUI_DARK_MODE);
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
        platform: 'web' as 'android' | 'ios' | 'web',
    });

    protected readonly sync = this.form.valueChanges
        .pipe(takeUntilDestroyed())
        .subscribe(() => {
            const {theme, direction, language, platform} = this.form.getRawValue();

            this.switcher.setLanguage(language);
            this.doc.documentElement.setAttribute('dir', direction);
            tuiSetSignal(this.platform.tuiPlatform, platform);

            if (theme === null) {
                this.theme.reset();
            } else {
                this.theme.set(theme);
            }
        });
}

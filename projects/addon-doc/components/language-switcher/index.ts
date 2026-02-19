import {TitleCasePipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TUI_DOC_ICONS} from '@taiga-ui/addon-doc/tokens';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {tuiScrollbarOptionsProvider} from '@taiga-ui/core/components/scrollbar';
import {TuiTextfield} from '@taiga-ui/core/components/textfield';
import {type TuiCountryIsoCode, type TuiLanguageName} from '@taiga-ui/i18n/types';
import {TuiLanguageSwitcherService} from '@taiga-ui/i18n/utils';
import {TuiBadge} from '@taiga-ui/kit/components/badge';
import {TuiButtonSelect} from '@taiga-ui/kit/directives/button-select';
import {TuiChevron} from '@taiga-ui/kit/directives/chevron';
import {TuiFlagPipe} from '@taiga-ui/kit/pipes/flag';

@Component({
    selector: 'tui-doc-language-switcher',
    imports: [
        ReactiveFormsModule,
        TitleCasePipe,
        TuiBadge,
        TuiButton,
        TuiButtonSelect,
        TuiChevron,
        TuiDataList,
        TuiFlagPipe,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiScrollbarOptionsProvider({mode: 'hover'})],
})
export class TuiDocLanguageSwitcher {
    protected readonly icons = inject(TUI_DOC_ICONS);
    protected readonly switcher = inject(TuiLanguageSwitcherService);
    protected readonly language = new FormControl(capitalize(this.switcher.language));

    protected open = false;

    public readonly flags = new Map<TuiLanguageName, TuiCountryIsoCode>([
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

    public readonly names: TuiLanguageName[] = Array.from(this.flags.keys());

    public setLang(lang: TuiLanguageName): void {
        this.language.setValue(lang);
        this.switcher.setLanguage(lang);
        this.open = false;
    }
}

function capitalize(value: string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

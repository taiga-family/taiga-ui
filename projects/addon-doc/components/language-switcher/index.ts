import {NgForOf, TitleCasePipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {tuiCapitalizeFirstLetter, TuiDataList, TuiFlagPipe} from '@taiga-ui/core';
import type {TuiCountryIsoCode, TuiLanguageName} from '@taiga-ui/i18n';
import {TuiLanguageSwitcher} from '@taiga-ui/i18n';
import {TuiSelectModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-language-switcher',
    imports: [
        ReactiveFormsModule,
        TuiDataList,
        NgForOf,
        TitleCasePipe,
        TuiFlagPipe,
        TuiSelectModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiLanguageSwitcherComponent {
    public readonly flags = new Map<TuiLanguageName, TuiCountryIsoCode>([
        ['belarusian', 'BY'],
        ['chinese', 'CN'],
        ['dutch', 'NL'],
        ['english', 'GB'],
        ['french', 'FR'],
        ['german', 'DE'],
        ['italian', 'IT'],
        ['kazakh', 'KZ'],
        ['malay', 'MY'],
        ['polish', 'PL'],
        ['portuguese', 'PT'],
        ['russian', 'RU'],
        ['spanish', 'ES'],
        ['turkish', 'TR'],
        ['ukrainian', 'UA'],
        ['vietnamese', 'VN'],
    ]);

    protected readonly switcher = inject(TuiLanguageSwitcher);

    protected readonly language = new FormControl(
        tuiCapitalizeFirstLetter(this.switcher.language),
    );

    protected readonly names: TuiLanguageName[] = Array.from(this.flags.keys());
}

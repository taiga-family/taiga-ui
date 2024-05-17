import {NgForOf, TitleCasePipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {tuiCapitalizeFirstLetter, TuiDataList, TuiFlagPipe} from '@taiga-ui/core';
import type {TuiLanguageName} from '@taiga-ui/i18n';
import {TuiCountryIsoCode, TuiLanguageSwitcher} from '@taiga-ui/i18n';
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
    templateUrl: './language-switcher.component.html',
    styleUrls: ['./language-switcher.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiLanguageSwitcherComponent {
    public readonly flags = new Map<TuiLanguageName, TuiCountryIsoCode>([
        ['belarusian', TuiCountryIsoCode.BY],
        ['chinese', TuiCountryIsoCode.CN],
        ['dutch', TuiCountryIsoCode.NL],
        ['english', TuiCountryIsoCode.GB],
        ['french', TuiCountryIsoCode.FR],
        ['german', TuiCountryIsoCode.DE],
        ['italian', TuiCountryIsoCode.IT],
        ['kazakh', TuiCountryIsoCode.KZ],
        ['malay', TuiCountryIsoCode.MY],
        ['polish', TuiCountryIsoCode.PL],
        ['portuguese', TuiCountryIsoCode.PT],
        ['russian', TuiCountryIsoCode.RU],
        ['spanish', TuiCountryIsoCode.ES],
        ['turkish', TuiCountryIsoCode.TR],
        ['ukrainian', TuiCountryIsoCode.UA],
        ['vietnamese', TuiCountryIsoCode.VN],
    ]);

    protected readonly switcher = inject(TuiLanguageSwitcher);

    protected readonly language = new FormControl(
        tuiCapitalizeFirstLetter(this.switcher.language),
    );

    protected readonly names: TuiLanguageName[] = Array.from(this.flags.keys());
}

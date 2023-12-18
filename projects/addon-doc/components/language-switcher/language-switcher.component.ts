import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {tuiCapitalizeFirstLetter, TuiFlagPipe} from '@taiga-ui/core';
import {TuiCountryIsoCode, TuiLanguageName, TuiLanguageSwitcher} from '@taiga-ui/i18n';

@Component({
    selector: 'tui-language-switcher',
    templateUrl: './language-switcher.component.html',
    styleUrls: ['./language-switcher.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        // TODO: for backward compatibility only. Drop in v4.0
        TuiFlagPipe,
    ],
})
export class TuiLanguageSwitcherComponent {
    readonly language = new UntypedFormControl(
        tuiCapitalizeFirstLetter(this.switcher.language),
    );

    readonly flags = new Map<TuiLanguageName, TuiCountryIsoCode>([
        ['chinese', TuiCountryIsoCode.CN],
        ['dutch', TuiCountryIsoCode.NL],
        ['english', TuiCountryIsoCode.GB],
        ['french', TuiCountryIsoCode.FR],
        ['german', TuiCountryIsoCode.DE],
        ['italian', TuiCountryIsoCode.IT],
        ['polish', TuiCountryIsoCode.PL],
        ['portuguese', TuiCountryIsoCode.PT],
        ['russian', TuiCountryIsoCode.RU],
        ['spanish', TuiCountryIsoCode.ES],
        ['turkish', TuiCountryIsoCode.TR],
        ['ukrainian', TuiCountryIsoCode.UA],
        ['kazakh', TuiCountryIsoCode.KZ],
        ['malay', TuiCountryIsoCode.MY],
        ['vietnamese', TuiCountryIsoCode.VN],
    ]);

    readonly names: TuiLanguageName[] = Array.from(this.flags.keys());

    constructor(
        @Inject(TuiLanguageSwitcher) readonly switcher: TuiLanguageSwitcher,
        @Inject(TuiFlagPipe) private readonly flagPipe: TuiFlagPipe,
    ) {}

    /**
     * @deprecated use `<img [src]="countryIsoCode | tuiFlagPipe" />`
     * TODO drop in v4.0
     */
    getFlagPath(code?: TuiCountryIsoCode): string | null {
        return this.flagPipe.transform(code);
    }
}

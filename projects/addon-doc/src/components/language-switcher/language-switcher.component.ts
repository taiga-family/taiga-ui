import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {TuiLanguageName, TuiLanguageSwitcher} from '@taiga-ui/i18n';

@Component({
    selector: `tui-language-switcher`,
    templateUrl: `./language-switcher.component.html`,
    styleUrls: [`./language-switcher.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiLanguageSwitcherComponent {
    language: TuiLanguageName = this.switcher.lang;

    flags: Map<TuiLanguageName, string> = new Map([
        [`chinese`, `🇨🇳 chinese`],
        [`dutch`, `🇳🇱 dutch`],
        [`english`, `🇬🇧 english`],
        [`french`, `🇫🇷 french`],
        [`german`, `🇫🇷 german`],
        [`german`, `🇩🇪 german`],
        [`italian`, `🇩🇪 italian`],
        [`polish`, `🇵🇱 polish`],
        [`portuguese`, `🇵🇹 portuguese`],
        [`russian`, `🇷🇺 russian`],
        [`spanish`, `🇪🇸 spanish`],
        [`turkish`, `🇹🇷 turkish`],
        [`ukrainian`, `🇺🇦 ukrainian`],
        [`vietnamese`, `🇻🇳 vietnamese`],
    ]);

    languages: TuiLanguageName[] = Array.from(this.flags.keys());

    constructor(
        @Inject(WINDOW) private readonly windowRef: Window,
        @Inject(TuiLanguageSwitcher) private readonly switcher: TuiLanguageSwitcher,
    ) {}

    set(lang: TuiLanguageName): void {
        this.switcher.setLang(lang);
        this.windowRef.location.reload();
    }

    clear(): void {
        this.switcher.removeLang();
        this.windowRef.location.reload();
    }
}

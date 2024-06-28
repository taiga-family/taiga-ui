import {NgForOf, TitleCasePipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiFlagPipe} from '@taiga-ui/core/pipes/flag';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n/enums';
import type {TuiLanguageName} from '@taiga-ui/i18n/interfaces';
import {TuiLanguageSwitcherService} from '@taiga-ui/i18n/switch';
import {TuiSelectModule} from '@taiga-ui/legacy/components/select';

@Component({
    standalone: true,
    selector: 'tui-doc-language-switcher',
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
export class TuiDocLanguageSwitcher {
    protected readonly switcher = inject(TuiLanguageSwitcherService);
    protected readonly language = new FormControl(capitalize(this.switcher.language));

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

    public readonly names: TuiLanguageName[] = Array.from(this.flags.keys());
}

function capitalize(value: string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

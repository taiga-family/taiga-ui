import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';
import {TuiLanguageSwitcherService} from '@taiga-ui/i18n';
import {TuiButtonSelect, TuiChevron, TuiDataListWrapper} from '@taiga-ui/kit';

@Component({
    selector: 'tui-i18n-example-1',
    imports: [
        FormsModule,
        TuiButton,
        TuiButtonSelect,
        TuiChevron,
        TuiDataListWrapper,
        TuiDropdown,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export class TuiI18nExample1 {
    protected readonly switcher = inject(TuiLanguageSwitcherService);
    protected language = this.switcher.language;
    protected readonly languages = [
        'arabic',
        'belarusian',
        'chinese',
        'dutch',
        'english',
        'french',
        'german',
        'hebrew',
        'italian',
        'japanese',
        'kazakh',
        'korean',
        'lithuanian',
        'malay',
        'polish',
        'portuguese',
        'russian',
        'spanish',
        'turkish',
        'ukrainian',
        'vietnamese',
    ];
}

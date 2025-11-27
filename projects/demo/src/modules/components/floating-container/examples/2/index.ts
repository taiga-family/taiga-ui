import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialog} from '@taiga-ui/addon-mobile';
import {
    TUI_DEFAULT_MATCHER,
    TuiAnimated,
    TuiFilterPipe,
    type TuiMatcher,
} from '@taiga-ui/cdk';
import {TuiButton, TuiCell, TuiLabel, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiFloatingContainer, TuiSwitch} from '@taiga-ui/kit';
import {TuiHeader, TuiSearch} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAnimated,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiFilterPipe,
        TuiFloatingContainer,
        TuiHeader,
        TuiLabel,
        TuiSearch,
        TuiSheetDialog,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected floating = true;
    protected secondAction = false;

    protected search = '';

    protected readonly items = Array.from({length: 15}, (_, index) => ({
        title: `Title ${index + 1}`,
        description: `Description ${index + 1}`,
    }));

    protected readonly filter: TuiMatcher<[(typeof this.items)[0], string]> = (
        item,
        search,
    ) => TUI_DEFAULT_MATCHER(item.title, search);
}

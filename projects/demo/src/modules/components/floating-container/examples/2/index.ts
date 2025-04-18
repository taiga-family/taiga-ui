import {NgFor, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialog} from '@taiga-ui/addon-mobile';
import type {TuiMatcher} from '@taiga-ui/cdk';
import {TUI_DEFAULT_MATCHER, TuiFilterPipe} from '@taiga-ui/cdk';
import {
    TuiButton,
    tuiHeightCollapse,
    TuiLabel,
    tuiSlideInTop,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiFloatingContainer, TuiSwitch} from '@taiga-ui/kit';
import {TuiCell, TuiHeader, TuiSearch} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgFor,
        NgIf,
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
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    animations: [tuiSlideInTop, tuiHeightCollapse],
})
export default class Example {
    protected open = false;

    protected floating = true;
    protected secondAction = false;

    protected search = '';

    protected readonly items = new Array(15).fill(0).map((_, index) => ({
        title: `Title ${index + 1}`,
        description: `Description ${index + 1}`,
    }));

    protected readonly filter: TuiMatcher<[(typeof this.items)[0], string]> = (
        item,
        search,
    ) => TUI_DEFAULT_MATCHER(item.title, search);
}

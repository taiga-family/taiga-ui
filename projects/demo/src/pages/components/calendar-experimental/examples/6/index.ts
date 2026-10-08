import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBottomSheet, TuiSheetDialog} from '@taiga-ui/addon-mobile';
import {TuiAnimated, TuiDay, type TuiDayRange} from '@taiga-ui/cdk';
import {TuiButton, TuiDialog} from '@taiga-ui/core';
import {TuiCalendar} from '@taiga-ui/experimental';
import {TuiChip, tuiCreateDefaultDayRangePeriods} from '@taiga-ui/kit';
import {TuiAppBar, TuiFloatingContainer, TuiItemGroup} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAnimated,
        TuiAppBar,
        TuiBottomSheet,
        TuiButton,
        TuiCalendar,
        TuiChip,
        TuiDialog,
        TuiFloatingContainer,
        TuiItemGroup,
        TuiSheetDialog,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly today = TuiDay.currentLocal();
    protected readonly sheet = signal(false);
    protected readonly dialog = signal(false);
    protected readonly day = signal<TuiDay | null>(null);
    protected readonly range = signal<TuiDayRange | null>(null);
    protected readonly items = tuiCreateDefaultDayRangePeriods();
}

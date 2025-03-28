import {
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import {AsyncPipe} from '@angular/common';
import type {QueryList} from '@angular/core';
import {Component, inject, signal, ViewChildren} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList, TuiOptionNew, TuiScrollable, TuiTextfield} from '@taiga-ui/core';
import {TUI_COUNTRIES, TuiBadgeNotification, TuiChevron, TuiSelect} from '@taiga-ui/kit';
import {map} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport,
        FormsModule,
        TuiBadgeNotification,
        TuiChevron,
        TuiDataList,
        TuiScrollable,
        TuiSelect,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly countries = inject(TUI_COUNTRIES).pipe(map(Object.values));
    protected readonly optionsCount = signal(0);
    protected value = null;

    @ViewChildren(TuiOptionNew)
    protected set calculateOptions(x: QueryList<unknown>) {
        this.optionsCount.set(x.length);
    }
}

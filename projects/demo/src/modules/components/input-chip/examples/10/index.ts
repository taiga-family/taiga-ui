import {
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import {Component, computed, ViewChild} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiDataList,
    TuiScrollable,
    TuiSelectLike,
    TuiTextfield,
    type TuiTextfieldComponent,
} from '@taiga-ui/core';
import {TuiChevron, TuiInputChip, TuiMultiSelect} from '@taiga-ui/kit';

@Component({
    imports: [
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport,
        FormsModule,
        ReactiveFormsModule,
        TuiButton,
        TuiChevron,
        TuiDataList,
        TuiInputChip,
        TuiMultiSelect,
        TuiScrollable,
        TuiSelectLike,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    @ViewChild('filter')
    protected readonly filter?: TuiTextfieldComponent<string>;

    protected readonly items: string[] = Array.from({length: 3000}).map(
        (_, i) => `Item #${i}`,
    );

    protected value: string[] = [];

    protected readonly filtered = computed((value = this.filter?.value()) =>
        value
            ? this.items.filter((item) => TUI_DEFAULT_MATCHER(item, value))
            : this.items,
    );

    protected get content(): string {
        return this.value.length
            ? `Selected ${this.value.length} out of ${this.items.length}`
            : '';
    }

    protected onClick(): void {
        this.value = this.items.filter((_, i) => i < 2000);
    }
}

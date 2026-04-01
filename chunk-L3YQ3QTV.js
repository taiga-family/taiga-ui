import"./chunk-HU6DUUP4.js";var o=`import {Component, computed, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TUI_BREAKPOINT,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiIcon,
    TuiLink,
    TuiPopup,
} from '@taiga-ui/core';
import {TuiActionBar, TuiFilter, TuiItemsWithMore} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiActionBar,
        TuiButton,
        TuiDataList,
        TuiDropdown,
        TuiFilter,
        TuiIcon,
        TuiItemsWithMore,
        TuiLink,
        TuiPopup,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly breakpoint = inject(TUI_BREAKPOINT);
    protected items = ['one', 'two', 'three', 'four'];
    protected control = new FormControl<string[]>([]);
    protected expanded = false;

    protected readonly isMobile = computed(() => this.breakpoint() === 'mobile');

    protected get value(): string[] {
        return this.control.value || [];
    }

    protected get open(): boolean {
        return this.value.length > 0;
    }

    protected get selected(): number {
        return this.value.length;
    }

    protected toggleSelect(): void {
        this.control.setValue(this.selected < this.items.length ? this.items : []);
    }

    protected close(): void {
        this.control.setValue([]);
        this.expanded = false;
    }
}
`;export{o as default};

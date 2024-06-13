import {NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiBreakpointService,
    TuiButtonDirective,
    TuiDataList,
    TuiIconComponent,
    TuiLinkDirective,
} from '@taiga-ui/core';
import {TuiActionBar, TuiFilterComponent} from '@taiga-ui/kit';
import {map} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        TuiButtonDirective,
        TuiActionBar,
        TuiDataList,
        NgIf,
        TuiLinkDirective,
        ReactiveFormsModule,
        TuiFilterComponent,
        TuiIconComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected items = ['one', 'two', 'three'];
    protected control = new FormControl<string[]>([]);
    protected expanded = false;

    protected readonly isMobile = toSignal(
        inject(TuiBreakpointService).pipe(map(size => size === 'mobile')),
    );

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

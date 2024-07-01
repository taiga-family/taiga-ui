import {Component, Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBreakpointService} from '@taiga-ui/core';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-action-bar-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiActionBarExample1 {
    readonly items = ['one', 'two', 'three'];
    readonly control = new FormControl([]);
    expanded = false;

    readonly isMobile$ = this.breakpointService.pipe(map(size => size === 'mobile'));

    constructor(
        @Inject(TuiBreakpointService) readonly breakpointService: TuiBreakpointService,
    ) {}

    get value(): string[] {
        return this.control.value || [];
    }

    get open(): boolean {
        return this.value.length > 0;
    }

    get selected(): number {
        return this.value.length;
    }

    close(): void {
        this.control.setValue([]);
        this.expanded = false;
    }

    toggleSelect(): void {
        this.control.setValue(this.selected < this.items.length ? this.items : []);
    }
}

import {Component, ElementRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBottomSheetComponent} from '@taiga-ui/addon-mobile';

@Component({
    selector: 'tui-bottom-sheet-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiBottomSheetExample1 {
    @ViewChild(TuiBottomSheetComponent, {read: ElementRef})
    private readonly sheet?: ElementRef<HTMLElement>;

    messages = ['Check that awesome bottom sheet out!'];
    value = '';

    onClick(message: string): void {
        this.messages = this.messages.concat(message);
        this.sheet?.nativeElement.scrollTo({top: 0, behavior: 'smooth'});
    }

    onSubmit(): void {
        this.messages = this.messages.concat(this.value);
        this.value = '';
    }
}

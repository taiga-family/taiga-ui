import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialog, type TuiSheetDialogOptions} from '@taiga-ui/addon-mobile';
import {TuiButton} from '@taiga-ui/core';

@Component({
    imports: [TuiButton, TuiSheetDialog],
    templateUrl: './index.html',
    styleUrl: './index.css',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
    protected readonly stops = ['9.5rem', '18rem'];
    protected readonly paragraphs = Array.from(
        {length: 16},
        (_, index) => `Paragraph ${index + 1} of the content`,
    );

    protected readonly options: Partial<TuiSheetDialogOptions> = {
        label: 'Scroll to stop',
        stops: this.stops,
    };
}

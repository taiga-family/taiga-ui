import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/layout';
import {TuiSheetModule, type TuiSheetOptions} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiAmountPipe, TuiButton, TuiHeader, TuiSheetModule, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected readonly options: Partial<TuiSheetOptions> = {
        stops: ['calc(5rem + 74vw)', 'calc(9rem + 74vw)'],
        image: 'https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/10/IMG_0323-1024x756.jpeg',
    };

    protected toggle(): void {
        this.open = !this.open;
    }
}

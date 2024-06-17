import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiButtonDirective, TuiTitleDirective} from '@taiga-ui/core';
import {TuiHeaderDirective} from '@taiga-ui/layout';
import type {TuiSheetOptions} from '@taiga-ui/legacy';
import {TuiSheetModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiButtonDirective,
        TuiSheetModule,
        TuiAmountPipe,
        AsyncPipe,
        TuiHeaderDirective,
        TuiTitleDirective,
    ],
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

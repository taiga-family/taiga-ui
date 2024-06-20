import {isPlatformBrowser, NgFor} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiCarousel, TuiPagination} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgFor, TuiCarousel, TuiPagination, TuiButton],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected duration = isPlatformBrowser(inject(PLATFORM_ID)) ? 4_000 : 0;
    protected index = 2;

    protected readonly items = [
        'John Cleese',
        'Eric Idle',
        'Michael Palin',
        'Graham Chapman',
        'Terry Gilliam',
        'Terry Jones',
    ];
}

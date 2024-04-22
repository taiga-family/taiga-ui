import {isPlatformBrowser, NgFor} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiCarouselModule, TuiIslandModule, TuiPaginationModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'tui-carousel-example-1',
    imports: [
        TuiCarouselModule,
        TuiIslandModule,
        TuiPaginationModule,
        NgFor,
        TuiButtonDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class TuiCarouselExample1 {
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

import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiButtonDirective, TuiLoaderComponent} from '@taiga-ui/core';
import {TuiAvatarComponent, TuiCarouselModule, TuiIslandModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiButtonDirective,
        TuiCarouselModule,
        TuiIslandModule,
        TuiLoaderComponent,
        TuiAvatarComponent,
        TuiAmountPipe,
        AsyncPipe,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}

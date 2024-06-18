import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThumbnailCardComponent} from '@taiga-ui/addon-commerce';
import {TuiRipple} from '@taiga-ui/addon-mobile';
import {TuiIconPipe, TuiSurface} from '@taiga-ui/core';
import {TuiFadeDirective} from '@taiga-ui/kit';
import {TuiCardMedium} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiCardMedium,
        TuiSurface,
        TuiIconPipe,
        TuiThumbnailCardComponent,
        FormsModule,
        TuiFadeDirective,
        TuiRipple,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 0;
}

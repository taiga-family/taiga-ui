import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiRipple} from '@taiga-ui/addon-mobile';
import {TuiSurface} from '@taiga-ui/core';
import {TuiFade} from '@taiga-ui/kit';
import {TuiCardMedium} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiCardMedium,
        TuiFade,
        TuiRipple,
        TuiSurface,
        TuiThumbnailCard,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 0;
}

import"./chunk-42JZD6NG.js";var o=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiRipple} from '@taiga-ui/addon-mobile';
import {TuiFade} from '@taiga-ui/kit';
import {TuiCardMedium, TuiSurface} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiCardMedium,
        TuiFade,
        TuiRipple,
        TuiSurface,
        TuiThumbnailCard,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 0;
}
`;export{o as default};

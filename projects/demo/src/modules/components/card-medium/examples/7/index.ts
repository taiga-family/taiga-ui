import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThumbnailCardComponent} from '@taiga-ui/addon-commerce';
import {TuiRippleModule} from '@taiga-ui/addon-mobile';
import {TuiSurfaceDirective, TuiSvgComponent} from '@taiga-ui/core';
import {TuiFadeDirective} from '@taiga-ui/kit';
import {TuiCardMediumDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiCardMediumDirective,
        TuiSurfaceDirective,
        TuiSvgComponent,
        TuiThumbnailCardComponent,
        FormsModule,
        TuiFadeDirective,
        TuiRippleModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected value = 0;
}

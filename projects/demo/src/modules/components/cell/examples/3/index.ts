import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiIcon, TuiTitle} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiAvatarStack,
    TuiBadge,
    TuiCheckbox,
    TuiProgress,
} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiIcon,
        TuiCell,
        TuiProgress,
        TuiBadge,
        TuiAvatar,
        TuiAvatarStack,
        TuiCheckbox,
        TuiThumbnailCard,
        FormsModule,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = false;
}

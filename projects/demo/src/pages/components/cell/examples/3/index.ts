import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiCell, TuiCheckbox, TuiIcon, TuiLink, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiAvatarStack, TuiBadge, TuiProgress} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiAvatarStack,
        TuiBadge,
        TuiCell,
        TuiCheckbox,
        TuiIcon,
        TuiLink,
        TuiProgress,
        TuiThumbnailCard,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = false;
}

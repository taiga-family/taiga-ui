import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiButton, TuiFallbackSrcPipe, TuiIcon} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiShrinkWrap, TuiToast} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        NgForOf,
        NgIf,
        TuiAvatar,
        TuiBadge,
        TuiButton,
        TuiFallbackSrcPipe,
        TuiIcon,
        TuiPlatform,
        TuiShrinkWrap,
        TuiToast,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly platforms = ['web', 'ios'] as const;
}

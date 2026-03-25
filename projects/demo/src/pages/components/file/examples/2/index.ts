import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiButton, TuiButtonX, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiFile} from '@taiga-ui/experimental';
import {TuiProgress} from '@taiga-ui/kit';

@Component({
    imports: [
        TuiButton,
        TuiButtonX,
        TuiFile,
        TuiIcon,
        TuiPlatform,
        TuiProgress,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly platforms = ['web', 'ios', 'android'] as const;
}

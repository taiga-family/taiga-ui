import"./chunk-HU6DUUP4.js";var e=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiToast} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, TuiBadge, TuiButton, TuiPlatform, TuiToast],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly platforms = ['web', 'ios'] as const;
}
`;export{e as default};

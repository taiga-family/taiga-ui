import {Component} from '@angular/core';
import {TUI_IS_ANDROID, TUI_IS_IOS, TUI_IS_MOBILE} from '@taiga-ui/cdk';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-mobile-themes-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_IS_MOBILE,
            useValue: true,
        },
        {
            provide: TUI_IS_ANDROID,
            useValue: true,
        },
        {
            provide: TUI_IS_IOS,
            useValue: false,
        },
    ],
})
export class TuiMobileThemesExample1 {}

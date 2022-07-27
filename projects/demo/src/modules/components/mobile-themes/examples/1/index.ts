import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_ANDROID, TUI_IS_IOS, TUI_IS_MOBILE} from '@taiga-ui/cdk';

@Component({
    selector: `tui-mobile-themes-example-1`,
    templateUrl: `./index.html`,
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

import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_TOOLTIP_DEFAULT_OPTIONS, TUI_TOOLTIP_OPTIONS} from '@taiga-ui/core';

@Component({
    selector: 'tui-tooltip-example-4',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_TOOLTIP_OPTIONS, // <-- You are looking for this token
            useValue: {
                ...TUI_TOOLTIP_DEFAULT_OPTIONS,
                icon: 'tuiIconCameraLarge',
            },
        },
    ],
})
export class TuiTooltipExample4 {}

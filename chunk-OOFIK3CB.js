import"./chunk-LQ6M4NCU.js";var t=`import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSearchBar} from '@taiga-ui/addon-mobile';
import {TUI_PLATFORM, TuiActiveZone} from '@taiga-ui/cdk';
import {TUI_LIQUID_GLASS, TuiButtonX, TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiAppBar} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiActiveZone,
        TuiAppBar,
        TuiAvatar,
        TuiButtonX,
        TuiCell,
        TuiSearchBar,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [
        // Not required if \`provideTaiga({apis: {liquidGlass: true}})\` is already set up
        {provide: TUI_LIQUID_GLASS, useValue: true},
        {provide: TUI_PLATFORM, useValue: 'ios'},
    ],
    host: {
        '[attr.data-platform]': '"ios"',
        '[class.tui-liquid-glass]': 'true',
    },
})
export default class Example {
    protected readonly active = signal(false);
}
`;export{t as default};

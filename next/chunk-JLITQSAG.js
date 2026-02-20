import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiButton, TuiCell, TuiExpand, TuiLabel, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiSwitch} from '@taiga-ui/kit';
import {TuiFloatingContainer} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiDemo,
        TuiExpand,
        TuiFloatingContainer,
        TuiLabel,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Example {
    protected floating = true;
    protected secondAction = false;
    protected readonly routes = DemoRoute;
    protected readonly examples = [
        'Basic',
        'Sheet',
        'Text',
        'Content',
        'Overlay',
        'Crossfade',
    ];

    protected readonly colors = [
        '',
        'transparent',
        'var(--tui-background-elevation-1)',
        'var(--tui-background-base-alt)',
        'red',
        '#8a8db5',
        'rgba(255, 221, 45, 0.8)',
    ];

    protected color = this.colors[0]!;
}
`;export{o as default};

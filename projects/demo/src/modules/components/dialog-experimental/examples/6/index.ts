import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiDialog} from '@taiga-ui/experimental';
import {TuiAvatar, TuiFloatingContainer, TuiProgress} from '@taiga-ui/kit';
import {TuiAppBar, TuiCell} from '@taiga-ui/layout';
import {TuiRepeatTimes} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [
        TuiButton,
        TuiDialog,
        TuiFloatingContainer,
        TuiCell,
        TuiRepeatTimes,
        TuiAvatar,
        TuiTitle,
        TuiAppBar,
        TuiProgress,
    ],
    templateUrl: './index.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class Example {
    protected fullscreen = false;
    protected scrollable = false;
}

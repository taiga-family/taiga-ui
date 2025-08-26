import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiDialog} from '@taiga-ui/experimental';
import {TuiAvatar, TuiFloatingContainer, TuiProgress} from '@taiga-ui/kit';
import {TuiAppBar, TuiCell, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAppBar,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiDialog,
        TuiFloatingContainer,
        TuiHeader,
        TuiProgress,
        TuiRepeatTimes,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class Example {
    protected fullscreen = false;
    protected scrollable = false;
}

import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton, TuiCell, TuiDialog, TuiHeader, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiFloatingContainer, TuiProgress} from '@taiga-ui/kit';
import {TuiAppBar} from '@taiga-ui/layout';

@Component({
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
    encapsulation,
    changeDetection,
})
export default class Example {
    protected fullscreen = false;
    protected scrollable = false;
}

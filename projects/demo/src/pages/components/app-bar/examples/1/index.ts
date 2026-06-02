import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TUI_OPTIONS, TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiProgressBar} from '@taiga-ui/kit';
import {TuiAppBar} from '@taiga-ui/layout';
import {NgTemplateOutlet} from '@angular/common';

@Component({
    imports: [
        TuiAppBar,
        TuiButton,
        TuiPlatform,
        TuiProgressBar,
        TuiTitle,
        NgTemplateOutlet,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly option = inject(TUI_OPTIONS).apis;
}

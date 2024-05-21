import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiComponentPipe, TuiExamplePipe, TuiSetupComponent} from '@demo/utils';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    imports: [TuiAddonDoc, TuiComponentPipe, TuiExamplePipe, TuiSetupComponent],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {}

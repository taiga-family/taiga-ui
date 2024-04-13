import {Component} from '@angular/core';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';

import {changeDetection} from '#/demo/emulate/change-detection';
import {TuiComponentPipe, TuiExamplePipe, TuiSetupComponent} from '#/demo/utils';

@Component({
    standalone: true,
    imports: [TuiAddonDocModule, TuiComponentPipe, TuiExamplePipe, TuiSetupComponent],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {}

import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiComponentPipe, TuiExamplePipe} from '@demo/utils';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    imports: [TuiAddonDocModule, TuiExamplePipe, TuiComponentPipe],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {}

import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {tuiDocExampleOptionsProvider} from '@taiga-ui/addon-doc';

@Component({
    imports: [TuiDemo],
    templateUrl: './index.html',
    changeDetection,
    providers: [tuiDocExampleOptionsProvider({fullsize: true})],
})
export default class Page {
    protected readonly examples = ['Sizes', 'Accessories', 'Interactive'];
}

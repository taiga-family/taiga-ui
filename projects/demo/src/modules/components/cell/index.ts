import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {tuiDocExampleOptionsProvider} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    selector: 'example-cell',
    imports: [TuiDemo],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
    providers: [tuiDocExampleOptionsProvider({fullsize: true})],
})
export default class ExampleComponent {
    protected readonly examples = [
        'Basic',
        'Label',
        'Left side',
        'Right side',
        'Long content',
        'Actions',
        'Combinations',
    ];
}

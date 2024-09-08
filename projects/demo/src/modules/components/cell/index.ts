import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {tuiDocExampleOptionsProvider} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    imports: [TuiDemo],
    templateUrl: './index.html',
    changeDetection,
    providers: [tuiDocExampleOptionsProvider({fullsize: true})],
})
export default class Example {
    protected readonly examples = [
        'Basic',
        'Label',
        'Left side',
        'Right side',
        'Long content',
        'Actions',
        'Combinations',
        'Connected',
    ];
}

import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiExamplePipe, TuiSetup} from '@demo/utils';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';

import {TuiNumberFormatExample1} from './examples/1';

@Component({
    standalone: true,
    selector: 'example-tui-number-format',
    imports: [TuiExamplePipe, TuiSetup, AsyncPipe, TuiAddonDoc, TuiNumberFormatExample1],
    templateUrl: './index.html',
    changeDetection,
})
export default class ExampleTuiNumberFormat {}

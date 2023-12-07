import {Component} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBooleanHandler} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-data-list-wrapper-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiDataListWrapperExample1 {
    readonly control = new UntypedFormControl();

    readonly items = [
        'John Cleese',
        'Eric Idle',
        'Graham Chapman',
        'Michael Palin',
        'Terry Gilliam',
        'Terry Jones',
    ];

    readonly disabledItemHandler: TuiBooleanHandler<string> = v => v.startsWith('T');
}

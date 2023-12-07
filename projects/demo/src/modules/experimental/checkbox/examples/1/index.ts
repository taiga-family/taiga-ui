import {Component, OnInit} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: 'tui-checkbox-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiCheckboxExample1 implements OnInit {
    readonly platforms: readonly TuiPlatform[] = ['web', 'web', 'android', 'ios'];
    readonly invalidTrue = new UntypedFormControl(true, () => ({invalid: true}));
    readonly invalidFalse = new UntypedFormControl(false, () => ({invalid: true}));

    ngOnInit(): void {
        this.invalidTrue.markAsTouched();
        this.invalidFalse.markAsTouched();
    }

    getSize(first: boolean): TuiSizeS {
        return first ? 'm' : 's';
    }
}

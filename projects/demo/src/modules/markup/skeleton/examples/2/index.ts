import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTime} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-skeleton-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiSkeletonExample2 {
    testForm = new UntypedFormGroup({
        nameValue: new UntypedFormControl('', Validators.required),
        passwordValue: new UntypedFormControl('', Validators.required),
        moneyValue: new UntypedFormControl('100', Validators.required),
        timeValue: new UntypedFormControl(new TuiTime(12, 30), Validators.required),
        osnoValue: new UntypedFormControl(false),
        usnValue: new UntypedFormControl(false),
        eshnValue: new UntypedFormControl(false),
        envdValue: new UntypedFormControl(false),
    });

    skeletonVisible = false;
    lightMode = false;

    showSkeleton(): void {
        this.skeletonVisible = !this.skeletonVisible;
    }

    toggleLight(): void {
        this.lightMode = !this.lightMode;
    }
}

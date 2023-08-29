import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTime} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-skeleton-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiSkeletonExample2 {
    testForm = new FormGroup({
        envdValue: new FormControl(false),
        eshnValue: new FormControl(false),
        moneyValue: new FormControl('100', Validators.required),
        nameValue: new FormControl('', Validators.required),
        osnoValue: new FormControl(false),
        passwordValue: new FormControl('', Validators.required),
        timeValue: new FormControl(new TuiTime(12, 30), Validators.required),
        usnValue: new FormControl(false),
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

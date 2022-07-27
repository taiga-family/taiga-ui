import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTime} from '@taiga-ui/cdk';

@Component({
    selector: `tui-skeleton-example-2`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiSkeletonExample2 {
    testForm = new FormGroup({
        nameValue: new FormControl(``, Validators.required),
        passwordValue: new FormControl(``, Validators.required),
        moneyValue: new FormControl(`100`, Validators.required),
        timeValue: new FormControl(new TuiTime(12, 30), Validators.required),
        osnoValue: new FormControl(false),
        usnValue: new FormControl(false),
        eshnValue: new FormControl(false),
        envdValue: new FormControl(false),
    });

    skeletonVisible = false;
    lightMode = false;

    showSkelet(): void {
        this.skeletonVisible = !this.skeletonVisible;
    }

    toggleLight(): void {
        this.lightMode = !this.lightMode;
    }
}

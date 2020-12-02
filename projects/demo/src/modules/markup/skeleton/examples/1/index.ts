import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-skeleton-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.style.less'],
    changeDetection,
    encapsulation,
})
export class TuiSkeletonExample1 {
    testForm = new FormGroup({
        testValue: new FormControl(true),
    });

    skeletonVisible = false;
    lightMode = false;

    showSkelet() {
        this.skeletonVisible = !this.skeletonVisible;
    }

    toggleLight() {
        this.lightMode = !this.lightMode;
    }
}

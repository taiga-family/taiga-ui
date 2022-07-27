import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-skeleton-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiSkeletonExample1 {
    testForm = new FormGroup({
        testValue: new FormControl(true),
    });

    skeletonVisible = false;
    lightMode = false;
    placeholder = `Some paragraph with information`;

    showSkeleton(): void {
        this.skeletonVisible = !this.skeletonVisible;
    }

    toggleLight(): void {
        this.lightMode = !this.lightMode;
    }
}

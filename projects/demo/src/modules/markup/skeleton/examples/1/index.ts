import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-skeleton-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiSkeletonExample1 {
    radius = 0;

    testForm = new UntypedFormGroup({
        testValue: new UntypedFormControl(true),
    });

    skeletonVisible = false;
    lightMode = false;
    placeholder = 'Some paragraph with information';

    showSkeleton(): void {
        this.skeletonVisible = !this.skeletonVisible;
    }

    toggleLight(): void {
        this.lightMode = !this.lightMode;
    }
}

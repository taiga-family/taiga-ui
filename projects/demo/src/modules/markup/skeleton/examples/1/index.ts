import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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
    protected radius = 0;

    protected testForm = new FormGroup({
        testValue: new FormControl(true),
    });

    protected skeletonVisible = false;
    protected lightMode = false;
    protected placeholder = 'Some paragraph with information';

    protected showSkeleton(): void {
        this.skeletonVisible = !this.skeletonVisible;
    }

    protected toggleLight(): void {
        this.lightMode = !this.lightMode;
    }
}

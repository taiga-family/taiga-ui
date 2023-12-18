import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-island-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiIslandExample3 {
    bannerImage = 'https://ng-web-apis.github.io/dist/assets/images/web-api.svg';
    expanded = false;
    index = 1;
    testForm = new UntypedFormGroup({
        testValue: new UntypedFormControl('', Validators.required),
    });

    collapsingText =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ' +
        'sed do eiusmod tempor incididunt ut labore et dolore ' +
        'magna aliqua.';

    get linesLimit(): number {
        return this.expanded ? 10 : 3;
    }

    expandText(): void {
        this.expanded = !this.expanded;
    }

    onIndexChange(index: number): void {
        this.index = index;
    }
}

import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
    protected bannerImage =
        'https://ng-web-apis.github.io/dist/assets/images/web-api.svg';

    protected expanded = false;
    protected index = 1;
    protected testForm = new FormGroup({
        testValue: new FormControl('', Validators.required),
    });

    protected collapsingText =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ' +
        'sed do eiusmod tempor incididunt ut labore et dolore ' +
        'magna aliqua.';

    protected get linesLimit(): number {
        return this.expanded ? 10 : 3;
    }

    protected expandText(): void {
        this.expanded = !this.expanded;
    }

    protected onIndexChange(index: number): void {
        this.index = index;
    }
}

import {AsyncPipe, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonDirective, TuiErrorComponent, TuiLinkDirective} from '@taiga-ui/core';
import {TuiAvatarComponent, TuiFieldErrorPipe} from '@taiga-ui/kit';
import {TuiCardLargeDirective} from '@taiga-ui/layout';
import {
    TuiInputPhoneModule,
    TuiIslandDirective,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiIslandDirective,
        ReactiveFormsModule,
        TuiInputPhoneModule,
        TuiErrorComponent,
        TuiTextfieldControllerModule,
        TuiFieldErrorPipe,
        AsyncPipe,
        TuiCardLargeDirective,
        TuiAvatarComponent,
        TuiButtonDirective,
        TuiLinkDirective,
        NgIf,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
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

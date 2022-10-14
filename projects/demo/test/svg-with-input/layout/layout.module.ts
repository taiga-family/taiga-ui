import {CommonModule} from '@angular/common';
import {Directive, NgModule} from '@angular/core';
import {TuiButtonModule} from '@taiga-ui/core';

import {TuiLayoutTestComponent} from './layout.component';

@Directive({
    selector: `[layoutCopyright]`,
})
export class TuiLayoutTestCopyrightDirective {}

@Directive({
    selector: `[layoutForm]`,
})
export class TuiLayoutTestFormDirective {}

@NgModule({
    imports: [CommonModule, TuiButtonModule],
    declarations: [
        TuiLayoutTestComponent,
        TuiLayoutTestFormDirective,
        TuiLayoutTestCopyrightDirective,
    ],
    exports: [
        TuiLayoutTestComponent,
        TuiLayoutTestFormDirective,
        TuiLayoutTestCopyrightDirective,
    ],
})
export class TuiLayoutTestModule {}

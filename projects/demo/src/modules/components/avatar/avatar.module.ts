import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiSvgModule} from '@taiga-ui/core';
import {TuiAvatarModule, TuiRadioListModule} from '@taiga-ui/kit';
import {ExampleTuiAvatarComponent} from './avatar.component';
import {TuiAvatarExample1} from './examples/1';
import {TuiAvatarExample2} from './examples/2';

@NgModule({
    imports: [
        TuiAvatarModule,
        CommonModule,
        ...TUI_DOC_PAGE_MODULES,
        TuiRadioListModule,
        TuiSvgModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(generateRoutes(ExampleTuiAvatarComponent)),
    ],
    declarations: [ExampleTuiAvatarComponent, TuiAvatarExample1, TuiAvatarExample2],
    exports: [ExampleTuiAvatarComponent],
})
export class ExampleTuiAvatarModule {}

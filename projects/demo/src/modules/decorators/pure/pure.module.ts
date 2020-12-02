import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';
import {ExampleTuiPureFunctionComponent} from './pure-function.component';
import {ExampleTuiPureGetterComponent} from './pure-getter.component';
import {ExampleTuiPureComponent} from './pure.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiInputModule,
        TuiButtonModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiPureComponent)),
    ],
    declarations: [
        ExampleTuiPureComponent,
        ExampleTuiPureFunctionComponent,
        ExampleTuiPureGetterComponent,
    ],
    exports: [ExampleTuiPureComponent],
})
export class ExampleTuiPureModule {}

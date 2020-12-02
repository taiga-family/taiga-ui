import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiElementModule} from '@taiga-ui/cdk';
import {TuiButtonModule} from '@taiga-ui/core';
import {ExampleTuiElementComponent} from './element.component';
import {TuiElementExample1} from './examples/1';

@NgModule({
    imports: [
        TuiButtonModule,
        TuiElementModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiElementComponent)),
    ],
    declarations: [ExampleTuiElementComponent, TuiElementExample1],
    exports: [ExampleTuiElementComponent],
})
export class ExampleTuiElementModule {}

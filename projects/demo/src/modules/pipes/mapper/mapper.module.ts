import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiMapperPipeModule} from '@taiga-ui/cdk';
import {ExampleTuiMapperComponent} from './mapper.component';

@NgModule({
    imports: [
        TuiMapperPipeModule,
        CommonModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiMapperComponent)),
    ],
    declarations: [ExampleTuiMapperComponent],
    exports: [ExampleTuiMapperComponent],
})
export class ExampleTuiMapperModule {}

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiSpacingExample1} from './examples/1';
import {TuiSpacingExample2} from './examples/2';
import {SpacesComponent} from './spaces.component';

@NgModule({
    imports: [
        CommonModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(SpacesComponent)),
    ],
    declarations: [SpacesComponent, TuiSpacingExample1, TuiSpacingExample2],
    exports: [SpacesComponent],
})
export class SpacesModule {}

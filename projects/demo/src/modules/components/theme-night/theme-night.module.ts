import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {ExampleTuiThemeNightComponent} from './theme-night.component';

@NgModule({
    imports: [
        TuiLinkModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiThemeNightComponent)),
    ],
    declarations: [ExampleTuiThemeNightComponent],
    exports: [ExampleTuiThemeNightComponent],
})
export class ExampleTuiThemeNightModule {}

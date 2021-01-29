import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiToggleModule} from '@taiga-ui/kit';
import {TuiThemeSwitcherExample1} from './examples/1';
import {ElderlyComponent} from './examples/elderly/elderly.component';
import {ExampleTuiThemeSwitcherComponent} from './theme-switcher.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiToggleModule,
        TuiNotificationModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiThemeSwitcherComponent)),
    ],
    declarations: [
        ExampleTuiThemeSwitcherComponent,
        TuiThemeSwitcherExample1,
        ElderlyComponent,
    ],
    exports: [ExampleTuiThemeSwitcherComponent],
})
export class ExampleTuiThemeSwitcherModule {}

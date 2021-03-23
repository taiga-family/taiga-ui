import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiMapperPipeModule} from '@taiga-ui/cdk';
import {ExampleTuiMapperComponent} from './mapper.component';

@NgModule({
    imports: [
        TuiMapperPipeModule,
        CommonModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiMapperComponent)),
    ],
    declarations: [ExampleTuiMapperComponent],
    exports: [ExampleTuiMapperComponent],
})
export class ExampleTuiMapperModule {}

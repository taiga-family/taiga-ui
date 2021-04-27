import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiMapperPipeModule} from '@taiga-ui/cdk';
import {TuiMapperExample1} from './examples/1/component';
import {TuiMapperExample2} from './examples/2/component';
import {ExampleTuiMapperComponent} from './mapper.component';

@NgModule({
    imports: [
        TuiMapperPipeModule,
        CommonModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiMapperComponent)),
    ],
    declarations: [ExampleTuiMapperComponent, TuiMapperExample1, TuiMapperExample2],
    exports: [ExampleTuiMapperComponent],
})
export class ExampleTuiMapperModule {}

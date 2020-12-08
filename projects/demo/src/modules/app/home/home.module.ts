import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiDocCodeModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiAccordionModule} from '@taiga-ui/kit';
import {HomeComponent} from './home.component';

@NgModule({
    imports: [RouterModule, TuiDocCodeModule, TuiLinkModule, TuiAccordionModule],
    entryComponents: [HomeComponent],
    declarations: [HomeComponent],
    exports: [HomeComponent],
})
export class HomeModule {}

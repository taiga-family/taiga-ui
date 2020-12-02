import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiDocDocumentationModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {HintControllerDocumentationComponent} from './hint-controller-documentation.component';

@NgModule({
    imports: [CommonModule, RouterModule, TuiDocDocumentationModule, TuiLinkModule],
    declarations: [HintControllerDocumentationComponent],
    exports: [HintControllerDocumentationComponent],
})
export class HintControllerDocumentationModule {}

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLinkModule} from '@taiga-ui/core';
import {CommunityLinksComponent} from './community-links.component';

@NgModule({
    imports: [CommonModule, TuiLinkModule],
    declarations: [CommunityLinksComponent],
    exports: [CommunityLinksComponent],
})
export class CommunityLinksModule {}

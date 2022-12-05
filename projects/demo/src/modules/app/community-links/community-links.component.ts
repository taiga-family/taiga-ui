import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: `community-links`,
    templateUrl: `./community-links.template.html`,
    styleUrls: [`./community-links.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunityLinksComponent {}

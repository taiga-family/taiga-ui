import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    templateUrl: './copy-page.template.html',
    styleUrls: ['./copy-page.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CopyPage {}

export const PAGE_ACTIONS_CONTENT = new PolymorpheusComponent(CopyPage);

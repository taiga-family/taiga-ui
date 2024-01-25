import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    standalone: true,
    selector: 'tui-avatar-labeled',
    template: '<ng-content></ng-content>',
    styleUrls: ['./avatar-labeled.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAvatarLabeledComponent {}

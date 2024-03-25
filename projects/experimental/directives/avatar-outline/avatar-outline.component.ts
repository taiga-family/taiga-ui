import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    template: '',
    styleUrls: ['./avatar-outline.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-avatar-outline',
    },
})
export class TuiAvatarOutlineComponent {}

import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {tuiScaleIn} from '@taiga-ui/core/animations';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import {tuiToAnimationOptions} from '@taiga-ui/core/utils/miscellaneous';

@Component({
    standalone: true,
    selector: 'button[tuiTabBarItem], a[tuiTabBarItem]',
    imports: [NgIf, TuiIcon],
    templateUrl: './tab-bar-item.template.html',
    styleUrls: ['./tab-bar-item.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiScaleIn],
})
export class TuiTabBarItemComponent {
    protected readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));

    @Input()
    public icon = '';

    @Input()
    public badge?: number | null = null;

    protected format(value: number): string {
        return value > 999 ? '999+' : String(value);
    }
}

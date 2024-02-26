import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TUI_ANIMATIONS_SPEED, tuiScaleIn, tuiToAnimationOptions} from '@taiga-ui/core';

@Component({
    selector: 'button[tuiTabBarItem], a[tuiTabBarItem]',
    templateUrl: './tab-bar-item.template.html',
    styleUrls: ['./tab-bar-item.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiScaleIn],
})
export class TuiTabBarItemComponent {
    @Input()
    public icon = '';

    @Input()
    public badge?: number | null = null;

    protected readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));

    protected format(value: number): string {
        return value > 999 ? '999+' : String(value);
    }
}

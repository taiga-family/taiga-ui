import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiPure} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-avatar-labeled',
    template: `
        <ng-content></ng-content>
        <ng-container *ngIf="label.length">
            <span
                *ngFor="let item of split(label)"
                tuiFade
            >
                {{ item }}
            </span>
        </ng-container>
    `,
    styleUrls: ['./avatar-labeled.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAvatarLabeledComponent {
    @Input()
    @HostBinding('attr.title')
    label = '';

    @tuiPure
    split(label: string): readonly string[] {
        return label.split(' ');
    }
}

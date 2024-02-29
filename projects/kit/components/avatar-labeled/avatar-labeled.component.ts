import {NgForOf, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiPure} from '@taiga-ui/cdk';
import {TuiFadeDirective} from '@taiga-ui/kit/directives';

@Component({
    standalone: true,
    selector: 'tui-avatar-labeled',
    imports: [NgForOf, NgIf, TuiFadeDirective],
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
    public label = '';

    @tuiPure
    protected split(label: string): readonly string[] {
        return label.split(' ');
    }
}

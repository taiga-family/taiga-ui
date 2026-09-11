import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TuiAppearance, tuiAppearance} from '@taiga-ui/core/directives/appearance';
import {tuiIsObscured} from '@taiga-ui/core/utils/miscellaneous';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiHintDirective} from './hint.directive';
import {TuiHintAnchored} from './hint-anchored.directive';
import {TuiHintHover} from './hint-hover.directive';
import {TuiHintPointer} from './hint-pointer.directive';
import {TuiHintUnstyledComponent} from './hint-unstyled.component';

@Component({
    selector: 'tui-hint',
    imports: [PolymorpheusOutlet],
    template: `
        <ng-content />
        <span
            *polymorpheusOutlet="content() as text; context: hint.context()"
            [innerHTML]="text"
        ></span>
    `,
    styleUrl: './hint.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiButtonOptionsProvider({size: 's'})],
    hostDirectives: [TuiAppearance, TuiAnimated, TuiActiveZone, TuiHintAnchored],
    host: {
        role: 'tooltip',
        '[attr.tuiTheme]': 'theme',
        '[class._untouchable]': 'pointer',
        '(document:pointerdown)': 'onPointerDown($event.target)',
    },
})
export class TuiHintComponent {
    private readonly el = tuiInjectElement();
    private readonly hover = inject(TuiHintHover);

    protected readonly pointer = inject(TuiHintPointer, {optional: true});
    protected readonly hint = inject(TuiHintDirective);
    protected readonly appearance = tuiAppearance(this.hint.appearance);
    protected readonly content =
        this.hint.component.component === TuiHintUnstyledComponent
            ? signal('')
            : this.hint.content;

    protected readonly theme = this.hint.el
        .closest('[tuiTheme]')
        ?.getAttribute('tuiTheme');

    protected onPointerDown(target: HTMLElement): void {
        if (
            (!target.closest(this.el.tagName) && !this.hint.el.contains(target)) ||
            tuiIsObscured(this.hint.el)
        ) {
            this.hover.toggle(false);
        }
    }
}

import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: `tui-styles-info`,
    template: `
        <tui-notification class="tui-space_bottom-3">
            To use this you need to add optional
            <code>@taiga-ui/styles</code>
            package and include
            <code>@taiga-ui/styles/taiga-ui-global</code>
            in your global styles.
            <a
                tuiLink
                routerLink="/getting-started"
                fragment="styles"
            >
                Read more.
            </a>
        </tui-notification>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StylesInfoComponent {}

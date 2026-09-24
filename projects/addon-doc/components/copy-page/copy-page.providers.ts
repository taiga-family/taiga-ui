import {type Provider} from '@angular/core';
import {TUI_DOC_ACTIONS} from '@taiga-ui/addon-doc/tokens';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {TuiDocCopyPage} from './copy-page.component';

/**
 * Shows the "Copy page" action in the page header. Only makes sense on portals that serve
 * a Markdown twin next to every page.
 */
export function tuiDocCopyPageProvider(): Provider {
    return {
        provide: TUI_DOC_ACTIONS,
        useValue: new PolymorpheusComponent(TuiDocCopyPage),
    };
}

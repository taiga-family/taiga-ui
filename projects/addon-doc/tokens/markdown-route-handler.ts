import {InjectionToken} from '@angular/core';
import {type TuiStringHandler} from '@taiga-ui/cdk/types';

/**
 * Maps the route of the page currently open to the route its Markdown twin is served at.
 *
 * Only needed when a page answers at more than one URL — an empty route aliasing a named one,
 * say, where the twin is generated for the named route alone.
 */
export const TUI_DOC_MARKDOWN_ROUTE_HANDLER = new InjectionToken<
    TuiStringHandler<string>
>(ngDevMode ? 'TUI_DOC_MARKDOWN_ROUTE_HANDLER' : '', {factory: () => (route) => route});

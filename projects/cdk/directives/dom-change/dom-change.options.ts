import {InjectionToken} from '@angular/core';

export interface TuiDomChangeOptions extends MutationObserverInit {}

export const TUI_DOM_CHANGE_OPTIONS = new InjectionToken<TuiDomChangeOptions>(
    'The options argument allows for setting mutation observation options via object members.',
    {
        factory: () => ({
            //  if mutations to target's attributes are to be observed.
            //  Can be omitted if attributeOldValue or attributeFilter is specified.
            attributes: true,

            // if mutations to target's children are to be observed
            childList: true,

            // if mutations to not just target,
            // but also target's descendants are to be observed
            subtree: true,

            // if attributes is true or omitted and
            // target's attribute value before the mutation needs to be recorded.
            characterDataOldValue: true,
        }),
    },
);

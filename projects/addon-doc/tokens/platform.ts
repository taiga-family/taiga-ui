import {inject, InjectionToken, signal, type WritableSignal} from '@angular/core';
import {TUI_PLATFORM} from '@taiga-ui/cdk/tokens';

export const TUI_DOC_PLATFORM = new InjectionToken<
    WritableSignal<'android' | 'ios' | 'web'>
>(ngDevMode ? 'TUI_DOC_PLATFORM' : '', {factory: () => signal(inject(TUI_PLATFORM))});

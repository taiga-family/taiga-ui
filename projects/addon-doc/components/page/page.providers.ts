import {InjectionToken} from '@angular/core';
import {type ActivatedRouteSnapshot} from '@angular/router';
import {type TuiHandler} from '@taiga-ui/cdk/types';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

export const TUI_DOC_TABS = new InjectionToken<
    TuiHandler<ActivatedRouteSnapshot, Record<string, PolymorpheusContent>>
>(ngDevMode ? 'TUI_DOC_TABS' : '', {factory: () => () => ({})});

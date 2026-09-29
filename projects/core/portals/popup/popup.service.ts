import {type ComponentRef, Injectable} from '@angular/core';
import {type TuiPortals, TuiPortalService} from '@taiga-ui/cdk/portals';
import {type PolymorpheusComponent} from '@taiga-ui/polymorpheus';

const HOSTS = new WeakMap<TuiPortalService, Pick<TuiPortals, 'addComponent'>>();

export function tuiAddAnchoredPopup<C>(
    service: TuiPortalService,
    content: PolymorpheusComponent<C>,
): ComponentRef<C> {
    return HOSTS.get(service)?.addComponent(content) ?? service.add(content);
}

export function tuiAttachAnchoredPopup(
    service: TuiPortalService,
    host: Pick<TuiPortals, 'addComponent'>,
): void {
    HOSTS.set(service, host);
}

export function tuiDetachAnchoredPopup(
    service: TuiPortalService,
    host: Pick<TuiPortals, 'addComponent'>,
): void {
    if (HOSTS.get(service) === host) {
        HOSTS.delete(service);
    }
}

@Injectable({providedIn: 'root'})
export class TuiPopupService extends TuiPortalService {}

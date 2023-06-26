import {Location as NgLocation} from '@angular/common';

/** @deprecated */
export function tuiPrepareExternalUrl(
    locationNg: NgLocation,
    locationRef: Location,
    hash: string,
): string {
    const url = locationNg
        .prepareExternalUrl(locationNg.path(false))
        .replace(locationRef.origin, ``);

    return `url(${url}#${hash})`;
}

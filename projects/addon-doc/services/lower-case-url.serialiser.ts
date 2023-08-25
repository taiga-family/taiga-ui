import {Injectable} from '@angular/core';
import {DefaultUrlSerializer, UrlTree} from '@angular/router';

@Injectable()
export class TuiLowerCaseUrlSerializer extends DefaultUrlSerializer {
    override parse(url: string): UrlTree {
        const [requestURI, queries] = url.split(`?`);
        const path = queries
            ? [requestURI.toLowerCase(), queries].join(`?`)
            : url.toLowerCase();

        return super.parse(path);
    }
}

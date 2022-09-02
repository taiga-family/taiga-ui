import type {Observable} from 'rxjs';
import {fromEvent} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

import type {ImgbbService} from './imgbb.service';

export function imageLoader(service: ImgbbService): (file: File) => Observable<string> {
    return (file: File) => {
        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);

        return fromEvent(fileReader, `load`)
            .pipe(map(() => String(fileReader.result)))
            .pipe(switchMap(base64 => service.save(base64)));
    };
}

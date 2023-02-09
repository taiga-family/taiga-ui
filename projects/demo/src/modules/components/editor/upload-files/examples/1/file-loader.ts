import {TuiEditorAttachedFile} from '@taiga-ui/addon-editor';
import {forkJoin, Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';

import {FileIoService} from './filesio.service';

export function fileLoader(
    service: FileIoService,
): (files: File[]) => Observable<TuiEditorAttachedFile[]> {
    return (files: File[]) => {
        service.loading$.next(true);

        return forkJoin(files.map(file => service.upload(file))).pipe(
            finalize(() => service.loading$.next(false)),
        );
    };
}

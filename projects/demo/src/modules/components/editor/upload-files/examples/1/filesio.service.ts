import {Injectable} from '@angular/core';
import {environment} from '@demo/environments/environment';
import {TuiEditorAttachedFile} from '@taiga-ui/addon-editor';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: `root`,
})
export class FileIoService {
    readonly loading$ = new BehaviorSubject(false);

    upload(file: File): Observable<TuiEditorAttachedFile> {
        const {host, expires, autoDelete} = environment.fileIO;
        const body = new FormData();

        body.append(`file`, file, file.name);
        body.append(`expires`, expires);
        body.append(`autoDelete`, autoDelete);

        return from(
            fetch(host, {
                method: `POST`,
                body,
            }).then(async (response: Response) => response.json()),
        ).pipe(map(result => ({name: result.name, link: result.link})));
    }
}

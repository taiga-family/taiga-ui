import {Injectable} from '@angular/core';
import {TuiEditorAttachedFile} from '@taiga-ui/addon-editor';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

/**
 * @description:
 * You can get your credentials for testing API
 * by free file.io account:
 * https://www.file.io/plans
 */
const fileIO = {
    host: `https://file.io/`,
    autoDelete: `true`,
    expires: `1d`,
};

@Injectable({
    providedIn: `root`,
})
export class FileIoService {
    readonly loading$ = new BehaviorSubject(false);

    upload(file: File): Observable<TuiEditorAttachedFile> {
        const body = new FormData();

        body.append(`file`, file, file.name);
        body.append(`expires`, fileIO.expires);
        body.append(`autoDelete`, fileIO.autoDelete);

        return from(
            fetch(fileIO.host, {
                method: `POST`,
                body,
            }).then(async (response: Response) => response.json()),
        ).pipe(map(result => ({name: result.name, link: result.link})));
    }
}

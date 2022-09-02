import {Injectable} from '@angular/core';
import type {Observable} from 'rxjs';
import {from} from 'rxjs';
import {map} from 'rxjs/operators';

import {environment} from '../../../../../environments/environment';

interface ImgbbResponse {
    data: {
        id: string;
        title: string;
        url: string;
        width: string;
        height: string;
        size: number;
        time: string;
        expiration: string;
    };
    success: boolean;
    status: number;
}

@Injectable({
    providedIn: `root`,
})
export class ImgbbService {
    private static createBody(base64: string): URLSearchParams {
        const formData = new FormData();

        formData.append(`image`, base64.split(`,`).pop() || ``);

        return new URLSearchParams(formData as any);
    }

    save(base64: string): Observable<string> {
        const {host, apiKey, expiration} = environment.imgbb;

        return from(
            fetch(`${host}/1/upload?key=${apiKey}&expiration=${expiration}`, {
                method: `POST`,
                body: ImgbbService.createBody(base64),
                headers: {'Content-Type': `application/x-www-form-urlencoded`},
            }).then(async (response: Response) => response.json()),
        ).pipe(map((response: ImgbbResponse) => response.data.url));
    }
}

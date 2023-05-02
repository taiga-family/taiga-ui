import {Injectable} from '@angular/core';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

/**
 * @description:
 * You can get your credentials for testing API on:
 * https://api.imgbb.com/
 */
const imgbb = {
    host: `https://api.imgbb.com`,
    apiKey: `3c1615980dcf693b282c4b0fb608b28a`,
    expiration: 300, // 5min lifetime
};

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
    readonly loading$ = new BehaviorSubject(false);

    private static createBody(base64: string): URLSearchParams {
        const formData = new FormData();

        formData.append(`image`, base64.split(`,`).pop() || ``);

        return new URLSearchParams(formData as any);
    }

    get isLoading(): boolean {
        return this.loading$.getValue();
    }

    save(base64: string): Observable<string> {
        return from(
            fetch(
                `${imgbb.host}/1/upload?key=${imgbb.apiKey}&expiration=${imgbb.expiration}`,
                {
                    method: `POST`,
                    body: ImgbbService.createBody(base64),
                    headers: {'Content-Type': `application/x-www-form-urlencoded`},
                },
            ).then(async (response: Response) => response.json()),
        ).pipe(map((response: ImgbbResponse) => response.data.url));
    }
}

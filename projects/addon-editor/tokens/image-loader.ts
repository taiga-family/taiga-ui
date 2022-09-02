import {InjectionToken} from '@angular/core';
import type {TuiHandler} from '@taiga-ui/cdk';
import {tuiTypedFromEvent} from '@taiga-ui/cdk';
import type {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export const TUI_IMAGE_LOADER: InjectionToken<TuiHandler<File, Observable<string>>> =
    new InjectionToken<TuiHandler<File, Observable<string>>>(`Image loader handler`, {
        factory: () => file => {
            const fileReader = new FileReader();

            fileReader.readAsDataURL(file);

            return tuiTypedFromEvent(fileReader, `load`).pipe(
                map(() => String(fileReader.result)),
            );
        },
    });

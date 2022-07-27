import {InjectionToken} from '@angular/core';
import {TuiHandler, typedFromEvent} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export const TUI_IMAGE_LOADER: InjectionToken<TuiHandler<File, Observable<string>>> =
    new InjectionToken<TuiHandler<File, Observable<string>>>(`Image loader handler`, {
        factory: () => file => {
            const fileReader = new FileReader();

            fileReader.readAsDataURL(file);

            return typedFromEvent(fileReader, `load`).pipe(
                map(() => String(fileReader.result)),
            );
        },
    });

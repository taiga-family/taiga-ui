import {InjectionToken} from '@angular/core';
import {TuiHandler, tuiTypedFromEvent} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export const TUI_IMAGE_LOADER: InjectionToken<TuiHandler<File, Observable<string>>> =
    new InjectionToken<TuiHandler<File, Observable<string>>>(
        `[TUI_IMAGE_LOADER]: Image loader handler`,
        {
            factory: () => file => {
                const fileReader = new FileReader();

                fileReader.readAsDataURL(file);

                return tuiTypedFromEvent(fileReader, `load`).pipe(
                    map(() => String(fileReader.result)),
                );
            },
        },
    );

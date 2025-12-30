import {inject, Injectable} from '@angular/core';
import {type SafeResourceUrl} from '@angular/platform-browser';
import {type TuiPortalContext} from '@taiga-ui/cdk/portals';
import {TuiModalService} from '@taiga-ui/core/portals/modal';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {type Observable} from 'rxjs';

import {TuiPdfViewerComponent} from './pdf-viewer.component';
import {TUI_PDF_VIEWER_OPTIONS, type TuiPdfViewerOptions} from './pdf-viewer.options';

type Content<G> = PolymorpheusContent<TuiPortalContext<TuiPdfViewerOptions<unknown>, G>>;

@Injectable({
    providedIn: 'root',
})
export class TuiPdfViewerService extends TuiModalService<TuiPdfViewerOptions<unknown>> {
    protected readonly options = inject(TUI_PDF_VIEWER_OPTIONS);
    protected readonly content = TuiPdfViewerComponent;

    public override open<G>(
        content: Content<G> | SafeResourceUrl,
        options: Partial<TuiPdfViewerOptions<any>> = {},
    ): Observable<G> {
        return super.open(content as Content<G>, options);
    }
}

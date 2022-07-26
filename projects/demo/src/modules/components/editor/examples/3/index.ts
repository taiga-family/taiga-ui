import {HttpClient} from '@angular/common/http';
import {Component, Inject, Injector} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TUI_EDITOR_EXTENSIONS,
    TUI_IMAGE_LOADER,
    TuiEditorTool,
} from '@taiga-ui/addon-editor';
import {TuiDestroyService, TuiHandler} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {switchMap, takeUntil} from 'rxjs/operators';

@Component({
    selector: `tui-editor-example-3`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    providers: [
        TuiDestroyService,
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [Injector],
            useFactory: (injector: Injector) => [
                import(`@tiptap/starter-kit`).then(m => m.default),
                import(`@taiga-ui/addon-editor/extensions/image-editor`).then(m =>
                    m.createImageEditorExtension(injector),
                ),
            ],
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiEditorExample3 {
    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];

    base64Image$ = this.http
        .get(`assets/images/lumberjack.png`, {responseType: `blob`})
        .pipe(switchMap(file => this.imageLoader(file)));

    control = new FormControl(``);

    constructor(
        @Inject(TUI_IMAGE_LOADER)
        private readonly imageLoader: TuiHandler<Blob, Observable<string>>,
        @Inject(HttpClient) private readonly http: HttpClient,
        @Inject(TuiDestroyService) destroy$: TuiDestroyService,
    ) {
        this.base64Image$.pipe(takeUntil(destroy$)).subscribe(src => {
            this.control.patchValue(`
                <img data-type="image-editor" src="${src}" width="300">
                <p>Try to drag right border of image!</p>

                <p>To change min size of image use token <code>TUI_EDITOR_MIN_IMAGE_WIDTH</code>.</p>
            `);
        });
    }
}

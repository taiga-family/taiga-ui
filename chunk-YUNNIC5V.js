import"./chunk-HU6DUUP4.js";var i=`import {AsyncPipe} from '@angular/common';
import {Component, inject, type TemplateRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiIsPresent} from '@taiga-ui/cdk';
import {TuiButton, type TuiDialogContext, TuiIcon, TuiLoader} from '@taiga-ui/core';
import {TuiPreview, TuiPreviewDialogService} from '@taiga-ui/kit';
import {
    BehaviorSubject,
    filter,
    map,
    type Observable,
    of,
    startWith,
    switchMap,
    timer,
} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiButton, TuiIcon, TuiLoader, TuiPreview],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly previewDialogService = inject(TuiPreviewDialogService);

    @ViewChild('preview')
    protected readonly preview?: TemplateRef<TuiDialogContext>;

    protected readonly items = [
        {
            title: 'some table.xlsx',
            hasPreview: false,
        },
        {
            title: 'Content #2',
            hasPreview: true,
        },
    ];

    protected readonly index$$ = new BehaviorSubject<number>(0);

    protected readonly item$ = this.index$$.pipe(
        map((index) => this.items[index]),
        filter(tuiIsPresent),
    );

    protected readonly title$ = this.item$.pipe(map((item) => item.title));

    protected readonly contentUnavailable$ = this.item$.pipe(
        map((item) => !item.hasPreview),
    );

    protected readonly imageSrc$ = this.item$.pipe(
        switchMap((item) =>
            item.hasPreview ? this.emulateBackendRequest().pipe(startWith('')) : of(null),
        ),
    );

    protected readonly loading$ = this.imageSrc$.pipe(map((src) => src === ''));

    protected show(): void {
        this.previewDialogService.open(this.preview || '').subscribe();
    }

    protected download(): void {
        console.info('downloading...');
    }

    protected emulateBackendRequest(): Observable<string> {
        return timer(1500).pipe(
            map(() => 'https://ng-web-apis.github.io/dist/assets/images/web-api.svg'),
        );
    }
}
`;export{i as default};

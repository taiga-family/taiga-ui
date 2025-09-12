import {Clipboard} from '@angular/cdk/clipboard';
import {AsyncPipe, NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {
    Component,
    ContentChild,
    DestroyRef,
    inject,
    Input,
    type OnInit,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TUI_DEFAULT_MATCHER,
    TuiAutoFocus,
    TuiFilterPipe,
    TuiKeysPipe,
} from '@taiga-ui/cdk';
import {TuiAlertService, TuiHint, TuiTextfieldOptionsDirective} from '@taiga-ui/core';
import {TuiBadge} from '@taiga-ui/kit';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {debounceTime, distinctUntilChanged, filter, map, type Observable} from 'rxjs';

import {IconsGroupTemplate} from './icons-group.directive';

@Component({
    selector: 'icons-group',
    imports: [
        AsyncPipe,
        NgForOf,
        NgIf,
        NgTemplateOutlet,
        ReactiveFormsModule,
        TuiAutoFocus,
        TuiBadge,
        TuiFilterPipe,
        TuiHint,
        TuiInputModule,
        TuiKeysPipe,
        TuiTextfieldControllerModule,
        TuiTextfieldOptionsDirective,
    ],
    templateUrl: './icons-group.template.html',
    styleUrls: ['./icons-group.style.less'],
    changeDetection,
})
export class IconsGroup implements OnInit {
    private readonly clipboard = inject(Clipboard);
    private readonly alerts = inject(TuiAlertService);
    private readonly route = inject(ActivatedRoute);
    private readonly router = inject(Router);
    private readonly destroyRef = inject(DestroyRef);

    @ContentChild(IconsGroupTemplate)
    protected readonly iconGroup?: IconsGroupTemplate;

    protected matcher: (item: string, search: string) => boolean = TUI_DEFAULT_MATCHER;

    protected control = new FormControl<string>('');

    protected search$: Observable<string> = this.route.queryParams.pipe(
        map((queryParams) => queryParams['search'] ?? ''),
        distinctUntilChanged(),
    );

    @Input()
    public icons: Record<string, readonly string[]> = {};

    @Input()
    public color: string | null = null;

    public ngOnInit(): void {
        this.control.patchValue(this.route.snapshot.queryParams['search'] ?? '');
        this.control.valueChanges
            .pipe(
                debounceTime(500),
                map((search) => search || ''),
                filter((search) => search.length >= 2 || search.length === 0),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe((search) => {
                void this.router.navigate([], {queryParams: {search}});
            });
    }

    protected copyPath = (name: string): void => {
        this.clipboard.copy(name);
        this.alerts.open(`The name ${name} copied`, {appearance: 'positive'}).subscribe();
    };
}

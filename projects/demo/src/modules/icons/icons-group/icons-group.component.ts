import {Clipboard} from '@angular/cdk/clipboard';
import {Component, ContentChild, Inject, Input, OnInit, Self} from '@angular/core';
import {UntypedFormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {TUI_DEFAULT_MATCHER, TuiDestroyService} from '@taiga-ui/cdk';
import {TuiAlertService} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, takeUntil} from 'rxjs/operators';

import {IconsGroupDirective} from './icons-group.directive';

@Component({
    selector: 'icons-group',
    templateUrl: './icons-group.template.html',
    styleUrls: ['./icons-group.style.less'],
    changeDetection,
    providers: [TuiDestroyService],
})
export class IconsGroupComponent implements OnInit {
    @ContentChild(IconsGroupDirective)
    readonly iconGroup?: IconsGroupDirective;

    @Input()
    icons: Record<string, readonly string[]> = {};

    @Input()
    color: string | null = null;

    matcher = TUI_DEFAULT_MATCHER;

    control = new UntypedFormControl('');

    search$: Observable<string> = this.route.queryParams.pipe(
        map(queryParams => queryParams['search'] ?? ''),
        distinctUntilChanged(),
    );

    constructor(
        @Inject(Clipboard) private readonly clipboard: Clipboard,
        @Inject(TuiAlertService) private readonly alerts: TuiAlertService,
        @Inject(ActivatedRoute) private readonly route: ActivatedRoute,
        @Inject(Router) private readonly router: Router,
        @Self() @Inject(TuiDestroyService) private readonly destroy$: Observable<void>,
    ) {}

    ngOnInit(): void {
        this.control.patchValue(this.route.snapshot.queryParams['search'] ?? '');
        this.control.valueChanges
            .pipe(
                debounceTime(500),
                filter((search: string) => search.length > 2 || search.length === 0),
                map(search => search || null),
                takeUntil(this.destroy$),
            )
            .subscribe(search => {
                void this.router.navigate([], {queryParams: {search}});
            });
    }

    copyPath = (name: string): void => {
        this.clipboard.copy(name);
        this.alerts.open(`The name ${name} copied`, {status: 'success'}).subscribe();
    };
}

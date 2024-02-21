import {ChangeDetectionStrategy, Component, inject, Injector} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {takeUntil} from 'rxjs';

@Component({
    selector: 'tui-routable-dialog',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class TuiRoutableDialogComponent {
    private readonly route = inject(ActivatedRoute);
    private readonly router = inject(Router);

    constructor() {
        inject(TuiDialogService)
            .open(
                new PolymorpheusComponent(
                    this.route.snapshot.data['dialog'],
                    inject(Injector),
                ),
                this.route.snapshot.data['dialogOptions'],
            )
            .pipe(takeUntil(inject(TuiDestroyService, {self: true})))
            .subscribe({complete: () => this.navigateToParent()});
    }

    private navigateToParent(): void {
        const isLazy = this.route.snapshot.data['isLazy'];

        const backUrl = isLazy
            ? this.getLazyLoadedBackUrl()
            : this.route.snapshot.data['backUrl'];

        void this.router.navigate([backUrl], {
            relativeTo: this.route,
        });
    }

    private getLazyLoadedBackUrl(): string {
        return (this.route.parent?.snapshot.url || []).map(() => '..').join('/');
    }
}

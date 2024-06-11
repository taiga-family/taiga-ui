import type {Type} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, INJECTOR} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {ActivatedRoute, Router} from '@angular/router';
import {TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {from, of, switchMap} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-routable-dialog',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TuiRoutableDialogComponent {
    private readonly route = inject(ActivatedRoute);
    private readonly router = inject(Router);
    private readonly injector = inject(INJECTOR);
    private readonly initialUrl = this.router.url;
    private readonly dialog = inject(TuiDialogService);

    constructor() {
        const dialog = this.route.snapshot.data['dialog'];

        from(isClass(dialog) ? of(dialog) : dialog().then((m: any) => m.default ?? m))
            .pipe(
                switchMap((dialog: any) =>
                    this.dialog.open(
                        new PolymorpheusComponent<Type<any>>(dialog, this.injector),
                        this.route.snapshot.data['dialogOptions'],
                    ),
                ),
                takeUntilDestroyed(),
            )
            .subscribe({complete: () => this.onDialogClosing()});
    }

    private get lazyLoadedBackUrl(): string {
        return (this.route.parent?.snapshot.url || []).map(() => '..').join('/');
    }

    private onDialogClosing(): void {
        if (this.initialUrl === this.router.url) {
            this.navigateToParent();
        }
    }

    private navigateToParent(): void {
        const backUrl = this.route.snapshot.data['isLazy']
            ? this.lazyLoadedBackUrl
            : this.route.snapshot.data['backUrl'];

        void this.router.navigate([backUrl], {
            relativeTo: this.route,
        });
    }
}

function isClass(fn: Type<any> | unknown): boolean {
    return (
        typeof fn === 'function' &&
        Object.getOwnPropertyDescriptor(fn, 'prototype')?.writable === false
    );
}

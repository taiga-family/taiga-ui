import {resetActiveProject} from 'ng-morph';

import {runMigration} from './utils';

describe('ng-update should migrate TuiDestroyService to takeUntilDestroyed (from `@angular/core/rxjs-interop`)', () => {
    describe('legacy constructor injection', () => {
        it('via decorator @Inject()', async () => {
            expect(
                await runMigration(
                    `
import {ChangeDetectionStrategy, Component, ElementRef, Inject} from '@angular/core';
import {TuiHoveredService, TuiDestroyService, TuiObscuredService} from '@taiga-ui/cdk';
import {fromEvent, takeUntil} from 'rxjs';

@Component({
    selector: 'tui-destroy-example',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiObscuredService, TuiDestroyService, TuiHoveredService],
})
export class TuiDestroyExample implements OnInit {
    constructor(
        readonly element: ElementRef,
        @Self()
        @Inject(TuiDestroyService)
        destroy$: Observable<unknown>,
        private readonly oneMoreService: TuiHoveredService,
    ) {
        fromEvent(element.nativeElement, 'blur')
            .pipe(takeUntil(destroy$))
            .subscribe(() => console.info('blur'));
    }
}`.trim(),
                ),
            ).toEqual(
                `
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import {ChangeDetectionStrategy, Component, ElementRef, Inject} from '@angular/core';
import {TuiHoveredService, TuiObscuredService} from '@taiga-ui/cdk';
import {fromEvent, takeUntil} from 'rxjs';

@Component({
    selector: 'tui-destroy-example',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiObscuredService, TuiHoveredService],
})
export class TuiDestroyExample implements OnInit {
    constructor(
        readonly element: ElementRef,
        private readonly oneMoreService: TuiHoveredService,
    ) {
        fromEvent(element.nativeElement, 'blur')
            .pipe(takeUntilDestroyed())
            .subscribe(() => console.info('blur'));
    }
}`.trim(),
            );
        });

        it('via type property', async () => {
            expect(
                await runMigration(
                    `
import {ChangeDetectionStrategy, Component, ElementRef} from '@angular/core';
import {TuiHoveredService, TuiDestroyService, TuiObscuredService} from '@taiga-ui/cdk';
import {fromEvent, takeUntil} from 'rxjs';

@Component({
    selector: 'tui-destroy-example',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiObscuredService, TuiDestroyService, TuiHoveredService],
})
export class TuiDestroyExample implements OnInit {
    constructor(
        readonly element: ElementRef,
        destroy$: TuiDestroyService,
        private readonly oneMoreService: TuiHoveredService,
    ) {
        fromEvent(element.nativeElement, 'blur')
            .pipe(takeUntil(destroy$))
            .subscribe(() => console.info('blur'));
    }
}`.trim(),
                ),
            ).toEqual(
                `
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import {ChangeDetectionStrategy, Component, ElementRef} from '@angular/core';
import {TuiHoveredService, TuiObscuredService} from '@taiga-ui/cdk';
import {fromEvent, takeUntil} from 'rxjs';

@Component({
    selector: 'tui-destroy-example',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiObscuredService, TuiHoveredService],
})
export class TuiDestroyExample implements OnInit {
    constructor(
        readonly element: ElementRef,
        private readonly oneMoreService: TuiHoveredService,
    ) {
        fromEvent(element.nativeElement, 'blur')
            .pipe(takeUntilDestroyed())
            .subscribe(() => console.info('blur'));
    }
}`.trim(),
            );
        });

        it('usage of destroy observable inside ngOnInit', async () => {
            expect(
                await runMigration(
                    `
import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiHoveredService, TuiDestroyService, TuiObscuredService} from '@taiga-ui/cdk';
import {fromEvent, timer, takeUntil} from 'rxjs';

@Component({
    selector: 'tui-destroy-example',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiObscuredService, TuiDestroyService, TuiHoveredService],
})
export class TuiDestroyExample implements OnInit {
    constructor(
        @Self()
        @Inject(TuiDestroyService)
        private destroy$: TuiDestroyService,
        private readonly oneMoreService: TuiHoveredService,
    ) {}

    ngOnInit() {
        timer(3000).pipe(takeUntil(this.destroy$)).subscribe();
    }
}`.trim(),
                ),
            ).toEqual(
                `
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ChangeDetectionStrategy, Component, Inject, DestroyRef, inject } from '@angular/core';
import {TuiHoveredService, TuiObscuredService} from '@taiga-ui/cdk';
import {fromEvent, timer, takeUntil} from 'rxjs';

@Component({
    selector: 'tui-destroy-example',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiObscuredService, TuiHoveredService],
})
export class TuiDestroyExample implements OnInit {
    constructor(
        private readonly oneMoreService: TuiHoveredService,
    ) {}

    ngOnInit() {
        timer(3000).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
    }

    readonly destroyRef = inject(DestroyRef);
}`.trim(),
            );
        });
    });

    describe('via modern inject function', () => {
        it('takeUntil(inject(TuiDestroyService), {...})', async () => {
            expect(
                await runMigration(
                    `
import {ChangeDetectionStrategy, Component, ElementRef, inject} from '@angular/core';
import {TuiHoveredService, TuiDestroyService, TuiObscuredService} from '@taiga-ui/cdk';
import {fromEvent, takeUntil} from 'rxjs';

@Component({
    selector: 'tui-destroy-example',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiObscuredService, TuiDestroyService, TuiHoveredService],
})
export class TuiDestroyExample implements OnInit {
    constructor() {
        fromEvent(inject(ElementRef).nativeElement, 'click')
            .pipe(takeUntil(inject(TuiDestroyService, {self: true})))
            .subscribe(() => console.info('click'));
    }
}`.trim(),
                ),
            ).toEqual(
                `
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import {ChangeDetectionStrategy, Component, ElementRef, inject} from '@angular/core';
import {TuiHoveredService, TuiObscuredService} from '@taiga-ui/cdk';
import {fromEvent, takeUntil} from 'rxjs';

@Component({
    selector: 'tui-destroy-example',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiObscuredService, TuiHoveredService],
})
export class TuiDestroyExample implements OnInit {
    constructor() {
        fromEvent(inject(ElementRef).nativeElement, 'click')
            .pipe(takeUntilDestroyed())
            .subscribe(() => console.info('click'));
    }
}`.trim(),
            );
        });

        it('private destroy$ = inject(TuiDestroyService, {...});', async () => {
            expect(
                await runMigration(
                    `
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {timer, takeUntil} from 'rxjs';

@Component({
    selector: 'tui-destroy-example',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService],
})
export class TuiDestroyExample implements OnInit {
    private destroy$ = inject(TuiDestroyService);

    ngOnInit() {
        timer(3000)
            .pipe(takeUntil(this.destroy$))
            .subscribe();
    }
}`.trim(),
                ),
            ).toEqual(
                `
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ChangeDetectionStrategy, Component, inject, DestroyRef } from '@angular/core';
import {timer, takeUntil} from 'rxjs';

@Component({
    selector: 'tui-destroy-example',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [],
})
export class TuiDestroyExample implements OnInit {
    ngOnInit() {
        timer(3000)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe();
    }

    readonly destroyRef = inject(DestroyRef);
}`.trim(),
            );
        });

        it('does not duplicate `destroyRef = inject(DestroyRef)`', async () => {
            expect(
                await runMigration(
                    `
import {Component, inject} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {timer, takeUntil} from 'rxjs';

@Component({
    selector: 'tui-destroy-example',
    template: '',
    providers: [TuiDestroyService],
})
export class TuiDestroyExample implements OnInit {
    private destroy$ = inject(TuiDestroyService);

    ngOnInit() {
        timer(3_000)
            .pipe(takeUntil(this.destroy$))
            .subscribe();

        timer(5_000)
            .pipe(takeUntil(this.destroy$))
            .subscribe();
    }
}`.trim(),
                ),
            ).toEqual(
                `
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Component, inject, DestroyRef } from '@angular/core';
import {timer, takeUntil} from 'rxjs';

@Component({
    selector: 'tui-destroy-example',
    template: '',
    providers: [],
})
export class TuiDestroyExample implements OnInit {
    ngOnInit() {
        timer(3_000)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe();

        timer(5_000)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe();
    }

    readonly destroyRef = inject(DestroyRef);
}`.trim(),
            );
        });
    });

    it('complex combination of all cases', async () => {
        expect(
            await runMigration(
                `
import {ChangeDetectionStrategy, Component, ElementRef, inject} from '@angular/core';
import {TuiHoveredService, TuiDestroyService, TuiObscuredService} from '@taiga-ui/cdk';
import {fromEvent, takeUntil} from 'rxjs';

@Component({
    selector: 'tui-destroy-example',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiObscuredService, TuiDestroyService, TuiHoveredService],
})
export class TuiDestroyExample implements OnInit {
    private stop$ = inject(TuiDestroyService);

    constructor(
        @Self()
        @Inject(TuiDestroyService)
        destroy$: TuiDestroyService,
        private readonly oneMoreService: TuiHoveredService,
        private oldWayDestroy: TuiDestroyService,
    ) {
        fromEvent(inject(ElementRef).nativeElement, 'click')
            .pipe(takeUntil(inject(TuiDestroyService, {self: true})))
            .subscribe(() => console.info('click'));

        fromEvent(inject(ElementRef).nativeElement, 'blur')
            .pipe(takeUntil(destroy$))
            .subscribe(() => console.info('blur'));
    }

    ngOnInit() {
        timer(3000).pipe(takeUntil(this.stop$)).subscribe();
    }
}`.trim(),
            ),
        ).toEqual(
            `
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ChangeDetectionStrategy, Component, ElementRef, inject, DestroyRef } from '@angular/core';
import {TuiHoveredService, TuiObscuredService} from '@taiga-ui/cdk';
import {fromEvent, takeUntil} from 'rxjs';

@Component({
    selector: 'tui-destroy-example',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiObscuredService, TuiHoveredService],
})
export class TuiDestroyExample implements OnInit {
    constructor(
        private readonly oneMoreService: TuiHoveredService
    ) {
        fromEvent(inject(ElementRef).nativeElement, 'click')
            .pipe(takeUntilDestroyed())
            .subscribe(() => console.info('click'));

        fromEvent(inject(ElementRef).nativeElement, 'blur')
            .pipe(takeUntilDestroyed())
            .subscribe(() => console.info('blur'));
    }

    ngOnInit() {
        timer(3000).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
    }

    readonly destroyRef = inject(DestroyRef);
}`.trim(),
        );
    });

    afterEach(() => resetActiveProject());
});

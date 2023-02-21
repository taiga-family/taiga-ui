import {Component, Provider} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    Data,
    NavigationExtras,
    Router,
    UrlSegment,
} from '@angular/router';
import {TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {EMPTY, NEVER} from 'rxjs';
import {anything, deepEqual, instance, mock, verify, when} from 'ts-mockito';

import {TuiRoutableDialogComponent} from '../routable-dialog.component';

function providerOf(serviceToken: any, mockedService: any): Provider {
    return {
        provide: serviceToken,
        useFactory: () => instance(mockedService),
    };
}

@Component({template: ``})
class DialogComponent {}

const DEFAULT_ACTIVATED_ROUTE_MOCK = {
    snapshot: {
        data: {
            dialog: DialogComponent,
        },
    },
};

describe(`TuiRoutableDialog`, () => {
    let fixture: ComponentFixture<TuiRoutableDialogComponent>;
    let tuiDialogService: TuiDialogService;
    let router: Router;

    function createComponent(activatedRoute?: Partial<ActivatedRoute>): void {
        tuiDialogService = mock(TuiDialogService);
        router = mock(Router);

        void TestBed.configureTestingModule({
            declarations: [TuiRoutableDialogComponent],
            providers: [
                providerOf(TuiDialogService, tuiDialogService),
                providerOf(Router, router),
                {
                    provide: ActivatedRoute,
                    useValue: activatedRoute ?? DEFAULT_ACTIVATED_ROUTE_MOCK,
                },
            ],
        }).compileComponents();

        when(tuiDialogService.open(anything(), anything())).thenReturn(NEVER);

        fixture = TestBed.createComponent(TuiRoutableDialogComponent);
    }

    it(`Dialog content component is passed to the dialog open method, when RoutableDialog is created`, () => {
        createComponent();

        fixture.detectChanges();

        verify(
            tuiDialogService.open(
                deepEqual(new PolymorpheusComponent(DialogComponent, anything())),
                anything(),
            ),
        ).once();
    });

    it(`dialog options are passed to the dialog open method`, () => {
        const dialogOptions = {
            dismissible: true,
        };

        createComponent({
            snapshot: {
                data: {
                    dialog: DialogComponent,
                    dialogOptions,
                } as Data,
            } as ActivatedRouteSnapshot,
        });

        fixture.detectChanges();

        verify(tuiDialogService.open(anything(), deepEqual(dialogOptions))).once();
    });

    it(`Closing the dialog navigates back to the parent route for lazy loaded case`, fakeAsync(() => {
        createComponent({
            snapshot: {
                data: {
                    dialog: DialogComponent,
                    isLazy: true,
                } as Data,
            } as ActivatedRouteSnapshot,
            parent: {
                snapshot: {
                    url: [
                        {
                            path: `path`,
                        } as UrlSegment,
                        {
                            path: `to`,
                        } as UrlSegment,
                        {
                            path: `dialog`,
                        } as UrlSegment,
                    ],
                } as ActivatedRouteSnapshot,
            } as ActivatedRoute,
        });

        when(tuiDialogService.open(anything(), anything())).thenReturn(EMPTY);

        verify(
            router.navigate(
                deepEqual([`../../..`]),
                deepEqual({
                    relativeTo: DEFAULT_ACTIVATED_ROUTE_MOCK,
                }) as unknown as NavigationExtras,
            ),
        );
    }));

    it(`Closing the dialog navigates back to the parent route for eager loaded case`, fakeAsync(() => {
        createComponent({
            snapshot: {
                data: {
                    dialog: DialogComponent,
                    backUrl: `../../..`,
                } as Data,
            } as ActivatedRouteSnapshot,
        });

        when(tuiDialogService.open(anything(), anything())).thenReturn(EMPTY);

        verify(router.navigate(deepEqual([`../../..`]), anything()));
    }));
});

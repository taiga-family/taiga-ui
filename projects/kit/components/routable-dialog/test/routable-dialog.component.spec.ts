import type {Provider} from '@angular/core';
import {Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {fakeAsync, TestBed} from '@angular/core/testing';
import type {
    ActivatedRouteSnapshot,
    Data,
    NavigationExtras,
    UrlSegment,
} from '@angular/router';
import {ActivatedRoute, Router} from '@angular/router';
import {TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {EMPTY, NEVER} from 'rxjs';
import {anything, deepEqual, instance, mock, verify, when} from 'ts-mockito';

import TuiRoutableDialogComponent from '../routable-dialog.component';

function providerOf(serviceToken: any, mockedService: any): Provider {
    return {
        provide: serviceToken,
        useFactory: () => instance(mockedService),
    };
}

@Component({template: ''})
class DialogComponent {}

const DEFAULT_ACTIVATED_ROUTE_MOCK = {
    snapshot: {
        data: {
            dialog: DialogComponent,
        },
    },
};

describe('TuiRoutableDialog', () => {
    let fixture: ComponentFixture<TuiRoutableDialogComponent>;
    let tuiDialogService: TuiDialogService;
    let router: Router;

    function createComponent(
        activatedRoute?: Partial<ActivatedRoute>,
        closeDialogImmediately = true,
    ): void {
        tuiDialogService = mock(TuiDialogService);
        router = mock(Router);

        void TestBed.configureTestingModule({
            imports: [TuiRoutableDialogComponent],
            providers: [
                providerOf(TuiDialogService, tuiDialogService),
                providerOf(Router, router),
                {
                    provide: ActivatedRoute,
                    useValue: activatedRoute ?? DEFAULT_ACTIVATED_ROUTE_MOCK,
                },
            ],
        }).compileComponents();

        when(tuiDialogService.open(anything(), anything())).thenReturn(
            closeDialogImmediately ? EMPTY : NEVER,
        );

        fixture = TestBed.createComponent(TuiRoutableDialogComponent);
    }

    it('Dialog content component is passed to the dialog open method, when RoutableDialog is created', () => {
        // arrange
        createComponent();

        // act
        fixture.detectChanges();

        // assert
        verify(
            tuiDialogService.open(
                deepEqual(new PolymorpheusComponent(DialogComponent, anything())),
                anything(),
            ),
        ).once();
    });

    it('dialog options are passed to the dialog open method', () => {
        // arrange
        const dialogOptions = {
            dismissible: true,
        };

        createComponent({
            snapshot: {
                data: {
                    dialog: DialogComponent,
                    dialogOptions,
                } as unknown as Data,
            } as unknown as ActivatedRouteSnapshot,
        });

        // act
        fixture.detectChanges();

        // assert
        verify(tuiDialogService.open(anything(), deepEqual(dialogOptions))).once();
    });

    it('Closing the dialog navigates back to the parent route for lazy loaded case', fakeAsync(() => {
        // arrange
        const activatedRouteMock = {
            snapshot: {
                data: {
                    dialog: DialogComponent,
                    isLazy: true,
                } as unknown as Data,
            } as unknown as ActivatedRouteSnapshot,
            parent: {
                snapshot: {
                    url: [
                        {
                            path: 'path',
                        } as unknown as UrlSegment,
                        {
                            path: 'to',
                        } as unknown as UrlSegment,
                        {
                            path: 'dialog',
                        } as unknown as UrlSegment,
                    ],
                } as unknown as ActivatedRouteSnapshot,
            } as unknown as ActivatedRoute,
        };

        createComponent(activatedRouteMock);

        // act
        fixture.detectChanges();

        // assert
        verify(
            router.navigate(
                deepEqual(['../../..']),
                deepEqual({
                    relativeTo: activatedRouteMock,
                }) as unknown as NavigationExtras,
            ),
        ).once();
    }));

    it('Closing the dialog navigates back to the parent route for eager loaded case', fakeAsync(() => {
        // arrange
        createComponent({
            snapshot: {
                data: {
                    dialog: DialogComponent,
                    backUrl: '../../..',
                } as unknown as Data,
            } as unknown as ActivatedRouteSnapshot,
        });

        // act
        fixture.detectChanges();

        // assert
        verify(router.navigate(deepEqual(['../../..']), anything())).once();
    }));

    it('if navigation occurs from a dialog, then the navigation to parent is not called', () => {
        // arrange
        createComponent(
            {
                snapshot: {
                    data: {
                        dialog: DialogComponent,
                        backUrl: '../../..',
                    } as unknown as Data,
                } as unknown as ActivatedRouteSnapshot,
            },
            false, // will close dialog only on destroy
        );

        fixture.detectChanges();

        when(router.url).thenReturn('new/route/after/navigation'); // means the url has changed

        // act
        fixture.destroy(); // should trigger dialog closing logic

        // assert
        verify(router.navigate(anything(), anything())).never();
    });
});

import {ChangeDetectionStrategy, Component, type Provider} from '@angular/core';
import {type ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import {
    ActivatedRoute,
    type ActivatedRouteSnapshot,
    type Data,
    type NavigationExtras,
    Router,
    type UrlSegment,
} from '@angular/router';
import {provideTaiga, TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {EMPTY, NEVER} from 'rxjs';
import {anything, deepEqual, instance, mock, verify, when} from 'ts-mockito';

import TuiRoutableDialog from '../routable-dialog.component';

function providerOf(serviceToken: any, mockedService: any): Provider {
    return {
        provide: serviceToken,
        useFactory: () => instance(mockedService),
    };
}

@Component({
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Dialog {}

const DEFAULT_ACTIVATED_ROUTE_MOCK = {
    snapshot: {
        data: {
            dialog: Dialog,
        },
    },
};

describe('TuiRoutableDialog', () => {
    let fixture: ComponentFixture<TuiRoutableDialog>;
    let tuiDialogService: TuiDialogService;
    let router: Router;

    async function createComponent(
        activatedRoute?: Partial<ActivatedRoute>,
        closeDialogImmediately = true,
    ): Promise<void> {
        tuiDialogService = mock(TuiDialogService);
        router = mock(Router);

        void TestBed.configureTestingModule({
            imports: [TuiRoutableDialog],
            providers: [
                provideTaiga(),
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

        fixture = TestBed.createComponent(TuiRoutableDialog);

        return fixture.whenStable();
    }

    it('dialog content component is passed to the dialog open method, when RoutableDialog is created', async () => {
        // arrange
        await createComponent();

        // assert
        verify(
            tuiDialogService.open(
                deepEqual(new PolymorpheusComponent(Dialog, anything())),
                anything(),
            ),
        ).once();
    });

    it('dialog options are passed to the dialog open method', async () => {
        // arrange
        const dialogOptions = {
            dismissible: true,
        };

        await createComponent({
            snapshot: {
                data: {
                    dialog: Dialog,
                    dialogOptions,
                } as unknown as Data,
            } as unknown as ActivatedRouteSnapshot,
        });

        // assert
        verify(tuiDialogService.open(anything(), deepEqual(dialogOptions))).once();
    });

    it('closing the dialog navigates back to the parent route for lazy loaded case', fakeAsync(async () => {
        // arrange
        const activatedRouteMock = {
            snapshot: {
                data: {
                    dialog: Dialog,
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

        await createComponent(activatedRouteMock);

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

    it('closing the dialog navigates back to the parent route for eager loaded case', fakeAsync(async () => {
        // arrange
        await createComponent({
            snapshot: {
                data: {
                    dialog: Dialog,
                    backUrl: '../../..',
                } as unknown as Data,
            } as unknown as ActivatedRouteSnapshot,
        });

        // assert
        verify(router.navigate(deepEqual(['../../..']), anything())).once();
    }));

    it('if navigation occurs from a dialog, then the navigation to parent is not called', async () => {
        // arrange
        await createComponent(
            {
                snapshot: {
                    data: {
                        dialog: Dialog,
                        backUrl: '../../..',
                    } as unknown as Data,
                } as unknown as ActivatedRouteSnapshot,
            },
            false, // will close dialog only on destroy
        );

        when(router.url).thenReturn('new/route/after/navigation'); // means the url has changed

        // act
        fixture.destroy(); // should trigger dialog closing logic

        // assert
        verify(router.navigate(anything(), anything())).never();
    });
});

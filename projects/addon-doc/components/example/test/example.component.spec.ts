import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {provideRouter} from '@angular/router';
import {WA_LOCATION} from '@ng-web-apis/common';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {tuiToKebab} from '@taiga-ui/addon-doc/utils';
import {provideTaiga} from '@taiga-ui/core';
import {provideHighlightOptions} from 'ngx-highlightjs';

describe('TuiDocExample', () => {
    @Component({
        imports: [TuiDocExample],
        template: `
            <tui-doc-example
                [heading]="heading()"
                [id]="id()"
            />
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly heading = signal('');
        public readonly id = signal('');
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [
                provideTaiga(),
                provideRouter([]),
                provideHighlightOptions({}),
                {provide: WA_LOCATION, useValue: {pathname: '/test'}},
            ],
        });

        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    function hostId(): string {
        return fixture.debugElement
            .query(By.directive(TuiDocExample))
            .nativeElement.getAttribute('id');
    }

    describe('resolvedId', () => {
        it('derives id from heading when id input is empty', () => {
            testComponent.heading.set('My Heading Example');
            fixture.detectChanges();

            expect(hostId()).toBe(tuiToKebab('My Heading Example'));
        });

        it('uses externally provided id when set', () => {
            testComponent.id.set('custom-id');
            fixture.detectChanges();

            expect(hostId()).toBe('custom-id');
        });

        it('prefers external id over heading when both are provided', () => {
            testComponent.heading.set('Some Heading');
            testComponent.id.set('external-id');
            fixture.detectChanges();

            expect(hostId()).toBe('external-id');
        });
    });
});

import type {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiLinkHarness} from '@taiga-ui/testing';

import {TuiLink} from '../link.directive';

describe('LinkDirective', () => {
    @Component({
        standalone: true,
        imports: [TuiLink],
        template: `
            <a
                id="link-no-pseudo"
                href="#"
                tuiLink
            >
                No Pseudo
            </a>

            <a
                id="pseudo-link"
                href="#"
                tuiLink
                [pseudo]="true"
            >
                Pseudo Link
            </a>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {}

    let fixture: ComponentFixture<Test>;
    let loader: HarnessLoader;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        loader = TestbedHarnessEnvironment.loader(fixture);

        fixture.detectChanges();
    });

    describe('pseudo:', () => {
        it('should not have underline when pseudo is false', async () => {
            const link = await loader.getHarness(
                TuiLinkHarness.with({selector: '#link-no-pseudo'}),
            );

            expect(await link.isPseudo()).toBeFalsy();
        });

        it('should have underline when pseudo is true', async () => {
            const link = await loader.getHarness(
                TuiLinkHarness.with({selector: '#pseudo-link'}),
            );

            expect(await link.isPseudo()).toBeTruthy();
        });
    });
});

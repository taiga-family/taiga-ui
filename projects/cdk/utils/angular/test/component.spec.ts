import {Component} from '@angular/core';
import {tuiIsAngularComponent} from '@taiga-ui/cdk';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

describe(`isComponent`, () => {
    it(`A and B class references`, () => {
        @Component({
            selector: `a`,
            template: ``,
        })
        class A {}

        expect(tuiIsAngularComponent(A)).toBe(true);
        expect(tuiIsAngularComponent(new PolymorpheusComponent(A))).toBe(false);

        class B {}

        expect(tuiIsAngularComponent(B)).toBe(false);
        expect(tuiIsAngularComponent(new PolymorpheusComponent(B))).toBe(false);
    });
});

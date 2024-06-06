import {EnvironmentInjector} from '@angular/core';
import {TestBed} from '@angular/core/testing';

import {TuiHighlight} from '../highlight';

describe('TuiHighlight', () => {
    let environmentInjector: EnvironmentInjector;

    beforeEach(() => {
        environmentInjector = TestBed.inject(EnvironmentInjector);
    });

    it('should create a component and insert it into a DOM Range', () => {
        const rootElement = document.createElement('div');
        const textNode = document.createTextNode('Hello, world!');
        const range = new Range();

        range.setStart(textNode, 0);
        range.setEnd(textNode, 5);

        rootElement.appendChild(textNode);

        const highlight = new TuiHighlight(environmentInjector, range);
        const subscribeFn = jest.fn();

        highlight.subscribe(subscribeFn);

        expect(subscribeFn).toHaveBeenCalledWith(document.createTextNode('Hello'));
        expect(rootElement).toMatchSnapshot();
    });

    it('should clean up the DOM and component on unsubscribe', () => {
        const rootElement = document.createElement('div');
        const textNode = document.createTextNode('Hello, world!');
        const range = new Range();

        range.setStart(textNode, 0);
        range.setEnd(textNode, 5);

        rootElement.appendChild(textNode);

        const highlight = new TuiHighlight(environmentInjector, range);

        highlight.subscribe().unsubscribe();

        expect(rootElement).toMatchSnapshot();
    });
});

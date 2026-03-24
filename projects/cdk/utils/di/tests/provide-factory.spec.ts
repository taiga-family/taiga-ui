import {TestBed} from '@angular/core/testing';
import {tuiProvideFactory} from '@taiga-ui/cdk';
import {inject, InjectionToken} from '@angular/core';

const PREFIX = new InjectionToken<string>('PREFIX');
const TOKEN = new InjectionToken<string>('TOKEN');

describe('tuiProvideFactory', () => {
    it('for simple object', () => {
        TestBed.configureTestingModule({
            providers: [tuiProvideFactory(TOKEN, 'value')],
        });
        expect(TestBed.inject(TOKEN)).toBe('value');
    });

    it('correctly resolve providers', () => {
        TestBed.configureTestingModule({
            providers: [
                {provide: PREFIX, useValue: 'Prefix: '},
                tuiProvideFactory(TOKEN, () => inject(PREFIX) + 'value'),
            ],
        });
        expect(TestBed.inject(TOKEN)).toBe('Prefix: value');
    });
});

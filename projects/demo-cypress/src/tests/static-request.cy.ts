import {TestBed} from '@angular/core/testing';
import {TuiStaticRequestService} from '@taiga-ui/cdk';

describe('TuiStaticRequestService', () => {
    let service: TuiStaticRequestService;
    const baseUrl = 'http://localhost:8080';
    const response = {
        status: 200,
        contentType: 'text/plain',
        responseText: 'awesome response',
    };

    beforeEach(() => {
        cy.intercept('GET', '**test*', response)
            .as('request')
            .then(() => {
                TestBed.configureTestingModule({
                    providers: [TuiStaticRequestService],
                });

                service = TestBed.inject(TuiStaticRequestService);
            });
    });

    it('returns the same observable on second request for the same URL', () => {
        const result = service.request(`${baseUrl}/test`);
        const second = service.request(`${baseUrl}/test`);

        expect(result).to.eql(second);
        cy.get('@request.all').should('have.length', 0);
    });

    it('returns the different observable on second request for different URL', () => {
        const result = service.request(`${baseUrl}/test1`);
        const second = service.request(`${baseUrl}/test2`);

        expect(result).not.to.eql(second);
        cy.get('@request.all').should('have.length', 0);
    });

    it('the request is made to the url and completes', () => {
        service.request(`${baseUrl}/test`).subscribe();

        cy.get('@request').its('response.body').should('deep.equal', response);
    });

    it('the request is only made once, same result is returned on the subsequent calls', () => {
        let result1 = '';
        let result2 = '';
        let completed = false;

        service.request(`${baseUrl}/test`).subscribe({
            next: (response) => {
                result1 = response;
            },
            complete: () => {
                completed = true;
            },
        });

        service.request(`${baseUrl}/test`).subscribe({
            next: (response) => {
                result2 = response;
            },
            complete: () => {
                completed = true;
            },
        });

        cy.get('@request.all')
            .should('have.length', 1)
            .then(() => {
                expect(JSON.stringify(response)).to.eql(result1);
                expect(result1).to.eql(result2);
                void expect(completed).to.be.true;
            });
    });
});

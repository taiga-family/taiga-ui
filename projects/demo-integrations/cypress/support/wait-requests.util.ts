import {DEFAULT_TIMEOUT_BEFORE_ACTION} from './shared.entities';

const getNotLoadedRequests = (alias: string): Cypress.Chainable =>
    cy
        .get<Array<{state: string}>>(`${alias}.all`)
        .then(reqs => reqs.filter(req => req.state !== 'Complete'));

export const waitAllRequests = (alias: string): void => {
    getNotLoadedRequests(alias)
        .then(reqs => {
            return reqs.length > 0
                ? cy.wait(alias)
                : cy.wait(DEFAULT_TIMEOUT_BEFORE_ACTION);
        })
        .then(() => getNotLoadedRequests(alias))
        .then(reqs => {
            return reqs.length > 0
                ? waitAllRequests(alias)
                : cy
                      .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
                      .then(() => getNotLoadedRequests(alias))
                      .then(reqs =>
                          reqs.length > 0 ? waitAllRequests(alias) : Promise.resolve(),
                      );
        });
};

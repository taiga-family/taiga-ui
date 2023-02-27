const getNotLoadedRequests = (alias: string): Cypress.Chainable =>
    cy
        .get<Array<{state: string}>>(`${alias}.all`, {log: false})
        .then(reqs => reqs.filter(req => req.state !== `Complete`));

export const waitAllRequests = (alias: string): void => {
    getNotLoadedRequests(alias)
        .then(reqs => {
            return reqs.length ? cy.wait(alias, {log: false}) : cy.tuiWaitBeforeAction();
        })
        .then(() => getNotLoadedRequests(alias))
        .then(reqs =>
            reqs.length
                ? waitAllRequests(alias)
                : cy
                      .tuiWaitBeforeAction()
                      .then(() => getNotLoadedRequests(alias))
                      .then(async reqs =>
                          reqs.length ? waitAllRequests(alias) : Promise.resolve(),
                      ),
        );
};

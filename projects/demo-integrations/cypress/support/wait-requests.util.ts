const getNotLoadedRequests = (alias: string) =>
    cy
        .get(`${alias}.all`)
        // @ts-ignore
        .then(reqs => reqs.filter(req => req.state !== 'Complete'));

export const waitAllRequests = (alias: string) => {
    getNotLoadedRequests(alias)
        .then(reqs => {
            return reqs.length ? cy.wait(alias) : cy.wait(100);
        })
        .then(() => getNotLoadedRequests(alias))
        .then(reqs => {
            return reqs.length
                ? waitAllRequests(alias)
                : cy
                      .wait(100)
                      .then(() => getNotLoadedRequests(alias))
                      .then(reqs =>
                          reqs.length ? waitAllRequests(alias) : Promise.resolve(),
                      );
        });
};

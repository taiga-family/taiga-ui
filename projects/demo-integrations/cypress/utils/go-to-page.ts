export function goToPage(path: string) {
    const a = document.createElement('a');

    a.href = path;

    cy.document().then(docRef => {
        docRef.body.appendChild(a);
        a.click();
        docRef.body.removeChild(a);
    });
}

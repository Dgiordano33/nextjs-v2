describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://nextjs-v2-theta.vercel.app/')
      cy.contains("Documentation")
      cy.eyesOpen({
        appName: 'Next App',
        testName: 'Hero Headline',
    });

      cy.eyesCheckWindow({
        tag: "Homepage",
        target: 'window',
        fully: true
    });

      cy.eyesClose()
    });
});
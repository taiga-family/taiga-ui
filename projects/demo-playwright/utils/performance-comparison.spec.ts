import {PerformanceComparison} from './performance-comparison';

describe('PerformanceComparison.generateMarkdownReport', () => {
    it('should include both component and test name in the markdown table', () => {
        const report = {
            summary: {
                totalTests: 1,
                testsWithBaseline: 1,
                testsWithSignificantChanges: 1,
                averageLayoutChange: 10,
                averageRecalcChange: 5,
            },
            details: [
                {
                    component: 'mobile-dialog',
                    testName: 'should open dialog',
                    baseline: {
                        layoutCount: 10,
                        layoutDuration: 100,
                        recalcStyleCount: 5,
                        recalcStyleDuration: 50,
                    },
                    current: {
                        layoutCount: 12,
                        layoutDuration: 120,
                        recalcStyleCount: 6,
                        recalcStyleDuration: 60,
                    },
                    diff: {
                        layoutCount: 2,
                        layoutDuration: 20,
                        recalcStyleCount: 1,
                        recalcStyleDuration: 10,
                    },
                    changes: {
                        layoutCount: 20,
                        layoutDuration: 20,
                        recalcStyleCount: 20,
                        recalcStyleDuration: 20,
                    },
                },
            ],
        };
        const markdown = PerformanceComparison.generateMarkdownReport(report);

        console.log(markdown);

        expect(markdown).toContain('| Component | Test Name |');
        expect(markdown).toContain('| mobile-dialog | should open dialog ');
    });

    it('should only show tests with changes above threshold', () => {
        const report = {
            summary: {
                totalTests: 3,
                testsWithBaseline: 2,
                testsWithSignificantChanges: 1,
                averageLayoutChange: 5,
                averageRecalcChange: 3,
            },
            details: [
                {
                    component: 'significant-change',
                    testName: 'has big change',
                    baseline: {
                        layoutCount: 10,
                        layoutDuration: 100,
                        recalcStyleCount: 5,
                        recalcStyleDuration: 50,
                    },
                    current: {
                        layoutCount: 10,
                        layoutDuration: 150, // 50% increase
                        recalcStyleCount: 5,
                        recalcStyleDuration: 50,
                    },
                    diff: {
                        layoutCount: 0,
                        layoutDuration: 50,
                        recalcStyleCount: 0,
                        recalcStyleDuration: 0,
                    },
                    changes: {
                        layoutCount: 0,
                        layoutDuration: 50, // Above 5% threshold
                        recalcStyleCount: 0,
                        recalcStyleDuration: 0,
                    },
                },
                {
                    component: 'small-change',
                    testName: 'has small change',
                    baseline: {
                        layoutCount: 10,
                        layoutDuration: 100,
                        recalcStyleCount: 5,
                        recalcStyleDuration: 50,
                    },
                    current: {
                        layoutCount: 10,
                        layoutDuration: 102, // 2% increase
                        recalcStyleCount: 5,
                        recalcStyleDuration: 50,
                    },
                    diff: {
                        layoutCount: 0,
                        layoutDuration: 2,
                        recalcStyleCount: 0,
                        recalcStyleDuration: 0,
                    },
                    changes: {
                        layoutCount: 0,
                        layoutDuration: 2, // Below 5% threshold
                        recalcStyleCount: 0,
                        recalcStyleDuration: 0,
                    },
                },
                {
                    component: 'new-test',
                    testName: 'is new',
                    baseline: undefined, // New test, should always be shown
                    current: {
                        layoutCount: 10,
                        layoutDuration: 100,
                        recalcStyleCount: 5,
                        recalcStyleDuration: 50,
                    },
                    diff: {
                        layoutCount: 10,
                        layoutDuration: 100,
                        recalcStyleCount: 5,
                        recalcStyleDuration: 50,
                    },
                    changes: {
                        layoutCount: 0,
                        layoutDuration: 0,
                        recalcStyleCount: 0,
                        recalcStyleDuration: 0,
                    },
                },
            ],
        };

        const markdown = PerformanceComparison.generateMarkdownReport(report, 5); // 5% threshold

        // Should show significant change and new test
        expect(markdown).toContain('| significant-change | has big change ');
        expect(markdown).toContain('| new-test | is new ');
        expect(markdown).toContain(
            '*Showing only tests with changes ≥ 5% (2 of 3 tests)*',
        );

        // Should NOT show small change
        expect(markdown).not.toContain('| small-change | has small change ');
    });

    it('should show message when no tests meet threshold', () => {
        const report = {
            summary: {
                totalTests: 1,
                testsWithBaseline: 1,
                testsWithSignificantChanges: 0,
                averageLayoutChange: 0.5,
                averageRecalcChange: 0.3,
            },
            details: [
                {
                    component: 'minimal-change',
                    testName: 'tiny change',
                    baseline: {
                        layoutCount: 10,
                        layoutDuration: 100,
                        recalcStyleCount: 5,
                        recalcStyleDuration: 50,
                    },
                    current: {
                        layoutCount: 10,
                        layoutDuration: 100.5, // 0.5% change
                        recalcStyleCount: 5,
                        recalcStyleDuration: 50,
                    },
                    diff: {
                        layoutCount: 0,
                        layoutDuration: 0.5,
                        recalcStyleCount: 0,
                        recalcStyleDuration: 0,
                    },
                    changes: {
                        layoutCount: 0,
                        layoutDuration: 0.5, // Below 1% threshold
                        recalcStyleCount: 0,
                        recalcStyleDuration: 0,
                    },
                },
            ],
        };

        const markdown = PerformanceComparison.generateMarkdownReport(report, 1); // 1% threshold
        expect(markdown).toContain(
            '*No tests found with changes ≥ 1% (1 tests checked)*',
        );
    });
});

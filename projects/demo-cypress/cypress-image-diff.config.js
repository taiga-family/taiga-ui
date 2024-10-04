module.exports = {
    ROOT_DIR: 'tests-results',
    SCREENSHOTS_DIR: 'snapshots',
    REPORT_DIR: '.',
    JSON_REPORT: {
        FILENAME: 'report-summary',
        OVERWRITE: true,
    },
    RETRY_OPTIONS: {
        doNotFail: process.env.CI || false,
    },
};

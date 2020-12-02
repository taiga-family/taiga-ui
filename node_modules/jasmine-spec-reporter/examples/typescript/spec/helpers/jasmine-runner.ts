import {SpecReporter} from "jasmine-spec-reporter";
import {DisplayProcessor} from "jasmine-spec-reporter";
const Jasmine = require("jasmine");
import SuiteInfo = jasmine.SuiteInfo;

class CustomProcessor extends DisplayProcessor {
    public displayJasmineStarted(info: SuiteInfo, log: string): string {
        return `TypeScript ${log}`;
    }
}

const jrunner = new Jasmine();
jrunner.env.clearReporters();
jrunner.addReporter(new SpecReporter({
    customProcessors: [CustomProcessor],
}));
jrunner.loadConfigFile();
jrunner.execute();

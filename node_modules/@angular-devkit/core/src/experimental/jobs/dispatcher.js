"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
const exception_1 = require("./exception");
/**
 * OnReady a dispatcher that can dispatch to a sub job, depending on conditions.
 * @param options
 */
function createDispatcher(options = {}) {
    let defaultDelegate = null;
    const conditionalDelegateList = [];
    const job = Object.assign((argument, context) => {
        const maybeDelegate = conditionalDelegateList.find(([predicate]) => predicate(argument));
        let delegate = null;
        if (maybeDelegate) {
            delegate = context.scheduler.schedule(maybeDelegate[1], argument);
        }
        else if (defaultDelegate) {
            delegate = context.scheduler.schedule(defaultDelegate, argument);
        }
        else {
            throw new exception_1.JobDoesNotExistException('<null>');
        }
        context.inboundBus.subscribe(delegate.inboundBus);
        return delegate.outboundBus;
    }, {
        jobDescription: options,
    });
    return Object.assign(job, {
        setDefaultJob(name) {
            if (api_1.isJobHandler(name)) {
                name = name.jobDescription.name === undefined ? null : name.jobDescription.name;
            }
            defaultDelegate = name;
        },
        addConditionalJob(predicate, name) {
            conditionalDelegateList.push([predicate, name]);
        },
    });
}
exports.createDispatcher = createDispatcher;

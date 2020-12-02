"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Messages that can be sent TO a job. The job needs to listen to those.
 */
var JobInboundMessageKind;
(function (JobInboundMessageKind) {
    JobInboundMessageKind["Ping"] = "ip";
    JobInboundMessageKind["Stop"] = "is";
    // Channel specific messages.
    JobInboundMessageKind["Input"] = "in";
    // Input channel does not allow completion / error. Erroring this will just close the Subject
    // but not notify the job.
})(JobInboundMessageKind = exports.JobInboundMessageKind || (exports.JobInboundMessageKind = {}));
/**
 * Kind of messages that can be outputted from a job.
 */
var JobOutboundMessageKind;
(function (JobOutboundMessageKind) {
    // Lifecycle specific messages.
    JobOutboundMessageKind["OnReady"] = "c";
    JobOutboundMessageKind["Start"] = "s";
    JobOutboundMessageKind["End"] = "e";
    JobOutboundMessageKind["Pong"] = "p";
    // Feedback messages.
    JobOutboundMessageKind["Output"] = "o";
    // Channel specific messages.
    JobOutboundMessageKind["ChannelCreate"] = "cn";
    JobOutboundMessageKind["ChannelMessage"] = "cm";
    JobOutboundMessageKind["ChannelError"] = "ce";
    JobOutboundMessageKind["ChannelComplete"] = "cc";
})(JobOutboundMessageKind = exports.JobOutboundMessageKind || (exports.JobOutboundMessageKind = {}));
/**
 * The state of a job. These are changed as the job reports a new state through its messages.
 */
var JobState;
(function (JobState) {
    /**
     * The job was queued and is waiting to start.
     */
    JobState["Queued"] = "queued";
    /**
     * The job description was found, its dependencies (see "Synchronizing and Dependencies")
     * are done running, and the job's argument is validated and the job's code will be executed.
     */
    JobState["Ready"] = "ready";
    /**
     * The job has been started. The job implementation is expected to send this as soon as its
     * work is starting.
     */
    JobState["Started"] = "started";
    /**
     * The job has ended and is done running.
     */
    JobState["Ended"] = "ended";
    /**
     * An error occured and the job stopped because of internal state.
     */
    JobState["Errored"] = "errored";
})(JobState = exports.JobState || (exports.JobState = {}));
function isJobHandler(value) {
    return typeof value == 'function'
        && typeof value.jobDescription == 'object'
        && value.jobDescription !== null;
}
exports.isJobHandler = isJobHandler;

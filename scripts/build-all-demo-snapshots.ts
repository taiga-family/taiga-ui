import {buildCurrentVersion, buildNextVersion} from './shared/build-demo';
import {cleanupDistDemoDirectory} from './shared/cleanup-dist-demo-directory';
import {cloneAndBuildOldVersions} from './shared/clone-and-build-old-versions';
import {logDistDirectory} from './shared/log-dist-directory';
import {makePublishableVersionsMap} from './shared/make-publishable-versions-map';
import {postBuildAllVersion} from './shared/post-build-all-version';

(function main(): void {
    const versionsMap = makePublishableVersionsMap();

    cleanupDistDemoDirectory();
    buildCurrentVersion();
    buildNextVersion();
    cloneAndBuildOldVersions(versionsMap);
    postBuildAllVersion(versionsMap);
    logDistDirectory();
})();

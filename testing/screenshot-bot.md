# Screenshot bot

**Try our Github App for your screenshots testing in CI.**

Using official Cypress dashboard is rather expensive (especially if you run thousands of tests every day). Which
is why we developed Github App. This bot:

- Downloads artifacts from workflow with tests, finds screenshots diffs images, and pins them to the tests
failure report as Pull Request comment.

- Always holds first PR comment. Any workflow updates (for example, new commit pushed to the branch) edit
already existing bot comment. No endless stream of comments from bot!

- Doesn't require any data-storage for your screenshots with diffs. Bot creates separate branch to upload
images for its tests failure report. After closing PR bot removes all saved screenshots. Also, you can
delete this branch at any time to clean github history.

To begin using
** bot**
:

- Invite him
to you repo.

- See its configurable params
in its repo's README
or use default ones.

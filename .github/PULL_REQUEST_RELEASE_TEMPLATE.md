{{ .RELEASE_BODY }}

---

> **DO NOT SQUASH OR REBASE ME**

> if user merges this PR via rebasing or using squash, it will cause lost of the tag. It happens because tag is already
> attached to the initial release commit SHA. If we use rebase or squash, the commit sha changes and already created tag
> points to not-existing commit.

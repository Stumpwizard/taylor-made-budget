# Taylor Made backup standard
User requirement: include Google Drive backup and restore in all current and future Taylor Made financial tools. Preserve existing URLs.

Current tools: Budget Tracker, Retirement Planner, Tax & Roth Conversion Planner. The hub contains navigation only and has no user data to back up.

Use shared/google-drive-backups.js for new tools, with an explicit button id="driveOpen" and window.TaylorMadeBackup defined before loading the script:
- tag: unique stable tool/schema identifier; never reuse another tool's tag.
- filename: descriptive filename prefix.
- key: that tool's local storage key.
- snapshot(): complete JSON-serializable tool state.
- load(data): fully validate before mutating; reject invalid versions, records and values.
- render(): redraw restored state and persist any secondary storage.

Copy the shared script into each deployed tool so it works independently. Current tax integration predates the adapter and is in tax/drive.js; keep its behavior consistent.

Backups are manual, dated JSON files in the chosen user's My Drive, never public repository files. Scope is drive.file only. Tokens stay in page memory. Never collect client secrets. Restoring requires confirmation, a local recovery copy, and undo. Keep local export available where already supported. Mock tests do not prove real Google authorization or uploads.

OAuth setup: enable Drive API and create a Web application client. Add both authorized JavaScript origins (without paths):
https://stumpwizard.github.io
https://retirement-compass-planner.stumpwizard63.chatgpt.site
Use the same client ID on both origins and devices to find the same app-created backups. Client ID is public configuration and is stored per browser origin. For External Testing, add the account as a test user. Live verification requires user configuration and consent.

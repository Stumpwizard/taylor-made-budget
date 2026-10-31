# Taylor Made Budget

A static, responsive envelope budget tracker inspired by Aspire Budgeting v4.0.

## Start
1. Open Settings and restore the private JSON import supplied in chat to load workbook categories, targets, and net-worth history. This file must never be committed to this repository.
2. Add opening balances using a transaction of type Opening balance / adjustment. Enter card debt as a negative number.
3. Use Move money to assign available funds to categories.
4. Record expenses, income, refunds, and account transfers. Card payments are account transfers.

## Data and calculations
All financial records remain in browser localStorage. No bank connection, cloud database, analytics, or automatic device sync. Export JSON backups regularly. Restoring a backup replaces the current browser data. Browser storage is not encrypted; use a trusted device and browser profile.

Amounts are calculated in integer cents. Envelope balances and overspending roll forward. Targets do not automatically assign money. Pending transactions affect budget and account totals. Reconciliation compares cleared records only; differences become adjustments. Income reports exclude transfers and adjustments. Net worth uses the latest manually recorded value for each named asset/debt through the selected month, independently from transaction accounts.

Monthly transaction CSV export is available. Net-worth history, category targets, account management, reconciliation, and twelve-month income/expense reports are included.

## Hosting
GitHub Pages serves index.html from the main branch root. Keep this repository and path stable to preserve the URL and browser data location. The public repository contains app code and generic starter categories only.

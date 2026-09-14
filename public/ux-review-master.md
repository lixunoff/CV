# ZiCMA Portal — UX Review 2026

---

## Table of Contents

1. [Global / Cross-Flow](#1-global--cross-flow)
   - 1.1 No Notification System
   - 1.2 No Dashboard After Login
   - 1.3 No Shared Component Library
2. [User Onboarding (Project Developer, Auditor, Buyer)](#2-user-onboarding-project-developer-auditor-buyer)
3. [Portfolio & Credit Requests (CA / IT / ET / Retirement)](#3-portfolio--credit-requests-ca--it--et--retirement)
4. [Projects](#4-projects)
   - 4.1 Projects List
   - 4.2 Project Detail Page
   - 4.3 Project Onboarding (New & Existing, PIN / PDD)
   - 4.4 Credit Issuance & Recognition
5. [Auditor Flow](#5-auditor-flow)
   - 5.1 Project Audit
   - 5.2 Credit Request Audit
6. [Certificates](#6-certificates)
7. [Transactions](#7-transactions)
8. [Profile](#8-profile)
   - 8.1 User Profile
   - 8.2 Security
   - 8.3 Terms & Conditions
9. [UI Bugs & Design Inconsistencies](#9-ui-bugs--design-inconsistencies)

---

## 1. Global / Cross-Flow

*Issues that appear across multiple flows or affect the entire platform.*

### 1.1 No Notification System

Business processes on ZiCMA can take days or weeks. While email notifications exist, there is no in-app mechanism to inform users about status changes. Users have to manually check every page to find out if anything has happened.

**Real-world impact:** Users miss critical updates or discover them too late — a confirmed source of support requests ("I didn't know I had to do anything else").

**Solution:** Add an in-app notification center in the header with a chronological feed of events: status changes, admin/auditor comments, payment confirmations. Each notification should link directly to the relevant action.

---

### 1.2 No Dashboard After Login

After signing in, the user lands on the Profile page with no overview of their current situation. There is no single place to understand what's happening, what needs attention, or where to start.

**Real-world impact:** Every session begins with manual navigation to reconstruct context. New users with no projects see an empty screen and have no clear next step.

**Solution:** A dashboard as the default post-login page showing active projects with their current stage, pending actions, and a clear CTA for new users.

---

### 1.3 No Shared Component Library Across Products

Each country deployment (Zimbabwe, Togo) has its own independent UI components. Any change — to a button, a field, a form — has to be made separately in each product.

**Real-world impact:** As new countries are added, maintenance cost grows linearly. Components drift apart over time, causing visual inconsistencies across products that are hard to catch and fix.

**Solution:** A single shared component library with per-country theming. Components are built once, each country applies its own colors and typography on top.

---

## 2. User Onboarding (Project Developer, Auditor, Buyer)

*Covers the account registration flow for all three user roles: Project Developer, Auditor, and Buyer. The flows share the same structure and suffer from the same core issues.*

### 2.1 No Progress Indicator

The onboarding flow spans 7–8 steps but gives no indication of how many remain or where the user currently is.

**Real-world impact:** Users don't know how long the process takes and may abandon mid-flow, not realizing they're almost done.

**Solution:** A step indicator visible throughout the entire flow showing completed and remaining steps by name.

---

### 2.2 Account Type Hidden in a Dropdown

Account type (Corporate / Individual / Community / Government) determines the entire registration path, yet the four options are hidden behind a dropdown requiring an extra click to reveal.

**Real-world impact:** With only 4 options, there's no reason to hide them. Some users won't open the dropdown at all and may miss this step or skip past it without making a conscious choice.

**Solution:** Show all four options upfront as selectable cards or a segmented control.

---

### 2.3 KYC Flow Is Confusing and Unexplained

The KYC process is split across two separate screens — document upload ("Individual Documents") and identity fields ("KYC Verification") — with no explanation connecting them. Neither screen mentions what KYC is, why it's required, or what happens if the submitted documents don't match the requirements.

**Real-world impact:** Users treat both screens as optional formalities and upload incorrect or placeholder files just to move forward. This leads to KYC rejections that require admin intervention and force the user to restart — a confirmed recurring support issue.

**Solution:** Combine or clearly connect the two screens under a single KYC step with an upfront explanation: what KYC is, why it matters, what documents are accepted, and what rejection means for their application.

---

### 2.4 No Back Navigation Before Submission

Before the KYC submission step, the user should be able to go back and correct information from previous steps. Currently there is no back navigation — once you move forward, you can't return to fix a mistake without restarting the flow.

**Real-world impact:** A mistake in Account Details or Documents forces a full restart — all entered data is lost.

**Solution:** Allow back navigation between steps up until the point of KYC submission. Once submitted for admin review, locking the form is expected and correct.

---

### 2.5 Bank Transfer Step Doesn't Explain What Happens Next

After paying at the bank, users are not told they must return to the portal, upload proof of payment, and click "Send Receipt" to complete the submission. Many assume the process is done once they've paid.

**Real-world impact:** A recurring source of support requests — applications sit stuck indefinitely because users don't know a final action is required.

**Solution:** Prominent copy on the Bank Transfer screen explaining the full sequence before the user downloads the invoice: pay at bank → return to portal → upload receipt → click Send Receipt.

---

### 2.6 Inconsistent Form Validation Across Steps

Some steps disable the CTA until all fields are filled (Payment), while others keep it always active (Account Details). There is no consistent validation pattern across the flow.

**Real-world impact:** Users don't know what to expect — the button behaves differently depending on which step they're on.

**Solution:** Pick one pattern and apply it consistently. The preferred approach per UX heuristics: keep the CTA always active, but show inline validation errors on submit — this gives users immediate, specific feedback on what needs to be fixed rather than a silently disabled button.

---

## 3. Portfolio & Credit Requests (CA / IT / ET / Retirement)

*The Portfolio page is the primary space where users manage their carbon credits and initiate four types of requests: Corresponding Adjustment (CA), Internal Transfer (IT), External Transfer (ET), and Retirement (R).*

### 3.1 Unexplained Abbreviations

Request type badges — CA, IT, ET, R — appear throughout the page with no explanation of what they mean.

**Real-world impact:** First-time and occasional users have no way to understand what actions are available without leaving the platform to look it up.

**Solution:** Replace abbreviations with full labels, or add tooltips on hover: CA = Corresponding Adjustment, IT = Internal Transfer, ET = External Transfer, R = Retirement.

---

### 3.2 Incorrect and Unresponsive Action Buttons on Credit Rows

Two issues with the credit row actions: first, the "Apply CA" button appears on credits that already have CA applied — the action makes no sense in this context. Second, while a Proposal Execution is pending, all action buttons (APPLY CA, TRANSFER, RETIRE) are visible but non-clickable with no explanation why.

**Real-world impact:** Users see buttons that look available but don't work. There's no feedback explaining what's blocking them or what they need to do.

**Solution:** Remove "Apply CA" from credits where CA is already applied. For blocked states (e.g. Awaiting Proposal Execution), keep the buttons clickable and show an inline error on click explaining why the action can't be performed right now — this is better UX than a silent disabled state.

---

### 3.3 Unclear Relationship Between Amount Field and Action Buttons

Each credit row has an "Amount" input pre-filled with 0, followed by action buttons. It's not obvious that a quantity must be entered before pressing an action — there's no label connecting the input to the buttons.

**Real-world impact:** Users press the action button without entering an amount and get confused when nothing happens or an error appears.

**Solution:** Add a clear label connecting the input to the actions, and disable action buttons until a valid non-zero amount is entered.

---

### 3.4 Intro Text Occupies Permanent Space

Two paragraphs of onboarding copy occupy the left half of the page on every visit, with no way to dismiss or collapse them.

**Real-world impact:** Returning users see the same explanatory text every time, wasting screen space that could show their actual data.

**Solution:** Move this content to a one-time dismissible tooltip or a collapsible info block.

---

### 3.5 "Updated" Date Is Likely a Bug

The page shows "Updated: 13.05.2025" — a date that hasn't changed despite the portfolio being used months later. This suggests the date is either hardcoded or not updating correctly.

**Real-world impact:** The stale date is misleading — users may think the data itself is outdated.

**Solution:** Fix the date to reflect the actual last update time, and add a descriptive label ("Portfolio last updated") to clarify what it refers to.

---

### 3.6 Request History Split Into Three Separate Sections

The history for CA, Transfer, and Retire requests is split into three separate HISTORY buttons, each opening its own modal. A user who wants to see all their past activity has to open three separate modals.

**Real-world impact:** There's no single place to see a complete picture of all credit activity. Users have to check each section individually.

**Solution:** Replace the three separate history buttons with a single unified request history page or panel, filterable by request type.

---

### 3.7 Inconsistent Post-Payment Behavior

After payment, the experience differs depending on the outcome and method: a rejected payment, a successful bank transfer, and a successful card payment all result in different screens. Card payments in particular redirect the user to the public registry — with no explanation why.

**Real-world impact:** Users don't know what to expect after paying. Being redirected to the registry without context feels like an error, not a success.

**Solution:** Define a unified post-payment flow regardless of method or outcome. Always stay on the platform, show a clear status screen (success, rejected, or pending), and only link to the registry as a secondary action — not as the default redirect.

---

### 3.8 Three-Level Accordion Is Hard to Parse

The portfolio table uses three levels of nested accordion: credit group → project → individual credit rows. The visual distinction between levels relies only on indentation and font size.

**Real-world impact:** The hierarchy is hard to follow, especially when multiple sections are expanded at once.

**Solution:** Add clearer visual separation between levels — distinct backgrounds, left border accents, or a card-based layout for the deepest level.

---

### 3.9 No Search or Filters

The portfolio has no way to filter by sector, vintage year, project, or credit type.

**Real-world impact:** Users with multiple projects and vintages must manually expand and scan every group to find what they need.

**Solution:** Add filters by vintage year and sector at minimum.

---

> **Overall assessment:** The Portfolio page has too many fundamental UX problems to be addressed through incremental fixes. The information architecture, the table structure, the action model, and the transaction flows all need to be redesigned from scratch. A full redesign of this page is strongly recommended.

---

## 4. Projects

### 4.1 Projects List

---

#### Too Many Inconsistent Statuses on Project Cards

Project cards show multiple status labels simultaneously — Published, Approved, PIN: Approved, PDD: Pending — with no clear hierarchy or explanation of what each means. Some cards show a single "Status: PENDING" badge, others show separate PIN/PDD statuses. The terminology is inconsistent and the overall state of the project is hard to read at a glance.

**Real-world impact:** Users can't quickly understand where their project stands or what action is needed next. Multiple status badges showing different things for the same project create confusion rather than clarity.

**Solution:** Define a unified status model with clear, user-friendly labels. Show one primary status per card (e.g. "In Review", "Approved", "Action Required") and move sub-statuses like PIN/PDD to the project detail page.

Since most users have only one project, this page may be redundant altogether — project status could be surfaced directly on the dashboard.

---

### 4.2 Project Detail Page

---

#### Project Details Layout Is Hard to Read

The Project Details tab displays every field in its own bordered card — 10+ fields with no grouping or hierarchy. Related fields like PDD Application Status and PDD Registration Status sit next to each other with no visual connection.

**Real-world impact:** Scanning the page requires significant effort. Users can't quickly find the information they need.

**Solution:** Replace the card grid with a simple label/value list grouped into logical sections. Split the page across tabs to reduce cognitive load: Overview, Documents, Boundaries, Requests.

---

#### Requests Tab Is Hard to Parse

Each request is shown as a dense card with nested tables, status badges, and comment blocks stacked together. With multiple requests visible at once, it's hard to tell what each one is or what its current status means.

**Real-world impact:** Users can't quickly understand the state of their requests or find a specific one.

**Solution:** Replace with a simple table (type, stage, date, status). Clicking a row opens a detail panel with the full history, payment status, and admin comments.

---

#### PIN Data Is Redundant on the Detail Page

Both PIN and PDD data are shown on the detail page. The PDD supersedes the PIN and contains the same information in more detail — showing both creates unnecessary duplication.

**Real-world impact:** Users see the same fields twice with potentially different values, which creates confusion about which data is current and authoritative.

**Solution:** Show only PDD data as the primary information. The PIN can be available as a collapsed historical reference.

---

#### No Project Timeline

The detail page shows the current state but gives no sense of history — when the project was submitted, when each stage was reviewed, when payments were made, when credits were issued.

**Real-world impact:** Users can't tell how long a review has been ongoing or reconstruct what happened at each stage.

**Solution:** Add a chronological activity log showing key milestones with dates: submission, review decisions, payments, issuance.

---

#### No Overall Project Status on the Page

For projects that have completed onboarding, there is no top-level status indicator showing the current operational state. A project can be Active, Approved, or Suspended — for example, if the annual maintenance fee hasn't been paid or new reports haven't been submitted — but none of this is surfaced clearly on the page.

**Real-world impact:** Users don't know if their project is in good standing or has been suspended. They have to dig through individual fields to piece together the current state.

**Solution:** Show a prominent operational status badge at the top of the page (e.g. Active, Suspended, Action Required) with a brief explanation when action is needed — such as an overdue payment or missing report.

### 4.3 Project Onboarding (New & Existing, PIN / PDD)

---

#### No Progress Indicator in the Flow

The project onboarding flow spans multiple steps but the stepper looks identical to tab navigation — there's no indication of how many steps remain or which are completed.

**Real-world impact:** Users don't know how long the process takes or how close they are to the end.

**Solution:** A clear step-by-step progress indicator visually distinct from tabs, showing completed, current, and upcoming steps by name.

---

#### No Links to PIN / PDD Document Templates

At the PIN and PDD stages users must upload structured documents, but the platform provides no link to download the official templates. Users have to leave the platform to find them on the ZiCMA website.

**Real-world impact:** Users submit documents in the wrong format or structure, which causes delays and rejections.

**Solution:** Add a direct template download link inline at each document upload step, before the user is asked to upload anything.

---

#### Pricing Is Not Transparent

Fees are charged at multiple stages and differ between them, but the platform never explains how the amount is calculated or what it covers.

**Real-world impact:** Users are surprised by payment amounts and don't understand what they're paying for or why it changes between stages.

**Solution:** Show a fee breakdown at each payment step explaining how the amount was calculated and what stage it corresponds to.

---

#### Shapefile Upload Has Too Many Failure Points

The shapefile upload is one of the most error-prone steps on the platform. Users frequently upload incorrect files — PDFs in a ZIP, wrong coordinate systems, malformed archives — and only discover the problem after submission. The integrated shapefile creation tool also needs significant improvement.

**Real-world impact:** A confirmed recurring source of errors and support requests. Users upload invalid files just to pass the step and only learn about the problem later.

**Solution:** Improve the integrated shapefile creation tool. Add real-time validation with specific error messages, block obviously invalid uploads (e.g. PDFs in a ZIP), add inline guidance on accepted formats, and show a map preview of the uploaded boundary before the user confirms.

---

#### UI: Forms and Components Deviate from the Design System

Button fonts, dropdown hover states, credit amount inputs, date picker, and radio button spacing across the PIN/PDD flow don't match DS specifications.

**Solution:** Align all form components with DS tokens and component standards.

---

### 4.4 Credit Issuance & Recognition

---

#### No Progress Indicator in the Flow

Same issue as in 4.3 — the stepper looks like tab navigation with no indication of progress or remaining steps.

**Real-world impact:** Users don't know how many steps are left or whether they're close to done.

**Solution:** A clear step-by-step progress indicator visually distinct from tabs.

---

#### No Way to Go Back to a Previous Step

Once the user moves forward in the issuance or recognition flow, there's no way to return to a previous step to correct a mistake.

**Real-world impact:** Any input error requires abandoning and restarting the entire flow.

**Solution:** Allow back navigation between all steps with form state preserved.

---

#### "Back" Button Goes to Projects Hub Instead of the Project

The "Back" button throughout the flow leads to the general Projects list instead of the specific project the user came from.

**Real-world impact:** Users lose their navigation context and have to manually find their way back to the project.

**Solution:** "Back" should return to the project detail page the flow was initiated from.

---

#### No Clear Confirmation After Payment

After the payment step in the issuance or recognition flow, there is no consistent confirmation screen. The experience varies depending on the payment method and outcome — similar to the issue described in 3.7.

**Real-world impact:** Users don't know if their payment was successful or what happens next, and may try to pay again.

**Solution:** Show a unified payment confirmation screen regardless of method (card or bank transfer) with a clear status and next steps.

---

#### Pricing Is Not Transparent

Same issue as in 4.3 — fees are charged without explanation of how the amount is calculated.

**Real-world impact:** Users are surprised by payment amounts with no context.

**Solution:** Show a fee breakdown at the payment step.

---

#### UI: Forms and Components Deviate from the Design System

Same issues as in 4.3 — button fonts, year selection button margins, and credit amount input alignment don't match DS specifications.

**Solution:** Align all components with DS tokens and standards.

---

## 5. Auditor Flow

### 5.1 Project Audit

#### Unnecessary Intermediate Screen

Clicking a project opens a "Validate Project" screen with a text block and a single "Review Project" button before the auditor can see anything.

**Real-world impact:** An extra click with no value — the screen adds friction without providing new information.

**Solution:** Remove the intermediate screen. Clicking a project card should open the project directly.

---

#### "Rejected" Should Be "Sent Back"

When a project is returned for revision, it is labeled "Rejected" — which implies a final decision. The user can still make changes and resubmit, and the Admin Panel correctly uses "Sent Back" for this state.

**Real-world impact:** The label causes panic — developers think their project has been permanently rejected when it hasn't.

**Solution:** Replace "Rejected" with "Sent Back" for all non-final revision states throughout the auditor flow.

---

#### UI: Components Deviate from the Design System

Typographic hierarchy, icons, and accordion styling across the project audit flow don't match DS specifications.

**Solution:** Align all components with DS tokens and standards.

---

### 5.2 Credit Request Audit

#### Project Developer Name Not Visible in the List

The credit request list doesn't show who submitted the request. The auditor has to open each request individually to find out.

**Real-world impact:** Auditors can't prioritize or scan the list without opening every entry.

**Solution:** Add the Project Developer's name as a visible column in the list.

---

#### "Rejected" Should Be "Sent Back"

Same terminology issue as in 5.1 — credit requests sent back for revision are labeled "Rejected".

**Real-world impact:** Same confusion for developers — they think the request is permanently rejected.

**Solution:** Replace "Rejected" with "Sent Back" for all non-final revision states.

---

#### UI: Components Deviate from the Design System

Same DS issues as in 5.1, plus an incorrect quantity input (up/down arrows impractical for large values) and skeleton loading states that show zeros instead of a loading indicator.

**Solution:** Align all components with DS tokens and replace the quantity input and loading states.

## 6. Certificates

#### Filter Order Is Illogical

Filters don't follow a priority order — "Expired" certificates appear alongside active ones with no clear separation.

**Real-world impact:** Users looking for current certificates have to visually skip past expired ones.

**Solution:** Set filter order to All → [certificate types] → Expired, with "All" selected by default.

---

#### Default View Is a Grid Instead of a List

Certificates are shown as cards in a grid, but this page is primarily a document index — users need to scan by type, date, and reference, not browse visually.

**Real-world impact:** Finding a specific certificate in grid view is slower and less efficient than a sortable list.

**Solution:** Set list view as the default. Keep grid as an optional toggle.

---

#### All Certificate Cards Look Identical

Cards show no visual distinction between certificate types — a Registration certificate looks the same as a Credit Issuance or Letter of Approval.

**Real-world impact:** Users can't identify documents at a glance and have to read each card individually.

**Solution:** Add a type-specific thumbnail or visual indicator for each certificate category.

---

#### UI: Buttons and Table Columns Deviate from the Design System

Button styles on certificate cards and column alignment in list view don't match DS specifications.

**Solution:** Align buttons and table layout with DS tokens and standards.

---

## 7. Transactions

#### Column Order Doesn't Reflect User Priority

The column order doesn't surface the most relevant information first when scanning transaction history.

**Real-world impact:** Users have to scan across the full row to find the data they care about most.

**Solution:** Reorder columns to prioritize date, type, amount, and status — moving less relevant fields to the end.

---

#### No Fee Breakdown per Transaction

There is no indication of how much fee was applied to each transaction.

**Real-world impact:** Users can't reconcile payments or understand why totals differ from what they expected.

**Solution:** Add a fee column or a breakdown tooltip per transaction row.

---

#### No Search or Filters

The transactions page shows a flat list with no way to search, filter by type, date range, or status.

**Real-world impact:** Users looking for a specific transaction or trying to reconcile payments for a particular period have to scroll through the entire list manually.

**Solution:** Add filters by transaction type, date range, and status. A search by amount or reference would also help.

---

## 8. Profile

### 8.1 User Profile

---

#### Profile Photo Block Has No Preview or Delete Option

The Profile Photo block shows only a title and description — no current photo preview and no way to remove an uploaded photo.

**Real-world impact:** Users can't see what their profile photo looks like or remove it if needed.

**Solution:** Show the current avatar as a preview inside the block and add a delete option alongside upload.

---

#### Uploaded Documents Are Not Clickable for Preview

The Uploaded Documents section lists all submitted files but clicking on a document name does nothing — only download is available.

**Real-world impact:** Users who want to verify a document have to download it first instead of previewing it inline.

**Solution:** Make each document row clickable to open a preview (PDF viewer or image lightbox).

---

#### Support Contact Is Just an Email Link

The "Contact us" button opens an email client with no confirmation, no tracking, and no record that the request was received.

**Real-world impact:** Users have no way to know if their support request was received or when to expect a response.

**Solution:** Replace the email link with an in-platform support form that confirms receipt and provides a reference for follow-up.

---

### 8.2 Security

---

#### No Two-Factor Authentication

The Security page shows "Two-Factor Authentication: N/A" with no way to enable it.

**Real-world impact:** For a regulated platform handling carbon credit transactions, the absence of 2FA is a meaningful security gap.

**Solution:** Add the ability to enable and manage 2FA (authenticator app or SMS) from the Security page.

---

### 8.3 Terms & Conditions

---

#### Poor Typographic Hierarchy

The Terms & Conditions page is a long document with no visual structure — headlines aren't clearly distinguished from body text, contrast is low, and there's no table of contents or anchor links to navigate between sections.

**Real-world impact:** Users can't find specific sections without reading through the entire page.

**Solution:** Add clear headline styles, better contrast, and a table of contents with anchor links at the top of the page.

---

## 9. UI Bugs & Design Inconsistencies

### No Shared Component Library Across Products

Each country deployment has its own independent UI components. Any change to a shared element must be made separately in each product.

**Real-world impact:** As new countries are onboarded, maintenance cost grows and components drift apart — causing visual inconsistencies that are hard to catch and fix.

**Solution:** A single shared component library with per-country theming. Components are built once, each country applies its own colors and typography on top.

---

### Component and Design System Violations

All specific UI findings — incorrect component usage, spacing deviations, wrong font styles, icon inconsistencies, and mismatches with Figma mockups — are documented with annotated screenshots in the Figma audit file:

[UX Audit 2026 — UI Annotations (Figma)](https://www.figma.com/design/Vf3QSoQXIx2I77x5fcPLRH/UX-Audit-2026?node-id=6212-736&p=f&t=S8BHBIMEq7wdQVp6-0)

---

## Summary

### Overview

This review covers the full ZiCMA portal across all user-facing flows. The platform works, but it is entirely reactive — it never proactively guides the user, confirms their actions, or tells them what to do next. This is the single most important pattern to break.

---

### Proposed Solutions Summary

🔴 **Critical**
- Add notification center
- Redesign payment flow — fee breakdown, bank transfer proof of payment instruction, clear success and error screens
- Add KYC explanation to the Documents step
- Redesign Portfolio page from scratch
- Improve shapefile upload flow — real-time validation, clear error messages, map preview; improve the integrated shapefile creation tool

🟠 **High**
- Build dashboard as the primary post-login landing page
- Build a shared component library used across all country deployments — changes to any component should propagate everywhere automatically
- Add progress indicators to all multi-step flows (onboarding, issuance, PIN/PDD)
- Fix navigation — Back button and post-completion redirects throughout all flows
- Fix terminology — replace "Rejected" with "Sent Back" across portal and auditor flow
- Add pricing explanations at all payment steps
- Add document template links at PIN/PDD steps
- Add shapefile explanation and format guidance
- Fix auditor flow — remove intermediate "Validate Project" screen, fix project request and credit request UX issues
- Align all components and forms to DS across all flows (tracked in Figma audit)

🟡 **Medium**
- Redesign project detail page with tab structure (Overview, Documents, Boundaries, Requests)
- Simplify requests tab — table with row detail panel
- Add project timeline / onboarding log to project detail
- Improve certificates page — filtering order, default list view, type-specific previews
- Add 2FA to Security page
- Fix profile photo block — add preview and delete option
- Replace "Contact us" email link with in-platform support form
- Improve Terms & Conditions typography and add table of contents

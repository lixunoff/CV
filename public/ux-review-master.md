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

The platform has no notification mechanism of any kind. Business processes on ZiCMA — KYC review, project audit, payment confirmation, credit issuance — can take days or weeks. During this time, the user receives no in-app signal that anything has changed.

There is no:
- Bell icon or notification center in the header
- Unread event counter
- In-app alerts or banners for status changes
- Push notifications
- Action queue ("you have 2 things that need your attention")

The only way a user learns about a status change is by manually navigating to the relevant page — or by receiving an email that may go unnoticed.

**Real-world impact:** Users don't know their application has been rejected, that an admin left a comment, or that a payment was received. This is a confirmed source of support requests ("I didn't know I had to do anything else"). The platform is entirely reactive — it never tells the user what to do next.

**What's needed:** A notification center in the header showing a chronological feed of events relevant to the user: status changes, admin/auditor comments, payment confirmations, document requests, approvals. Each notification should link directly to the relevant action.

---

### 1.2 No Dashboard After Login

After signing in, the user lands directly on the Portfolio page (or is redirected based on their last route). There is no summary view — no single place where a user can understand their current state at a glance.

A first-time user sees an empty Portfolio with no guidance. A returning user has no way to quickly see:
- How many projects they have and what stage each is at
- Whether any action is required from them right now
- What has changed since their last visit

**Real-world impact:** Users have to navigate through multiple pages to reconstruct context. New users don't know where to start. The absence of a dashboard means every session starts with orientation overhead rather than productive action.

**What's needed:** A dashboard as the post-login landing page showing: active projects with their current stage, pending actions (e.g. "upload payment receipt for Project X"), recent activity, and a clear CTA for users with no projects yet ("Register your first project").

---

### 1.3 No Shared Component Library Across Products

The platform currently serves multiple countries — Zimbabwe and Togo — each running its own independent codebase with its own set of UI components. Any change to a shared element (a button, a text field, a form) must be made separately in each product. With two countries this is manageable, but as new countries are onboarded the problem will scale significantly.

This is not only a maintenance issue — it directly causes UX inconsistency. Components diverge over time, flows look and behave differently across products, and there is no single source of truth for what a component should look like or do.

**What's needed:** A single shared component library consumed by all country deployments. Each country would have its own theme (colors, typography, logo) but use the same underlying components. A change to any component would propagate everywhere automatically, ensuring consistency and dramatically reducing maintenance overhead.

---

## 2. User Onboarding (Project Developer, Auditor, Buyer)

*Covers the account registration flow for all three user roles: Project Developer, Auditor, and Buyer. The flows share the same structure and suffer from the same core issues.*

### 2.1 No Progress Indicator

The onboarding flow spans 7–8 steps: Choose Account Type → Credentials → Confirm Email → Account Details → Documents → KYC → Payment → Submitted. At no point does the user see how many steps remain or where they currently are in the process.

**Real-world impact:** Users don't know how much time to budget. Many abandon mid-flow assuming the process is longer than it is, or feel frustrated not knowing how close they are to the end.

**What's needed:** A step indicator (stepper or progress bar) visible throughout the entire flow, showing both completed and remaining steps by name.

---

### 2.2 Account Type Hidden in a Dropdown

Choosing an account type (Corporate / Individual / Community / Government) is one of the most consequential decisions in the flow — it determines the entire registration path. Yet the four options are hidden behind a dropdown that requires an extra click to reveal.

**What's needed:** Show all four options upfront as selectable cards or a segmented control, making the choice visible and scannable without any extra interaction.

---

### 2.3 KYC Step Not Explained

The Documents step asks users to upload identity documents for KYC verification, but the screen provides no explanation of what KYC is, why specific document types are required, or what happens if the uploaded documents don't match requirements.

**Confirmed real-world behavior:** Users upload placeholder or incorrect files just to pass the step and move forward. They then get rejected at the KYC review stage — a wasted cycle for both the user and the admin team.

**What's needed:** Clear copy on the Documents screen explaining what KYC verification is, why correct documents matter, and what happens if the submission is rejected — before the user hits Continue.

---

### 2.4 No Way Back from Documents to Account Details

Once a user reaches the Documents step, there is no way to navigate back to correct information entered in the Account Details step. The only workaround is to restart the entire flow from the beginning.

**What's needed:** Standard back navigation between all onboarding steps, with form state preserved.

---

### 2.5 Bank Transfer Step Doesn't Explain What Happens Next

After downloading the invoice and completing the bank payment, users are not told they must return to the portal, upload the proof of payment, and click "Send Receipt" to actually submit their application. Many assume the process is complete once they've paid at the bank.

**Confirmed real-world impact:** This is a recurring source of support requests. Users' applications sit stuck indefinitely because they don't know a final action is required on their side.

**What's needed:** Explicit, prominent copy on the Bank Transfer screen — before the user downloads the invoice — explaining the full sequence: download invoice → pay at bank → return to portal → upload receipt → click Send Receipt.

---

### 2.6 "Save and Continue" Active with Empty Required Fields

On the Account Details step for Individual accounts, the "Save and Continue" button is enabled even when all required fields are empty. This is inconsistent with the Payment step, where the button is correctly disabled until valid input is provided.

**What's needed:** Consistent disabled state on all primary CTAs until required fields are filled and valid across all onboarding steps.

---

## 3. Portfolio & Credit Requests (CA / IT / ET / Retirement)

*The Portfolio page is the primary space where users manage their carbon credits and initiate four types of requests: Corresponding Adjustment (CA), Internal Transfer (IT), External Transfer (ET), and Retirement (R).*

### 3.1 Unexplained Abbreviations

The Portfolio page displays badge labels — **CA**, **IT**, **ET**, **R** — with no explanation anywhere on the screen. The ongoing request rows read "CA Ongoing request: N/A", "IT ET Transfer request: N/A", "R Retire credits: N/A". A first-time or occasional user has no way to know what these mean without leaving the platform to look it up.

**What's needed:** Full labels or tooltips on hover: CA = Corresponding Adjustment, IT = Internal Transfer, ET = External Transfer, R = Retirement.

---

### 3.2 Action Buttons Always Visible Regardless of State

APPLY CA, TRANSFER, and RETIRE buttons are shown on every credit row at all times — even when an ongoing request already exists or when there are no credits available to act on. There is no visual difference between "action available" and "action blocked due to ongoing request".

**Real-world impact:** Users click a button and only then discover they can't proceed because of an existing request — with no clear explanation of what that request is or where to find it.

**What's needed:** Disabled state with a tooltip explaining why ("You have an ongoing transfer request for this vintage") or hide secondary actions until the ongoing request is resolved.

---

### 3.3 Unclear Relationship Between the Amount Field and Action Buttons

Each credit row has an input field labeled "Amount" pre-filled with 0, followed by APPLY CA / TRANSFER / RETIRE buttons. It is not obvious that the user needs to enter a quantity first and then press a button. There is no label connecting the input to the actions, no helper text, and no inline validation.

**What's needed:** A clear label ("Enter quantity to act on") and disabled buttons until a valid non-zero amount is entered.

---

### 3.4 Intro Text Takes Up Permanent Space

Two paragraphs of explanatory text occupy the left half of the page on every visit. An experienced user has no way to dismiss or collapse this block.

**What's needed:** Move this content to a one-time onboarding tooltip or a collapsible info block.

---

### 3.5 "Updated" Date Has No Context

The top-right corner of the page shows "Updated: 13.05.2025" with no indication of what was updated. Without context the date is meaningless.

**What's needed:** Either a descriptive label ("Portfolio last updated") or remove it entirely.

---

### 3.6 HISTORY Buttons Active When There Is No History

The HISTORY button appears next to each request type even when no requests have ever been made. Clicking it opens an empty modal with no empty state message.

**What's needed:** Disable or hide the HISTORY button until at least one request exists.

---

### 3.7 No Confirmation After a Request Is Executed

After a transfer, retirement, or corresponding adjustment is executed, there is no in-app confirmation that the action completed successfully.

**What's needed:** A clear success state after execution, with a summary of what changed and a direct link to the updated portfolio view.

---

### 3.8 Three-Level Accordion Is Hard to Parse

The portfolio table uses three levels of nested accordion. The visual distinction between levels relies only on indentation and font size, with no borders or color difference to guide the eye.

**What's needed:** Clearer visual separation between accordion levels: distinct background colors, left border accents, or card-based layout for the deepest level.

---

### 3.9 No Search or Filters

The portfolio has no way to search or filter by sector, vintage year, project, or credit type.

**What's needed:** At minimum, a filter by vintage year and sector.

---

> **Overall assessment:** The Portfolio page has too many fundamental UX problems to be addressed through incremental fixes. A full redesign is strongly recommended.

---

## 4. Projects

### 4.1 Projects List

#### Project Statuses Are Unclear and the Page Itself May Be Redundant

Project cards don't clearly communicate what is currently happening with a project. All cards look the same regardless of state. Since most users have only one project, a dedicated Projects page may be unnecessary overhead — the same information could be surfaced directly on the dashboard.

---

### 4.2 Project Detail Page

#### Project Details Layout Is Hard to Read

The Project Details tab displays information as a grid of individual cards. With 10+ fields, the result is a visually heavy, fragmented layout.

**What's needed:** Replace the card grid with a simpler layout. Consider splitting content across tabs: **Overview**, **Documents**, **Boundaries**, **Requests**.

---

#### Requests Tab Is Hard to Parse

The current Requests tab displays each request as a complex card with nested tables, status badges, and comment blocks all stacked together.

**What's needed:** Replace with a simple table listing all requests. Clicking a row should open a side panel or modal with full detail.

---

#### PIN Data Is Redundant on the Detail Page

Both PIN and PDD data are shown on the detail page, creating redundancy. The PDD is the authoritative document.

**What's needed:** Show only PDD data. PIN can be a collapsed section for historical context.

---

#### No Timeline or Onboarding Log

The project detail page shows current state but gives no sense of history — when it was submitted, when each stage was reviewed, when it was approved.

**What's needed:** A timeline or activity log showing key milestones with dates.

---

#### No Overall Project Status on the Page

Nowhere on the page is the overall project status displayed as a clear top-level indicator.

**What's needed:** A prominent status indicator at the top of the page, next to the project name.

---

### 4.3 Project Onboarding (New & Existing, PIN / PDD)

#### No Progress Indicator in the Flow

The onboarding flow for a new project spans multiple steps. The current stepper component is visually indistinguishable from tab navigation. Users have no sense of progress.

**What's needed:** A clear step-by-step progress indicator distinct from tab navigation.

---

#### No Links to PIN / PDD Document Templates

The interface provides no link to download official templates. Users must leave the platform to find them.

**What's needed:** A direct download link at each document upload step.

---

#### Pricing Is Not Transparent

The platform does not explain how fees are calculated or how they vary by project size or stage.

**What's needed:** A fee breakdown or explanation at each payment step.

---

#### Shapefile Upload Flow Has Too Many Failure Points

The shapefile upload is one of the most error-prone steps. Users frequently upload incorrect files and only discover the problem after submission. The integrated shapefile creation tool needs significant improvement.

**Real-world impact:** Confirmed recurring source of errors and support requests.

**What's needed:**
- Improve the integrated shapefile creation tool
- Add real-time validation with specific error messages
- Prevent submission of obviously invalid files (e.g. PDFs inside a ZIP)
- Add inline guidance on valid shapefile format
- Show a map preview before the user confirms

---

#### UI: Forms and Components Need to Be Aligned with the Design System

Several form components deviate from DS specifications: incorrect font styles, wrong hover states, misaligned inputs, outdated date picker.

---

### 4.4 Credit Issuance & Recognition

#### No Progress Indicator in the Flow

The stepper looks and behaves like tab navigation. Users cannot tell where they are in the process.

---

#### No Way to Go Back to a Previous Step

Once the user moves forward, there is no way to return to correct a mistake.

**What's needed:** Back navigation between all steps with form state preserved.

---

#### After Completion — Redirect Goes to Hub Instead of Relevant Page

After a successful issuance or recognition, the user is redirected to the general Projects list.

**What's needed:** Redirect to the project detail page or Portfolio with a clear success message.

---

#### No Visual Confirmation After Execution

After execution, there is no success state — no banner, no summary, no confirmation screen.

**What's needed:** A clear success confirmation with a link to the relevant next step.

---

#### Pricing Is Not Transparent

Fees in the issuance process are not explained.

**What's needed:** A fee breakdown at the payment step.

---

#### "Back" Button Navigates to the Projects Hub

The "Back" button leads to the general Projects list rather than the specific project.

**What's needed:** "Back" should return to the project detail page.

---

## 5. Auditor Flow

### 5.1 Project Audit

#### Unnecessary Intermediate Screen

After clicking on a project in the list, the auditor is shown a "Validate Project" screen with an explanatory text block and a single "Review Project" button. This is a redundant step — clicking a project should navigate directly to the project detail view for review.

**What's needed:** Remove the intermediate screen. Clicking a project card should open the project immediately.

#### "Rejected" Should Be "Sent Back"

When a project is sent back for revision after the first review, it is labeled "Rejected". This is incorrect — "Rejected" implies a final, unappealable decision, while the user can still make changes and resubmit. The Admin Panel correctly uses "Sent Back" for this state. The mismatch creates confusion for both auditors and project developers.

**What's needed:** Replace "Rejected" with "Sent Back" for all non-final rejection states throughout the auditor flow.

#### UI: Components Need to Be Aligned with the Design System

Several components across the project audit flow deviate from DS standards: typographic hierarchy in containers, redundant UI elements, incorrect icons, and accordion styling. These should be brought in line with DS tokens and component standards.

### 5.2 Credit Request Audit

#### Project Developer Name Not Visible in the List

The credit request list does not show the name of the Project Developer who submitted the request. The auditor cannot identify who they are reviewing without opening each request individually.

**What's needed:** Add the Project Developer's name as a visible column in the credit request list.

#### "Rejected" Should Be "Sent Back"

The same terminology issue as in the project audit flow applies here. Credit requests that have been sent back for revision are labeled "Rejected", which is misleading.

**What's needed:** Replace "Rejected" with "Sent Back" for all non-final rejection states.

#### UI: Components Need to Be Aligned with the Design System

The same DS inconsistencies present in the project audit flow appear here, along with an incorrect quantity input component (up/down arrows are impractical for large value changes) and skeleton loading states that currently show zeros instead of a proper loading indicator.

## 6. Certificates

#### Filtering Needs to Be Restructured

The current filter state does not follow a logical order for the user. Filtering should start with "Show All" as the default selected option, followed by individual certificate types, and "Expired" as the last filter.

**What's needed:** Reorder filters to: All → [certificate types] → Expired. "All" should be selected by default on page load.

---

#### Default View Should Be a List, Not a Grid

A list view is easier to scan for a document index page.

**What's needed:** Set the list view as default. Keep the grid as an optional toggle.

---

#### Each Certificate Type Should Have Its Own Preview

All certificate cards currently look identical regardless of type.

**What's needed:** A type-specific thumbnail or visual indicator for each category.

---

#### UI: Buttons and Table Fields Need to Be Aligned

Button styles and table columns are misaligned and inconsistently spaced. These should be brought in line with DS tokens.

---

## 7. Transactions

#### Column Order Needs to Be Revised

Columns should be reordered to surface the most relevant data first.

---

#### Show Fee Breakdown per Transaction

There is no indication of how much fee was applied to each transaction.

---

#### UI: Align Table Fields and Column Headers

Amount values in particular should be right-aligned to make numerical comparison easier.

---

## 8. Profile

### 8.1 User Profile

#### Profile Photo Has No Preview or Delete Option

The Profile Photo block shows no avatar preview and has no delete option.

**What's needed:** Show the current avatar as a preview. Add a delete option alongside upload.

---

#### Uploaded Documents Are Not Clickable for Preview

Clicking on a document name does nothing — the user can only download.

**What's needed:** Make each document row clickable to open a preview.

---

#### Support Contact Is Just an Email Link

The "Contact us" button simply opens an email client with no tracking or confirmation.

**What's needed:** An in-platform support form that confirms receipt.

---

### 8.2 Security

#### No Two-Factor Authentication

The profile shows "Two-Factor Authentication: N/A" with no way to enable it.

**What's needed:** Add 2FA management (authenticator app or SMS) on the Security page.

---

### 8.3 Terms & Conditions

#### Poor Typographic Hierarchy

Long document with no visual hierarchy, low contrast, and no table of contents.

**What's needed:** Clear headline styles, better contrast, and a table of contents with anchor links.

---

## 9. UI Bugs & Design Inconsistencies

### No Shared Component Library Across Products

Each country deployment has its own independent component codebase. Any change must be made separately in each product. As new countries are onboarded, this will compound significantly.

**What's needed:** A single shared component library with per-country theming.

---

### Component and Design System Violations

All UI-level findings are documented with annotated screenshots in the Figma audit file:

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
- Build dashboard as the primary post-login landing page
- Redesign Portfolio page from scratch
- Improve shapefile upload flow — real-time validation, clear error messages, map preview; improve the integrated shapefile creation tool

🟠 **High**
- Add progress indicators to all multi-step flows (onboarding, issuance, PIN/PDD)
- Fix navigation — Back button and post-completion redirects throughout all flows
- Fix terminology — replace "Rejected" with "Sent Back" across portal and auditor flow
- Add pricing explanations at all payment steps
- Add document template links at PIN/PDD steps
- Add shapefile explanation and format guidance
- Fix auditor flow — remove intermediate "Validate Project" screen, fix project request and credit request UX issues

🟡 **Medium**
- Redesign project detail page with tab structure (Overview, Documents, Boundaries, Requests)
- Simplify requests tab — table with row detail panel
- Add project timeline / onboarding log to project detail
- Improve certificates page — filtering order, default list view, type-specific previews
- Add 2FA to Security page
- Fix profile photo block — add preview and delete option
- Replace "Contact us" email link with in-platform support form
- Improve Terms & Conditions typography and add table of contents

🔵 **UI Issues**
- Align all components and forms to DS across all flows (tracked in Figma audit)
- Build a shared component library used across all country deployments — changes to any component should propagate everywhere automatically

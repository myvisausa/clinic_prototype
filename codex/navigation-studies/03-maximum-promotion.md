# Maximum Promotion

Navigation proposal only. The outer workspace rail, inner sidebar, and top bar retain their existing roles. `▸` marks the selected sidebar page; brackets mark the active tab. Content boxes identify existing content, not a proposed widget layout.

```text
╭──────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ ←   →     Dental Implant Clinic Demo                                                                     │
├─────────┬─────────────────────────────┬──────────────────────────────────────────────────────────────────┤
│ Home    │ CLINIC                      │ Calendar                                                         │
│         │                             │ ──────────────────────────────────────────────────────────────   │
│ Clinic• │ SCHEDULE                    │ [ Day ]   Week   Month   Agenda                                  │
│         │ Day Sheet                   │ ──────────────────────────────────────────────────────────────   │
│ Engage  │ ▸ Calendar                  │                                                                  │
│         │ Team Schedule               │                                                                  │
│ More    │ My Availability             │ ┌──────────────────────────────────────────────────────────┐     │
│         │                             │ │ Existing Calendar content                                │     │
│         │ PATIENTS                    │ │ Widget layout unchanged in this navigation sketch        │     │
│         │ Patient Directory           │ └──────────────────────────────────────────────────────────┘     │
│         │   SELECTED PATIENT          │                                                                  │
│         │   Summary                   │                                                                  │
│         │   Dental Chart              │                                                                  │
│         │   Procedures                │                                                                  │
│         │   Treatment Plans           │                                                                  │
│         │   Notes                     │                                                                  │
│         │   Perio                     │                                                                  │
│         │   Prescriptions             │                                                                  │
│         │   Documents                 │                                                                  │
│         │                             │                                                                  │
│         │ FINANCES                    │                                                                  │
│         │ Patient Account             │                                                                  │
│         │ Estimates                   │                                                                  │
│         │ Invoices                    │                                                                  │
│         │ Services & Prices           │                                                                  │
│         │ Packages                    │                                                                  │
│         │ Insurers                    │                                                                  │
│         │                             │                                                                  │
│         │ CLINICAL RESOURCES          │                                                                  │
│         │ Clinical Codes              │                                                                  │
│         │ Medications                 │                                                                  │
│         │ Document Templates          │                                                                  │
│         │ Service Categories          │                                                                  │
│         │ Priorities                  │                                                                  │
│         │ Prognoses                   │                                                                  │
│         │                             │                                                                  │
│         │ OPERATIONS                  │                                                                  │
│         │ Providers                   │                                                                  │
│         │ Appointment Types           │                                                                  │
│         │ Office Hours                │                                                                  │
│         │ RIPS Reporting              │                                                                  │
│         │ Calendar Connection         │                                                                  │
│         │ Chart Preferences           │                                                                  │
│ Setup   │                             │                                                                  │
│ Me      │                             │                                                                  │
╰─────────┴─────────────────────────────┴──────────────────────────────────────────────────────────────────╯
```

Other page tab strips (each appears only when its sidebar page is selected):

```text
╭──────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Team Schedule                                                                                            │
│ ──────────────────────────────────────────────────────────────────────────────────────────────────────── │
│ [ Day ]   Week   Month                                                                                   │
╰──────────────────────────────────────────────────────────────────────────────────────────────────────────╯

╭──────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ My Availability                                                                                          │
│ ──────────────────────────────────────────────────────────────────────────────────────────────────────── │
│ [ Weekly ]   Exceptions                                                                                  │
╰──────────────────────────────────────────────────────────────────────────────────────────────────────────╯

╭──────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Dental Chart                                                                                             │
│ ──────────────────────────────────────────────────────────────────────────────────────────────────────── │
│ [ Entry ]   Initial                                                                                      │
╰──────────────────────────────────────────────────────────────────────────────────────────────────────────╯

╭──────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Providers                                                                                                │
│ ──────────────────────────────────────────────────────────────────────────────────────────────────────── │
│ [ Weekly ]   Exceptions                                                                                  │
╰──────────────────────────────────────────────────────────────────────────────────────────────────────────╯
```

Next stage: inventory and key the widgets, compare three arrangements with sizes and inline/popover/modal placement, then implement the selected arrangement.

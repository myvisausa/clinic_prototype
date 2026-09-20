# Contextual Clinic

Navigation proposal only. The outer workspace rail, inner sidebar, and top bar retain their existing roles. `▸` marks the selected sidebar page; brackets mark the active tab. Content boxes identify existing content, not a proposed widget layout.

```text
╭──────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ ←   →     Dental Implant Clinic Demo                                                                     │
├─────────┬─────────────────────────────┬──────────────────────────────────────────────────────────────────┤
│ Home    │ CLINIC                      │ Calendar                                                         │
│         │                             │ ──────────────────────────────────────────────────────────────   │
│ Clinic• │ Day Sheet                   │ [ Day ]   Week   Month   Agenda                                  │
│         │ ▸ Calendar                  │ ──────────────────────────────────────────────────────────────   │
│ Engage  │ Patients                    │                                                                  │
│         │ Invoices                    │                                                                  │
│ More    │                             │ ┌──────────────────────────────────────────────────────────┐     │
│         │ TEAM                        │ │ Existing Calendar content                                │     │
│         │ Schedule & Availability     │ │ Widget layout unchanged in this navigation sketch        │     │
│         │ Providers                   │ └──────────────────────────────────────────────────────────┘     │
│         │ Appointment Types           │                                                                  │
│         │                             │                                                                  │
│         │ CATALOGS                    │                                                                  │
│         │ Services & Packages         │                                                                  │
│         │ Clinical Codes              │                                                                  │
│         │ Medications                 │                                                                  │
│         │ Document Templates          │                                                                  │
│         │ Insurers                    │                                                                  │
│         │                             │                                                                  │
│         │ Clinical Settings           │                                                                  │
│ Setup   │                             │                                                                  │
│ Me      │                             │                                                                  │
╰─────────┴─────────────────────────────┴──────────────────────────────────────────────────────────────────╯

                 SELECT A PATIENT → INNER SIDEBAR CHANGES

╭──────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ ←   →     Dental Implant Clinic Demo                                                                     │
├─────────┬─────────────────────────────┬──────────────────────────────────────────────────────────────────┤
│ Home    │ CLINIC · ANA GARCÍA         │ Dental Chart                                                     │
│         │                             │ ──────────────────────────────────────────────────────────────   │
│ Clinic• │ ← Back to Patients          │ [ Entry ]   Progress   Initial                                   │
│         │                             │ ──────────────────────────────────────────────────────────────   │
│ Engage  │ Summary                     │                                                                  │
│         │ ▸ Dental Chart              │                                                                  │
│ More    │ Treatment Plans             │ ┌──────────────────────────────────────────────────────────┐     │
│         │ Notes                       │ │ Existing Dental Chart content                            │     │
│         │ Perio                       │ │ Widget layout unchanged in this navigation sketch        │     │
│         │ Prescriptions               │ └──────────────────────────────────────────────────────────┘     │
│         │ Documents                   │                                                                  │
│         │ Estimates                   │                                                                  │
│         │ Account                     │                                                                  │
│ Setup   │                             │                                                                  │
│ Me      │                             │                                                                  │
╰─────────┴─────────────────────────────┴──────────────────────────────────────────────────────────────────╯
```

Other page tab strips (each appears only when its sidebar page is selected):

```text
╭──────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Schedule & Availability                                                                                  │
│ ──────────────────────────────────────────────────────────────────────────────────────────────────────── │
│ [ Schedule ]   Availability                                                                              │
│                                                                                                          │
│    └─ [ Day ]   Week   Month       Availability: Weekly | Exceptions                                     │
╰──────────────────────────────────────────────────────────────────────────────────────────────────────────╯

╭──────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Providers                                                                                                │
│ ──────────────────────────────────────────────────────────────────────────────────────────────────────── │
│ [ Weekly ]   Exceptions                                                                                  │
╰──────────────────────────────────────────────────────────────────────────────────────────────────────────╯

╭──────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Services & Packages                                                                                      │
│ ──────────────────────────────────────────────────────────────────────────────────────────────────────── │
│ [ Services ]   Categories   Packages                                                                     │
╰──────────────────────────────────────────────────────────────────────────────────────────────────────────╯

╭──────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Clinical Settings                                                                                        │
│ ──────────────────────────────────────────────────────────────────────────────────────────────────────── │
│ [ Office ]   Chart Preferences   Priorities   Prognoses                                                  │
╰──────────────────────────────────────────────────────────────────────────────────────────────────────────╯
```

Next stage: inventory and key the widgets, compare three arrangements with sizes and inline/popover/modal placement, then implement the selected arrangement.

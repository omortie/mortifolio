---
title: "ERP System — Farapox"
date: 2017-12-01
image: /images/projects/erp/erp.jpeg
badges:
  - "C++"
  - "Qt"
  - "CMake"
  - "Python"
tags: []
---

## Overview

An evolving enterprise ERP system built on a Qt/C++ application framework at Farapox Co. The system provides modular business management functionality with a Python scripting layer for custom business logic. My work focused on building core reusable UI components, migrating the build system, and establishing documentation standards.

## Contributions

### Component & Module Design

Designed and implemented several foundational UI components that became part of the shared Applications Framework used across all ERP modules:

- **Vertical Grid** — a custom high-performance grid widget supporting large tabular datasets with virtual scrolling, column configuration, and inline editing
- **Master Detail Dialogs** — a reusable dialog pattern linking master record navigation (First/Prior/Next/Last/Page) with a detail view, export/import, and inline scripting — used throughout the ERP for entities like Transfer Requests, Orders, and Inventory

### Build System Migration

Led the full migration of all projects from QMake to CMake:

- Unified build configuration across the monorepo
- Enabled out-of-source builds and improved dependency management
- Reduced onboarding friction for new developers

### Documentation

Documented all developed components using **Doxygen** and **UML diagrams**, producing a reference that allowed team members to adopt shared components without tribal knowledge.

## Tech Stack

- **Qt / C++** — application framework and all UI components
- **CMake** — build system
- **Python** — business logic scripting layer embedded in the ERP runtime
- **Doxygen / UML** — documentation

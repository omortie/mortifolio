---
title: "HMI Framework"
date: 2019-08-01
image: /images/projects/hmiframework/hmidesigner.jpeg
badges:
  - "C++"
  - "Qt"
  - "Python"
  - "XML"
  - "SCADA"
tags: []
---

## Overview

HMI Framework is a two-part system built entirely from the ground up using Qt and Python, combining a visual design environment with a real-time runtime engine. It empowers engineers to design complete industrial processes through a drag-and-drop interface and run them against live SCADA equipment.

## HMI Designer

The Designer lets users compose entire process visualisations by placing and connecting HMI elements on a canvas via drag-and-drop. Each element is configured visually, and the finished design is exported as an XML schema — the single source of truth consumed by the Runner.

### Designer Features

- **Drag-and-drop canvas** — build full process diagrams from a library of industrial HMI elements
- **Component library** — connectors, pipes, thermodynamics, sensors, storages, aerodynamics, motion, and widget elements
- **Property editor** — configure visual and data properties inline for each placed element
- **XML export** — designs are serialised to an XML schema for portability and version control

## HMI Runner

The Runner is an all-in-one bridge from HMI designs to real-time action. It reads the Designer's XML schemas and generates Python scripts that implement control and monitoring scenarios for the target equipment.

### Runner Features

- **Schema loading** — opens `.hmi` XML files from Designer and renders them as live scenes
- **Python script generation** — automatically produces Python control scripts from the HMI schema
- **Real-Time Database connection** — live data flows between the software and real industrial equipment
- **Live visualisation** — scene elements update in real time as data changes
- **Custom scenario testing** — run and validate Python-scripted control scenarios directly in the Runner
- **Debugger panel** — built-in debugger for inspecting register values at runtime
- **Proven reliability** — validated against real-world SCADA devices in production environments

## Technical Details

The Designer and Runner share a common Qt/C++ foundation. Python is embedded as the scripting engine for scenario logic, and the XML schema format acts as the interchange layer between the two applications. The system has been successfully deployed in large-scale industrial and national infrastructure sites.

## Tech Stack

- **Qt / C++** — application framework for both Designer and Runner
- **Python** — embedded scripting engine for control scenarios and data processing
- **XML** — schema format for HMI scene interchange
- **SCADA / Real-Time Database** — live equipment communication in the Runner

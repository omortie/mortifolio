---
title: "HMI Designer"
date: 2019-08-01
image: /images/projects/hmi/hmidesigner.jpeg
badges:
  - "C++"
  - "Qt"
  - "JavaScript"
  - "SVG"
  - "Docker"
tags: []
links:
  - icon: fab fa-github
    url: https://github.com/omortie
---

## Overview

HMI Designer is a Qt-based Human-Machine Interface authoring tool built from scratch for SCADA and electrical automation systems. It enables engineers to design rich, interactive HMI screens by composing industrial components such as pipes, valves, tanks, sensors, and gauges on a canvas — all backed by live data from industrial protocols.

## Features

- **Drag-and-drop canvas** — compose industrial HMI screens from a rich component library including pipes, connectors, thermodynamics components, sensors, and more
- **SVG-based rendering** — all components are rendered using SVG, ensuring crisp visuals at any resolution
- **JavaScript integration** — dynamic behaviour and data bindings are scripted directly in the designer
- **Live data binding** — components connect to SCADA data sources and update in real time
- **Property editor** — inline property panel for configuring each component's visual and data properties
- **Export & deploy** — scenes are saved as `.hmi` files loaded directly by the HMI Player runtime

## Technical Details

The designer was built entirely in Qt/C++ with an embedded web engine for SVG/JavaScript rendering. Docker was used for the build and deployment pipeline. The project was developed as part of the automation and SCADA research initiative at Modje Niroo Company.

## Tech Stack

- **Qt / C++** — core application framework and UI
- **SVG + JavaScript** — component rendering and scripting
- **CSS / Bootstrap** — styling within the embedded web view
- **Docker** — containerised build and deployment

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
---

## Overview

HMI Designer is a dedicated environment for crafting visual and database representations of electrical posts through graphical elements. It produces dynamic HMI scenes that have been empirically validated, with successful application in large-scale industrial projects and national sites.

## Features

- **Graphical scene authoring** — design visual representations of electrical posts using a rich library of industrial graphical elements
- **Database representation** — define and manage the data model behind each scene alongside its visual counterpart
- **Dynamic HMI scenes** — elements respond to live data, producing fully animated, real-time visualisations
- **SVG-based rendering** — crisp, resolution-independent graphics powered by SVG
- **JavaScript integration** — behaviour and data bindings scripted directly within the designer
- **Validated at scale** — empirically proven in large-scale industrial projects and national infrastructure sites

## Technical Details

The designer was built entirely in Qt/C++ with an embedded web engine for SVG/JavaScript rendering. Docker was used for the build and deployment pipeline. The project was developed as part of the automation and SCADA research initiative at Modje Niroo Company.

## Tech Stack

- **Qt / C++** — core application framework and UI
- **SVG + JavaScript** — graphical element rendering and dynamic behaviour scripting
- **Docker** — containerised build and deployment

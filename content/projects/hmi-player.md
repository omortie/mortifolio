---
title: "HMI Player"
date: 2020-02-01
image: /images/projects/farapox/1708325426580.jpeg
badges:
  - "C++"
  - "Qt"
  - "CSS"
  - "Bootstrap"
tags: []
links:
  - icon: fab fa-github
    url: https://github.com/omortie
---

## Overview

HMI Player is the runtime counterpart to HMI Designer. It loads `.hmi` scene files created in the designer and executes them as live, data-driven monitoring dashboards for industrial environments. Operators use the Player to monitor and interact with SCADA systems in real time.

## Features

- **Scene loading** — opens `.hmi` files produced by HMI Designer directly from a file browser panel
- **Live data display** — connects to industrial data sources and updates component values in real time
- **Tabbed multi-scene view** — multiple HMI pages can be open simultaneously in tabs
- **Debugger panel** — built-in side panel for inspecting data values and diagnosing issues at runtime
- **Full-screen mode** — optimised for control-room monitor deployments

## Technical Details

The Player shares the same Qt/C++ rendering engine as the Designer, ensuring pixel-perfect reproduction of designed scenes. Communication with SCADA back-ends is handled via a configurable data adapter layer supporting standard industrial protocols.

## Tech Stack

- **Qt / C++** — application framework and rendering engine
- **CSS / Bootstrap** — embedded view styling

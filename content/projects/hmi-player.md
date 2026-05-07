---
title: "HMI Player"
date: 2020-02-01
image: /images/projects/hmi/hmiplayer.jpeg
badges:
  - "C++"
  - "Qt"
  - "WebSocket"
  - "HTTP"
  - "JavaScript"
tags: []
---

## Overview

HMI Player is a custom thin-client HMI application built with Qt and web technologies. It gives SCADA operators full control and monitoring capabilities over industrial equipment through a flexible, dockable-widget interface.

## Features

- **Real-time communication** — connects to the SCADA server via HTTP and WebSocket for live data updates and control commands
- **Alarm management** — customizable alarm panel with filtering, acknowledgement, and history
- **Event logging** — configurable event viewer for tracking operator actions and system events
- **Reporting** — built-in report generation with customizable templates
- **Dockable interface** — flexible layout with dockable widgets, allowing operators to arrange panels to suit their workflow
- **Full SCADA integration** — comprehensive HMI SCADA solution covering monitoring, control, and diagnostics in a single application

## Technical Details

The application embeds web technologies within Qt to render HMI scenes, combining the performance of a native C++ host with the flexibility of HTML/JavaScript-driven visuals. Real-time data flow is managed through a WebSocket channel, while HTTP is used for configuration and report endpoints.

## Tech Stack

- **Qt / C++** — application framework, docking system, and native integration
- **WebSocket / HTTP** — real-time and request-response communication with the SCADA server
- **JavaScript / Web technologies** — embedded HMI scene rendering

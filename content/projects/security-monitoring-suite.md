---
title: "Security Monitoring Suite"
date: 2024-09-01
image: /images/projects/mnc/1723314494001.jpeg
badges:
  - "Flutter"
  - "Dart"
  - "Python"
  - "Django"
  - "GraphQL"
  - "Redis"
tags: []
links:
  - icon: fab fa-github
    url: https://github.com/omortie
---

## Overview

A comprehensive security monitoring platform built for a startup client, delivered as two tightly integrated components: a Flutter-based desktop/mobile client and a Python/Django backend server. The system unifies real-time camera surveillance, GPS device tracking, and call center operations into a single monitoring interface.

## Client Application

The front-end was developed using Flutter/Dart, targeting both desktop and mobile form factors. Key features include:

- **Real-time camera monitoring** — live feeds from networked security cameras with PTZ control
- **GPS device tracking** — map-based view of tracked devices with historical trail playback
- **Call center integration** — integrated VoIP and alert management within the same UI
- **Alert dashboard** — unified incident feed with severity filtering and acknowledgement workflow

## Backend Server

The backend was built with Python/Django and provides the data pipeline for the client:

- **REST + GraphQL API** — dual API layer for flexible client consumption
- **SQLAlchemy ORM** — database access layer with connection pooling
- **Redis** — real-time event bus and caching layer for low-latency alert delivery
- **Third-party integrations** — connected to external security hardware APIs and notification services

## Tech Stack

- **Flutter / Dart** — cross-platform client
- **Python / Django** — backend framework
- **GraphQL** — client-facing API
- **SQLAlchemy / Redis** — data and caching layer

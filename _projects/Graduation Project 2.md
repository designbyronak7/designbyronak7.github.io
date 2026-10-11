---
name: Soil-moisture irrigation controller
tools: [Arduino, Moisture Sensing, Relay Control, Pump Automation]
image: /assets/img/projects/irrigation-controller.svg
description: A student proof of concept that switched a water pump based on soil-moisture readings.
permalink: /projects/soil-moisture-irrigation/
---

## Project overview

This student project tested a simple idea: use a soil-moisture reading to decide when to run a small irrigation pump. An Arduino read the sensor and switched the pump through a relay.

{% include elements/figure.html image="/assets/img/projects/irrigation-controller.svg" caption="System overview; the prototype used on/off pump control" %}

## What the prototype did

The controller compared the sensor reading with a configured moisture threshold and turned the pump on or off. The output was binary, so tuning the threshold and choosing a relay rated for the pump were important practical details.

The working proof of concept did not include remote or weather-based control. Those were ideas for a later revision, not completed features.
---
name: Soil-moisture irrigation controller
tools: [Arduino, Moisture Sensing, Relay Control, Pump Automation]
image: /assets/img/projects/irrigation-controller.svg
description: A student proof of concept that switched a water pump based on soil-moisture readings.
permalink: /projects/soil-moisture-irrigation/
---

<link rel="stylesheet" href="/assets/css/ronak-portfolio.css">

<p class="project-kicker">Academic prototype · irrigation control</p>

## Design problem

This academic prototype used a soil-moisture reading to decide when to run a small irrigation pump.

{% include elements/figure.html image="/assets/img/projects/irrigation-controller.svg" caption="System overview; the prototype used on/off pump control" %}

## Control approach

An Arduino read the sensor, compared the value with a configured moisture threshold, and switched the pump through a relay. The on/off control kept the system simple; the threshold and relay rating had to suit the sensor and pump.

**Outcome and limits:** the proof of concept switched the pump based on the sensor reading. It did not include remote or weather-based control, and the project does not report field-performance measurements.
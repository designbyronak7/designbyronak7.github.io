---
name: Recycled-plastic injection moulding prototype
tools: [SolidWorks, Arduino, Product Design, Prototyping]
image: /assets/img/projects/recycled-plastic-moulder.svg
description: A student team built a small prototype to mould reclaimed LDPE and learned where its temperature control and tooling needed work.
permalink: /projects/recycled-plastic-moulder/
---

## Project overview

For our team capstone, we designed and built a small injection-moulding prototype for reclaimed plastic. I worked on the mechanical concept and CAD, then helped adapt the design to the parts we could actually source.

## Design and build

We started with hand sketches and a SolidWorks model. The prototype used a hopper, a heated barrel with band heaters, a hand-lever plunger, and a mould. We built it with a mix of salvaged and purchased parts rather than follow the CAD model exactly.

An Arduino and relay controlled the heaters. Our setup controlled the nozzle outlet temperature; it did not regulate the whole barrel, which limited temperature stability.

{% include elements/figure.html image="/assets/img/projects/recycled-plastic-moulder.svg" caption="Simplified concept illustration; not a manufacturing drawing" %}

## First trial

We chopped up LDPE from a used water tank and produced a first moulded tile. The surface finish was acceptable for a first run, but the process still needed work: temperature varied by about 10–25 °C from the target, plastic stuck to the barrel and plunger, and the mould needed more accurate machining.

That trial gave us a useful next-step list: control temperature through the barrel, improve material flow, and make the mould more precise before trying to repeat the process.
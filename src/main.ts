// Almost from https://observablehq.com/@d3/selection-join

import * as d3 from 'd3';

const svg = d3.select('body').append('svg')
    .attr('viewBox', `0 0 ${ 50  + 20 * 10 } 200`);

function createRandomNumbers() {
  return Array.from(Array(10)).map((_, i) => i).filter(() => Math.random() > 0.4);
}

const margin = 50;

const calcX = (_, i) => margin + i * 20;

function draw() {
  const t = svg.transition().duration(750);

  // @ts-ignore
  svg.selectAll('text')
      .data(createRandomNumbers(), d => d)
      .join(
          enter => enter.append('text')
              .attr('fill', 'green')
              .attr('opacity', 0)
              .attr('x', calcX)
              .attr('y', margin - 20)
              .attr('dy', '1em')
              .attr('width', '1em')
              .attr('height', '1em')
              .text(d => d)
              .call(enter => enter.transition(t)
                  .attr('y', margin)
                  .attr('opacity', 1)),
          update => update
              .attr('fill', 'black')
              .attr('opacity', 1)
              .call(enter => enter.transition(t)
                  .attr('x', calcX)
                  .attr('opacity', 1)),
          exit => exit
              .attr('fill', 'red')
              .attr('opacity', 1)
              .call(exit => exit.transition(t)
                  .attr('y', margin + 20)
                  .attr('opacity', 0)
                  .remove())
      );
}

setInterval(draw, 800);

import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7/+esm';
const d3Data = document.querySelector('#d3-data');

var w = 400;
var h = 100;
var padding = 5;
var dataset = [5, 10, 14, 20, 25, 32];

// d3.select(d3Bar)
//     .append('svg')
//     .append('rect')
//         .attr('width', 50)
//         .attr('height', 200)
//         .style('fill', 'dodgerblue')
//         .style('border', '2px solid navy');

// d3.select(d3Text)
//     .append('svg')
//         .attr('width', 250)
//         .attr('height', 50)
//     .append('text')
//         .text('Easy Peasy!')
//         .attr('x', 5)
//         .attr('y', 25)
//         .style('fill', 'navy');

var svg = d3.select(d3Data)
    .append('svg')
        .attr('width', w)
        .attr('height', h);

svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
        .attr('x', (d, i) => i * (w / dataset.length))
        .attr('y', d => h - (d * 3))
        .attr('width', (w / dataset.length) - padding)
        .attr('height', d => d * 3)
        .style('fill', d => "rgb(0, 0, "+ (d * 10) + ")")
        .style('stroke', 'navy')
        .style('stroke-width', '2px');
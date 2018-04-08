import React from 'react';

class Curve {
  constructor (start, end) {
    this.start = start;
    this.end = end;
  };

  render (temp, snap) {
    let {start, end} = this;
    let color = 'black';
    let width = temp ? 1 : 2;

    let snapPoints = (
      <g>
        <circle cx={start.x} cy={start.y} r={0} data-snap={JSON.stringify({...start})} stroke={color} strokeWidth={width} vectorEffect='non-scaling-stroke' />
        <circle cx={end.x}   cy={end.y}   r={0} data-snap={JSON.stringify({...end})}   stroke={color} strokeWidth={width} vectorEffect='non-scaling-stroke' />
      </g>
    );

    return (
      <g>
        <line x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke={color} strokeWidth={width} vectorEffect='non-scaling-stroke' />
        {snap ? snapPoints : null}
      </g>
    );
  };
};

export default Curve;

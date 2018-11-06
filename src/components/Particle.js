import React from 'react';
import { useObservable } from '../hooks';
import { map } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

const mouse$ = fromEvent(document, 'mousemove').pipe(map(e => [e.clientX, e.clientY]));

function Particle ({ background, size }) {
  const [left, top] = useObservable(mouse$, [0, 0]);
  const style = {
    width: size,
    height: size,
    background,
    pointerEvents: 'none',
    borderRadius: size / 2,
    left: left - size / 2,
    top: top - size / 2,
    position: 'absolute',
    zIndex: 99999
  };
  return <div style={style}/>;
}

Particle.defaultProps = {
  background: 'red',
  size: 50
};

export default Particle;

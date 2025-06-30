
import * as THREE from 'three';

export function createRoundedBoxGeometry(
  width: number = 1,
  height: number = 1,
  depth: number = 1,
  radius: number = 0.1,
  smoothness: number = 4
) {
  const shape = new THREE.Shape();
  const eps = 0.00001;
  const radius0 = radius - eps;
  
  shape.absarc(eps, eps, eps, -Math.PI / 2, -Math.PI, true);
  shape.absarc(eps, height - radius * 2, eps, Math.PI, Math.PI / 2, true);
  shape.absarc(width - radius * 2, height - radius * 2, eps, Math.PI / 2, 0, true);
  shape.absarc(width - radius * 2, eps, eps, 0, -Math.PI / 2, true);

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: depth - radius0 * 2,
    bevelEnabled: true,
    bevelSegments: smoothness * 2,
    bevelSize: radius,
    bevelThickness: radius0,
    curveSegments: smoothness
  });

  geometry.center();
  return geometry;
}

mainCell.highlight.material.opacity = 0.5;
let textPos = camera.worldToLocal(mainCell.mesh.position.clone());
textPos.add(new THREE.Vector3(.8,.8,0));
textPos = camera.localToWorld(textPos)
bloodCellLabel.position.set(...textPos.toArray())
addIfNotInScene(bloodCellLabel)
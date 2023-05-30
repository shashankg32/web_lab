//Show how map is different from object to store key value pairs with coding example and prove Maps perform better than objects in most of the scenarios involving addition and removal of keys.                                 CO2, CO4

//start
function mapVsObject() {
  let map = new Map();
  let obj = {};

  let iterations = parseInt(prompt("Enter the number of iterations:"));

  // Measure time for Map
  let mapStart = performance.now();
  for (let i = 0; i < iterations; i++) {
    map.set("key" + i, "value" + i);
  }
  let mapEnd = performance.now();
  let mapTime = mapEnd - mapStart;

  // Measure time for Object
  let objStart = performance.now();
  for (let i = 0; i < iterations; i++) {
    obj["key" + i] = "value" + i;
  }
  let objEnd = performance.now();
  let objTime = objEnd - objStart;

  alert("Map Time: " + mapTime + "ms");
  alert("Object Time: " + objTime + "ms");

  alert("Map size: " + map.size);
  alert("Object keys: " + Object.keys(obj).length);

  // Remove keys from Map
  let removeIterations = parseInt(prompt("Enter the number of keys to remove from Map:"));
  let removeMapStart = performance.now();
  for (let i = 0; i < removeIterations; i++) {
    map.delete("key" + i);
  }
  let removeMapEnd = performance.now();
  let removeMapTime = removeMapEnd - removeMapStart;

  // Remove keys from Object
  let removeObjStart = performance.now();
  for (let i = 0; i < removeIterations; i++) {
    delete obj["key" + i];
  }
  let removeObjEnd = performance.now();
  let removeObjTime = removeObjEnd - removeObjStart;

  alert("Remove Map Time: " + removeMapTime + "ms");
  alert("Remove Object Time: " + removeObjTime + "ms");

  alert("Map size after removal: " + map.size);
  alert("Object keys after removal: " + Object.keys(obj).length);
}

mapVsObject();

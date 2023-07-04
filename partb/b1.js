function mapVsObject() {
  const n = parseInt(prompt("Enter the number of key-value pairs to store:"));
  const map = new Map();
  const obj = {};
  for (let i = 0; i < n; i++) {
    const key = `key${i}`;
    const value = `value${i}`;
    map.set(key, value);
    obj[key] = value;
  }
  const key = prompt("Enter the key to retrieve the value:");
  const start1 = performance.now();
  const value1 = map.get(key);
  const end1 = performance.now();
  const start2 = performance.now();
  const value2 = obj[key];
  const end2 = performance.now();
  alert(`Value retrieved from the Map: ${value1}\nTime taken: ${end1 - start1} ms`);
  alert(`Value retrieved from the Object: ${value2}\nTime taken: ${end2 - start2} ms`);
  const toRemove = parseInt(prompt("Enter the number of keys to remove:"));
  const keysToRemove = [];
  for (let i = 0; i < toRemove; i++) {
    const key = `key${Math.floor(Math.random() * n)}`;
    keysToRemove.push(key);
  }
  const start3 = performance.now();
  keysToRemove.forEach(key => map.delete(key));
  const end3 = performance.now();
  const start4 = performance.now();
  keysToRemove.forEach(key => delete obj[key]);
  const end4 = performance.now();
  alert(`Time taken to remove keys from the Map: ${end3 - start3} ms`);
  alert(`Time taken to remove keys from the Object: ${end4 - start4} ms`);
}

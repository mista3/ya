export const service = class {
  static async getDonut() {
    const res = await fetch(
      'http://localhost:3001/donut',
      {
        method: 'GET',
      })
    const json = await res.json()
    return JSON.stringify(json, undefined, 4);
  }
  static async getEarthquakes() {
    const res = await fetch(
      'http://localhost:3001/earthquakes',
      {
        method: 'GET',
      })
    const json = await res.json()
    return JSON.stringify(json, undefined, 4);
  }
}
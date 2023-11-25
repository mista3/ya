export const service = class {
  static async getLight() {
    const res = await fetch(
      'http://localhost:3001/light',
      {
        method: 'GET',
      })
    return res
  }
  static async getHeavy() {
    const res = await fetch(
      'http://localhost:3001/heavy',
      {
        method: 'GET',
      })
    return res
  }
}
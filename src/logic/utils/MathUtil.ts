export default class MathUtils {
    static roundToDecimals(num: number, decimals: number): number {
      const factor = Math.pow(10, decimals);
      return Math.round(num * factor) / factor;
    }
  }
  
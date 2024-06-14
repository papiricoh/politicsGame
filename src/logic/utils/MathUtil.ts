export default class MathUtils {
	static roundToDecimals(num: number, decimals: number): number {
		const factor = Math.pow(10, decimals);
		return Math.round(num * factor) / factor;
	}

	static getRandomInt(max: number): number {
        return Math.floor(Math.random() * max);
    }
	static roundToInt(num: number): number {
		return Number(num.toFixed());
	}
}
  
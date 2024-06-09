export default class TickManager {
    private intervalId: NodeJS.Timeout | null = null;
    private callbacks: (() => void)[] = [];
    private interval: number = 1000; // Default interval
  
    startTick(interval: number, tickFunction: () => void) {
      if (this.intervalId) {
        console.log("Tick system is already running.");
        return;
      }
  
      this.interval = interval;
      this.callbacks.push(tickFunction);
  
      this.intervalId = setInterval(() => {
        this.tick();
      }, this.interval);
      console.log(`Tick system started with an interval of ${interval}ms.`);
    }
  
    stopTick() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
        console.log("Tick system stopped.");
      }
    }
  
    private tick() {
      this.callbacks.forEach(callback => callback());
    }
  
    addTickCallback(callback: () => void) {
      this.callbacks.push(callback);
    }
  
    removeTickCallback(callback: () => void) {
      this.callbacks = this.callbacks.filter(cb => cb !== callback);
    }
  
    changeInterval(newInterval: number) {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = setInterval(() => {
          this.tick();
        }, newInterval);
        this.interval = newInterval;
        console.log(`Tick system interval changed to ${newInterval}ms.`);
      }
    }
  }
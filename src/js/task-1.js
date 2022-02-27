const daysRef = document.querySelector('#hour')
const hoursRef = document.querySelector('[data-value="hours"]')
const minsRef = document.querySelector('[data-value="mins"]')
const secsRef = document.querySelector('[data-value="secs"]')

class Timer{
  constructor({ selector, targetDate, intervalId = null }) {
    (this.selector = selector),
    (this.targetDate = targetDate),
    (this.intervalId = intervalId)
  }

  start() {
      this.updateTime(0)
      this.intervalId = setInterval(() => {
        const currentTime = Date.now()
        const deltaTime = this.targetDate - currentTime;
        this.updateTime(deltaTime)
      }, 1000);
    }
  
  stop() {
    clearInterval(this.intervalId)
    this.intervalId = null;
    this.updateTime(0);
  }
  
  updateTime(time){
  const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

  daysRef.textContent = `${days}`;
  hoursRef.textContent = `${hours}`;
  minsRef.textContent = `${mins}`;
  secsRef.textContent = `${secs}`
  }
  
  pad(value){
    return String(value).padStart(2, '0');
 }
}
const newTimer = new Timer({
  selector: '#timer-1',
  targetDate: new Date(2022, 0, 1, 0, 0, 0),
});

newTimer.start()
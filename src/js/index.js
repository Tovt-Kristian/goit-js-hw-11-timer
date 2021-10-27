const daysTimer = document.querySelector('[data-value="days"]');
const hoursTimer = document.querySelector('[data-value="hours"]');
const minsTimer = document.querySelector('[data-value="mins"]');
const secTimer = document.querySelector('[data-value="secs"]');


class Timer {
    constructor(finishDate, markup) {
        this.markup = markup;
        this.finishDate = finishDate;
        this.interval = null;
        this.deltaTime = 0;
    console.log('Финальная дата',this.finishDate);
    }
  
    start() {
        this.interval = setInterval(() => {
            let currentTime = Date.now();
            if(currentTime < this.finishDate) {
                this.deltaTime = this.finishDate - currentTime;

                const days = this.pad(Math.floor(this.deltaTime / (1000 * 60 * 60 * 24)));
                const hours = this.pad(Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
                const mins = this.pad(Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
                const sec = this.pad(Math.floor((this.deltaTime % (1000 * 60)) / 1000));

                this.insertValues(days, hours, mins, sec);
            }else {
                clearInterval(this.interval);
                daysTimer.textContent = '00';
                hoursTimer.textContent = '00';
                minsTimer.textContent = '00';
                secTimer.textContent = '00';
            };
        }, 1000)
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }
    
    insertValues(d, h, m, s) {
        const { daysTimer, hoursTimer, minsTimer, secTimer } = this.markup;
        daysTimer.textContent = d;
        hoursTimer.textContent = h;
        minsTimer.textContent = m;
        secTimer.textContent = s;
    }
}
const myTimer = new Timer(new Date('01 jan, 2022'), {
    daysTimer,
    hoursTimer,
    minsTimer,
    secTimer,
});

myTimer.start();


// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

// Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);
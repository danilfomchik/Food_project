function timer() {
    //timer 1st variant
    // const deadLine = '2022-05-20';

    // function getTimeRemaining(end) {
    //     const endTime = Date.parse(end) - Date.parse(new Date()),
    //         remainingDays = Math.floor(endTime / (1000 * 60 * 60 * 24)),
    //         remainingHours = Math.floor((endTime / (1000 * 60 * 60) % 24)),
    //         remainingMinutes = Math.floor((endTime / 1000 / 60) % 60),
    //         remainingSeconds = Math.floor((endTime / 1000) % 60)
    //     ;

    //     return {
    //         'total': endTime,
    //         'days': remainingDays,
    //         'hours': remainingHours,
    //         'minutes': remainingMinutes,
    //         'seconds': remainingSeconds
    //     }
    // }

    // function getZero(num) {
    //     if(num >= 0 && num < 10){
    //         return `0${num}`;
    //     } else {
    //         return num;
    //     }
    // }

    // function setClock(selector, endTime) {
    //     const timer = document.querySelector(selector),
    //         days = timer.querySelector('#days'),
    //         hours = timer.querySelector('#hours'),
    //         minutes = timer.querySelector('#minutes'),
    //         seconds = timer.querySelector('#seconds'),
    //         timeInterval = setInterval(updateClock, 1000)
    //     ;

    //     updateClock();

    //     function updateClock() {
    //         const curTime = getTimeRemaining(endTime);

    //         days.textContent = getZero(curTime.days);
    //         hours.textContent = getZero(curTime.hours);
    //         minutes.textContent = getZero(curTime.minutes);
    //         seconds.textContent = getZero(curTime.seconds);

    //         if(curTime.total <= 0){
    //             clearInterval(timeInterval);
    //         }
    //     }

        
    // }

    // setClock('.timer', deadLine);


    //timer 2nd variant
    let endDate = '2022-12-21';
    // let endDate = '2022-02-24';


    function getDate(deadline) {
        let endTime = 0;

        if(Date.parse(deadline) >= Date.parse(new Date())){
            endTime = Date.parse(deadline) - Date.parse(new Date());
        }

        const remainingDays = Math.floor(endTime / (1000 * 60 * 60 * 24)),
            remainingHours = Math.floor((endTime / (1000 * 60 * 60) % 24)),
            remainingMinutes = Math.floor((endTime / 1000 / 60) % 60),
            remainingSeconds = Math.floor((endTime / 1000) % 60)
        ;

        // console.log(Date.parse(deadline));
        // console.log(Date.parse(new Date()));


        return {
            endTime,
            remainingDays,
            remainingHours,
            remainingMinutes,
            remainingSeconds
        };
    }

    function showDate(selector, deadline) {
        let timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateTime, 1000)
        ;

        updateTime();

        function updateTime() {
            let {endTime, remainingDays, remainingHours, remainingMinutes, remainingSeconds} = getDate(deadline);

            // console.log(endTime, remainingDays, remainingHours, remainingMinutes, remainingSeconds);

            days.textContent = getZero(remainingDays);
            hours.textContent = getZero(remainingHours)
            minutes.textContent = getZero(remainingMinutes);
            seconds.textContent = getZero(remainingSeconds);

            if(endTime <= 0){
                clearInterval(timeInterval);
            }
        }
    }

    function getZero(number) {
        if(number >= 0 && number < 10){
            return `0${number}`
        }

        return number;
    }

    showDate('.timer', endDate);
}

module.exports = timer;
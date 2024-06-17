export const converter = {
    convertToHHMMSS: (ms: number) => {
        let hours, minutes, seconds, hoursStr, minutesStr, secondsStr

        hours = Math.round(ms! / 3600000)
        minutes = Math.round((ms! % 3600000) / 60000)
        seconds = Math.round((ms! % 60000) / 1000)

        if (hours < 10) {
            hoursStr = `0${hours}`
        } else {
            hoursStr = hours
        }
        if (minutes < 10) {
            minutesStr = `0${minutes}`
        } else {
            minutesStr = minutes
        }
        if (seconds < 10) {
            secondsStr = `0${seconds}`
        } else {
            secondsStr = seconds
        }

        return `${hoursStr}:${minutesStr}:${secondsStr}`

    }


}



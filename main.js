const $secondPointer = document.querySelector('.seconds')
const $minutePointer = document.querySelector('.minutes')
const $hoursPointer = document.querySelector('.hours')

function time () {
	const now = new Date()
	const p = document.querySelector('#hour')
	p.classList.add('hourJS')
	p.innerHTML = now
	const second = now.getSeconds()
	const secondDegrees = ((second / 60 ) * 360) + 90
	$secondPointer.style.transform = `rotate(${secondDegrees}deg)`

	const minutes = now.getMinutes()
	const minutesDegrees = ((minutes) / 60 * 360) + 90
	$minutePointer.style.transform = `rotate(${minutesDegrees}deg)`

	const hours = now.getHours()
	const hoursDegrees = ((hours) / 12 * 360) + 90
	$hoursPointer.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(time, 1000)
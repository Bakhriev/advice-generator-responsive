const advice = document.querySelector(".advice")
const button = document.querySelector(".btn")
const adviceNumber = document.querySelector(".advice-number")
let count = 0

const advicesList = [
	"Take time to know yourself.",
	"Show up fully.",
	"Don't make assumptions.",
	"Be patient and persistent.",
	"Be your best at all times.",
	"Don't try to impress everyone.",
	"A narrow focus brings big results."
]

window.addEventListener("load", () => {
	advice.innerHTML = advicesList[count]
	count += 1
})

const changeAdvance = data => {
	if (count === data.length) {
		count = 0
		advice.innerHTML = data[count]
		count += 1
		adviceNumber.innerHTML = `ADVICE #${count}`
	} else {
		advice.innerHTML = data[count]
		count += 1
		adviceNumber.innerHTML = `ADVICE #${count}`
	}
}

button.addEventListener("click", () => changeAdvance(advicesList))

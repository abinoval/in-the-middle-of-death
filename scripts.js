const elements = document.querySelectorAll("#content *")
const spans = document.querySelectorAll("#content span")
const brs = document.querySelectorAll("#content br")

const removeAttributes = (element) => {
	for (let i = 0; i < element.attributes.length; i++) {
		element.removeAttribute(element.attributes[i].name)
	}
}

elements.forEach((element) => {
	removeAttributes(element)
})

spans.forEach((span) => {
	span.remove()
})

brs.forEach((br) => {
	br.remove()
})

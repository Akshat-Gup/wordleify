let user_input = document.querySelector("body > div.input-group.mb-3 > input");
let button = document.querySelector("#button-addon2");
let whatsapp_box = document.querySelector(".whatsapp");
let discord_box = document.querySelector(".discord");
let general_box = document.querySelector(".general");
let whatsappcopy = document.querySelector(".whatsappcopy");
let discordcopy = document.querySelector(".discordcopy");
function wordleify(platform) {
	let text = user_input.value
	.split(" ")
	.map(word => {
		if(/\b\w{5}\b/.test(`${word}`)) {
			console.log("what");
			if (platform == "discord") {
				return ("**" + word + "**");
			}
			else if (platform == "whatsapp") {
				return ("*" + word + "*");
			}
			else {
				if (platform == "general") {
					return ("<b>" + word + "</b>");
				}
			}
		}
		else {
			console.log(word);
			return word;
		}
	})
	.join(" ");
	return text;
}

function copyElementToClipboard(element) {
	window.getSelection().removeAllRanges();
	let range = document.createRange();
	range.selectNode(typeof element === 'string' ? document.getElementById(element) : element);
	window.getSelection().addRange(range);
	document.execCommand('copy');
	window.getSelection().removeAllRanges();
}

user_input.addEventListener("keyup", () => {
	whatsapp_box.innerHTML = wordleify("whatsapp");
	discord_box.innerHTML = wordleify("discord");
	general_box.innerHTML = wordleify("general");
})

whatsappcopy.addEventListener("click", () => {
	navigator.clipboard.writeText(whatsapp_box.textContent);
});

discordcopy.addEventListener("click", () => {
	navigator.clipboard.writeText(discord_box.textContent);
})

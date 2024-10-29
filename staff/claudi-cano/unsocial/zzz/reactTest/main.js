let loggedInUser = null

const rootElement = document.getElementById("root")
const root = ReactDOM.createRoot(rootElement)

const title = React.createElement("h1", { style: { backgroundColor: "yellow" } }, "Pero bueno, ¿qué haces tu por este barrio, React?")

const button = React.createElement("button", { type: "button", onClick: () => alert("Clickeado ;)") }, "Clickeame plz :(")

const red = React.createElement("li", { style: { backgroundColor: "red" } }, "ROJO QUE TE COJO")
const green = React.createElement("li", { style: { backgroundColor: "green" } }, "SMOKE GREEN EVERYDAY")
const blue = React.createElement("li", { style: { backgroundColor: "blue" } }, "BLUE LABEL ES UN ELIXIIIR")
const list = React.createElement("ul", { style: { border: "1px solid black" } }, [red, green, blue])

const input = React.createElement("input", { type: "text", id: "whatever", className: "pepito", placeholder: "Whatever bruh!?" })
const submit = React.createElement("button", { type: "submit", }, "Dale sin miedo")
const form = React.createElement("form", {
    onSubmit: event => {
        event.preventDefault()

        console.log(event.target.whatever.value)
    }
}, [input, submit])

const link = React.createElement("a", {
    href: "",
    onClick: event => {
        event.preventDefault()

        console.log("link clicked")
    },
    style: {
        color: "magenta"
    }
}, "Clickeame plz :(")

function ReactiveEmoji(props) {
    const content = React.createElement("span", {
        onClick: () => alert(`${props.emoji} Jolines!`),
        style: {
            cursor: "pointer"
        }
    },
        props.emoji)

    const box = React.createElement("div", {
        style: {
            border: "2px solid black",
            display: "inline-block",
            padding: "3px"
        }
    },
        content)

    return box
}



const { Component } = React
class Thing extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const content = React.createElement("span", { style: { padding: "2px" } }, this.props.thing)

        return content
    }
}

const redThing = new Thing({ thing: "👫" })
const greenThing = new Thing({ thing: "🍀" })
const blueThing = new Thing({ thing: "🥃" })

root.render([
    title,
    button,
    list,
    redThing.render(),
    greenThing.render(),
    blueThing.render(),
    form,
    link,
    ReactiveEmoji({ emoji: "😊" }),
    ReactiveEmoji({ emoji: "❤️" }),
])
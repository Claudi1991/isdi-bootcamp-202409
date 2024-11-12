/**
 * Constructs Login instances
 */
class Login extends Compo {
    constructor() {
        super(document.createElement("section"))

        const title = new Heading("Login", 2)
        this.add(title)

        const form = new Form()
        this.add(form)

        form.add(new Label("Username", "username"))
        const usernameInput = new Input("text", "username")
        form.add(usernameInput)

        form.add(new Label("Password", "password"))
        const paswordInput = new PasswordInput("password")
        form.add(paswordInput)

        const submitButton = new Button("Login", "submit")
        form.add(submitButton)

        form.addBehavior("submit", event => {
            event.preventDefault()

            const username = usernameInput.getValue()
            const password = paswordInput.getValue()

            try {
                loggedInUser = authenticateUser(username, password)

                form.reset()

                this.removeSelf()

                home = new Home()

                page.add(home)
            } catch (error) {
                paswordInput.setValue("")

                alert(error.message)

                console.error(error)
            }
        })


        const registerLink = new Link("Register")
        this.add(registerLink)

        registerLink.addBehavior("click", event => {
            event.preventDefault()

            this.removeSelf()

            const register = new Register()

            page.add(register)
        })
    }
}
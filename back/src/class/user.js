class User {

    static #list = []

    constructor({ email, password }) {
        this.email = email
        this.password = password
    }

    static create(data) {
        const user = new User(data)

        // console.log(user)

        this.#list.push(user)

        // console.log(this.#list)
    }

    static getByEmail(email) {
        return (
            this.#list.find((user) => user.email === email) || null
        )
    }

    static userList = this.#list
}

module.exports = {
    User,
}
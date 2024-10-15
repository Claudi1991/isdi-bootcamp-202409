Function.prototype.extends = function (form) {
    this.prototype = Object.create(form.prototype)
    this.prototype.constructor = this
}
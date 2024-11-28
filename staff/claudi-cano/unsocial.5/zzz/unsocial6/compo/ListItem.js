/**
 * Contructs ListItems instances
 */
function ListItem() {
    Compo.call(this, document.createElement("li"))
}

ListItem.extends(Compo)
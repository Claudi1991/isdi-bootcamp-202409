/**
 * Constructs UnorderedList intances
 */
function UnorderedList() {
    Compo.call(this, document.createElement("ul"))
}

UnorderedList.extends(Compo)
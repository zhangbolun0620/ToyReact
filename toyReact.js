class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type);
    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }
    appendChild(vchild) {
        vchild.mountTo(this.root);
    }
    mountTo(parent) {
        parent.appendChild(this.root);
    }

}

class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content);
    }
    mountTo(parent) {
        parent.appendChild(this.root);
    }

}

export class Component {
    constructor() {
        this.children = [];
    }

    setAttribute(name, value) {
        this[name] = value;
    }
    appendChild(vchild) {
        this.children.push(vchild);
    }
    mountTo(parent) {
        let vdom = this.render();
        vdom.mountTo(parent);
    }
}


export let toyReact = {
    createElement(type, attributes, ...children) {

        //console.log(attributes);

        let element;
        if (typeof type === 'string')
            element = new ElementWrapper(type);
        else 
            element = new type;

        // let element = document.createElement(type);
        for(let name in attributes) {
            // element[name] = attributes[name] wrong
            element.setAttribute(name, attributes[name]);
        }

        let insertChild = (children) => {
            for (let child of children) {

                if (typeof child === 'object' && child instanceof Array) {
                    insertChild(child);
                } else {
                    if (!(child instanceof Component)
                        && !(child instanceof ElementWrapper)
                        && !(child instanceof TextWrapper))
                        child = String(child);
                    if (typeof child == 'string')
                        child = new TextWrapper(child);
                    element.appendChild(child);
                }
                
            }
        }


        insertChild(children);

        return element;
    },
    render(vdom, element) {
        vdom.mountTo(element);
    }
}
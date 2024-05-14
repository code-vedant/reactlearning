function customRender(reactElement , container){
//     const domelem = document.createElement(reactElement.type)
//     domelem.innerHTML = reactElement.children
//     domelem.setAttribute('href', reactElement.props.href)
//     domelem.setAttribute('target', reactElement.props.target)

//     container.appendChild(domelem)
// }

const domelem = document.createElement(reactElement.type)
domelem.innerHTML = reactElement.children
for (const prop in reactElement.props) {
    if (prop === reactElement.children) continue;
    domelem.setAttribute(prop, reactElement.props[prop])

}
container.appendChild(domelem)
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    chilren: 'Click me to visit google'
}

const root = document.querySelector('#root')

customRender(reactElement, root)
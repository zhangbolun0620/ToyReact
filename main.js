import {toyReact,Component} from './toyReact.js';

class MyComponent extends Component{
    render() {
        return <div>
            <span>Hello</span>
            <span>World</span>
            <span>!</span>
            {true}
            {this.children}
        </div>
    }
}


let a = <MyComponent  name="b" id="idb">
    <div>123123</div>
</MyComponent>

toyReact.render(
    a,
    document.body
)



/*let b = <div name="b" id="idb">
        <span>Hello</span>
        <span>World</span>
        <span>!</span>
    </div>

document.body.appendChild(b);*/
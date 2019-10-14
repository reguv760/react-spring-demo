import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops';

export class Component2 extends Component {
    render() {
        return (
            <Spring
                from={{ opacity: 0, }}
                to={{ opacity: 1 }}
                config={{ delay:1000, duration: 1000 }}
            >
                { props => (
                    <div style={props}>                    
                        <div style={c2Style}>
                            <h1>Component 1</h1>
                            <p>loremNulla enim aliquip velit nostrud ut eu. Nisi ipsum do anim eu enim ad aliquip velit pariatur culpa. Sint esse dolor aliqua voluptate minim deserunt ipsum.

                Non esse proident aute Lorem do. Aliquip cillum aliqua Lorem velit officia Lorem nostrud deserunt ea. Nisi velit voluptate sit fugiat amet aliqua velit pariatur sunt in. Dolor labore irure aute ea sint consectetur sit exercitation aliquip pariatur fugiat. Non amet culpa eu eu ex qui dolor cillum culpa id esse voluptate dolor aute. Est consectetur nulla consectetur incididunt anim laboris exercitation incididunt qui cillum culpa eu. Nisi reprehenderit occaecat ex elit voluptate incididunt minim fugiat deserunt proident dolore.</p>

                        <button style={btn} onClick={this.props.toggle} >Toggle Component 3</button>
                        </div>
                    </div>
                )}
            </Spring>
        )
    }
}

export default Component2



const c2Style = {
    background: 'slateblue',
    color: 'white',
    padding: '1.5rem'
}

const btn = 
{
    background: "#333",
    color: '#fff',
    padding: '1rem 2rem',
    border: 'none',
    textTransform: 'uppercase',
    margin: '15px 0',
    cursor: 'pointer'
}
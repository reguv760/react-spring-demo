import React from 'react'
import { Spring } from 'react-spring/renderprops';

export default function Component1() {
    return (
        <Spring
            from={{ opacity: 0, marginTop: -500 }}
            to={{ opacity: 1, marginTop:0 }}
        >
            { props => (
                <div style={props}>                    
                    <div style={c1Style}>
                        <h1>Component 1</h1>
                        <p>loremNulla enim aliquip velit nostrud ut eu. Nisi ipsum do anim eu enim ad aliquip velit pariatur culpa. Sint esse dolor aliqua voluptate minim deserunt ipsum.

                        Non esse proident aute Lorem do. Aliquip cillum aliqua Lorem velit officia Lorem nostrud deserunt ea. Nisi velit voluptate sit fugiat amet aliqua velit pariatur sunt in. Dolor labore irure aute ea sint consectetur sit exercitation aliquip pariatur fugiat. Non amet culpa eu eu ex qui dolor cillum culpa id esse voluptate dolor aute. Est consectetur nulla consectetur incididunt anim laboris exercitation incididunt qui cillum culpa eu. Nisi reprehenderit occaecat ex elit voluptate incididunt minim fugiat deserunt proident dolore.</p>

                        <Spring
                            from={{ number: 0 }}
                            to={{ number: 10 }}
                            config={{duration: 10000}}
                        >
                            { props => (

                                <div style={props}>
                                    <h1 style={counter}>
                                        {props.number.toFixed()}
                                    </h1>
                                </div>
                            )}
                        </Spring>
                    </div>
                </div>
            )}
        </Spring>
    )
}

const c1Style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}

const counter = {
    background:'#333',
    textAlign: 'center',
    width: '100px',
    borderRadius: '100px',
    margin: '1rem auto'
}
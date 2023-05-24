import React, { Component } from 'react'
import ChildComponent from './childComponent'

export default class PropsClass extends Component {
    state={
        name:"sathish",
        showtitle:"About"
    }

    changeTitle =(title)=>{
        this.setState({showtitle:title})
    }

  render() {
    
        return (
            <>
              <h2>Almaty, Kazakhstan</h2>
              <ChildComponent title="About" showtitle={this.state.showtitle} changeTitle={this.changeTitle}>
                With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
              </ChildComponent>
              <ChildComponent title="Etymology" showtitle={this.state.showtitle} changeTitle={this.changeTitle}>
                The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
              </ChildComponent>
              <ChildComponent title="test" showtitle={this.state.showtitle} changeTitle={this.changeTitle}>
                The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
              </ChildComponent>
            </>
          );
    
  }
}

import React, { Component } from 'react'

export default class ChildComponent extends Component {
    state={
        isActive:false
    }
    // getdata =()=>{
    //     const {title,children}=this.props;
    //     if(this.state.isActive){
    //         return(
    //             <>
    //             <p>{children}</p>
    //             <button onClick={() => this.setState({isActive: false})}>
    //                 Hide
    //               </button>
    //               </>  
    //         )
    //     }else{
    //         return(

    //         <button onClick={() => this.setState({isActive: true})}>
    //         Show
    //       </button>
    //     )
    //     }


    getdata =()=>{
        const {title,children,showtitle}=this.props;
        if(title==showtitle){
            return(
                <>
                <p>{children}</p>
                  </>  
            )
        }else{
            return(

            <button onClick={() => this.props.changeTitle(title)}>
            Show
          </button>
        )
        }
    }
  render() {
    console.log(this.props,"props")
    const {title,children}=this.props;
    return (
        <section className="panel">
        <h3>{title}</h3>
        {/* <p>{children}</p> */}
        {this.getdata()}
        {/* {this.state.isActive 
        ? (
            <>
          <p>{children}</p>
          <button onClick={() => this.setState({isActive: false})}>
              Hide
            </button>
            </>
        )
        : (
          <button onClick={() => this.setState({isActive: true})}>
            Show
          </button>
        )
        }  */}
      </section>
    )
  }
}

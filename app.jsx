import React from "react";
export default class App extends React.Component{
    state = {
        x:0 
    }

pluscount = () => {
    this.setState({x:this.state.x +1})
};
miuscount = () => {
    if(this.state.x > 0){this.setState({x:this.state.x - 1})}
    else{this.state.x = 0}
};
resetcount = () => {
    this.setState({x:this.state.x = 0})
};
render() {
    return(
        <div className="App border flex justify-center py-32 border-black">
        <div className="main py-10  lg:w-80 md:w-80 sm:w-80w-80 h-78 rounded-xl bg-tranparent hover:text-black border border-black">
        
        <div className=" flex-col items-center py-3 mt-2 flex justify-center">
        <h1 className="lg:text-4xl md:text-4xl sm:text-3xl text-2xl  text-white font-mono">counter:</h1>
        <h1 className="lg:text-4xl md:text-4xl sm:text-3xl text-2xl text-white  font-mono">{this.state.x}</h1>
        </div>
        
        <div className="mt-20  flex justify-evenly">
        <button className="border border-black hover:bg-gray-800 py-2 px-6 rounded text-white" onClick={this.pluscount}>Add</button>
        <button className="border border-black hover:bg-gray-800 py-2 px-6 rounded text-white" onClick={this.miuscount}>Remove</button>
        <button className="border border-black hover:bg-gray-800 py-2 px-6 rounded text-white" onClick={this.resetcount}>Reset</button>
        </div>
        
        </div>
      </div>
    )
};
}

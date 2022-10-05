import React, { Component } from "react";
// import { MdUpdate } from "react-icons/md";
// import { MdDelete } from "react-icons/md";
// import { MdEdit } from "react-icons/md";
// import { ImArrowDown } from "react-icons/im";
// import { ImArrowUp } from "react-icons/im";
import { FaBeer } from 'react-icons/fa';


export default class App extends Component {
  state = {
    inp_val: "",
    to_do_list: [],
    swap: 0,
    indexHandle: "",
  };
  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({ inp_val: e.target.value });
  };
  handleClick = () => {
    this.setState({
      to_do_list: [...this.state.to_do_list, this.state.inp_val],
    });
    this.setState({ inp_val: "" });
  };
  handleDel = (i) => {
    const newarr = this.state.to_do_list;
    newarr.splice(i, 1);
    this.setState({ to_do_list: newarr });
  };
  handleUp = (a) => {
    if (a == 0) {
      alert("already at top");
    } else {
      var temp = this.state.to_do_list[a];
      this.state.to_do_list[a] = this.state.to_do_list[a - 1];
      this.state.to_do_list[a - 1] = temp;
      this.setState({ ...this.state.to_do_list });
    }
  };
  handleDown = (e) => {
    if (e == this.state.to_do_list.length - 1) {
      alert("already at end");
    } else {
      var temp = this.state.to_do_list[e];
      this.state.to_do_list[e] = this.state.to_do_list[e + 1];
      this.state.to_do_list[e + 1] = temp;
      this.setState({ ...this.state.to_do_list });
    }
  };
  handleEdit = (ele, i) => {
    this.setState({ inp_val: ele });
    this.setState({ swap: 1 });
    this.setState({ indexHandle: i });
  };
  handleUpdate = () => {
    console.log(this.state.indexHandle, "index new edit for");
    this.state.to_do_list[this.state.indexHandle] = this.state.inp_val;
    this.setState({ ...this.state.to_do_list });
    this.setState({ inp_val: "" });
    this.setState({ swap: 0 });
  };

  render() {
    return (
      <>
        <div className="bg-gradient-to-r from-orange-700 xs to-slate-800 h-screen w-full flex justify-center items-center">
          <div className=" h-[80%] xs:w-[85%] sm:w-[70%] xs:h-[90%] rounded-br-[100px] rounded-tl-[100px] bg-slate-900">
            <div className="w-full flex justify-center  py-10 mt-5 ">
              <button className=" text-white text-3xl font-bold font-serif border w-fit py-3 px-8 rounded-xl hover:rounded-3xl  hover:scale-105 duration-1000 ">
                Todo - List
              </button>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="flex justify-evenly">
                <input
                  className=" sm:w-[70%] xs:w-[60%] xs:text-lg bg-black outline-none rounded-md border shadow-2xl hover:scale-100  duration-1000 border-gray-700 xs text-gray-700 xs text-2xl px-4"
                  onChange={this.handleChange}
                  value={this.state.inp_val}
                  placeholder="Enter a todo"
                />

                {this.state.swap == 0 && (
                  <button
                    className="text-white py-3 xs:px-5 xs:py-2 px-8 border 
              rounded-md hover:scale-105 duration-1000 bg-gradient-to-r from-orange-700 xs to-slate-800 "
                    onClick={this.handleClick}
                  >
                    Add
                  </button>
                )}
                {this.state.swap == 1 && (
                  <button
                    className="text-white py-3 xs:px-5 xs:py-2 px-8 border rounded-md 
                hover:scale-105 duration-1000 bg-gradient-to-r from-orange-700 to-slate-800  "
                    onClick={this.handleUpdate}
                  >
                    Update
                  </button>
                )}
              </div>
              {this.state.to_do_list.map((ele, i) => {
                return (
                  <div className="flex justify-evenly">
                    {/* main div for result */}
                    <div className="w-[95%] xs:text-lg flex justify-between bg-black py-2 outline-none rounded-md border shadow-2xl  text-white border-gray-700  text-2xl xs:px-2 px-4 capitalize ">
                      <h1>{ele}</h1>
                      {/* div for icons */}

                      <div className="flex xs:w-28 sm:w-40 justify-between items-center ">
                        {/* checked icon */}

                        <div className="border">
                          <MdDelete
                            className="text-red-700 xs:h-5 xs:w-5 hover:cursor-pointer sm:h-7 sm:w-8 "
                            onClick={() => {
                              this.handleDel(i);
                            }}
                          />
                        </div>
                        <div className="border">
                          <MdEdit
                            className="text-green-700 xs:h-5 xs:w-5 hover:cursor-pointer sm:h-7 sm:w-8 "
                            onClick={() => {
                              this.handleEdit(ele, i);
                            }}
                          />
                        </div>
                        <div className="border">
                          <ImArrowDown
                            className="text-red-600 xs:h-5 xs:w-5 hover:cursor-pointer sm:h-7 sm:w-8 "
                            onClick={() => {
                              this.handleDown(i);
                            }}
                          />
                        </div>
                        <div className="border">
                          <ImArrowUp
                            className="text-green-700 xs:h-5 xs:w-5 hover:cursor-pointer sm:h-7 sm:w-8 "
                            onClick={() => {
                              this.handleUp(i);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

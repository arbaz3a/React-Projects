import { useEffect, useState } from "react";
import { Getlocalstorage, Setlocalstorage } from "./components/localstorage";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function App() {
  const [todoslist, settodoslist] = useState(() => Getlocalstorage()); //todoslist is an array object
  const [showcheck, setshowcheck] = useState(false);
  const [todocontainer, settodoContainer] = useState("");

  // localstorage
  useEffect(() => {
    Setlocalstorage(todoslist);
  }, [todoslist]);

  //show finished checkbox
  const showFinished = (e) => {
    setshowcheck(e.target.checked); //set showcheck flase true during checkbox selection
  };

  // delete function
  const deletebtn = (indexOfItem) => {
    let newtodoslist = todoslist.filter((_, index) => { // filter(new array) array by removing single object using its index from todoslist 
      return index !== indexOfItem;
    });
    settodoslist(newtodoslist); // update todoslist object array state
  };

  // checkboxmark function
  let checkboxmark = (indexOfItem) => {
    let newtodoslist = todoslist.map((element, index) => { // generate new array using map and set flag with the help of index matching note: element is an object from todoslist to perform operation
      return index === indexOfItem
        ? { ...element, flag: !element.flag }
        : element;
    });
    settodoslist(newtodoslist); // update state
  };

  // edit function
  function editbtn(indexOfItem) {
    let getobject = todoslist[indexOfItem]; // get object from index
    settodoContainer(getobject.todocontainer); // get text value to insert into input bar for edit
    let newtodoslist = todoslist.filter((_, index) => { //filter array again for removing edit todocontainer
      return index !== indexOfItem;
    });
    settodoslist(newtodoslist); //update state
  }

  // save button function
  let savebtn = () => {
    const val = todocontainer.trim(); // remove starts / ends space
    if (val === "") return; // empty avoidation
    const duplicateFind = todoslist.some((obj)=>{ // redundancy check
      return obj.todocontainer.toLowerCase() === val.toLowerCase();
    }) 
    if(duplicateFind) return;
    settodoslist([...todoslist, { todocontainer: val, flag: false }]); // using spread operator (combine old list data + new list data)
    settodoContainer(""); //after adding todocontainer set input value empty 
  };

  return (
    <>
      <div className="flex items-center justify-center mt-16">
        <div className="bg-emerald-300 rounded-xl w-[400px] h-[50vh] p-4  overflow-auto">
          {/* upper main heading */}
          <div className="mb-3 mt-2.5 text-center">
            <h2 className="text-lg font-semibold">Add Your Tasks</h2>
          </div>
          {/* upper main heading ends here */}

          {/* input bar and save button addition part */}
          <div className="w-full flex flex-row">
            <input
              onChange={(e) => {
                settodoContainer(e.target.value);
              }}
              value={todocontainer}
              className="flex-1 bg-white outline-none py-[1px] px-[5px] text-black rounded-md"
              type="text"
              placeholder="Enter your task"
            />
            <button
              onClick={savebtn}
              className="bg-blue-700 rounded-xl ml-2 text-sm font-medium text-white px-[7px] py-[3px] cursor-pointer hover:bg-blue-500"
            >
              Save
            </button>
          </div>
          {/* input bar and save button addition part ends here */}

          {/* show finished section and line bar */}
          <div className="mt-2">
            <input
              onChange={showFinished}
              checked={showcheck}
              type="checkbox"
            />
            <label htmlFor="" className="text-sm mx-2">
              Show Finished
            </label>
          </div>
          <div className="bg-lime-950 h-[1px] w-[90%] mt-2 mx-auto opacity-20"></div>
          {/* show finished section and line bar ends here*/}

          {/* todo list header */}
          <div className="mt-2.5 mb-2">
            <p>Todo List</p>
          </div>
          {/* todo list header ends here*/}

          {/* todo lists addition section */}
          {todoslist.map((singleItem, indexOfItem) => {
            return (
              (showcheck ? singleItem.flag : !singleItem.flag) && (
                <div
                  key={indexOfItem}
                  className="w-full flex justify-between mb-2"
                >
                  <div className="flex gap-5">
                    <input
                      checked={singleItem.flag}
                      onChange={() => {
                        checkboxmark(indexOfItem);
                      }}
                      type="checkbox"
                    />
                    <div className={singleItem.flag ? "line-through" : ""}>
                      {singleItem.todocontainer}
                    </div>
                  </div>
                  <div className="flex">
                    <button
                      onClick={() => {
                        editbtn(indexOfItem);
                      }}
                      className="bg-blue-700 hover:bg-blue-500 cursor-pointer px-2 py-1 text-sm font-medium mx-1 text-white rounded-md"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => {
                        deletebtn(indexOfItem);
                      }}
                      className="bg-blue-700 hover:bg-blue-500 cursor-pointer px-2 py-1 text-sm font-medium mx-1 text-white rounded-md"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              )
            );
          })}
          {/* todo lists addition section ends here*/}
        </div>
      </div>
    </>
  );
}

export default App;

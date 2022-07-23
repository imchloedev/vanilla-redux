import { createStore } from "redux";
// store는 state 를 저장하는 공간

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const reducer = (count = 0, action) => {
  console.log(count, action);
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  };
};

// reducer는 data를 modify 한다.
// reducer 함수가 return 하는 것은 application에 있는 data(=current state)이다.

const store = createStore(reducer);

add.addEventListener("click", () => {
  store.dispatch({ type: ADD });
});

minus.addEventListener("click", () => {
  store.dispatch({ type: MINUS });
});

//Subscribe - store의 변화를 인식함

const onChange = () => {
  console.log("store Changed");
  console.log(store.getState());
  number.innerText = store.getState();
};

store.subscribe(onChange);

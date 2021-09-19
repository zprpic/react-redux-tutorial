const redux = require("redux");
const { createStore, combineReducers } = redux;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  return {
    type: BUY_CAKE,
    description: "first redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    description: "second redux action",
  };
}

// (prevState, action) => newState

/* const initialState = {
  numberOfCakes: 10,
  numberofIceCreams: 20,
}; */

const initialCakeState = {
  numberOfCakes: 10,
};
const initialIceCreamState = {
  numberofIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberofIceCreams: state.numberofIceCreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);
console.log("Initial state:", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();

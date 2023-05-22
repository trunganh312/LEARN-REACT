console.log(window.Redux);

const { createStore } = window.Redux;

const initialState = ["code"];
const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-HOBBY":
      {
        const newHobby = [...state, action.payload];
        return newHobby;
      }

      break;

    default:
      return state;
      break;
  }
};

const store = createStore(hobbyReducer);

// Render UI
function renderHobbyList(hobbyList = []) {
  const html = hobbyList.map((hobby) => {
    return `<li>${hobby}</li>`;
  });

  document.getElementById("hobby-list").innerHTML = html.join("");
}

const initialHobbyList = store.getState();
renderHobbyList(initialHobbyList);

document.getElementById("hobby-form").onsubmit = (e) => {
  e.preventDefault();
  const action = {
    type: "ADD-HOBBY",
    payload: document.getElementById("hobby-text").value,
  };

  store.dispatch(action);
  document.getElementById("hobby-form").reset();
};

store.subscribe(() => {
  const newHobbyList = store.getState();
  renderHobbyList(newHobbyList);
});

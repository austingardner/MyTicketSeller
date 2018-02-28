import { BUY_SEATS, SELECT_SEATS, DESELECT_SEATS, SELECT_MULTIPLE_SEATS, DESELECT_ALL } from '../actions/index';


export default function(state = init_seats(), action) {


  switch(action.type){
    case BUY_SEATS:
      return buy_seats(action.payload, state);
    case SELECT_SEATS:
      return select_seats(action.payload, state);
    case DESELECT_SEATS:
      return de_select_seats(action.payload, state);
    case SELECT_MULTIPLE_SEATS:
      return select_multiple_seats(action.payload, state);
    case DESELECT_ALL:
      return de_select_all(state);
    default:
      return state;
  }

  // return state;
}

const init_seats = () => {
  let outer = []
  for(let i = 0; i < 10; i++)
  {
    let inner = []
    for(let j = 0; j< 15; j++)
    {
      inner[j] = 0
    }
    outer[i] = inner
  }
  return {
    seats: outer,
    selected: []
  }
}

const select_seats = (stc, state) => {
  return {
    ...state,
    seats: state.seats.map((item, i) => {
      const items = item.map((a_seat, j) => {
        if(i === stc[0] && j === stc[1]) {
          return a_seat = 1;
        }
        else return a_seat;
      })
      return items;
    }),
    selected: [...state.selected, stc]
  };
}

const de_select_seats = (stc, state) => {
  console.log("in reducer de-select seats")
  console.log("index",stc)
  return {
    ...state,
    seats: state.seats.map((item, i) => {
      const items = item.map((a_seat, j) => {
        if(i === stc[0] && j === stc[1]) {
          return a_seat = 0;
        }
        else return a_seat;
      })
      return items;
    }),
    selected: state.selected.filter(e => (e[0] !== stc[0] || e[1] !== stc[1]))
  };
}

const de_select_all = (state) => {
  return {
    ...state,
    seats: state.seats.map((item, i) => {
      const items = item.map((a_seat, j) => {
        if(a_seat === 1) {
          return a_seat = 0;
        }
        else return a_seat;
      })
      return items;
    }),
    selected: []
  };
}

//stc == seats to change, a 2d array with each inner array being essentially a tuple of purchased seats
const buy_seats = (stc, state) => {
  console.log("in reducer buy seats")
  return {
    ...state,
    seats: state.seats.map((item, i) => {
      const items = item.map((a_seat, j) => {
        if(a_seat === 1) {
          return a_seat = 2;
        }
        else return a_seat;
      })
      return items;
    }),
    selected: []
  };
}

const select_multiple_seats = (seat_list, state) => {
  console.log("in reducer select_multiple_seats")
  return {
    ...state,
    seats: state.seats.map((item, i) => {
      const items = item.map((a_seat, j) => {
        if(determine_in_list(seat_list, i, j)) {
          return a_seat = 1;
        }
        else return a_seat;
      })
      return items;
    }),
    selected: [...state.selected, seat_list]
  };
}

const determine_in_list = (seat_list, x, y) => {

  for(let i = 0; i < seat_list.length; i++)
  {
    if(seat_list[i][0] === x && seat_list[i][1] === y)
    {
      return true;
    }
  }
  return false;
}

//could've used a library here called Numjs to initialize the array,
//but function was simple enough

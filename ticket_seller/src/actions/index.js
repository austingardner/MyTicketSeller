export const BUY_SEATS = 'BUY_SEATS';
export const SELECT_SEATS = 'SELECT_SEATS';
export const DESELECT_SEATS = 'DESELECT_SEATS';
export const SELECT_MULTIPLE_SEATS = 'SELECT_MULTIPLE_SEATS';
export const DESELECT_ALL = 'DESELECT_ALL';
//seat_list is 2d array-- a list of seat indexes [[i,j], [k,l], ...]
export function buySeats(seat_list) {
  return {
    type: BUY_SEATS,
    payload: seat_list
  };
}

export function deSelectAll() {
  return {
    type: DESELECT_ALL
  };
}

export function selectSeats(seat_list) {
  console.log("in action select seats")
  console.log("seat_list in select seats",seat_list)
  return {
    type: SELECT_SEATS,
    payload: seat_list
  };
}

export function deSelectSeats(seat_list) {
  return {
    type: DESELECT_SEATS,
    payload: seat_list
  };
}

export function selectMultipleSeats(seat_list) {
  console.log("returning from action selectMultipleSeats")
  return {
    type: SELECT_MULTIPLE_SEATS,
    payload: seat_list
  };
}

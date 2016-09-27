export default function todosReducer(state=[],action){
  switch ( action.type ) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'DELETE_TODO':
      debugger
      return [...state]
    default:
      return state;
  }
}

const inicialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];

const todoReducer = ( state = inicialState, action = {}) => {
    if(action.type === '[TODO] add todo' ) {
        return [...state, action.payLoad ]
    }
    
    return state;
}


let todos = todoReducer();
//esto no se debe hacer porque muta el objeto inicial
// todos.push({
//     id:2,
//     todo:'Comprar pan de trigo',
//     done: false,
// })

const newTodo = {
    id:2,
    todo: 'Recolectar la piedra del poder',
    done: false,
}

const addTodoAction = {
    type: '[TODO] add todo',
    payLoad: newTodo,
}


todos = todoReducer(todos, addTodoAction)

console.log({state: todos});
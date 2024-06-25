
import axios from 'axios';
import { useQuery } from '@tanstack/react-query'

type Todo = {
    id: number;
    title: string;
    userid: number;
    completed: boolean
}
const useTodos =() =>{

    const fetchTodos = () => 
        axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
        //fetch('https://xjsonplaceholder.typicode.com/todos')
        .then(res=>res.data);

    return useQuery< Todo[], Error>( {
        queryKey: [ 'todos'],
        queryFn: fetchTodos,
        staleTime: 10*1000, //10s
    });
    
}

export default useTodos;
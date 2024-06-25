
import axios from 'axios';
import { useQuery } from '@tanstack/react-query'

export type Post = {
    id: number;
    title: string;
    body: string;
    userId: number
   
}
const usePosts =() =>{
   
    return useQuery< Post[], Error>( {
        queryKey: [ 'posts'],
        queryFn: ()=> axios
            .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
             .then(res=>res.data),
        staleTime: 10*1000, //10s
    });
    
}

export default usePosts;
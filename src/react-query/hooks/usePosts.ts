
import axios from 'axios';
import { useQuery } from '@tanstack/react-query'

export type Post = {
    id: number;
    title: string;
    body: string;
    userId: number
}

export type PostQuery ={
    page: number;
    pageSize: number
}
const usePosts =( query : PostQuery) =>{
   
    return useQuery< Post[], Error>( {
        queryKey:  ['posts', query],
        queryFn: ()=> axios
            .get<Post[]>('https://jsonplaceholder.typicode.com/posts', 
            {params:
                 {
                    _start: (query.page -1) * query.pageSize,
                    _limit: query.pageSize
                }
            })
             .then(res=>res.data),
        staleTime: 10*1000, //10s
    });
    
}

export default usePosts;
import React from 'react';

const API_KEY = '63a9f65c88545948f68c49c1b83f8a31'
const API_URL_Base = 'https://api.themoviedb.org/3';
/*
-originais da netflix
- recomendados
- em alta
- ação
- comedia
- terror
- romance
-documentarios
*/
export default {
    getHomeList: async()=>{
        return[
            {
                slug: 'originals',
                title: 'Originais do Netflix'
            }
        ]
    }
    
}
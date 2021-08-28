
import React from 'react'
import Tmdb from './Tmdb';
import Header from './Header'
import Destaque from './Destaque'
import MovieRow from './componentes/MovieRow';
import './App.css'
import FeaturedMovie from './componentes/FeaturedMovie';


export default () => {

  const [movieList,setMovieList] = React.useState([]);
  const [featureData, setFeatureData] = React.useState([])

  React.useEffect(()=>{
    const loadAll = async ()=>{
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      //pegando a feature
      let originals = list.filter(i=>i)
      
    }
    loadAll();
  },[movieList])
  return(
    <div className="page">
      {featureData && 
      <FeaturedMovie/>
      }
      <Header></Header>
      <Destaque></Destaque>
      <section className="lists">
      {movieList.map((item,key)=>(
        <MovieRow key={key} title={item.title} items={item.items}/>
      ))}</section>
    </div>
  )
};

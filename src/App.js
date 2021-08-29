
import React from 'react'
import Tmdb from './Tmdb';
import Header from './componentes/Header'

import MovieRow from './componentes/MovieRow';
import './App.css'
import FeaturedMovie from './componentes/FeaturedMovie';
import Loading from './img/netflix-loading.gif'



export default () => {

  const [movieList,setMovieList] = React.useState([]);
  const [featureData, setFeatureData] = React.useState()
  const [blackHeader, setBlackHeader] = React.useState(false);

  React.useEffect(()=>{
    const loadAll = async ()=>{
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      //pegando a feature
      let originals = list.filter(i=>i.slug ==='originals');
      let randomChosen = Math.floor(Math.random()*(originals[0].items.results.length-1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id,'tv');
      setFeatureData(chosenInfo)
    }
    loadAll();
  },[])

  React.useEffect(()=>{
    const scrollListener = ()=>{
      if(window.scrollY>20){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }

    }
    window.addEventListener(('scroll'), scrollListener);
    return () =>{
      window.removeEventListener('scroll',scrollListener);
    }

  },[])

  return(
    <div className="page">
      <Header black={blackHeader}/>
      {featureData && 
      <FeaturedMovie item={featureData}/>
      }
      <section className="lists">
      {movieList.map((item,key)=>(
        <MovieRow key={key} title={item.title} items={item.items}/>
      ))}</section>
      <footer>
        Feito com <span role="img" aria-label="coração">💜</span> na B7Web
        <br/>Direitos de imagem para Netflix
        <br/>Dados pegos do site Themoviedb.org
      </footer>
      {movieList == 0 &&
        <div className="loading">
          <img src={Loading} alt="Carregando"/>
        </div>
      }
    </div>
  )
};

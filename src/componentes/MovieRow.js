import React from 'react'
import './MovieRow.css'
import NaviBe from '@material-ui/icons/NavigateBefore';
import NaviNe from '@material-ui/icons/NavigateNext';

export default ({title,items})=>{
    const[scrollX,setScrollX] = React.useState(0);
    const handleLeftArrow = ()=>{
        let x = scrollX + Math.round(window.innerWidth/2);
        if(x>=0){
            x=0;
        }
        setScrollX(x)
    }

    const handleRightArrow = ()=>{
        let x = scrollX - Math.round(window.innerWidth/2);
        if(Math.abs(x)>(items.results.length*150-window.screen.width)){
            x=-1*(items.results.length*150-window.screen.width+60);
        }
        setScrollX(x)
    }
    return(
        <div className="movieRow"> 
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NaviBe style={{fontSize:'60px'}} className="naviBe"/>
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NaviNe style={{fontSize:'60px'}} className="naviNe"/>
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{marginLeft:scrollX, width:items.results.length*150}}>
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}
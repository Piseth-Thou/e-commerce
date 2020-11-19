import React from 'react';
import { Card } from 'antd';
import './app.css';
import { Link } from 'react-router-dom';

const pStyle ={
    position:'relative',
    backgroundColor:'black',
    fontSize:'10px',
    width:'40%',
    color:'white',
    textAlign:'center',
    float:'right',
    borderRadius:'9%',
    margin:'6px 4px 0 0'
}
const linkStyle={
    textAlign:'center',
    fontSize:'12px',
    color:'black'
}

function Cards(prop) {
    // console.log(useRouteMatch());
    // const { url } = useRouteMatch();
    // const splitted = url.split("/");
    // splitted.splice(splitted.length - 1, 1);
    
    // const path = splitted.join("/");
    // console.log("path", path);
    const {id ,dis,img ,name,ram,title,price,proDel}=prop;
        return(
            <div className="cards">
                <Card
                    cover={
                        <>
                            <p style={pStyle}>{dis}</p>
                            <img
                                alt="example"
                                src={img} 
                            />
                        </>
                    } 
                >
                <Link to={`/product/${id}`}>
                    <p className="Link" style={linkStyle}>
                        {name}<br/>{ram}
                    </p>
                </Link>
                <div style={{textAlign:'center'}}>
                    <span style={{fontSize:'10px'}}>{title}</span> <br/>
                    <span style={{color:'blue'}}>{price}</span><br/>
                    <span style={{fontSize:'10px'}}><del>{proDel}</del></span>
                </div>
                
                </Card>
            </div>
            )
}
export default Cards;
import React from 'react';
import '../app.css';
import {Col, Row} from 'antd';
import Cards from '../card';
import { List,  Divider } from 'antd';
import Media from 'react-media';
import {dataSource} from '../fakeApi/data';
const data = [
    'Samsung',
    'Apple',
    'Micromax',
    'Karbonn',
    
];

export default function CateMobile (){
    const x = dataSource.slice(12,18);
return(
        <Media query={{maxWidth:540}}>
            {matches =>
                matches ?(
                    <Row>
                        <Col sm={24} xs={24}>
                            <div className="category">
                                    <li>Microsoft</li>
                                    <li>Samsung</li>
                                    <li>Apple</li>
                                    <li>Micromax</li>
                                    <li>Karbonn</li>
                                    <li>Intex</li>
                                    <li>Sony</li>
                                    <li>HTC</li>
                                    <li>Asus</li>                           
                            </div>
                        </Col>
                        <Col sm={24} xs={24} style={{overflow:'hidden',margin:'10px 0'}}>
                            <div style={{height:'150px',overflow:'hidden'}}>
                                <img
                                    style={{position:'absolute',height:'800px'}} 
                                    src="https://uniksa.pl/img/p/5/0/50-large_default.jpg"
                                    alt=".." 
                                />
                                <div style={{position:'relative',margin:'10px 0 0 20px'}}>
                                    <h6>iPhone 12 Pro <br/>Geat 360 + Gear VR</h6>
                                    <p>Redefine what a phone can do</p>
                                    <h5>$1200.00</h5>
                                </div>
                            </div>
                        </Col>
                        <Col sm={24} xs={24}>
                            <Row gutter={[16,16]}>
                                {x.map((value) => {
                                    const {id,name , ram ,title ,price , proDel,img ,dis} = value;
                                        return(
                                            <Col sm={24} xs={24} className="mb-2">
                                                <Cards 
                                                    id={id}
                                                    name={name}
                                                    ram ={ram} 
                                                    title={title}
                                                    price={price}
                                                    proDel={proDel}
                                                    img={img}
                                                    dis={dis}
                                                />
                                            </Col>
                                        )
                                    }
                                )}
                            </Row>
                        </Col>
                    </Row>
                ):(
                <div style={{backgroundColor:'white',padding:'2px'}}>
                    <Row>
                        <Col lg={6} md={6} sm={24} xs={24}>
                        <Divider orientation="left" style={{fontSize:'14px'}}>Top Categories</Divider>
                        <List
                            style={{fontSize:'12px',cursor:'pointer'}}
                            size="small"
                            header={<div>Microsoft</div>}
                            footer={<div>More....</div>}
                            bordered
                            dataSource={data}
                            renderItem={item => <List.Item>{item}</List.Item>}
                        />
                        </Col>
                        <Col lg={6} md={6} sm={24} xs={24} style={{overflow:'hidden'}}>
                            <img 
                                style={{position:'absolute',height:"469px"}} 
                                src="https://uniksa.pl/img/p/5/0/50-large_default.jpg" 
                                alt=".." 
                            />
                            <div style={{color:'black',position:'relative',margin:'335px 0 0 20px'}}>
                                <h6>IPhone 12 Pro<br/>Geat 360 + Gear VR</h6>
                                <p>Redefine what a phone can do</p>
                                <h5>$1200.00</h5>
                            </div>
                        </Col>
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <Row>
                                {x.map((value) => {
                                        const {id,name , ram ,title ,price , proDel,img ,dis} = value;
                                            return(
                                                <Col lg={8} md={8} sm={24} xs={24}>
                                                    <Cards 
                                                        id={id}
                                                        name={name}
                                                        ram ={ram} 
                                                        title={title}
                                                        price={price}
                                                        proDel={proDel}
                                                        img={img}
                                                        dis={dis}
                                                    />
                                                </Col>
                                            )
                                        }
                                    )}
                            </Row>
                        </Col>
                    </Row>
                </div>
                )
            }
        </Media>
    )
};


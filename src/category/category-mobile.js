import React from 'react';
import '../app.css';
import {Col, Row} from 'antd';
import Cards from '../card';
import { List,  Divider } from 'antd';
import Media from 'react-media';
import { dataSource } from '../fakeApi/data';
const data = [
    'Samsung',
    'Apple',
    'Micromax',
    'Karbonn',
    'Intex',
    'Sony',
    'HTC',
    'Asus'
];

function CateMobile (){
    const a = dataSource.slice(6,12);
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
                                <img style={{position:'absolute',height:'800px'}} src="https://www.tablety.pl/wp-content/uploads/2016/12/samsung-galaxy-s7-edge-black-pearl.jpeg" alt=".." />
                                <div style={{position:'relative',margin:'10px 0 0 20px'}}>
                                    <h6>Samsung Galaxy s7 Edge +<br/>Geat 360 + Gear VR</h6>
                                    <p>Redefine what a phone can do</p>
                                    <h5>$799.00</h5>
                                </div>
                            </div>
                        </Col>
                        <Col sm={24} xs={24}>
                            <Row gutter={[16,16]}>
                                
    {/*  Tip 1 to Loop Data  */}

                                {dataSource.map((value ,i ) => {
                                    const {name , ram ,title ,price , proDel,img ,dis,id} = value;
                                        return (i > 5 && i <12)&& (
                                            <Col sm={24} xs={24} className="mb-2">
                                                <Cards 
                                                    name={name}
                                                    ram ={ram} 
                                                    title={title}
                                                    price={price}
                                                    proDel={proDel}
                                                    img={img}
                                                    dis={dis}
                                                    id={id}
                                                />
                                            </Col>
                                        )
                                    // }
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
                            footer={<div>All Brands</div>}
                            bordered
                            dataSource={data}
                            renderItem={item => <List.Item>{item}</List.Item>}
                        />
                        </Col>
                        <Col lg={6} md={6} sm={24} xs={24} style={{overflow:'hidden'}}>
                            <img style={{position:'absolute',height:"469px"}} src="https://www.tablety.pl/wp-content/uploads/2016/12/samsung-galaxy-s7-edge-black-pearl.jpeg" alt=".." />
                            <div style={{position:'relative',margin:'335px 0 0 20px'}}>
                                <h6 style={{color:'rgb(247, 250, 247 ,0.7)'}}>Samsung Galaxy s7 Edge +<br/>Geat 360 + Gear VR</h6>
                                <p style={{color:'rgb(247, 250, 247 ,0.5)'}}>Redefine what a phone can do</p>
                                <h5 style={{color:'rgb(247, 250, 247)'}}>$799.00</h5>
                            </div>
                        </Col>
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <Row>

            {/* Tip 2 to Loop Data */}

                                {a.map((value) => {
                                        const {id,name , ram ,title ,price , proDel,img ,dis} = value;                                        
                                            return  (
                                                <Col lg={8} md={8} sm={24} xs={24}>
                                                    <Cards 
                                                        name={name}
                                                        ram ={ram} 
                                                        title={title}
                                                        price={price}
                                                        proDel={proDel}
                                                        img={img}
                                                        dis={dis}
                                                        id={id}
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
}
export default CateMobile;

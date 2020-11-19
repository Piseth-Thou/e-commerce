import React from 'react';
import {Container} from 'reactstrap';
import {Col, Row} from 'antd';
import { Button ,Input } from 'antd';
import './app.css';
import {UserOutlined,DownSquareOutlined,CarFilled,TwitterCircleFilled ,InstagramFilled,ChromeFilled ,FacebookFilled,GooglePlusCircleFilled} from '@ant-design/icons';
import Slide from './slide';
import Cards from './card';
import CateMobile from './category/category-mobile';
import CateTrend from './category/category-trending';
import {dataSource} from './fakeApi/data';


function Home (){
    const x =dataSource.slice(0,6);
    return(
        <> 
            <Slide/>
            <Container>
                <Row style={{marginTop:'10px'}}>
                    <Col span={12} >
                        <span style={{fontSize:'15px',color:'black',fontWeight:'500'}}>Exclusive promotions</span> <span style={{fontSize:'12px'}}>from 25 September 2016 - 1 January 2017</span>
                    </Col>
                    <Col span={12}>
                        <Button type="primary" style={{float:'right',fontSize:'10px'}}>Show All</Button>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={12} sm={24} xs={24} className="Left-content">
                        <Row>
                            <Col lg={14} md={14} sm={14} xs={14}>
                                <p><span style={{fontSize:'25px',color:'white'}} >iPone SE</span><br/><br/>
                                from <span style={{fontSize:'20px',color:'white'}}>$299.00</span><br/>
                                A big step for small.<br/>
                                A beloved design. Now with more to love.
                                </p><br/>
                                <Button>View More</Button>  
                            </Col>
                            <Col lg={10} md={10} sm={10} xs={10}>
                                <img src="https://www.iclick.ae/wp-content/uploads/2016/11/iphonese-gray-select-2016.png" height="200px" alt="#"/>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={12} md={12} sm={24} xs={24} className="Right-content">
                        <Row>
                            <Col lg={12} md={12} sm={24} xs={24} className="item1">
                                <img src="https://crunchybagel.com/content/images/2017/09/watch-utility-1.png" alt="#"/>
                                <div className="text1">
                                    <p>Apple Watch</p>
                                    <p style={{fontSize:'11px'}}>from $299.00 <br/>
                                    You. At a glance.</p>
                                    <Button type="dashed" style={{marginTop:'5px',fontSize:'11px',borderRadius:'5%'}}>View More</Button>
                                </div>                    
                            </Col>
                            <Col lg={12} md={12} sm={24} xs={24} className="item2">
                                <img src="https://techieavenue.com/wp-content/uploads/2015/10/mac-accessories-pdp-201510.png" alt="#"/>
                                <div className="text2">
                                    <p>Apple Accessories</p>
                                    <p style={{fontSize:'11px'}}>from $99.00 <br/>
                                    Redesigned. Rechargeable. Remarkable.</p>
                                    <Button type="dashed" style={{marginTop:'5px',fontSize:'11px',borderRadius:'5%'}}>View More</Button>
                                </div>  
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12} sm={24} xs={24} className="item3">
                                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/og-mac-mini-facebook?wid=600&hei=315&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1539742474001" width="100%" height="183px" alt="#"/>
                                <div className="text3">
                                    <p>Mac Mini</p>
                                    <p style={{fontSize:'11px'}}>from $199.00 <br/>
                                    It’s mini in a massive way.</p>
                                    <Button type="dashed" style={{marginTop:'1px',fontSize:'11px',borderRadius:'5%'}}>View More</Button>
                                </div>  
                            </Col>
                            <Col lg={12} md={12} sm={24} xs={24} className="item4">
                                <img src="https://s.yimg.com/uu/api/res/1.2/LNRXXKurQ6cAqjzS7NQXHw--~B/aD05MDA7dz0xNjAwO2FwcGlkPXl0YWNoeW9u/https://o.aolcdn.com/hss/storage/midas/faf0cb70b368a62017d6cb6eab39eb8d/204599047/macbookpro.JPG" width="100%" alt="#"/>
                                <div className="text4">
                                    <p>Mac Pro</p>
                                    <p style={{fontSize:'11px'}}>from $1,299.00 <br/>
                                    Built for creativity on an epic scale.</p>
                                    <Button type="dashed" style={{margin:'1px 0 2px 0',fontSize:'11px',borderRadius:'5%'}}>View More</Button>
                                </div>                    
                            </Col>                   
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className="mid-content">
                <Container>
                    <Row style={{margin:'20px 0'}} >
                        <Col>
                        <span style={{fontSize:'15px',color:'black',fontWeight:'500'}}>Trending Items</span> <span style={{fontSize:'12px'}}>Shop and get your favourite items at amazing prices !</span>
                        </Col>
                    </Row>
                    <Row gutter={[16,16]}>
                        {x.map((value) => {
                            const {name , ram ,title ,price , proDel,img ,dis,id} = value;
                                return(
                                    <Col lg={4} md={4} sm={24} xs={24} className="mb-2">
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
                    <Row style={{margin:'20px 0'}} >
                        <Col>
                            <span style={{fontSize:'15px',color:'black',fontWeight:'500'}}>Mobile Phones</span> <span style={{fontSize:'12px'}}>Shop and get your favourite items at amazing prices !</span>
                        </Col>
                    </Row>
                    <CateMobile/>
                    <Row style={{margin:'20px 0'}} >
                        <Col>
                        <span style={{fontSize:'15px',color:'black',fontWeight:'500'}}>Trending Items</span> <span style={{fontSize:'12px'}}>Shop and get your favourite items at amazing prices !</span>
                        </Col>
                    </Row>
                    <CateTrend/>
                </Container>
            </div>
            <div className="buttom-content" style={{padding:'30px 0'}}>
                <Container>
                    <Row>
                        <Col lg={8} md={8} sm={24} xs={24}>
                            <Row gutter={[16,16]}>
                                <Col>
                                    <CarFilled style={{fontSize:'30px'}}/>
                                </Col>
                                <Col>
                                    <h6>Free Delivery Over $100</h6>
                                    <p style={{fontSize:'10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={8} md={8} sm={24} xs={24}>
                            <Row gutter={[16,16]}>
                                <Col>
                                    <DownSquareOutlined style={{fontSize:'30px'}}/>
                                </Col>
                                <Col>
                                    <h6>1 Year Warranty For Phones</h6>
                                    <p style={{fontSize:'10px'}}>
                                        Cras laoreet urna id dui malesuada gravida.Duis a lobortis dui.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={8} md={8} sm={24} xs={24}>
                            <Row gutter={[16,16]}>
                                <Col>
                                    <UserOutlined style={{fontSize:'30px'}}/>
                                </Col>
                                <Col>
                                    <h6>6 Month Warranty For Accessories</h6>
                                    <p style={{fontSize:'10px'}}>
                                        Fusce ut euismod orci. Morbi auctor, sapien non eleifend iaculis.
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{backgroundColor:'#cac9c9',padding:'30px 0'}}>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={24} xs={24}>
                            <h6>LET'S STAY IN TOUCH</h6>
                            <p style={{fontSize:'10px'}}>
                            Get updates on sales specials and more
                            </p>    
                        </Col>
                        <Col lg={6} md={6} sm={24} xs={24}>
                            <Input placeholder="Enter Your Email !" style={{width:'70%',border:'solid 1px white' }}></Input>
                            <Button type="submit" style={{border:'solid 1px white'}}> > </Button>
                        </Col>
                        <Col lg={6} md={6} sm={24} xs={24} >
                            <h6>FOLLOW US</h6>
                            <p style={{fontSize:'10px'}}>
                            We want to hear from you!
                            </p>    
                        </Col >
                        <Col lg={6} md={6} sm={24} xs={24}> 
                            <div className="icon">
                                <ul>
                                    <li><FacebookFilled style={{fontSize:'20px'}}/></li>
                                    <li><TwitterCircleFilled style={{fontSize:'20px'}}/></li>
                                    <li><InstagramFilled style={{fontSize:'20px'}}/></li>
                                    <li><ChromeFilled style={{fontSize:'20px'}}/></li>
                                    <li><GooglePlusCircleFilled style={{fontSize:'20px'}}/> </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>    
        </>
    )
}
export default Home;
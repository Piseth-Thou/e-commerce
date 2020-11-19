import React from 'react';
import './style.css';
import {Container, Input} from 'reactstrap';
import {Col,Row} from 'antd';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Media from 'react-media';
import {dataSource} from '../fakeApi/data';
import Cards from '../card';

function NewArrival (){
    const x =dataSource.slice(0,12);
    return(
        <>
            <div className="proName">
                Apple Product
            </div>
            <div className="content">
                <Media query="(max-width: 812px)" 
                        render={() =>
                            (
                                <Container>
                                    <Row>
                                        <div className="top-right mb-1" >
                                            We found 65 Items for "Apple Product"<br/>
                                            <span>
                                                <li><b>Sort by:</b></li>
                                                <li>Popular</li>
                                                <li>New Arrival</li>
                                                <li>Discount</li>
                                                <li>Price</li>
                                            </span>
                                        </div>
                                        <Row>
                                            {x.map((value) =>{
                                                const {name , ram ,title ,price , proDel,img ,dis,id} = value;
                                                return(
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
                                            })}
                                        </Row>
                                        <Col span={24}>
                                            <div className="left">
                                                <h6>Filter By</h6><hr/>
                                                <p>keywords</p>
                                                <Input placeholder="Enter keywords"></Input>
                                                <br/>
                                                <p>Price ($) </p>
                                                <div className="price">
                                                    <Input type="number" className="form-control input-sm" placeholder="Price From" />
                                                    <p style={{margin:'0 10px'}}>to</p>
                                                    <Input type="number" className="form-control input-sm" placeholder="Top Price" />
                                                </div><br/>
                                                <Button>
                                                    <SearchOutlined style={{fontSize:'20px'}}/>
                                                    Search
                                                </Button>
                                                <br/><br/>
                                                <p>Categories</p><hr/>
                                                <div className="sub-category">
                                                    <li>iPhone<span className="pull-right">(10)</span> </li><hr/>
                                                    <li>Mac <span className="pull-right">(15)</span> </li><hr/>
                                                    <li>iPad <span className="pull-right">(32)</span> </li><hr/>
                                                    <li>Watch  <span className="pull-right">(4)</span> </li><hr/>
                                                    <li>TV <span className="pull-right">(6)</span> </li><hr/>
                                                    <li>Accessories <span className="pull-right">(38)</span> </li>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            )}
                    />
                <Media query="(min-width: 812px)" 
                        render={() =>
                            (
                                <Container>
                                    <Row gutter={[16,16]}>
                                        <Col lg={6} md={6}>
                                            <div className="left">
                                                <h6>Filter By</h6><hr/>
                                                <p>keywords</p>
                                                <Input placeholder="Enter keywords"></Input>
                                                <br/>
                                                <p>Price ($) </p>
                                                <div className="price">
                                                    <Input type="number" className="form-control input-sm" placeholder="Price From" />
                                                    <p style={{margin:'0 10px'}}>to</p>
                                                    <Input type="number" className="form-control input-sm" placeholder="Top Price" />
                                                </div><br/>
                                                <Button>
                                                    <SearchOutlined style={{fontSize:'20px'}}/>
                                                    Search
                                                </Button>
                                                <br/><br/>
                                                <p>Categories</p><hr/>
                                                <div className="sub-category">
                                                    <li>iPhone<span className="pull-right">(10)</span> </li><hr/>
                                                    <li>Mac <span className="pull-right">(15)</span> </li><hr/>
                                                    <li>iPad <span className="pull-right">(32)</span> </li><hr/>
                                                    <li>Watch  <span className="pull-right">(4)</span> </li><hr/>
                                                    <li>TV <span className="pull-right">(6)</span> </li><hr/>
                                                    <li>Accessories <span className="pull-right">(38)</span> </li>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={18} md={18}>
                                            <div className="top-right">
                                                We found 65 Items for "Apple Product"
                                                <span className="pull-right" style={{display:'flex'}}>
                                                    <b>Sort by:</b>
                                                    <li>Popular</li>
                                                    <li>New Arrival</li>
                                                    <li>Discount</li>
                                                    <li>Price</li>
                                                </span>
                                            </div>
                                            <div className="bottom-right">
                                                <Row>
                                                    {x.map((value) =>{
                                                        const {name , ram ,title ,price , proDel,img ,dis,id} = value;
                                                        return(
                                                            <Col span={6} className="mb-2">
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
                                                    })}
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            )}
                    />
            </div>
        </>
    )
}
export default NewArrival;
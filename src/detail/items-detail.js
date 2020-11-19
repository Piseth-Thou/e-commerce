import React from 'react';
import { Container } from 'reactstrap';
import {Row,Col } from 'antd';
import './style.css';
import Tab from './tabs';
import {useRouteMatch} from 'react-router-dom';
import {dataSource} from '../fakeApi/data';
import { SideBySideMagnifier } from 'react-image-magnifiers';
import {FacebookFilled,TwitterSquareFilled,GooglePlusSquareFilled,WhatsAppOutlined,LinkedinFilled} from '@ant-design/icons';

function ItemDetail() {
    
    const [getDetail, setGetDetail] = React.useState(null);
    const [previewImage, setPreviewImage] = React.useState("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png")
    const match = useRouteMatch();
    const id = Number(match.params.id);
    React.useEffect(() => {
        const matched = dataSource.find((value) => value.id === id);
				setGetDetail(matched)
				setPreviewImage(matched.img)
                window.scrollTo({top: 0, behavior: 'smooth'});
    }, [id])
    return(
        <>
        <div className="items_detail">
                <Container>
                <p>Home / Mobile Phone / Apple / {getDetail && getDetail.name}</p>
                {getDetail != null && (
                    <div className="content-top">
                        <Row>
                            <Col lg={2} md={2} sm={24} xs={24} style={{borderRight:'1px solid #c0c7ce',padding:'10px' }}>
                                <div className="left">
                                    <li onClick={() => setPreviewImage(getDetail.img)}>
                                        <img alt="." src={getDetail.img} />
                                    </li>
                                        {getDetail.subImages && getDetail.subImages.map((value) => {
                                            return (
                                                <li onClick={() => setPreviewImage(value)}>
                                                        <img alt="." src={value} />
                                                </li>
                                            )
                                        })}
                                </div>
                            </Col>
                            <Col lg={10} md={10} sm={24} xs={24} style={{borderRight:'1px solid #c0c7ce',padding:'40px 50px' }}>
                                <SideBySideMagnifier
                                    fillAlignTop={false}
                                    fillAvailableSpace={false}
                                        imageSrc={previewImage}
                                        imageAlt="Example"
                                        fullSpae
                                />
                            </Col>
                            <Col lg={12} md={12} sm={24} xs={24} style={{padding:'40px 50px' }}>
                                <div className="right">
                                    <div className="discount">{getDetail.dis}</div>
                                    <p><span style={{fontSize:'15px'}}>{getDetail.name}- #89270182</span>
                                    <br/><span style={{cursor:'pointer'}}>iPhone / mobile phone / electronics / lifestye</span></p>
                                    <hr/>
                                    <p>1 Year Local Manufacturer Warrants 
                                        <span style={{float:'right'}}>Availability: In stock</span>
                                    </p>
                                    <hr/>
                                    <ul>
                                        <li>5.5" Retina HD Display with 3D Touch</li>
                                        <li>Fingerprint-resistant oleophobic coating</li>
                                        <li>A9 chip with 64-bit</li>
                                        <li>Ultrafast 4G LTE Advanced wireless</li>
                                        <li>New 12-megapixel iSight camera</li>
                                        <li>4k video recording</li>
                                        <li>iOS 9 with Touch ID and Apple Pay</li>
                                    </ul>
                                    <hr/>
                                    <FacebookFilled style={{color:'#0D44EE'}}/>
                                    <TwitterSquareFilled style={{color:'#0DE7EE'}}/>
                                    <GooglePlusSquareFilled style={{color:'#BD502D'}}/>
                                    <WhatsAppOutlined style={{color:'#32DA14'}}/>
                                    <LinkedinFilled style={{color:'#24BD8A'}}/>
                                    <hr/>
                                    <div style={{float:'right',cursor:'pointer',color:"white",padding:'5px 10px',backgroundColor:'#20A076'}}>ADD TO CART</div>
                                    <del>{getDetail.proDel}</del>
                                    <h6>{getDetail.price}</h6>
                                </div>
                            </Col>
                        </Row>
                    </div>
                )}
                    <br/>
                    <Tab />
                </Container>
            </div>
        </>
    )
}
export default ItemDetail;
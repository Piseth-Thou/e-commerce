import React from 'react';
import { Tabs } from 'antd';
import './style.css';
import { Row ,Col} from 'antd';
import Card  from '../card';
import {dataSource} from '../fakeApi/data';

const { TabPane } = Tabs;

function callback(key) {
console.log(key);
}
function Tab (){
    const x =dataSource.slice(6,12);
    return(
    <>
        <div className="tab">
            <Tabs defaultActiveKey="1" centered onChange={callback}>
                    <TabPane tab="Product Description" key="1">
                        <div className="pro-dis">
                            <Row gutter={[16,16]}>
                                <Col lg={12} md={12}>
                                    <img alt="." 
                                        src="https://static.toiimg.com/img/48892204/Master.jpg"
                                        height="200px"
                                        width="100%"
                                    /> 
                                </Col>
                                <Col lg={12} md={12}>
                                    <h6>iPhone 6s</h6>
                                    <p>The moment you use iPhone 6s, you know you’ve never felt anything like it. With a single press, 3D Touch lets you do more than ever before. Live Photos bring your memories to life in a powerfully vivid way. And that’s just the beginning. Take a deeper look at iPhone 6s, and you’ll find innovation on every level.</p>
                                </Col>
                            </Row><hr/>
                            <Row gutter={[16,16]}>
                                <Col lg={12} md={12}>
                                    <h6>3D Touch</h6>
                                    <p>The original iPhone introduced the world to Multi-Touch, forever changing the way people experience technology. With 3D Touch, you can do things that were never possible before. It senses how deeply you press the display, letting you do all kinds of essential things more quickly and simply. And it gives you real-time feedback in the form of subtle taps from the all-new Taptic Engine.</p>
                                </Col>
                                <Col lg={12} md={12}>
                                    <img alt="." 
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhS-wzDWtgGiIPYa_MaWhfASkpoMN1oeTjRA&usqp=CAU"
                                        height="200px"
                                        width="100%"
                                    /> 
                                </Col>
                            </Row><hr/>
                            <Row gutter={[16,16]}>
                                <Col lg={12} md={12}>
                                    <img alt="." 
                                        src="https://cdn.macrumors.com/article-new/2014/09/iphone_6_camera.png"
                                        height="200px"
                                        width="100%"
                                    /> 
                                </Col>
                                <Col lg={12} md={12}>
                                    <h6>Cameras</h6>
                                    <p>The 12-megapixel iSight camera captures sharp, detailed photos. It takes brilliant 4K video, up to four times the resolution of 1080p HD video. iPhone 6s also takes selfies worthy of a self-portrait with the new 5-megapixel FaceTime HD camera. And it introduces Live Photos, a new way to relive your favorite memories. It captures the moments just before and after your picture and sets it in motion with just the press of a finger.</p>
                                </Col>
                            </Row><hr/>
                            <Row gutter={[16,16]}>
                                <Col lg={12} md={12}>
                                    <h6>Technology</h6>
                                    <p>iPhone 6s is powered by the custom-designed 64-bit A9 chip. It delivers performance once found only in desktop computers. You’ll experience up to 70 percent faster CPU performance, and up to 90 percent faster GPU performance for all your favorite graphics-intensive games and apps.</p>
                                </Col>
                                <Col lg={12} md={12}>
                                    <img alt="." 
                                        src="https://i5.walmartimages.com/asr/9489de55-3955-4372-b9ba-4d05b31a6f8a_1.a34514135fa2146671bbdafb11146454.jpeg"
                                        height="300px"
                                        width="100%"
                                    /> 
                                </Col>
                            </Row><hr/>
                            <Row gutter={[16,16]}>
                                <Col lg={12} md={12}>
                                    <img alt="." 
                                        src="https://media.idownloadblog.com/wp-content/uploads/2014/09/iPhone-6-and-iPhone-6-Plus.png"
                                        height="200px"
                                        width="100%"
                                    /> 
                                </Col>
                                <Col lg={12} md={12}>
                                    <h6>Design</h6>
                                    <p>Innovation isn’t always obvious to the eye, but look a little closer at iPhone 6s and you’ll find it’s been fundamentally improved. The enclosure is made from a new alloy of 7000 Series aluminum — the same grade used in the aerospace industry. The cover glass is the strongest, most durable glass used in any smartphone. And a new rose gold finish joins space gray, silver, and gold.</p>
                                </Col>
                            </Row>
                        </div>
                    </TabPane>
                    <TabPane tab="Addition Information" key="2">
                        <div className="add-info">
                            <Row>
                                <Col span={8}>
                                    
                                </Col>
                                <Col span={8}>
                                    <h6>iPhone 6s</h6>
                                </Col>
                                <Col span={8}>
                                    <h6>iPhone 6s Plus</h6>
                                </Col>
                            </Row>                            
                            <Row style={{borderTop:'solid 1px  #c0c7ce',backgroundColor:'#f2f3f4',padding:'10px 20px'}}>
                                <Col span={8}>
                                    <div className="title">Capacity</div>
                                </Col>
                                <Col span={8}>
                                    <li>16G</li>
                                    <li>64G</li>
                                    <li>128G</li>
                                </Col>
                                <Col span={8}>
                                    <li>16G</li>
                                    <li>64G</li>
                                    <li>128G</li>
                                </Col>
                            </Row>
                            <Row style={{borderTop:'solid 1px  #c0c7ce',padding:'10px 20px'}}>
                                <Col span={8}>
                                    <div className="title">Weight and Dimensions</div>
                                </Col>
                                <Col span={8}>
                                    5.44 inches (138.3 mm) x 2.64 inches (67.1 mm) x<br/>
                                    0.28 inch (7.1 mm)<br/>
                                    Weight: 5.04 ounces (143 grams)
                                </Col>
                                <Col span={8}>
                                    6.23 inches (158.2 mm) x 3.07 inches (77.9mm)<br/>
                                    x 0.29 inch (7.3 mm)<br/>
                                    Weight: 6.77 ounces (192 grams)
                                </Col>
                            </Row>
                            <Row style={{borderTop:'solid 1px  #c0c7ce',backgroundColor:'#f2f3f4',padding:'10px 20px'}}>
                                <Col span={8}>
                                    <div className="title">Display</div>
                                </Col>
                                <Col span={8}>
                                    Retina HD display with 3D Touch<br/>
                                    4.7-inch (diagonal) LED-backlit widescreen<br/>
                                    1334-by-750-pixel resolution at 326 ppi<br/>
                                    1400:1 contrast ratio (typical)
                                    <br/><br/>
                                    <strong>Both models:</strong><br/>
                                    500 cd/m2 max brightness (typical)<br/>
                                    Full sRGB standard<br/>
                                    Dual-domain pixels for wide viewing angles<br/>
                                    Fingerprint-resistant oleophobic coating on front<br/>
                                    Support for display of multiple languages and characters simultaneously<br/>
                                    Display Zoom<br/>
                                    Reachability
                                </Col>
                                <Col span={8}>
                                    6.23 inches (158.2 mm) x 3.07 inches <br/>
                                    (77.9 mm) x 0.29 inch (7.3 mm)<br/>
                                    Weight: 6.77 ounces (192 grams)
                                </Col>
                            </Row>
                            <Row style={{borderTop:'solid 1px  #c0c7ce',padding:'10px 20px'}}>
                                <Col span={8}>
                                    <div className="title">Chip</div>
                                </Col>
                                <Col span={16}>
                                    A9 chip with 64-bit architecture Embedded M9 motion coprocessor
                                </Col>
                            </Row>
                            <Row style={{borderTop:'solid 1px  #c0c7ce',backgroundColor:'#f2f3f4',padding:'10px 20px'}}>
                                <Col span={8}>
                                    <div className="title">iSight Camera</div>
                                </Col>
                                <Col span={8}>
                                    New 12-megapixel iSight camera with 1.22µ pixels<br/>
                                    Live Photos<br/>
                                    Autofocus with Focus Pixels<br/>
                                    Optical image stabilization (iPhone 6s Plus only)<br/>
                                    True Tone flash<br/>
                                    Panorama (up to 63 megapixels)<br/>
                                    Auto HDR for photos<br/>
                                    Exposure control<br/>
                                    Burst mode<br/>
                                    Timer mode<br/>
                                    ƒ/2.2 aperture<br/>
                                    Five-element lens<br/>
                                    Hybrid IR filter<br/>
                                    Backside illumination sensor<br/>
                                    Sapphire crystal lens cover<br/>
                                    Auto image stabilization<br/>
                                    Improved local tone mapping<br/>
                                    Improved noise reduction<br/>
                                    Face detection<br/>
                                    Photo geotagging
                                </Col>
                                <Col span={8}>
                                
                                </Col>
                            </Row>
                            <Row style={{borderTop:'solid 1px  #c0c7ce',padding:'10px 20px'}}>
                                <Col span={8}>
                                    <div className="title">Video Recording	</div>
                                </Col>
                                <Col span={8}>
                                    4K video recording (3840 by 2160) at 30 fps<br/>
                                    1080p HD video recording at 30 fps or 60 fps<br/>
                                    720p HD video recording at 30 fps<br/>
                                    Optical image stabilization for video (iPhone 6s Plus only)<br/>
                                    True Tone flash<br/>
                                    Slo-mo video support for 1080p at 120 fps and 720p at 240 fps<br/>
                                    Time-lapse video with stabilization<br/>
                                    Cinematic video stabilization (1080p and 720p)<br/>
                                    Continuous autofocus video<br/>
                                    Improved noise reduction<br/>
                                    Take 8MP still photos while recording 4K video<br/>
                                    Playback zoom<br/>
                                    3x zoom<br/>
                                    Face detection<br/>
                                    Video geotagging
                                </Col>
                            </Row>
                        </div>
                    </TabPane>
                    <TabPane tab="Rating & Reviews (5)" key="3">
                        <div className="RatRe">
                            Rating Me !
                        </div>
                    </TabPane>
            </Tabs>
        </div>
        <h6>You Might Also Like</h6>
        <Row gutter={[16,16]}>
        {x.map((value) => {
            const {id,name , ram ,title ,price , proDel,img ,dis} = value;
                return(
                    <Col lg={4} md={4} sm={24} xs={24}>
                        <Card
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
    </>
    )
}
export default Tab;
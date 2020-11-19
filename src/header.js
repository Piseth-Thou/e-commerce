import React from 'react';
import {Container} from 'reactstrap';
import './app.css';
import {SearchOutlined,CaretDownOutlined,DribbbleSquareFilled,GoogleCircleFilled,InstagramFilled,TwitterCircleFilled,FacebookFilled,HomeFilled ,ShoppingCartOutlined,UserSwitchOutlined} from '@ant-design/icons';
import {Input ,Menu, Dropdown ,Row,Col} from 'antd';
import Media from 'react-media';
import { Link} from 'react-router-dom';
import { Popover,Button} from 'antd';

// Header top
const content = (<>
    <div className="language">
        <img 
            alt="english"
            src="https://cdn.webshopapp.com/shops/94414/files/54955694/the-united-kingdom-flag-image-free-download.jpg"
            height="10px"
        />
        <span>English</span>
    </div>
    <div className="language" >
        <img 
            alt="english"
            src="https://cdn.webshopapp.com/shops/94414/files/54006402/germany-flag-image-free-download.jpg"
            height="12px"
        />
        <span>German</span>
    </div>
    <div className="language">
        <img 
            alt="english"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1200px-Flag_of_Spain.svg.png"
            height="14px"
        />
        <span>Spanish</span>
    </div>
    <div className="language">
        <img 
            alt="english"
            src="https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_France.png"
            height="14px"
        />
        <span>French</span>
    </div>
    <div className="language">
        <img 
            alt="english"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_China.png/1024px-Flag_of_China.png"
            height="14px"
        />
        <span>Chinese</span>
    </div>
</>
);

//-----------------------------
const menu = (
    <div className="sub-menu">
        <li><Link to="/">Home </Link></li>
        <hr />
        <li>Our Store <CaretDownOutlined style={{fontSize:'15px'}}/></li>
        <hr />
        <li>Accessories <CaretDownOutlined style={{fontSize:'15px'}}/></li>
        <hr />
        <li><Link style={{color:'black'}} to="/new-arrival">New Arrival</Link></li>
        <hr />
        <li>Page <CaretDownOutlined style={{fontSize:'15px'}}/></li>
        <hr />
        <li style={{display:'flex'}}><SearchOutlined /><span><Input placeholder="search here  "/></span></li>
    </div>
);
const styleItem ={
    fontSize:'10px',
    borderBottom:'solid 1px #B1CCC6 '
}
const menuStyle ={
    padding:'5px 10px',
    width:'200px',
    marginTop:'8px',
    borderTop:'solid 3px #0BD8AC'
}
const storeStyle ={
    padding:'5px 10px',
    width:'800px',
    marginTop:'8px',
    borderTop:'solid 6px #0BD8AC'
}
const page =(
    <Menu style={menuStyle}>
        <Menu.Item style={styleItem}>
            <a href=".">
            Home (Fixed Header)
            </a>
        </Menu.Item>
        <Menu.Item style={styleItem}>
            <a href=".">
            Home (Inverse Header)
            </a>
        </Menu.Item >
        <Menu.Item style={styleItem}>
            <a href=".">
            Search Results
            </a>
        </Menu.Item>
        <Menu.Item style={styleItem}>
            <a href=".">
            Product Page
            </a>
        </Menu.Item>
        <Menu.Item style={styleItem}> 
            <a href=".">
            Product Details Page
            </a>
        </Menu.Item>
        <Menu.Item style={styleItem}>
            <a href=".">
            Checkout Shipping
            </a>
        </Menu.Item>
        <Menu.Item style={styleItem}>
            <a href=".">
            Checkout Payment
            </a>
        </Menu.Item>
        <Menu.Item style={styleItem}>
            <a href=".">
            Checkout Complete
            </a>
        </Menu.Item>
        <Menu.Item style={styleItem}>
            <a href=".">
            My Account
            </a>
        </Menu.Item>
        <Menu.Item style={styleItem}>
            <a href=".">
            Contact Us
            </a>
        </Menu.Item>
        <Menu.Item style={styleItem}>
            <a href=".">
            About Us
            </a>
        </Menu.Item>
        <Menu.Item style={{fontSize:'10px'}}>
            <a href=".">
            FAQ
            </a>
        </Menu.Item>
    </Menu>
)
const Accessories = (
    <Menu style={menuStyle}>
        <Menu.Item style={styleItem}>
            <a href=".">
                Mobile Phone
            </a>
        </Menu.Item>
        <Menu.Item style={styleItem}>
            <a href=".">
            Tablet
            </a>
        </Menu.Item >
        <Menu.Item style={styleItem}>
            <a href=".">
            TV
            </a>
        </Menu.Item>
        <Menu.Item style={styleItem}>
            <a href=".">
            Desktop
            </a>
        </Menu.Item>
        <Menu.Item style={styleItem}> 
            <a href=".">
            Laptop
            </a>
        </Menu.Item>
        <Menu.Item style={styleItem}>
            <a href=".">
            Speaker
            </a>
        </Menu.Item>
        <Menu.Item style={{fontSize:'10px'}}>
            <a href=".">
            Gadget
            </a>
        </Menu.Item>
    </Menu>
);
const store =(
    <Menu style={storeStyle}>
        <Row className="content" gutter={[16,16]}>
            <Col lg={4} md={4}>
                <Menu.Item style={{borderRight:'solid 1px #cac9c9'}}>
                    <h6>Shope By Category</h6>
                    <li>Mobile Phone</li>
                    <li>Tablet</li>
                    <li>Laptop</li>
                    <li>Desktop</li>
                    <li>TV</li>
                    <li>Speaker</li>
                    <li>Gadget</li>
                </Menu.Item>
            </Col>
            <Col lg={20} md={20}>
                <Menu.Item>
                    <h6>Shope By Popular Phone</h6>
                    <Row gutter={[16,16]}>
                        <Col lg={6} md={6}>
                            <li>
                                > iPhone 7
                            </li>
                            <li>
                                >  iPhone 6s
                            </li>
                            <li>
                                >  iPhone 6
                            </li>
                            <li>
                                >  iPhone 5s
                            </li>
                            <li>
                                >  iPhone 5
                            </li>
                        </Col>
                        <Col lg={6} md={6}>
                            <li>
                                > Galaxy S7
                            </li>
                            <li>
                                > Galaxy A9
                            </li>
                            <li>
                                > Galaxy J3
                            </li>
                            <li>
                                > Galaxy Note 5
                            </li>
                            <li>
                                > Galaxy S7
                            </li>
                        </Col>
                        <Col lg={6} md={6}>
                            <li>
                                >  Lumia 730
                            </li>
                            <li>
                                >  Lumia 735
                            </li>
                            <li>
                                >  Lumia 830
                            </li>
                            <li>
                                >  Lumia 820
                            </li>
                            <li>
                                >  Lumia Icon
                            </li>
                        </Col>
                        <Col lg={6} md={6}>
                            <li>
                                >  Xperia X
                            </li>
                            <li>
                                >  Xperia Z5
                            </li>
                            <li>
                                >  Xperia M5
                            </li>
                            <li>
                                >  Xperia C5
                            </li>
                            <li>
                                >  Xperia C4
                            </li>
                        </Col>
                    </Row>
                </Menu.Item>
                <Row>
                    <h6>Shope By Brand</h6>
                </Row>
                <Row className="brand">
                    <ul>
                            <li>
                                <div className="image">
                                    <img 
                                        alt ="apple"
                                        src="https://ismar2018.org/assets/img/sponsors/apple.png"
                                    />
                                </div>
                            </li>
                        <li>
                            <div className="image">
                                <img 
                                    alt ="blackberry"
                                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c533.png"
                                />
                            </div>
                        </li>
                        <li>
                            <div className="image">
                                <img 
                                    alt ="htc"
                                    src="http://ptsanmiguelense.com/assets-pag/img/brand/brand-htc.png"
                                />
                            </div>
                        </li>
                        <li>
                            <div className="image">
                                <img 
                                    alt ="microsoft"
                                    src="http://ptsanmiguelense.com/assets-pag/img/brand/brand-microsoft.png"
                                />
                            </div>
                        </li>
                        <li>
                            <div className="image">
                                <img 
                                    alt ="nokia"
                                    src="http://ptsanmiguelense.com/assets-pag/img/brand/brand-nokia.png"
                                />
                            </div>
                        </li>
                        <li>
                            <div className="image">
                                <img 
                                    alt ="samsung"
                                    src="http://ptsanmiguelense.com/assets-pag/img/brand/brand-samsung.png"
                                />
                            </div>
                        </li>
                        <li>
                            <div className="image">
                                <img 
                                    alt ="sony"
                                    src="http://ptsanmiguelense.com/assets-pag/img/brand/brand-sony.png"
                                />
                            </div>
                        </li>
                    </ul>
                </Row>
            </Col>
        </Row>
    </Menu>
)

function Header (){
    return(
            <>
        {/* Top Header */}
            <Media query="(min-width: 769px)" 
                render={() =>
                    (
                        <div className="top-header">
                            <Container>
                                <ul style={{float:'left'}}>
                                    <li>
                                        <div style={{clear: 'both', whiteSpace: 'nowrap' }}>
                                            <Popover placement="bottomLeft"  content={content} trigger="click">
                                                <img 
                                                    alt="english"
                                                    src="https://cdn.webshopapp.com/shops/94414/files/54955694/the-united-kingdom-flag-image-free-download.jpg"
                                                    height="10px"
                                                />
                                                <span style={{marginLeft:'5px'}}>English</span>
                                            </Popover>
                                        </div>
                                    </li>
                                    <li>Customer Care</li>
                                    <li>Order Tracker</li>
                                </ul>
                                <ul style={{float:'right'}}>
                                    <li>Career</li>
                                    <li>Our Forum</li>
                                    <li>Newsletter</li>
                                    <li>
                                        <FacebookFilled style={{fontSize:'13px'}}/>
                                        <TwitterCircleFilled style={{fontSize:'13px'}}/>
                                        <InstagramFilled style={{fontSize:'13px'}}/>
                                        <DribbbleSquareFilled style={{fontSize:'13px'}}/>
                                        <GoogleCircleFilled  style={{fontSize:'13px'}}/>
                                    </li>
                                </ul>
                            </Container>
                        </div>
                    )}
            />
        {/* ------------------end----------------     */}
            <Container>
                <div className="header">
                    <Media query="(max-width: 769px)" 
                        render={() =>
                            (
                                <div className="hide-menu">
                                    <div style={{ clear: "both", whiteSpace: "nowrap" }}>
                                        <Popover placement="bottomLeft" content={menu}  trigger="focus">
                                            <span>
                                                {/* */}
                                                <Button>
                                                    <HomeFilled style={{fontSize:'20px'}}/>
                                                </Button>
                                            </span>
                                        </Popover>
                                    </div>
                                </div>
                            )}
                    />
                    <div className="logo">
                        <Link to="/">
                            <img 
                                alt="."
                                src="https://www.simple.co.uk/sk-eu/content/dam/brands/simple/global_use/1620325-new-logo-simple.png.rendition.450.450.png"
                                height="50px"
                            />
                        </Link>
                    </div>
                    <Media query="(min-width: 769px)" 
                        render={() =>
                        (
                            <div className="menu">
                                        <ul>
                                            <li>
                                                <Link to="/">Home</Link>
                                            </li>   
                                            <Dropdown overlay={store} placement="bottomLeft">
                                                <li>
                                                    Our Store 
                                                </li>
                                            </Dropdown>                                        
                                            <Dropdown overlay={Accessories} placement="bottomLeft">
                                                <li>
                                                    Accessories 
                                                </li>
                                            </Dropdown>
                                            <li>
                                                <Link to="/new-arrival">New Arrival</Link>
                                            </li>
                                            <Dropdown overlay={page} placement="bottomLeft">
                                                <li>
                                                    Pages 
                                                </li>
                                            </Dropdown>
                                            <li>
                                                <Input placeholder="Search here" title="Press inter to search"/>
                                            </li>
                                        </ul>
                            </div>
                        )}
                    />
                    
                    <Media query={{maxWidth:769}}>
                        {matches =>
                            matches ?(
                                <div className="login1">
                                    <ShoppingCartOutlined title="Cart" style={{cursor:'pointer',fontSize:'20px'}}/>
                                    <UserSwitchOutlined title="Login/Logout" style={{marginLeft:'20px',cursor:'pointer',fontSize:'20px'}}/>                    
                                </div> 
                            ):(
                                <div className="login">
                                    <ShoppingCartOutlined title="Cart" style={{cursor:'pointer',fontSize:'20px'}}/>
                                    <UserSwitchOutlined title="Login/Logout" style={{marginLeft:'20px',cursor:'pointer',fontSize:'20px'}}/>                    
                                </div> 
                            )
                        }
                    </Media>         
                </div>
            </Container>
        </>
    )
}
export default Header;
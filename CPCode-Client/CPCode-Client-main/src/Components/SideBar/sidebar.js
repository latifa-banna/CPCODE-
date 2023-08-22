import { React, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-icons/font/bootstrap-icons.css'
import logo from "../Assets/logo.png";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const ChangeColor = (event) => {

        event.preventDefault();

        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.style.backgroundColor = styles.backgroundColor;
            link.style.color = styles.color;
        });

        event.target.style.backgroundColor = styles.hover.backgroundColor;
        event.target.style.color = styles.activeColor;
    }

    const styles = {
        color: '#000',
        textDecoration: 'none',
        backgroundColor: '#64748B',
        fontFamily: " Arial, Helvetica, sans-serif",
        height: '5px',
        hover: {
            color: '#FFF'
        },
        activeColor: '#FFFFFF'
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div style={{ background: '#64748B' }} className="col-auto col-sm-1 col-md-2  d-flex flex-column justify-content-between min-vh-100 ">
                    <div>
                        <a className="text-decoration-none ms-4 d-flex align-itemcenter text-white d-none d-sm-inline" style={{ height: '10px', marginTop: '5px' }}>
                            <span ><img style={{ marginTop: '0px', marginBottom: '5px', margin: '5px 25px', height: '40px', width: '120px', float: 'left', objectFit: 'cover' }} src={logo} /></span>
                        </a>
                        <div>
                            <ul style={{ marginTop: '40px' }} class="nav nav-pills flex-column" id='parentM'>
                                <li class="nav-item">
                                    <a href="#" class="nav-link text-black " style={{ fontWeight: 'bolder', height: '35px' }} onClick={toggleMenu} >
                                        Codes <i style={{ marginLeft: '60px', fontFamily: " Arial, Helvetica, sans-serif" }} class="bi bi-arrow-down-short"></i>
                                    </a>
                                    <ul style={{ display: isOpen ? 'block' : 'none', listStyle: 'none', margin: 0, padding: 0 }}>
                                        <li class="nav-link ms-1">
                                            <a href="#" class="nav-link  ms-0" style={styles} onClick={ChangeColor} >Category</a>
                                        </li>
                                        <li class="nav-link ">
                                            <a href="#library" class="nav-link   ms-1" style={styles} onClick={ChangeColor}>Library</a>
                                        </li>
                                        <li class="nav-link ">
                                            <a href="#" class="nav-link  ms-1" style={styles} onClick={ChangeColor}>Script</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sidebar;








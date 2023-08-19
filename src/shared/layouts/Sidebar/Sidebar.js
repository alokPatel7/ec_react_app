import React from 'react'
import './Sidebar.css'

export default function Sidebar() {
    return (
        <nav className="main-menu">
            <div>
                <a className="logo" href="#"></a>
            </div>
            <div className="settings" />
            <div className="scrollbar" id="style-1">
                <ul>
                    <li>
                        <a href="#">
                            <i className="fa fa-home " />
                            <span className="nav-text">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-user " />
                            <span className="nav-text">Login</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-envelope " />
                            <span className="nav-text">Contact</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-heart " />
                            <span className="share"></span>
                        </a>
                        <div className="addthis_default_style addthis_32x32_style">
                            <a href="#"></a>
                            <div style={{ position: "absolute", marginLeft: 56, top: 3 }}>
                                <a href="#"></a>
                                <a
                                    href="https://www.facebook.com/sharer/sharer.php?u="
                                    target="_blank"
                                    className="share-popup"
                                >
                                    <img
                                        src="http://icons.iconarchive.com/icons/danleech/simple/512/facebook-icon.png"
                                        width="30px"
                                        height="30px"
                                    />
                                </a>
                                <a
                                    href="https://twitter.com/share"
                                    target="_blank"
                                    className="share-popup"
                                >
                                    <img
                                        src="https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Twitter_alt.png"
                                        width="30px"
                                        height="30px"
                                    />
                                </a>
                                <a
                                    href="https://plusone.google.com/_/+1/confirm?hl=en&url=_URL_&title=_TITLE_
"
                                    target="_blank"
                                    className="share-popup"
                                >
                                    <img
                                        src="http://icons.iconarchive.com/icons/danleech/simple/512/google-plus-icon.png"
                                        width="30px"
                                        height="30px"
                                    />
                                </a>
                            </div>
                            <span className="twitter" />
                            <span className="google" />
                            <span className="fb-like">
                                <iframe
                                    src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Ffacebook.com%2Fstartific&width&layout=button&action=like&show_faces=false&share=false&height=35"
                                    scrolling="no"
                                    frameBorder={0}
                                    style={{ border: "none", overflow: "hidden", height: 35 }}
                                    lowtransparency="true"
                                />
                            </span>
                            <span className="nav-text"></span>
                        </div>
                    </li>
                    <li className="darkerlishadow">
                        <a href="#">
                            <i className="fa fa-clock " />
                            <span className="nav-text">News</span>
                        </a>
                    </li>
                    <li className="darkerli">
                        <a href="#">
                            <i className="fa fa-desktop " />
                            <span className="nav-text">Technology</span>
                        </a>
                    </li>
                    <li className="darkerli">
                        <a href="#">
                            <i className="fa fa-plane " />
                            <span className="nav-text">Travel</span>
                        </a>
                    </li>
                    <li className="darkerli">
                        <a href="#">
                            <i className="fa fa-shopping-cart" />
                            <span className="nav-text">Shopping</span>
                        </a>
                    </li>
                    <li className="darkerli">
                        <a href="#">
                            <i className="fa fa-microphone " />
                            <span className="nav-text">Film &amp; Music</span>
                        </a>
                    </li>
                    <li className="darkerli">
                        <a href="#">
                            <i className="fa fa-flask " />
                            <span className="nav-text">Web Tools</span>
                        </a>
                    </li>
                    <li className="darkerli">
                        <a href="#">
                            <i className="fa fa-picture " />
                            <span className="nav-text">Art &amp; Design</span>
                        </a>
                    </li>
                    <li className="darkerli">
                        <a href="#">
                            <i className="fa fa-align-left " />
                            <span className="nav-text">Magazines</span>
                        </a>
                    </li>
                    <li className="darkerli">
                        <a href="#">
                            <i className="fa fa-gamepad " />
                            <span className="nav-text">Games</span>
                        </a>
                    </li>
                    <li className="darkerli">
                        <a href="#">
                            <i className="fa fa-glass " />
                            <span className="nav-text">Life &amp; Style</span>
                        </a>
                    </li>
                    <li className="darkerlishadowdown">
                        <a href="#">
                            <i className="fa fa-rocket " />
                            <span className="nav-text">Fun</span>
                        </a>
                    </li>
                </ul>
                <li>
                    <a href="#">
                        <i className="fa fa-question-circle " />
                        <span className="nav-text">Help</span>
                    </a>
                </li>
                <ul className="logout">
                    <li>
                        <a href="#">
                            <i className="fa fa-lightbulb " />
                            <span className="nav-text">BLOG</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


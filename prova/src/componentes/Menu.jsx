import React from 'react';

export default props => (
<section>
    <div className="sidebar-menu sticky-sidebar-menu">
        <div className="logo">
            <h1><a href="index.html">Collective</a></h1>
        </div>

        <div className="logo-icon text-center">
            <a href="index.html" title="logo">
                <img src={require("../images/logo.png")} alt="logo-icon"/>
            </a>
        </div>
        <div className="sidebar-menu-inner">
            <ul className="nav nav-pills nav-stacked custom-nav">
                <li><a href="#/dashboard"><i className="fa fa-tachometer"></i><span> Dashboard</span></a></li>
                <li><a href="#/cards"><i className="fa fa-cogs"></i> <span>Default cards</span></a></li>
                <li><a href="#/pricing"><i className="fa fa-table"></i> <span>Pricing tables</span></a></li>
                <li><a href="#/blocks"><i className="fa fa-th"></i> <span>Content blocks</span></a></li>
                <li><a href="#/forms"><i className="fa fa-file-text"></i> <span>Forms</span></a></li>
            </ul>
        </div>
    </div>
</section>
)
import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'
// import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
// import loadable from '@loadable/component'
import * as classes from './navbar.module.scss'
import Logo from '../../images/ckwlogowo.png'

// const Drawer = loadable(() => import('antd').then(mod => mod.Drawer), { ssr: false })
// const Menu = loadable(() => import('antd').then(mod => mod.Menu), { ssr: false })

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Header */}
            <header className={classes.pageHeader}>
                <div className={classes.headerLogo} onClick={() => navigate('/')}>
                    <img src={Logo} alt="CricKonnect Logo" />
                </div>

                {/* Desktop Navigation */}
                <nav className={classes.headerNav}>
                    <Link to="/matches">Matches</Link>
                    <Link to="/tournaments">Tournaments</Link>
                    <Link to="/blog">The Nightwatchman Notes</Link>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className={classes.hamburger}
                    onClick={() => setMobileMenuOpen(true)}
                    aria-label="Open menu"
                >
                    {/* <MenuOutlined /> */}
                    <span>☰</span>
                </button>
            </header>

            {/* Mobile Menu Drawer */}
            {/* <Drawer
                placement="right"
                onClose={() => setMobileMenuOpen(false)}
                visible={mobileMenuOpen}
                className={classes.mobileDrawer}
                closeIcon={<CloseOutlined style={{ color: '#111111' }} />}
                drawerStyle={{
                    body: {
                        background: '#ffffff',
                        padding: 0
                    },
                    header: {
                        background: '#ffffff',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
                    }
                }}
            >
                <Menu
                    mode="inline"
                    className={classes.mobileMenu}
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <Menu.Item key="matches">
                        <Link to="/matches">Matches</Link>
                    </Menu.Item>
                    <Menu.Item key="tournaments">
                        <Link to="/tournaments">Tournaments</Link>
                    </Menu.Item>
                    <Menu.Item key="blog">
                        <Link to="/blog">The Nightwatchman Notes</Link>
                    </Menu.Item>
                </Menu>
            </Drawer> */}
        </>
    )
}

export default Navbar

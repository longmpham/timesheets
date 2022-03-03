import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { Menu, MenuItem } from '@mui/material';

const Navbar = () => {

    const pages = ['Form','Login']
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };
    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    
    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };

    return (
        <Box sx={{ flexGrow: 1 }} mb={5}>
            <AppBar position="static">
                <Toolbar disableGutters>
                    {/* Create sidebar menu as a box */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                            }}
                            >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Link className="nav-menu" to={page}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </Link>
                                    
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* LOGO */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex' }}}>
                        <Button color="inherit"><Link to="/"><img src="" alt="Logo" className="nav-logo"/></Link></Button>
                    </Box>

                
                    {/* COMPANY NAME */}
                    <Typography variant="h3" component="div" sx={{ flexGrow: 12, display: { xs: 'none', md: 'flex' }}}>Timesheets</Typography>

                    {/* MENU ITEMS */}
                    {pages.map((page) => (
                        <MenuItem key={page} sx={{ display: { xs: 'none', md: 'flex' }}}>
                            <Link className="nav-menu" to={page}><Typography textAlign="center">{page}</Typography></Link>        
                        </MenuItem>
                    ))}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar
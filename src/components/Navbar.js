import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: 'none',
            fontSize: '1.5rem'
        };
    };
    return (
        <nav>
            <NavLink style={navLinkStyles} to='/'>Basic</NavLink>
            <NavLink style={navLinkStyles} to='/table-footer'>Footer</NavLink>
            <NavLink style={navLinkStyles} to='/grouped-columns'>Grouped Columns</NavLink>
            <NavLink style={navLinkStyles} to='/sort'>Sort</NavLink>
            <NavLink style={navLinkStyles} to='/filter'>Filter</NavLink>
            <NavLink style={navLinkStyles} to='/pagination'>Pagination</NavLink>
            <NavLink style={navLinkStyles} to='/row-selection'>Row Selection</NavLink>
            <NavLink style={navLinkStyles} to='/column-order'>Column Order</NavLink>
            <NavLink style={navLinkStyles} to='/column-hiding'>Column Hiding</NavLink>
        </nav>
    );
};

export default Navbar;
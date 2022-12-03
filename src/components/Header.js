import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, onAdd, showAdd}) => { 

    return(
    <header className = 'header'>
        <h1>{title}</h1>
        <Button color={showAdd ? 'gray' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
    </header>
  )
}

//kalo umur ga dikasi value, defaultnya bakal keluar "tidak tahu"
Header.defaultProps = 
{
    title: "tidak tahu",
}

//untuk modif type propnya
Header.propTypes = 
{
    title: PropTypes.string.isRequired,
}

//styling css nya
// const headingStyle = 
// {
//     color: 'red',
//     backgroundColor: 'aqua'
// }

export default Header

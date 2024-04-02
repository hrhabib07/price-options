import PropTypes from 'prop-types'; 


const LinkContainer = ({route}) => {
    return (
    
        <div className="mr-4">
             
            <li className="list-none">
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

LinkContainer.propTypes = {
    route : PropTypes.object
}

export default LinkContainer;
import React from "react";
import MenuItem from "../MenuItemComponent/MenuItem";
import "./directory.styles.scss";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = ({ sections }) => {
    return(
        <div className="directory-menu">
            {sections.map(({id, ...otherSections})=>{
                return <MenuItem key={id} {...otherSections}/>
            })}
        </div>
    );
}
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
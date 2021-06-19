import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getRosterOfficers } from '../dux/roster-dux';
import RosterTable from '../components/RosterTable';

const Dashboard = (props) => {
    const { officerList, dispatch } = props;

    useEffect(() => {
        dispatch(getRosterOfficers());
    }, []);

    return (
        <div className='root'>
            <RosterTable
                isLoading={officerList.isLoading}
                officers={officerList.officers}
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        officerList: state.roster.officerList
    };
}

export default connect(mapStateToProps)(Dashboard);
import React from 'react';
import '../styles/rostertable.scss';

const RosterTable = (props) => {
    if (props.isLoading) {
        return (
            <div className='roster-table-loader'>
                {'Loading Table'}
            </div>
        );
    }

    return (
        <div className='roster-table-container'>
            <table className='roster-table'>
                <tr>
                    <th>ID</th>
                    <th>Steam Hex</th>
                    <th>Steam Name</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Rank</th>
                    <th>Status</th>
                    <th>Timezone</th>
                </tr>
                {props.officers.map((officer) => {
                    return (
                        <tr key={officer.id}>
                            <td>{officer.id}</td>
                            <td>{officer.steamhex}</td>
                            <td>{officer.steamname}</td>
                            <td>{officer.firstname}</td>
                            <td>{officer.lastname}</td>
                            <td>{officer.rank}</td>
                            <td>{officer.status}</td>
                            <td>{officer.timezone}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
};

export default RosterTable;
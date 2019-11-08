import React from 'react';

const Table = ({ data }) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>description</th>
                    <th>stars</th>
                    <th>isRead</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map(value =>
                    <tr key={value.id}>
                        <td>{value.id}</td>
                        <td>{value.title}</td>
                        <td>{value.description}</td>
                        <td>{value.stars}</td>
                        <td>
                            {value.isRead ? 'Read' : <button className="btn btn-info">Unread</button>}
                        </td>
                    </tr>
                )}
            </tbody>

        </table>
    )
}

export default Table;
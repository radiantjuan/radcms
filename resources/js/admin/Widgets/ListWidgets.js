import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import moment from "moment";

const ListWidgets = () => {
    const [widgets, setWidgets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortingSettings, setSortingSetting] = useState({
        column: 'id',
        direction: 'asc'
    });

    const rows = widgets.map((widgets) => {
        return (
            <tr key={widgets.id}>
                <td>{widgets.id}</td>
                <td><Link to={'/admin/widgets/edit/' + widgets.id}>{widgets.name}</Link></td>
                <td>{moment(widgets.v).format('YYYY-MM-DD HH:mm:ss')}</td>
                <td>{moment(widgets.updated_at).format('YYYY-MM-DD HH:mm:ss')}</td>
            </tr>
        )
    });

    const fetchAllWidgets = () => {
        const {column, direction} = sortingSettings;
        axios.get(`/api/widgets?sorting=${column}&direction=${direction}`).then((response) => {
            setWidgets(response.data);
        }).catch(() => {
            setLoading(false);
        }).then(() => {
            setLoading(false);
        });
    }

    const sortingHandler = (sort) => {
        setSortingSetting(sort);
    }

    useEffect(() => {
        fetchAllWidgets();
    }, [sortingSettings]);

    const loadinghtml = (
        <div>
            loading...
        </div>
    )

    const tableHtml = (
        <div>
            <div className="row">
                <div className="col pb-3">
                    <Link to="/admin/widgets/create" className="btn btn-primary"><i
                        className="fa fa-plus"></i> Create</Link>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table table-bordered w-100 table-widgets">
                        <thead>
                        <tr>
                            <th scope="col">
                                {
                                    sortingSettings.column === 'id' ? (sortingSettings.direction === 'desc') ?
                                        <i className="fa fa-caret-down"></i> :
                                        <i className="fa fa-caret-up"></i> : ''
                                }
                                <a href="#" onClick={() => {
                                    sortingHandler({
                                        column: 'id',
                                        direction: sortingSettings.direction === 'asc' ? 'desc' : 'asc'
                                    })
                                }}> id</a>
                            </th>
                            <th scope="col">
                                {
                                    sortingSettings.column === 'title' ? (sortingSettings.direction === 'desc') ?
                                        <i className="fa fa-caret-down"></i> :
                                        <i className="fa fa-caret-up"></i> : ''
                                }
                                <a href="#" onClick={() => {
                                    sortingHandler({
                                        column: 'name',
                                        direction: sortingSettings.direction === 'asc' ? 'desc' : 'asc'
                                    })
                                }}>Title</a>
                            </th>
                            <th scope="col">
                                {
                                    sortingSettings.column === 'created_at' ? (sortingSettings.direction === 'desc') ?
                                        <i className="fa fa-caret-down"></i> :
                                        <i className="fa fa-caret-up"></i> : ''
                                }
                                <a href="#" onClick={() => {
                                    sortingHandler({
                                        column: 'created_at',
                                        direction: sortingSettings.direction === 'asc' ? 'desc' : 'asc'
                                    })
                                }}>Created At</a>
                            </th>
                            <th scope="col">
                                {
                                    sortingSettings.column === 'updated_at' ? (sortingSettings.direction === 'desc') ?
                                        <i className="fa fa-caret-down"></i> :
                                        <i className="fa fa-caret-up"></i> : ''
                                }
                                <a href="#" onClick={() => {
                                    sortingHandler({
                                        column: 'updated_at',
                                        direction: sortingSettings.direction === 'asc' ? 'desc' : 'asc'
                                    })
                                }}>Updated At</a>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {rows}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            {(loading) ? loadinghtml : tableHtml}
        </div>
    );
}

export default ListWidgets;

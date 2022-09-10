import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import moment from "moment";
import {toggleSavingStatus} from "../Redux/isSavingStatusSlice";
import {useDispatch, useSelector} from "react-redux";
import {fetchPages} from "./PagesReducers/listPageSlice";

const ListPages = () => {
    const pages = useSelector(({listPageReducer}) => listPageReducer.pages);
    const stateLoading = useSelector(({listPageReducer}) => listPageReducer.loading);
    const isSavingStatus = useSelector((state) => state.isSavingStatus.status);
    const dispatch = useDispatch();
    const [sortingSettings, setSortingSetting] = useState({
        column: 'id',
        direction: 'asc'
    });

    const rows = pages.map((pages) => {
        return (
            <tr key={pages.id}>
                <td>{pages.id}</td>
                <td><Link to={'/admin/pages/edit/' + pages.id}>{pages.title}</Link></td>
                <td>{pages.published}</td>
                <td>{moment(pages.created_at).format('YYYY-MM-DD HH:mm:ss')}</td>
                <td>{moment(pages.updated_at).format('YYYY-MM-DD HH:mm:ss')}</td>
            </tr>
        )
    });

    const sortingHandler = (sort) => {
        setSortingSetting(sort);
    }

    useEffect(() => {
        dispatch(fetchPages(sortingSettings));
        if (isSavingStatus) {
            dispatch(toggleSavingStatus({status: 0}));
        }
    }, [sortingSettings, isSavingStatus]);

    const loadinghtml = (
        <div>
            loading...
        </div>
    )

    const tableHtml = (
        <div>
            <div className="row">
                <div className="col pb-3">
                    <Link to="/admin/pages/create" className="btn btn-primary"><i
                        className="fa fa-plus"></i> Create</Link>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table table-bordered w-100 table-pages">
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
                                        column: 'title',
                                        direction: sortingSettings.direction === 'asc' ? 'desc' : 'asc'
                                    })
                                }}>Title</a>
                            </th>
                            <th scope="col">
                                {
                                    sortingSettings.column === 'published' ? (sortingSettings.direction === 'desc') ?
                                        <i className="fa fa-caret-down"></i> :
                                        <i className="fa fa-caret-up"></i> : ''
                                }
                                <a href="#" onClick={() => {
                                    sortingHandler({
                                        column: 'published',
                                        direction: sortingSettings.direction === 'asc' ? 'desc' : 'asc'
                                    })
                                }}>Published</a>
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
            {(stateLoading) ? loadinghtml : tableHtml}
        </div>
    );
}

export default ListPages;

import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {InvalidForms, RemoveAllInvalidMessage} from "../Shared/FormValidations";
import {useDispatch, useSelector} from "react-redux";
import {toggleSuccessBanner} from "../Redux/successBannerSlice";
import {toggleSavingStatus} from "../Redux/isSavingStatusSlice";
import {savePage, toggleLoading} from "./PagesReducers/pageSlice";

const AddPage = () => {
    const dispatch = useDispatch();
    const {loading} = useSelector(({pageReducer}) => pageReducer);
    const navigate = useNavigate();

    // local variables
    const [title, setTitle] = useState('');
    const [published, setPublished] = useState(false);

    const formEventHandler = (event) => {
        switch (event.target.id) {
            case 'title':
                setTitle(event.target.value);
                break;
            case 'published':
                setPublished(!published ?? true);
                break
        }
    }

    const saveHandler = async () => {
        //remove validation texts
        RemoveAllInvalidMessage();
        const result = (await dispatch(savePage({title, published})));
        if (!result.payload.success) {
            if (result.payload.error.status === 422) {
                InvalidForms(result.payload.error.data.errors);
            }
            dispatch(toggleSuccessBanner({
                status: 1,
                alertType: 'danger',
                alertMessage: 'something went wrong'
            }));
            dispatch(toggleSavingStatus({status: 1}));
        } else {
            dispatch(toggleSuccessBanner({
                status: 1,
                alertType: 'success',
                alertMessage: 'saved successfully!'
            }));
            dispatch(toggleSavingStatus({status: 1}));
            navigate('/admin/pages/edit/' + result.payload.data);
        }
    }

    useEffect(() => {
        dispatch(toggleLoading(false));
    }, []);

    const BasicForm = (
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" placeholder="Enter title here"
                   value={title} onChange={formEventHandler}/>
            <div className="invalid-feedback" id="titleValidationMessage">
                Please choose a username.
            </div>
        </div>
    )

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-8">

                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    {BasicForm}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="published" checked={published}
                                       onChange={formEventHandler}/>
                                <label className="form-check-label" htmlFor="published">Published</label>
                            </div>
                            <div>
                                <button className="btn btn-primary w-100" disabled={loading}
                                        onClick={saveHandler}>Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            contents
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPage;

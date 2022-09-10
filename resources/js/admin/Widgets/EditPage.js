import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import './Pages.scss';
import Banners from "../Shared/Banners";
import {InvalidForms, RemoveAllInvalidMessage} from "../Shared/FormValidations";

const EditPage = () => {
    const {id} = useParams();
    const [formFields, setFormFields] = useState([
        {
            label: 'Title',
            field_attributes: {
                type: 'text',

                id: 'title',
                classname: 'form-control',
                placeholder: "Enter title here",
                onChange: (event) => {
                    formEventHandler(event);
                }
            }
        }
    ])
    const [title, setTitle] = useState('');
    const [published, setPublished] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isDoneSaving, setIsDoneSaving] = useState(false);
    const [bannerType, setBannerType] = useState('success');
    const [bannerMessage, setBannerMessage] = useState('');


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

    const saveHandler = () => {
        //remove validation texts
        RemoveAllInvalidMessage();
        axios.put('/api/pages/' + id, {
            title: title,
            published: published
        }).then((response) => {
            setTitle(response.data.title);
            setPublished(response.data.published);
            setBannerType('success');
            setBannerMessage('saved successfully!');
        }).catch((err) => {
            if (err.response.status === 422) {
                InvalidForms(err.response.data.errors);
            }
            setLoading(false);
            setBannerType('danger');
            setBannerMessage('Oh no! something went wrong!');
        }).then(() => {
            setLoading(false);
            setIsDoneSaving(true);
        });
    }

    useEffect(() => {
        axios.get('/api/pages/' + id).then((response) => {
            setTitle(response.data.title);
            setPublished(response.data.published);
        }).catch((err) => {
            setLoading(false);
        }).then(() => {
            setLoading(false);
        });
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

    const BannersAlert = (<Banners alertType={bannerType}>{bannerMessage}</Banners>);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-8">
                    {(isDoneSaving) ? BannersAlert : ''}
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    {(loading) ? 'loading...' : BasicForm}
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

export default EditPage;

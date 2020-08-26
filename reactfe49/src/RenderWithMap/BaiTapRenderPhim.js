import React, { Component } from 'react'
import data from './DataFilms.json';

export default class BaiTapRenderPhim extends Component {
    renderFilms = () => {
        return data.map((film, index) => {
            return <div className="col-3">

                <div className="card">
                    <img className="card-img-top" src={film.hinhAnh} style={{height:300}} alt />
                    <div className="card-body bg-dark text-white">
                        <h4 className="card-title" style={{height:50}}>{film.tenPhim.length > 20 ? <span>{film.tenPhim.substr(0,20)}...</span> : <span>{film.tenPhim}</span>}</h4>
        <p className="card-text" style={{height:75}}>{film.moTa.length > 75 ? <span>{film.moTa.substr(0,75)}...</span>:film.moTa}</p>
                    </div>
                </div>

            </div>

        })
    }

    render() {
        return (
            <div style={{ background: 'URL("./img/avanger.jpg")', backgroundSize: '100%', width: '100%', minHeight: 1000 }}>

                <div style={{ width: '100%', minHeight: 1000, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <nav className="navbar navbar-expand-lg navbar-light bg-violet text-white">
                        <a className="navbar-brand" href="#">CyBerSoft</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown
        </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#">Disabled</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                    <h3>Danh Sachs Fiml</h3>
                    <div className="row">

                        {this.renderFilms()}
                    </div>
                </div>

            </div>

        )
    }
}

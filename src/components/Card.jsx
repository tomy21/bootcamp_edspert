import React, { useEffect, useState } from 'react'
import { BiCart } from "react-icons/bi";
import { getMovies, httpServices, searchMovie } from '../server/api'
import ReactPaginate from 'react-paginate';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getListFilms } from '../routerREST/store/product/action';


const baseURL   = "https://api.themoviedb.org/3"
const imagesURL = "https://image.tmdb.org/t/p/w500"
const apiKey    = "d199ca2ba6607648bb1c0a1ae059710a"

const Card = () => {

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    const {entities} = useSelector((state) => state.product)
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const fetchData = async() => {
        dispatch(getListFilms());
    }

    useEffect(() => {
        setLoading(true);
        fetchData();
        setLoading(false);
    }, [])

    const search = async (q) => {
        if (q.length > 3) {
            const query = await searchMovie(q);
            setMovie(query.results)
        }
        if(q.length == 0){
            window.location.reload()
        }
    }

    const detailFilm = (id) => {
        navigate(`movie/${id}`)
    }

    return (
        <aside>
            <div className="header-content">
                <div className="title-header">
                    List Film
                </div>
                <div className="search-header">
                    <input type="text" className='search' placeholder='Cari film disini. . . '
                        onChange={({ target }) => search(target.value)} />
                </div>
            </div>
            <div className="body-content">
                {entities.map((item, index)=>{
                    return (
                        <div className="card" key={index}>
                            <div className="card-header">
                                <img src={`${imagesURL}/${item.poster_path}`} alt="" />
                            </div>
                            <div className="card-body">
                                <li className='head'>{item.title}</li>
                                <li className='desc'>{item.overview}</li>
                            </div>
                            <div className="card-footer">
                                <div className="price">
                                    <div className="coret">
                                        Rp.300.000
                                    </div>
                                    <div className="net">
                                        Rp.70.000
                                    </div>
                                </div>
                                <div className="add-cart">
                                    <BiCart className='icon-btn' />
                                    <span onClick={() => detailFilm(item.id)}>add to cart</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount="7"
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                // onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
        </aside>
    )

}

export default Card;

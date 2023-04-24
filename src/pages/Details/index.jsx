import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getListFilm } from '../../routerREST/store/product/action'
import './detail.css'

const imagesURL = "https://image.tmdb.org/t/p/w500"

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { entity, loading } = useSelector((state) => state.product);
    const navigate = useNavigate();

    const fetchFilm = async (id) => {
        dispatch(getListFilm(id));
    }

    console.log('action', id);
    useEffect(() => {
        fetchFilm(id);
    }, [])

    // const back = () =>{
    //     window.location = history.go(-1);
    // }
    return (
        <>

            {loading ? ("loading data . . . . . ") : (
                <>
                    <div className="container-detail">
                        <div className="image-detail">
                            <img src={`${imagesURL}/${entity.poster_path}`} alt="" />
                        </div>
                        <div className="description">
                            <div className="title-detail">
                                {entity.title}
                            </div>
                            <div className="overview-detail">
                                {entity.overview}
                            </div>
                            <div className="footer-detail">
                                <div className="price-detail">
                                    Rp. 70.000
                                </div>
                                <button className="btn-checkout">
                                    Checkout
                                </button>
                                <button onClick={() => navigate(-1)} className="btn-cancel">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}

        </>
    )
}

export default Detail;
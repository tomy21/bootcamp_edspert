import React from 'react'

export default function Card() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    ini header
                </div>
                <div className="card-body">
                    <li className='head'>Nama Barang</li>
                    <li className='desc'>Desc</li>
                </div>
                <div className="card-footer">
                    <div className="price">
                        <div className="coret">
                            Rp.300.000
                        </div>
                        <div className="net">
                            Rp.300.000
                        </div>
                    </div>
                    <div className="add-cart">
                        add to cart
                    </div>
                </div>
            </div>
        </>
    )
}

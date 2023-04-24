import React from 'react'
import Card from '../../components/Card'
import './Contents.css'

export default function index() {
  return (
    <>
        <aside>
            <div className="header-content">
                <div className="title-header">
                    List Film
                </div>
                <div className="search-header">
                    <input type="text" className='search' placeholder='Cari film disini. . . ' />
                </div>
            </div>
            <div className="body-content">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </aside>
    </>
  )
}

import React from 'react'
import './Booking.css'

const Booking = () => {
    return (
        <div className='booking'>
            <table>
                <tr>
                    <th>Booking id</th>
                    <th>Car name</th>
                    <th>Date</th>
                    <th>Picking up date</th>
                    <th>Dropping off date</th>
                    <th>Picking up hour</th>
                    <th>Dropping off hour</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>dujkld</td>
                    <td>ertyui</td>
                    <td>tyuio</td>
                    <td>yui</td>
                    <td>tyu</td>
                    <td>uio</td>
                    <td>567</td>
                    <td><button>Cancel</button></td>
                </tr>
            </table>
        </div>
    )
}

export default Booking

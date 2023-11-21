import React, { Component } from 'react'

export default class ListRendering extends Component {
    
  render() {
    return (
        <div className='flex justify-center my-10'>
        <table className='border-collapse table-fixed w-full lg:w-2/3 text-sm'>
            <thead className='bg-black'>
            <tr>
                <th className='border-b border-slate-700 p-4 pl-8'>Nom</th>
                <th className='border-b border-slate-700 p-4 pl-8'>Age</th>
                <th className='border-b border-slate-700 p-4 pl-8'>Profession</th>
            </tr>
    
            </thead>
            <tbody className='bg-gray-800'>
                {
                    this.props.listUsers.map((user, index) => (
                        <tr key={index}>
                        <td 
                        className="p-4 pl-8 text-slate-400 text-center">
                            {user.name}</td>
                        <td 
                        className="p-4 pl-8 text-slate-400 text-center">
                            {user.age}</td>
                        <td 
                        className="p-4 pl-8 text-slate-400 text-center">
                            {user.profession}</td>
                       </tr>
                    ))
                }
            </tbody>
        </table>
    
    </div>

    )
  }
}

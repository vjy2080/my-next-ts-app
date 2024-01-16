import Link from 'next/link'
import './page.module.css'

export default function NotFound() {
    return (
        <div className='container rounded-5 text-center my-5 py-5'>
            <h2 className='text-danger my-5'>404 - Not Found</h2>
            <p className=' mt-5'>Could not find requested resource</p>
            <div className='btn btn-primary my-3'>
                <Link className='text-white' href="/home">Return Home</Link>
            </div>
        </div>
    )
}
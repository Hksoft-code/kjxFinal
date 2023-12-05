import React from "react";
import { Link } from "react-router-dom"
import dj from '../../../assets/icon/django.png';


const PythonFramworksMobile = ({ setIsOpens }) => {

    return (

        <div className='mx-auto'>
            <div class="flex flex-row space-x-4 ">
                <div class="basis-1/3 flex-initial border border-black rounded w-20  text-sky-900"  >
                    <h1 className='text-center p-2  text-sm text-sky-900'>
                        <Link to={"/services/php-frameworks/laravel-development"} onClick={() => setIsOpens(false)}> Laravel</Link>
                    </h1>
                </div>
                <div class="basis-1/3 flex-initial border border-black rounded w-20  text-sky-900">
                    <Link to={"/services/php-frameworks/cake-php-framework"} onClick={() => setIsOpens(false)}>
                        <h1 className='text-center p-2  text-sm text-sky-900'>CakePHP</h1>
                    </Link>
                </div>
                <div class="basis-1/3 flex-initial border border-black rounded w-20  text-sky-900">
                    <Link to={"/services/php-frameworks/codigniter-development"} onClick={() => setIsOpens(false)}>
                        <h1 className='text-center p-2  text-sm text-sky-900'>CodeIgniter</h1>
                    </Link>
                </div>
            </div>
            <div class="flex flex-row space-x-4 mt-10">
                <div class="basis-1/2 flex-initial border border-black rounded w-20  text-sky-900">
                    <Link to={"/services/php-frameworks/wordpress-development"} onClick={() => setIsOpens(false)}>
                        <h1 className='text-center p-2  text-sm text-sky-900'>Wordpress</h1>
                    </Link>
                </div>
                <div class="basis-1/2 flex-initial border border-black rounded w-20  text-sky-900">
                    <Link to={"/services/php-frameworks/shopify-development"} onClick={() => setIsOpens(false)}>
                        <h1 className='text-center p-2  text-sm text-sky-900'>Shopify</h1>
                    </Link>
                </div>
            </div>

        </div>

          
        // <div className='mx-auto'>
        //     <div class="flex flex-row space-x-4 ">
        //         {/* <div class="basis-1/3 lg:flex-initial border border-black rounded md:w-20 w-64 text-sky-900"  >
                   
        //         </div> */}
        //         <div class="group relative flex flex-row gap-x-6 rounded-lg p-4 hover:bg-gray-50 border border-black rounded align-middle" >
        //             <div class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
        //                 {/* <svg class="h-6 w-6 text-gray-600 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                           
        //                 </svg> */}
        //                 <img class="h-6 w-6 " src={dj} />
        //             </div>
        //             <div>
        //             <h1 className='text-center  text-2xl  text-sky-900'>
        //                 <Link to={"/services/django-development"} onClick={() => setIsOpens(false)}> Django</Link>

        //             </h1>
        //             </div>
        //         </div>
        //         <div class="basis-1/3 flex-initial border border-black rounded md:w-20 w-64 text-sky-900">
        //             <Link to={"/services/python-frameworks/flask"} onClick={() => setIsOpens(false)}>
        //                 <h1 className='text-center p-6 text-2xl md:text-sm  text-sky-900'>Flask</h1>
        //             </Link>
        //         </div>
        //         <div class="basis-1/3 flex-initial border border-black rounded md:w-20 w-64 text-sky-900">
        //             <Link to={"/services/python-frameworks/fastapi"} onClick={() => setIsOpens(false)}>
        //                 <h1 className='text-center p-6 text-2xl md:text-sm  text-sky-900'>Fast API</h1>
        //             </Link>
        //         </div>
        //     </div>
        //     <div class="flex flex-row space-x-4 mt-10">
        //         <div class="basis-1/2 flex-initial border border-black rounded md:w-20 w-64 text-sky-900">
        //             <Link to={"/services/python-frameworks/kafka"} onClick={() => setIsOpens(false)}>
        //                 <h1 className='text-center p-6 text-2xl  md:text-sm text-sky-900'>Kafka</h1>
        //             </Link>
        //         </div>
        //         <div class="basis-1/2 flex-initial border border-black rounded  md:w-20 w-64 text-sky-900">
        //             <Link to={"/services/python-frameworks/grafana"} onClick={() => setIsOpens(false)}>
        //                 <h1 className='text-center p-6 text-2xl md:text-sm text-sky-900'>Grafana</h1>
        //             </Link>
        //         </div>
        //     </div>

        // </div>
    )
}

export default PythonFramworksMobile;
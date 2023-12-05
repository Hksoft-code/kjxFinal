
import { Link } from "react-router-dom"
const API = ({ setIsOpens }) => {
    return (


        <div className='mx-auto'>
        <div class="flex flex-row space-x-4 ">
            <div class="basis-1/3 flex-initial border border-black rounded md:w-20 w-64 text-sky-900"  >
                <h1 className='text-center p-6 text-2xl md:text-sm text-sky-900'>
                    <Link to={"/services/mobile-app-development/ios-application"} onClick={() => setIsOpens(false)}>Payment API </Link>
                </h1>
            </div>
            <div class="basis-1/3 flex-initial border border-black rounded md:w-20 w-64 text-sky-900">
                <Link to={"/services/mobile-app-development/android-application"} onClick={() => setIsOpens(false)}>
                    <h1 className='text-center p-6 text-2xl md:text-sm text-sky-900'>Shipping API</h1>
                </Link>
            </div>
            <div class="basis-1/3 flex-initial border border-black rounded md:w-20 w-64 text-sky-900">
                <Link to={"/services/mobile-app-development/react-native-application"} onClick={() => setIsOpens(false)}>
                    <h1 className='text-center p-6 text-2xl md:text-sm  text-sky-900'>Authentication API</h1>
                </Link>
            </div>
        </div>
        <div class="flex flex-row space-x-4 mt-10">
            <div class="basis-1/3 flex-initial border border-black rounded md:w-20 w-64 text-sky-900"  >
                <h1 className='text-center p-6 text-2xl md:text-sm text-sky-900'>
                    <Link to={"/services/mobile-app-development/ios-application"} onClick={() => setIsOpens(false)}>Phone Verification API</Link>
                </h1>
            </div>
        </div>
    </div>

        // <div className='mx-auto'>
        //     <div class="flex flex-row space-x-4 ">
        //         <div class="basis-1/3 flex-initial border border-black rounded text-sky-900"  >
        //             <h1 className='text-center p-6 text-2xl  text-sky-900'>
        //                 <Link to={"/services/api-integration-services/payment-api"} onClick={() => setIsOpens(false)}> Payment API </Link>

        //             </h1>
        //         </div>
        //         <div class="basis-1/3 flex-initial border border-black rounded text-sky-900">
        //             <h1 className='text-center p-6 text-2xl  text-sky-900'>
        //                 <Link to={"/services/api-integration-services/shipping-api"} onClick={() => setIsOpens(false)}>
        //                     Shipping API
        //                 </Link>
        //             </h1>
        //         </div>
        //         <div class="basis-1/3 flex-initial border border-black rounded text-sky-900">
        //             <h1 className='text-center p-6 text-2xl  text-sky-900'>
        //                 <Link to={"/services/api-integration-services/authentication-api"} onClick={() => setIsOpens(false)}>
        //                     Authentication API
        //                 </Link>
        //             </h1>
        //         </div>

        //     </div>
        //     <div class="flex flex-row space-x-4 mt-10">
               
        //         <div class="basis-1/2 flex-initial border border-black rounded text-sky-900">
        //             <Link to={"/services/api-integration-services/phone-verification-api"} onClick={() => setIsOpens(false)}>
        //                 <h1 className='text-center p-6 text-2xl  text-sky-900'>Phone Verification API</h1>
        //             </Link>
        //         </div>
        //     </div>

        // </div>
    )
}

export default API;
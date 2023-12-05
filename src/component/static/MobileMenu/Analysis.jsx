
import { Link } from "react-router-dom"
const AnalysisMobile = ({ setIsOpens }) => {
    return (


        <div className='mx-auto'>
        <div class="flex flex-row space-x-4 ">
            <div class="basis-1/3 flex-initial border border-black rounded w-20  text-sky-900"  >
                <h1 className='text-center p-2  md:text-sm text-sky-900'>
                    <Link to={"/services/mobile-app-development/ios-application"} onClick={() => setIsOpens(false)}>Metabase</Link>
                </h1>
            </div>
            <div class="basis-1/3 flex-initial border border-black rounded w-20 text-sky-900">
                <Link to={"/services/mobile-app-development/android-application"} onClick={() => setIsOpens(false)}>
                    <h1 className='text-center p-2  md:text-sm  text-sky-900'>Lightdash</h1>
                </Link>
            </div>
            <div class="basis-1/3 flex-initial border border-black rounded w-20  text-sky-900">
                <Link to={"/services/mobile-app-development/react-native-application"} onClick={() => setIsOpens(false)}>
                    <h1 className='text-center p-2  text-sm  text-sky-900'>Superset</h1>
                </Link>
            </div>
        </div>
        <div class="flex flex-row space-x-4 mt-10">
            <div class="basis-1/3 flex-initial border border-black rounded w-20  text-sky-900"  >
                <h1 className='text-center p-2  text-sm text-sky-900'>
                    <Link to={"/services/mobile-app-development/ios-application"} onClick={() => setIsOpens(false)}>jupyter</Link>
                </h1>
            </div>
            <div class="basis-1/3 flex-initial border border-black rounded w-20  text-sky-900"  >
                <h1 className='text-center p-2  text-sm text-sky-900'>
                    <Link to={"/services/mobile-app-development/ios-application"} onClick={() => setIsOpens(false)}>PostHog</Link>
                </h1>
            </div>
            <div class="basis-1/3 flex-initial border border-black rounded w-20  text-sky-900"  >
                <h1 className='text-center p-2  text-sm text-sky-900'>
                    <Link to={"/services/mobile-app-development/ios-application"} onClick={() => setIsOpens(false)}>redash</Link>
                </h1>
            </div>
        </div>
        <div class="flex flex-row space-x-4 mt-10">
            <div class="basis-1/2 flex-initial border border-black rounded w-20  text-sky-900"  >
                <h1 className='text-center p-2  text-sm text-sky-900'>
                    <Link to={"/services/mobile-app-development/ios-application"} onClick={() => setIsOpens(false)}>Plausible</Link>
                </h1>
            </div>
            <div class="basis-1/2 flex-initial border border-black rounded w-20  text-sky-900"  >
                <h1 className='text-center p-2  text-sm text-sky-900'>
                    <Link to={"/services/mobile-app-development/ios-application"} onClick={() => setIsOpens(false)}>Querybook</Link>
                </h1>
            </div>
            
        </div>
    </div>

        // <div className='mx-auto'>
        //     <div class="flex flex-row space-x-4 ">
        //         <div class="basis-1/3 flex-initial border border-black rounded text-sky-900"  >
        //             <h1 className='text-center p-6   text-sky-900'>
        //                 <Link to={"/services/api-integration-services/payment-api"} onClick={() => setIsOpens(false)}> Payment API </Link>

        //             </h1>
        //         </div>
        //         <div class="basis-1/3 flex-initial border border-black rounded text-sky-900">
        //             <h1 className='text-center p-6   text-sky-900'>
        //                 <Link to={"/services/api-integration-services/shipping-api"} onClick={() => setIsOpens(false)}>
        //                     Shipping API
        //                 </Link>
        //             </h1>
        //         </div>
        //         <div class="basis-1/3 flex-initial border border-black rounded text-sky-900">
        //             <h1 className='text-center p-6   text-sky-900'>
        //                 <Link to={"/services/api-integration-services/authentication-api"} onClick={() => setIsOpens(false)}>
        //                     Authentication API
        //                 </Link>
        //             </h1>
        //         </div>

        //     </div>
        //     <div class="flex flex-row space-x-4 mt-10">
               
        //         <div class="basis-1/2 flex-initial border border-black rounded text-sky-900">
        //             <Link to={"/services/api-integration-services/phone-verification-api"} onClick={() => setIsOpens(false)}>
        //                 <h1 className='text-center p-6   text-sky-900'>Phone Verification API</h1>
        //             </Link>
        //         </div>
        //     </div>

        // </div>
    )
}

export default AnalysisMobile;
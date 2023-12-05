
import { Link } from "react-router-dom"
const UIUX = ({ setIsOpens }) => {
    return (

        <div className='mx-auto'>
            <div class="flex flex-row space-x-4 ">
                <div class="basis-1/3 flex-initial border border-black rounded md:w-20 w-64 text-sky-900"  >
                    <h1 className='text-center p-6 text-2xl md:text-sm text-sky-900'>
                        <Link to={"/services/mobile-app-development/ios-application"} onClick={() => setIsOpens(false)}>PSD to HTML</Link>
                    </h1>
                </div>
                <div class="basis-1/3 flex-initial border border-black rounded md:w-20 w-64 text-sky-900">
                    <Link to={"/services/mobile-app-development/android-application"} onClick={() => setIsOpens(false)}>
                        <h1 className='text-center p-6 text-2xl md:text-sm text-sky-900'>Responsive web</h1>
                    </Link>
                </div>
                <div class="basis-1/3 flex-initial border border-black rounded md:w-20 w-64 text-sky-900">
                    <Link to={"/services/mobile-app-development/react-native-application"} onClick={() => setIsOpens(false)}>
                        <h1 className='text-center p-6 text-2xl md:text-sm text-sky-900'>Mobile App</h1>
                    </Link>
                </div>
            </div>
            <div class="flex flex-row space-x-4 mt-10">
                <div class="basis-1/3 flex-initial border border-black rounded md:w-20 w-64 text-sky-900"  >
                    <h1 className='text-center p-6 text-2xl md:text-sm text-sky-900'>
                        <Link to={"/services/mobile-app-development/ios-application"} onClick={() => setIsOpens(false)}>Prototype</Link>
                    </h1>
                </div>
            </div>
        </div>

        // <div className='mx-auto'>
        //     <div class="flex flex-row space-x-4 ">
        //         <div class="basis-1/2 flex-initial border border-black rounded text-sky-900"  >
        //             <h1 className='text-center p-6 text-2xl  text-sky-900'>
        //                 <Link to={"/services/designing-services/psd-html-design-services"} onClick={() => setIsOpens(false)}> PSD to HTML</Link>

        //             </h1>
        //         </div>
        //         <div class="basis-1/2 flex-initial border border-black rounded text-sky-900">
        //             <Link to={"/services/designing-services/responsive-website-design"} onClick={() => setIsOpens(false)}>
        //                 <h1 className='text-center p-6 text-2xl  text-sky-900'>Responsive web</h1>
        //             </Link>
        //         </div>

        //     </div>
        //     <div class="flex flex-row space-x-4 mt-10">
        //         <div class="basis-1/2 flex-initial border border-black rounded text-sky-900">
        //             <Link to={"/services/designing-services/mobile-application-design"} onClick={() => setIsOpens(false)}>
        //                 <h1 className='text-center p-6 text-2xl  text-sky-900'>Mobile App</h1>
        //             </Link>
        //         </div>
        //         <div class="basis-1/2 flex-initial border border-black rounded text-sky-900">
        //             <Link to={"/services/designing-services/design-prototype"} onClick={() => setIsOpens(false)}>
        //                 <h1 className='text-center p-6 text-2xl  text-sky-900'>Prototype</h1>
        //             </Link>
        //         </div>
        //     </div>

        // </div>
    )
}

export default UIUX;
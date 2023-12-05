import { Link } from "react-router-dom"
const MVC = ({ setIsOpens }) => {
    return (

        <div className='mx-auto'>
        <div class="flex flex-row space-x-4 ">
            <div class="basis-1/3 flex-initial border border-black rounded md:w-20 w-64 text-sky-900"  >
                <h1 className='text-center p-6 text-2xl md:text-sm text-sky-900'>
                    <Link to={"/services/mobile-app-development/ios-application"} onClick={() => setIsOpens(false)}>React JS Developers</Link>
                </h1>
            </div>
            <div class="basis-1/3 flex-initial border border-black rounded md:w-20 w-64 text-sky-900">
                <Link to={"/services/mobile-app-development/android-application"} onClick={() => setIsOpens(false)}>
                    <h1 className='text-center p-6 text-2xl md:text-sm text-sky-900'>React JS Developers</h1>
                </Link>
            </div>
            <div class="basis-1/3 flex-initial border border-black rounded md:w-20 w-64 text-sky-900">
                <Link to={"/services/mobile-app-development/react-native-application"} onClick={() => setIsOpens(false)}>
                    <h1 className='text-center p-6 text-2xl md:text-sm text-sky-900'>Node JS Developers</h1>
                </Link>
            </div>
        </div>
        <div class="flex flex-row space-x-4 mt-10">
            <div class="basis-1/3 flex-initial border border-black rounded md:w-20 w-64 text-sky-900"  >
                <h1 className='text-center p-6 text-2xl md:text-sm text-sky-900'>
                    <Link to={"/services/mobile-app-development/ios-application"} onClick={() => setIsOpens(false)}>Angular JS DevelopersI</Link>
                </h1>
            </div>
        </div>
    </div>
        // <div className='mx-auto'>
        //     <div class="flex flex-row space-x-4 ">
        //         <div class="basis-1/2 flex-initial border border-black rounded text-sky-900"  >
        //             <h1 className='text-center p-6 text-2xl  text-sky-900'>
        //                 <Link to={"/services/mvc-frameworks/react-js"} onClick={() => setIsOpens(false)}> React JS Developers</Link>

        //             </h1>
        //         </div>
        //         <div class="basis-1/2 flex-initial border border-black rounded text-sky-900">
        //             <Link to={"/services/mvc-frameworks/vue-js"} onClick={() => setIsOpens(false)}>
        //                 <h1 className='text-center p-6 text-2xl  text-sky-900'>React JS Developers</h1>
        //             </Link>
        //         </div>

        //     </div>
        //     <div class="flex flex-row space-x-4 mt-10">
        //         <div class="basis-1/2 flex-initial border border-black rounded text-sky-900">
        //             <Link to={"/services/mvc-frameworks/node-js"} onClick={() => setIsOpens(false)}>
        //                 <h1 className='text-center p-6 text-2xl  text-sky-900'>Node JS Developers</h1>
        //             </Link>
        //         </div>
        //         <div class="basis-1/2 flex-initial border border-black rounded text-sky-900">
        //             <Link to={"/services/mvc-frameworks/angular-js"}   onClick={() => setIsOpens(false)}>
        //                 <h1 className='text-center p-6 text-2xl  text-sky-900'>Angular JS Developers</h1>
        //             </Link>
        //         </div>
        //     </div>

        // </div>
    )
}

export default MVC;

import { Link } from "react-router-dom"
const Programming = ({ setIsOpens }) => {
    return (
        <div className='mx-auto'>
            <div class="flex flex-row space-x-4 ">
                <div class="basis-1/3 flex-initial border border-black rounded md:w-20 w-64 text-sky-900"  >
                    <h1 className='text-center p-6 text-2xl md:text-sm text-sky-900'>
                        <Link to={"/services/mobile-app-development/ios-application"} onClick={() => setIsOpens(false)}> Java Developer</Link>
                    </h1>
                </div>
                <div class="basis-1/3 flex-initial border border-black rounded md:w-20 w-64 text-sky-900">
                    <Link to={"/services/mobile-app-development/android-application"} onClick={() => setIsOpens(false)}>
                        <h1 className='text-center p-6 text-2xl md:text-sm text-sky-900'>Python Developer </h1>
                    </Link>
                </div>
                <div class="basis-1/3 flex-initial border border-black rounded md:w-20 w-64 text-sky-900">
                    <Link to={"/services/mobile-app-development/react-native-application"} onClick={() => setIsOpens(false)}>
                        <h1 className='text-center p-6 text-2xl md:text-sm text-sky-900'>Go. Developer</h1>
                    </Link>
                </div>
            </div>
           

        </div>
    )
}

export default Programming;
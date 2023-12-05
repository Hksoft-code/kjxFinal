
import { Link } from "react-router-dom"
const PHP = ({ setIsOpens }) => {
    return (
        <div className='mx-auto'>
            <div class="flex flex-row space-x-4 ">
                <div class="basis-1/3 flex-initial border border-black rounded md:w-20 w-64 text-sky-900"  >
                    <h1 className='text-center p-6 text-2xl md:text-sm text-sky-900'>
                        <Link to={"/services/php-frameworks/laravel-development"} onClick={() => setIsOpens(false)}> Laravel</Link>
                    </h1>
                </div>
                <div class="basis-1/3 flex-initial border border-black rounded md:w-20 w-64 text-sky-900">
                    <Link to={"/services/php-frameworks/cake-php-framework"} onClick={() => setIsOpens(false)}>
                        <h1 className='text-center p-6 text-2xl md:text-sm text-sky-900'>CakePHP</h1>
                    </Link>
                </div>
                <div class="basis-1/3 flex-initial border border-black rounded md:w-20 w-64 text-sky-900">
                    <Link to={"/services/php-frameworks/codigniter-development"} onClick={() => setIsOpens(false)}>
                        <h1 className='text-center p-6 text-2xl md:text-sm text-sky-900'>CodeIgniter</h1>
                    </Link>
                </div>
            </div>
            <div class="flex flex-row space-x-4 mt-10">
                <div class="basis-1/2 flex-initial border border-black rounded md:w-20 w-64 text-sky-900">
                    <Link to={"/services/php-frameworks/wordpress-development"} onClick={() => setIsOpens(false)}>
                        <h1 className='text-center p-6 text-2xl md:text-sm text-sky-900'>Wordpress</h1>
                    </Link>
                </div>
                <div class="basis-1/2 flex-initial border border-black rounded md:w-20 w-64 text-sky-900">
                    <Link to={"/services/php-frameworks/shopify-development"} onClick={() => setIsOpens(false)}>
                        <h1 className='text-center p-6 text-2xl md:text-sm text-sky-900'>Shopify</h1>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default PHP;
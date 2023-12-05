import watsapp from '../../assets/otherImage/beel.png'
import watsappIcon from '../../assets/otherImage/whatsapp-button.png'

const WatsAppSection = () => {
    return (
        <div class="bg-white py-2 sm:py-2">
            <div class="mx-auto max-w-7xl px-6 lg:px-8 ">
                <div class="mx-auto bg-gradient-to-r from-lime-500 to-lime-800 mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div class="p-8 sm:p-10 lg:flex-auto">
                       
                           <img  src={watsapp} />
                       
                    </div>
                    <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div class="  py-10 text-center  lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div class="mx-auto max-w-xs px-8">
                                <p class="text-base font-semibold text-white">Chat With On</p>
                                <p class="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span class="text-5xl font-bold tracking-tight text-white">WHATSAPP</span>
                                    
                                </p>
                                 <img className='mt-6 transform transition duration-500 hover:scale-110' src={watsappIcon} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatsAppSection;
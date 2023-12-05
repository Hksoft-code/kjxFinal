

import img from "../../assets/contact.png"
import indian from "../../assets/indiaflag.png"
const ContactSection = () =>{
    
    

    return(
        <div class="bg-white py-2 sm:py-2">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto mt-16 max-w-2xl bg-gradient-to-r from-emerald-400 to-emerald-700 rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div class="p-8 sm:p-10 lg:flex-auto">
              <h3 class="text-2xl font-bold tracking-tight text-white">Say Hello!</h3>
              <p class="mt-6 text-base leading-7 text-white"> Let's Talk And Get Started.</p>
              <div class="mt-10 flex items-center gap-x-4">
                
                <div class="h-px flex-auto bg-gray-100"></div>
              </div>
              <ul role="list" class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                <li class="flex gap-x-3 text-lg font-bold text-white">
                 
                  Mail to our HR department
                </li>
                <li class="flex gap-x-3 text-lg font-bold text-white ">
                  
                  Please contact us at
                </li>
                <li class="flex gap-x-3 text-white">
                 
                  hrdepartment@kjxsofttech.com
                </li>
                <li class="flex flex-row gap-x-3 text-white">
                  <div class="h-6 w-5 -mb-2 text-white flex-none " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <img src={indian} />
                  </div>
                  (+91) 9661087999
                </li>
              </ul>
            </div>
            <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div class=" py-10 text-center  lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div class="mx-auto max-w-xs px-8 transform transition duration-500 hover:scale-110">
                 
                  <img src={img} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ContactSection;
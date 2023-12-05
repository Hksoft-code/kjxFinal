
import { Link } from "react-router-dom"
const AIMobile = ({ setIsOpens }) => {
    return (
        <div className='mx-auto'>
            <div class="flex flex-row space-x-4 ">
                <div class="basis-1/3 flex-initial border border-black rounded w-30  text-sky-900"  >
                    <h1 className='text-center p-2 text-sm text-sky-900'>
                        <Link to={"/services/ai-ml/chatbot"} onClick={() => setIsOpens(false)}> Chatbot</Link>
                    </h1>
                </div>
                <div class="basis-1/3 flex-initial border border-black rounded w-30  text-sky-900">
                    <Link to={"/services/ai-ml/machine-learning"} onClick={() => setIsOpens(false)}>
                        <h1 className='text-center p-2 text-sm  text-sky-900'>Machine Learning</h1>
                    </Link>
                </div>
                <div class="basis-1/3 flex-initial border border-black rounded w-30 text-sky-900">
                    <Link to={"/services/ai-ml/tensorflow"} onClick={() => setIsOpens(false)}>
                        <h1 className='text-center p-2 text-sm  text-sky-900'>TensorFlow</h1>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default AIMobile;
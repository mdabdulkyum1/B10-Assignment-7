import PlayerImg from '../../assets/logo.png'
import { RiDeleteBinLine } from "react-icons/ri";

function PlayerSelected() {
  return (
    <div className="flex items-center justify-between border p-6 rounded-2xl my-6">
       <div className="flex items-center gap-4">
          <img src={PlayerImg} alt="" className='rounded-2xl'/>
          <div className="">
            <h1>Darrell Steward</h1>
            <p>Left-Hand-Bat</p>
          </div>
       </div>
       <div className="">
       <RiDeleteBinLine className='text-red-500 text-2xl cursor-pointer'/>

       </div>
    </div>
  )
}

export default PlayerSelected
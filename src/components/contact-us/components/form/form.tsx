import { SAButton, SAImage, SAInput, SATextarea } from "../../../custom";
import { MdEmail } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";
import { HiOutlineIdentification } from "react-icons/hi";
import { TiPhoneOutline } from "react-icons/ti";
import chatImage from "../../../../images/chat_17302780.png";
const iconClassName = "!text-yellow-300";
const labelClassName = "!text-yellow-400";
const parentClassName = "col-span-2";
export default function Form() {
  return (
    <form className="w-full h-full  p-3 flex flex-col justify-between items-center shadow-lg neon-border">
      <div className="w-full flex justify-between items-center">
        <SAImage
          style={{ backgroundImage: `url(${chatImage})` }}
          className="w-20 h-20"
        />
        <span className="text-lg">{`We’re here to help you — get in touch with our team.`}</span>
      </div>
      <div className="grid grid-cols-2 gap-x-2 w-full h-full  justify-center items-center">
        <SAInput
          styles={{ iconClassName, labelClassName }}
          label="firstName"
          placeholder="Please Inter your firstName..."
          icon={MdPersonOutline}
        />
        <SAInput
          styles={{ iconClassName, labelClassName }}
          label="lastName"
          placeholder="Please Inter your lastName..."
          icon={HiOutlineIdentification}
        />

        <SAInput
          styles={{ iconClassName, labelClassName }}
          label="email"
          placeholder="Please Inter your email..."
          icon={MdEmail}
        />
        <SAInput
          styles={{ iconClassName, labelClassName }}
          type="number"
          label="phone"
          placeholder="Please Inter your phone..."
          icon={TiPhoneOutline}
        />
        <SATextarea
          label="message"
          rows={6}
          placeholder="Please Inter your message..."
          styles={{ labelClassName, parentClassName }}
        />
        <SAButton
          type="submit"
          className="w-1/2 btn-outline border-warning text-warning"
        >
          Submit
        </SAButton>
      </div>
    </form>
  );
}

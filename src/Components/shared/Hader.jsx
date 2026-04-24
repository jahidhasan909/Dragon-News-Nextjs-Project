import logo from '@/assets/logo.png'
import { format } from 'date-fns';
import Image from 'next/image';

const Hader = () => {
    return (
        <div className=' container mx-auto text-center my-10 space-y-3'>
            <Image className='mx-auto' src={logo} width={400} height={300} alt='logo' />
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE,MMMM dd,yyyy")}</p>
        </div>
    );
};

export default Hader;
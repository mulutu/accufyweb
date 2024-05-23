import { Button } from "@/components/ui/button"

const ERP = () => {
  return (
    <>
      <div className="flex flex-col flex-row w-full p-4">
        <div className="flex w-full">
          <div className="flex basis-1/2">
            <h1 className='items-left font-palanquin text-4xl max-sm:text-[42px] max-sm:leading-[62px] font-normal'>
              <span className='flex items-left pb-5'>
                ERP for SMEs
              </span>
              <span className='flex text-lg'>Comprehensive ERP platform to power your business.</span>
              <span className='flex text-lg'>It comes out of the box with the following features:</span>
              <ul className='custom-list'>
                <li className='flex text-lg '>Inventory Management</li>
                <li className='flex text-lg'>POS - On Web and also App (Iphone, Android)</li>
                <li className='flex text-lg'>Online Shop</li>
                <li className='flex text-lg'>Account Management</li>
                <li className='flex text-lg'>Human Resource Management</li>
                <li className='flex text-lg'>Invoicing</li>
              </ul>
            </h1>
          </div>
          <div className="flex p-5 basis-1/2">
            <img
              src="/images/ERP-1.png"
              width={600}
              className="flex flex-1/2 "
            />
          </div>
        </div>

        <div className='flex w-full'>
          <div className="flex w-full">
            <Button
              className="flex bg-black text-white border-2 border-black rounded-none w-52 right-0 top-0 mt-4 mr-4 p-6 mr-4 text-center justify-center text-lg"
            >
              Register Now
            </Button>
            <Button
              className="flex bg-white text-black border-2 border-black rounded-none w-52 hover:bg-gray-200 right-0 top-0 mt-4 mr-4 p-6 mr-4 text-center justify-center text-lg"
            >
              Start 7-day trial
            </Button>
          </div>
        </div>
      </div>

    </>
  );
};

export default ERP;

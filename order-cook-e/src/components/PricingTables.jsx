import React, { useState } from 'react';
import homeImageBackground from "../images/homeBackground.png"
import { MdDone } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'

function PricingTables() {

  const [value, setValue] = useState(true);

  const [priceOutput] = useState({
    plan1: {
      false: ['$', '10', '/mo'],
      true: ['$', '30', '/mo']
    },
    plan2: {
      false: ['$', '20', '/mo'],
      true: ['$', '50', '/mo']
    },
    plan3: {
      false: ['$', '30', '/mo'],
      true: ['$', '70', '/mo']
    }
  });

  return (
    <section className="relative min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="absolute h-auto inset-0  pt-16 object-cover box-content -z-1">
            <img className="absolute inset-0 w-full sm:h-[1200px] md:h-[900px] h-[2000px] object-cover " src={homeImageBackground} width="1440" height="2000" alt="About" />
            {/* <div className="absolute inset-0 bg-gradient-to-t  from-gray-500 dark:from-gray-900" aria-hidden="true"></div> */}
          </div>
          {/* Section header */}
          {/* <div className="max-w-3xl mx-auto text-center pb-12">
            <h1 className="h1 mb-4" data-aos="fade-up">Simple, transparent pricing</h1>
            <p className="text-xl text-gray-200" data-aos="fade-up" data-aos-delay="200">Get the Robotizia plan that fits your needs at a special introductory price.</p>
          </div> */}

          {/* Pricing tables */}
          <div>


            {/* Pricing toggle */}
            <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="400">
              <div className="inline-flex items-center">
                <div className="text-primary-600 font-medium mr-3">Billed Monthly</div>
                <div className="form-switch">
                  <input type="checkbox" name="pricing-toggle" id="pricing-toggle" className="sr-only" checked={value} onChange={() => setValue(!value)} />
                  <label className="bg-gray-600" htmlFor="pricing-toggle">
                    <span className="bg-gray-200" aria-hidden="true"></span>
                    <span className="sr-only">Enable to see yearly prices</span>
                  </label>
                </div>
                <div className="text-primary-600 font-medium ml-3">Billed Annually</div>
              </div>
            </div>
            <div className="max-w-sm rounded-md mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

              {/* Pricing table 1 */}
              <div className="relative flex flex-col h-full p-6 rounded-md backdrop-filter backdrop-blur-xl shadow-xl" data-aos="fade-up" data-aos-delay="700">
                <div className="mb-4 pb-4 border-b border-white">
                  <div className="h4 text-orange-50 mb-1">Basic Membership</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-medium text-gray-200">{priceOutput.plan1[value][0]}</span>
                    <span className="h2 text-orange-50">{priceOutput.plan1[value][1]}</span>
                    <span className="font-medium text-gray-200">{priceOutput.plan1[value][2]}</span>
                  </div>
                  <div className="text-gray-200">Ideal for individuals who want to find and dabble with new recipes.</div>
                </div>
                {/* <div className="font-medium mb-3">Features include:</div> */}
                <ul className="text-gray-200 -mb-3 grow">
                  <li className="flex items-center  mb-3">

                    <div className='border-2 bg-[#B5EEB3] border-green-600 rounded-full mr-2 '>
                      <MdDone className='text-green-600 text-xl' />
                    </div>

                    <span>Access to Cookbook</span>
                  </li>
                  <li className="flex items-center  mb-3">

                    <div className='border-2 bg-[#B5EEB3] border-green-600 rounded-full mr-2 '>
                      <MdDone className='text-green-600 text-xl' />
                    </div>

                    <span>10 Full Recipe Downloads Per Month</span>
                  </li>
                  <li className="flex items-center mb-3">

                    <div className='border-2 border-red-500 bg-[#FFBEBE] rounded-full mr-2 '>
                      <AiOutlineClose className='text-red-500 text-xl' />
                    </div>

                    <span>Post to The Chopping Block</span>
                  </li>
                  <li className="flex items-center mb-3">

                    <div className='border-2 border-red-500 mb-4 bg-[#FFBEBE] rounded-full mr-2 '>
                      <AiOutlineClose className='text-red-500 text-xl' />
                    </div>

                    <span>Edit Recipes & Create Custom Categories in Cookbook</span>
                  </li>
                  <li className="flex items-center mb-3">

                    <div className='border-2 border-red-500 mb-4 bg-[#FFBEBE] rounded-full mr-2 '>
                      <AiOutlineClose className='text-red-500 text-xl ' />
                    </div>

                    <span>Preferred Visibility on The Chopping Block</span>
                  </li>


                </ul>
                <div className=" p-3 mt-6">
                  <a className="btn-sm text-white bg-orange-50 hover:bg-orange-50 w-full" href="#0">Start free trial</a>
                </div>
              </div>

              {/* Pricing table 2 */}
              <div className="relative flex flex-col h-full p-6 rounded-md backdrop-filter backdrop-blur-xl shadow-xl" data-aos="fade-up" data-aos-delay="600">
                {/* <div className="">
                  <div className=" text-gray-300  rounded-full">Choose a plan that’s right for you</div>
                </div> */}
                <div className="mb-4 pb-4 border-b border-orange-50">
                  <div className="h4 text-orange-50 mb-1">Premium</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-medium text-gray-200">{priceOutput.plan2[value][0]}</span>
                    <span className="h2 text-orange-50">{priceOutput.plan2[value][1]}</span>
                    <span className="font-medium text-gray-200">{priceOutput.plan2[value][2]}</span>
                  </div>
                  <div className="text-gray-200">Better insights for growing businesses that want more customers.</div>
                </div>

                {/* <div className="font-medium mb-3">Features include:</div> */}
                <ul className="text-gray-200 -mb-3 grow">
                  <li className="flex items-center  mb-3">

                    <div className='border-2 bg-[#B5EEB3] border-green-600 rounded-full mr-2 '>
                      <MdDone className='text-green-600 text-xl' />
                    </div>

                    <span>Access to Cookbook</span>
                  </li>
                  <li className="flex items-center  mb-3">

                    <div className='border-2 bg-[#B5EEB3] border-green-600 rounded-full mr-2 '>
                      <MdDone className='text-green-600 text-xl' />
                    </div>

                    <span>10 Full Recipe Downloads Per Month</span>
                  </li>
                  <li className="flex items-center  mb-3">

                    <div className='border-2 bg-[#B5EEB3] border-green-600 rounded-full mr-2 '>
                      <MdDone className='text-green-600 text-xl' />
                    </div>

                    <span>Post to The Chopping Block</span>
                  </li>
                  <li className="flex items-center  mb-3">

                    <div className='border-2 bg-[#B5EEB3] mb-3 border-green-600 rounded-full mr-2 '>
                      <MdDone className='text-green-600 text-xl' />
                    </div>

                    <span>Edit Recipes & Create Custom Categories in Cookbook</span>
                  </li>

                  <li className="flex items-center mb-3">

                    <div className='border-2 border-red-500 mb-4 bg-[#FFBEBE] rounded-full mr-2 '>
                      <AiOutlineClose className='text-red-500 text-xl ' />
                    </div>

                    <span>Preferred Visibility on The Chopping Block</span>
                  </li>


                </ul>
                <div className=" p-3 mt-6">
                  <a className="btn-sm text-white bg-orange-50 hover:bg-orange-50 w-full" href="#0">Start free trial</a>
                </div>
              </div>

              {/* Pricing table 3 */}
              <div className="relative flex flex-col h-full p-6 rounded-md backdrop-filter backdrop-blur-xl shadow-xl" data-aos="fade-up" data-aos-delay="800">
                <div className="mb-4 pb-4 border-b border-orange-50">
                  <div className="h4 text-orange-50 mb-1">Advanced</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-medium text-gray-200">{priceOutput.plan3[value][0]}</span>
                    <span className="h2 text-orange-50">{priceOutput.plan3[value][1]}</span>
                    <span className="font-medium text-gray-200">{priceOutput.plan3[value][2]}</span>
                  </div>
                  <div className="text-gray-200">Better insights for growing businesses that want more customers.</div>
                </div>
                <ul className="text-gray-200 -mb-3 grow">
                  <li className="flex items-center  mb-3">

                    <div className='border-2 bg-[#B5EEB3] border-green-600 rounded-full mr-2 '>
                      <MdDone className='text-green-600 text-xl' />
                    </div>

                    <span>Access to Cookbook</span>
                  </li>
                  <li className="flex items-center  mb-3">

                    <div className='border-2 bg-[#B5EEB3] border-green-600 rounded-full mr-2 '>
                      <MdDone className='text-green-600 text-xl' />
                    </div>

                    <span>10 Full Recipe Downloads Per Month</span>
                  </li>
                  <li className="flex items-center  mb-3">

                    <div className='border-2 bg-[#B5EEB3] border-green-600 rounded-full mr-2 '>
                      <MdDone className='text-green-600 text-xl' />
                    </div>

                    <span>Post to The Chopping Block</span>
                  </li>
                  <li className="flex items-center  mb-3">

                    <div className='border-2 bg-[#B5EEB3] mb-3 border-green-600 rounded-full mr-2 '>
                      <MdDone className='text-green-600 text-xl' />
                    </div>

                    <span>Edit Recipes & Create Custom Categories in Cookbook</span>
                  </li>
                  <li className="flex items-center  mb-3">

                    <div className='border-2 bg-[#B5EEB3] mb-3 border-green-600 rounded-full mr-2 '>
                      <MdDone className='text-green-600 text-xl' />
                    </div>

                    <span>Preferred Visibility on The Chopping Block</span>
                  </li>




                </ul>
                <div className=" p-3 mt-6">
                  <a className="btn-sm text-white bg-orange-50 hover:bg-orange-50 w-full" href="#0">Start free trial</a>
                </div>
              </div>

            </div>

            {/* Bottom infobox */}
            {/* <div className="flex flex-col lg:flex-row justify-between items-center mt-12 lg:mt-6 lg:py-8 lg:border-t lg:border-b lg:border-gray-800">
              <div className="font-medium text-lg text-center lg:text-left mb-4 lg:mb-0">Expecting more than 1000 Active End Users?</div>
              <div>
                <a className="btn-sm text-white bg-orange-50 hover:bg-orange-50" href="#0">Contact us</a>
              </div>
            </div> */}

          </div>

        </div>
      </div>
    </section>
  );
}

export default PricingTables;

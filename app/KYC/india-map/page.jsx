'use client';

import Link from 'next/link';
import IndiaMap from 'react-svg-indiamap';

const India = () => {


  const data = [

    { country: 'in', value: 1311559204 }, // india
    
  ];

  return (
    <div className='xxl:col-span-6 xl:col-span-12 md:col-span-12 col-span-12'>
      <div className='box'>
        <div className='box-header justify-between'>
          <div className='box-title'>Visitors By Countries</div>
          <div className='hs-dropdown ti-dropdown'>
            <Link
              aria-label='anchor'
              href='#!'
              className='flex items-center justify-center w-[1.75rem] h-[1.75rem] !!text-defaulttextcolortextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium'
              aria-expanded='false'
            >
              <i className='fe fe-more-vertical text-[0.8rem]'></i>
            </Link>
            <ul className='hs-dropdown-menu ti-dropdown-menu hidden'>
              <li>
                <Link
                  className='ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block'
                  href='#!'
                >
                  Action
                </Link>
              </li>
              <li>
                <Link
                  className='ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block'
                  href='#!'
                >
                  Another action
                </Link>
              </li>
              <li>
                <Link
                  className='ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block'
                  href='#!'
                >
                  Something else here
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='box-body !p-0'>
          <div className='grid grid-cols-12 gap-x-4'>
            <div className='xxl:col-span-4 xl:col-span-12  col-span-12 sales-visitors-countries'>
              <div className='mt-2'>
                <ul className='list-none p-6 my-auto'>
                  <li className='mb-4'>
                    <span className='text-[0.75rem]'>
                      <i className='ri-checkbox-blank-circle-fill align-middle me-2 inline-block text-primary'></i>
                      Usa
                    </span>
                    <span className='font-semibold ltr:float-right rtl:float-left'>
                      3,201
                    </span>
                  </li>
                  <li className='mb-4'>
                    <span className='text-[0.75rem]'>
                      <i className='ri-checkbox-blank-circle-fill align-middle me-2 inline-block text-secondary'></i>
                      India
                    </span>
                    <span className='font-semibold ltr:float-right rtl:float-left'>
                      2,345
                    </span>
                  </li>
                  <li className='mb-4'>
                    <span className='text-[0.75rem]'>
                      <i className='ri-checkbox-blank-circle-fill align-middle me-2 inline-block text-danger'></i>
                      Vatican City
                    </span>
                    <span className='font-semibold ltr:float-right rtl:float-left'>
                      106
                    </span>
                  </li>
                  <li className='mb-4'>
                    <span className='text-[0.75rem]'>
                      <i className='ri-checkbox-blank-circle-fill align-middle me-2 inline-block text-info'></i>
                      Canada
                    </span>
                    <span className='font-semibold ltr:float-right rtl:float-left'>
                      2,857
                    </span>
                  </li>
                  <li className='mb-4'>
                    <span className='text-[0.75rem]'>
                      <i className='ri-checkbox-blank-circle-fill align-middle me-2 inline-block text-orange'></i>
                      Mauritius
                    </span>
                    <span className='font-semibold ltr:float-right rtl:float-left'>
                      169
                    </span>
                  </li>
                  <li className='mb-4'>
                    <span className='text-[0.75rem]'>
                      <i className='ri-checkbox-blank-circle-fill align-middle me-2 inline-block text-warning'></i>
                      Singapore
                    </span>
                    <span className='font-semibold ltr:float-right rtl:float-left'>
                      1,950
                    </span>
                  </li>
                  <li className='mb-4'>
                    <span className='text-[0.75rem]'>
                      <i className='ri-checkbox-blank-circle-fill align-middle me-2 inline-block text-success'></i>
                      Palau
                    </span>
                    <span className='font-semibold ltr:float-right rtl:float-left'>
                      224
                    </span>
                  </li>
                  <li className='mb-4'>
                    <span className='text-[0.75rem]'>
                      <i className='ri-checkbox-blank-circle-fill align-middle me-2 inline-block text-pink'></i>
                      Maldives
                    </span>
                    <span className='font-semibold ltr:float-right rtl:float-left'>
                      147
                    </span>
                  </li>
                  <li className='mb-0'>
                    <span className='text-[0.75rem]'>
                      <i className='ri-checkbox-blank-circle-fill align-middle me-2 inline-block'></i>
                      São Tomé and Príncipe
                    </span>
                    <span className='font-semibold ltr:float-right rtl:float-left'>
                      182
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='xxl:col-span-8 xl:col-span-12  col-span-12 text-center'>
              <div id='visitors-countries'>
                {clientRender && (
                  <IndiaMap
                    color='#5a66f1'
                    tooltipBgColor='#5a66f1'
                    value-suffix='people'
                    size='lg'
                    data={data}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default India;

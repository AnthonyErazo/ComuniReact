import React from 'react'
import DashboardLayout from './DashboardLayout'
import Breadcrumb from './Breadcrumb';

export default function AllGroups() {
  const brandData = [
    {
      logo: "https://via.placeholder.com/150",
      name: 'Google',
      visitors: 3.5,
      revenues: '5,768',
      sales: 590,
      conversion: 4.8,
    },
    {
      logo: "https://via.placeholder.com/150",
      name: 'Twitter',
      visitors: 2.2,
      revenues: '4,635',
      sales: 467,
      conversion: 4.3,
    },
    {
      logo: "https://via.placeholder.com/150",
      name: 'Github',
      visitors: 2.1,
      revenues: '4,290',
      sales: 420,
      conversion: 3.7,
    },
    {
      logo: "https://via.placeholder.com/150",
      name: 'Vimeo',
      visitors: 1.5,
      revenues: '3,580',
      sales: 389,
      conversion: 2.5,
    },
    {
      logo: "https://via.placeholder.com/150",
      name: 'Facebook',
      visitors: 3.5,
      revenues: '6,768',
      sales: 390,
      conversion: 4.2,
    },
  ];
  return (
    <DashboardLayout>
      <Breadcrumb pageName="All Groups" />

      <div className="rounded-sm border  px-5 pt-6 pb-2.5 shadow-default border-strokedark bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold  text-white">
          Top Channels
        </h4>

        <div className="flex flex-col text-white">
          <div className="grid grid-cols-3 rounded-sm  bg-meta-4 sm:grid-cols-5">
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Name
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Description
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Link Facebook
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Link Instagram
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Background Image
              </h5>
            </div>
          </div>

          {brandData.map((brand, key) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-5 ${key === brandData.length - 1
                ? ''
                : 'border-b  border-strokedark'
                }`}
              key={key}
            >
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="h-15 w-15 flex items-center justify-center rounded-full overflow-hidden">
                  <img src={brand.logo} alt="profile" />
                </div>
                <p className="hidden  text-white sm:block">
                  {brand.name}
                </p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className=" text-white">{brand.visitors}K</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-5">${brand.revenues}</p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-meta-5">{brand.sales}</p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <img src={brand.logo} className='h-20 w-20' alt="profile" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
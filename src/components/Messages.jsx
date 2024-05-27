import React from 'react'
import DashboardLayout from './DashboardLayout'
import Breadcrumb from './Breadcrumb'
import Table from './Table'

export default function Messages() {
  const packageData = [
    {
        name: 'Free package',
        price: 0.0,
        invoiceDate: `Jan 13,2023`,
        status: 'Paid',
    },
    {
        name: 'Standard Package',
        price: 59.0,
        invoiceDate: `Jan 13,2023`,
        status: 'Paid',
    },
    {
        name: 'Business Package',
        price: 99.0,
        invoiceDate: `Jan 13,2023`,
        status: 'Unpaid',
    },
    {
        name: 'Standard Package',
        price: 59.0,
        invoiceDate: `Jan 13,2023`,
        status: 'Pending',
    },
];
const columns=["Name","Email","Message","Actions"]
  return (
    <DashboardLayout>
      <Breadcrumb pageName="Messages" />
			<div className="flex flex-col gap-10">
				<Table columns={columns} packageData={packageData}/>
			</div>
    </DashboardLayout>
  )
}

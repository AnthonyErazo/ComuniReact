import React from 'react'
import Breadcrumb from './Breadcrumb'
import Table from './Table'
import DashboardLayout from './DashboardLayout'


export default function Users() {
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
	const columns=["Name Group","Description","Images","Links","Actions"]
	return (
		<DashboardLayout>
			<Breadcrumb pageName="New Users" />
			<div className="flex flex-col gap-10">
				<Table packageData={packageData} columns={columns} change/>
			</div>
		</DashboardLayout>
	)
}

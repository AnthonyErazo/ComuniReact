import React from 'react'
import DashboardLayout from './DashboardLayout'
import Breadcrumb from './Breadcrumb'
import Pagination from './Pagination'

export default function AllNotices() {
  return (
    <DashboardLayout>
      <Breadcrumb pageName="All Notices" />
      <Pagination />
    </DashboardLayout>
  )
}

import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineAnnotation, HiOutlineCog, HiOutlineDocumentText, HiOutlineLogout, HiOutlineQuestionMarkCircle, HiOutlineViewGrid, HiUserGroup } from 'react-icons/hi'
import { FaNewspaper, FaUsersCog } from 'react-icons/fa'
import { RiGroup2Fill } from 'react-icons/ri'
export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/dashboard',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'myGroup',
		label: 'My Group',
		path: '/dashboard/myGroup',
		icon: <HiUserGroup />
	},
	{
		key: 'notices',
		label: 'Notices',
		path: '/dashboard/notices',
		icon: <FaNewspaper />
	},
	{
		key: 'users',
		label: 'Users',
		path: '/dashboard/users',
		icon: <FaUsersCog />
	},
	{
		key: 'allGroups',
		label: 'All Groups',
		path: '/dashboard/allGroups',
		icon: <RiGroup2Fill />
	},
	{
		key:'allNotices',
		label: 'All Notices',
		path: '/dashboard/allNotices',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/dashboard/messages',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/dashboard/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/dashboard/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]

const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
	return (
		<div className="bg-neutral-900 w-60 p-3 flex flex-col">
			<div className="flex items-center gap-2 px-1 py-3">
				<div
					className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
					style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }}
				>
					<span className="sr-only">Marc Backes</span>
				</div>
				<p className='text-white'></p>
			</div>
			<div className="py-8 flex flex-1 flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
			<div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
				<div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Logout
				</div>
			</div>
		</div>
	)
}

function SidebarLink({ link }) {
	const { pathname } = useLocation()

	return (
		<Link
			to={link.path}
			className={classNames(pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
		>
			<span className="text-xl">{link.icon}</span>
			{link.label}
		</Link>
	)
}

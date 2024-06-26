import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import SidebarLinkGroup from './SidebarLinkGroup';
import { MdGroups, MdOutlineDashboard } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { FaRegNewspaper } from 'react-icons/fa';
import { GiPapers } from 'react-icons/gi';
import { HiMiniUserGroup } from 'react-icons/hi2';
import { TiGroup } from 'react-icons/ti';
import { CgProfile } from 'react-icons/cg';
import { LuMessagesSquare } from 'react-icons/lu';
import { TbLogout2 } from 'react-icons/tb';
import { FaUsersBetweenLines } from 'react-icons/fa6';
import { user } from '../assets';
import { useAuth } from '../context/AuthContext';

export default function DashboardMain({ sidebarOpen, setSidebarOpen }) {
    const location = useLocation();
    const {user:dataUser,authLogout}=useAuth();
    const { pathname } = location;

    const trigger = useRef(null);
    const sidebar = useRef(null);

    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
    );

    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!sidebar.current || !trigger.current) return;
            if (
                !sidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setSidebarOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    useEffect(() => {
        localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
        if (sidebarExpanded) {
            document.querySelector('body').classList.add('sidebar-expanded');
        } else {
            document.querySelector('body').classList.remove('sidebar-expanded');
        }
    }, [sidebarExpanded]);

    const handleLogout = (e) => {
        e.preventDefault();
        authLogout()
    };
    return (
        <aside
            ref={sidebar}
            className={`absolute left-0 top-0 z-99 mt-[2vh] lg:mt-0 flex h-[98vh] lg:h-screen w-full lg:w-80 flex-col overflow-y-hidden duration-300 bg-boxdark ease-linear lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
        >
            <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
                <NavLink to={dataUser.role=='user'?dataUser?.group?.name?'/dashboard/profile':'/dashboard/myGroup':'/dashboard/messages'} className="flex items-center mt-8 gap-3">
                    <div className="h-16 w-16 flex items-center justify-center bg-gray-200 rounded-full overflow-hidden">
                        <img className='h-full w-full object-cover' src={dataUser?.group?.img.ref||user} alt="profile" />
                    </div>
                    <p className='w-40 text-white'>{dataUser.role=='user'?dataUser?.group?.name||'Crea tu grupo':dataUser.name}</p>
                </NavLink>

                <button
                    ref={trigger}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls="sidebar"
                    aria-expanded={sidebarOpen}
                    className="block lg:hidden"
                >
                </button>
            </div>

            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
                    <div>
                        <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                            MENU
                        </h3>

                        <ul className="mb-6 flex flex-col gap-1.5">
                            {dataUser.role=='user'&&<>
                                <SidebarLinkGroup
                                    activeCondition={
                                        pathname === '/dashboard' || (pathname.includes('/inicio') || pathname.includes('myGroup') || pathname.includes('myNotices'))
                                    }
                                >
                                    {(handleClick, open) => {
                                        return (
                                            <>
                                                <NavLink
                                                    to="#"
                                                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-meta-4 ${(pathname === '/dashboard' ||
                                                        (pathname.includes('/inicio') || pathname.includes('myGroup') || pathname.includes('myNotices'))) &&
                                                        'bg-meta-4'
                                                        }`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        sidebarExpanded
                                                            ? handleClick()
                                                            : setSidebarExpanded(true);
                                                    }}
                                                >
                                                    <MdOutlineDashboard className='w-5' />
                                                    Dashboard
                                                    <IoIosArrowDown className='w-5' />
                                                </NavLink>
                                                <div
                                                    className={`translate transform overflow-hidden ${!open && 'hidden'
                                                        }`}
                                                >
                                                    <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                                                        <li>
                                                            <NavLink
                                                                to="/dashboard/inicio"
                                                                className={({ isActive }) =>
                                                                    'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                                                    (isActive && '!text-white')
                                                                }
                                                            >
                                                                <IoHomeOutline className='w-5' />
                                                                Inicio
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink
                                                                to="/dashboard/myGroup"
                                                                className={({ isActive }) =>
                                                                    'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                                                    (isActive && '!text-white')
                                                                }
                                                            >
                                                                <MdGroups className='w-5' />
                                                                My Group
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink
                                                                to="/dashboard/myNotices"
                                                                className={({ isActive }) =>
                                                                    'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                                                    (isActive && '!text-white')
                                                                }
                                                            >
                                                                <FaRegNewspaper className='w-5' />
                                                                My Notices
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </>
                                        );
                                    }}
                                </SidebarLinkGroup>
                                <li>
                                    <NavLink
                                        to="/dashboard/profile"
                                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-meta-4 ${pathname == '/dashboard/profile' && 'bg-meta-4'
                                            }`}
                                    >
                                        <CgProfile className='w-5' />
                                        Profile
                                    </NavLink>
                                </li>
                            </>}

                            {dataUser.role == 'admin' && <>
                                <SidebarLinkGroup
                                    activeCondition={
                                        pathname === '/dashboard/groups' || (pathname.includes('allGroups') || pathname.includes('allNotices'))
                                    }
                                >
                                    {(handleClick, open) => {
                                        return (
                                            <>
                                                <NavLink
                                                    to="#"
                                                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-meta-4 ${(pathname === '/forms' ||
                                                        (pathname.includes('allGroups') || pathname.includes('allNotices'))) &&
                                                        'bg-meta-4'
                                                        }`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        sidebarExpanded
                                                            ? handleClick()
                                                            : setSidebarExpanded(true);
                                                    }}
                                                >
                                                    <TiGroup className='w-5' />
                                                    Groups
                                                    <IoIosArrowDown className='w-5' />
                                                </NavLink>
                                                <div
                                                    className={`translate transform overflow-hidden ${!open && 'hidden'
                                                        }`}
                                                >
                                                    <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                                                        <li>
                                                            <NavLink
                                                                to="/dashboard/groups/allGroups"
                                                                className={({ isActive }) =>
                                                                    'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                                                    (isActive && '!text-white')
                                                                }
                                                            >
                                                                <HiMiniUserGroup className='w-5' />
                                                                All Groups
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink
                                                                to="/dashboard/groups/allNotices"
                                                                className={({ isActive }) =>
                                                                    'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                                                    (isActive && '!text-white')
                                                                }
                                                            >
                                                                <GiPapers className='w-5' />
                                                                All Notices
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </>
                                        );
                                    }}
                                </SidebarLinkGroup>
                                <li>
                                    <NavLink
                                        to="/dashboard/users"
                                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-meta-4 ${pathname === '/dashboard/users' && 'bg-meta-4'
                                            }`}
                                    >
                                        <FaUsersBetweenLines className='w-5' />
                                        Users
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/messages"
                                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-meta-4 ${pathname === '/dashboard/messages' &&
                                            'bg-meta-4'
                                            }`}
                                    >
                                        <LuMessagesSquare className='w-5' />
                                        Messages
                                    </NavLink>
                                </li>
                            </>}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                            OTHERS
                        </h3>

                        <ul className="mb-6 flex flex-col gap-1.5" onClick={handleLogout}>
                            <li>
                                <NavLink
                                    to="/"
                                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-meta-4 `}
                                >
                                    <TbLogout2 className='w-5' />
                                    Logout
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </aside>
    );
};


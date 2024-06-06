import React, { useEffect, useState } from 'react'
import DashboardLayout from './DashboardLayout'
import Breadcrumb from './Breadcrumb'
import Pagination from './PaginationNumber'
import { addNoticeImage, eliminatedNoticeImage, getMyGroup, getNotices } from '../services/groupService';
import { background, backgroundNotice, user } from '../assets';
import { BiTrash } from 'react-icons/bi';
import NoticeSectionDashboard from './NoticeSectionDashboard';
import { useModal } from '../context/ModalContext';

export default function Notices() {
  const [loading, setLoading] = useState(true);
  const [loadingSection,setLoadingSection] = useState(true);
  const [noticeImage, setNoticeImage] = useState(backgroundNotice);
  const [noticeFile, setNoticeFile] = useState(null);
  const [idGroup, setIdGroup] = useState(null);
  const {openModal}=useModal()
  useEffect(() => {
    const fecthMyNotices = async () => {
      try {
        setLoadingSection(true)
        setLoading(true)
        const data = await getMyGroup()
        setIdGroup(data.payload._id)
      } catch (error) {
        console.error('Error fetching my group:', error)
      } finally {
        setLoading(false)
        setLoadingSection(false)
      }

    }
    fecthMyNotices()
  }, []);
  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
      setNoticeFile(e.target.files[0]);
    }
  };
  const handleCancelNotice = (e) => {
    e.preventDefault()
    setNoticeImage(backgroundNotice);
    setNoticeFile(null);
  };
  const handleSubmitNotice = async (e) => {
    e.preventDefault()
    if (!noticeFile) {
      alert('Please select a different image before saving.');
      return;
    }

    const images = new FormData();
    images.append('file', noticeFile);

    try {
      setLoading(true);
      const dataNotices = await addNoticeImage(images);
      console.log(dataNotices);
    } catch (error) {
      console.error('Error adding notice image:', error);
    } finally {
      setNoticeImage(backgroundNotice);
      setNoticeFile(null);
      setLoading(false);
    }
  };
  if(loading||loadingSection) return <>Loading...</>
  return (
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="My Notices" />
        <div className="mb-6 rounded-sm border  shadow-default border-strokedark bg-boxdark">
          <div className="border-b  py-4 px-7 border-strokedark">
            <h3 className="font-medium  text-white">
              Your Notice
            </h3>
          </div>
          <div className="p-7">
            <form action='#'>

              <div className='flex items-center mb-2 sm:flex-row flex-col'>
                <div
                  id="FileUpload"
                  className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary  py-4 px-4 bg-meta-4 sm:py-7.5"
                >
                  <input
                    type="file"
                    name="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, setNoticeImage)}
                    className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                  />
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border  border-strokedark bg-boxdark">
                      <div className='w-8 h-8'>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                            fill="#3C50E0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                            fill="#3C50E0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                            fill="#3C50E0"
                          />
                        </svg>
                      </div>
                    </span>
                    <p>
                      <span className="text-primary">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                    <p>(max, 800 X 800px)</p>
                  </div>
                </div>
                <div className='m-1 border border-dashed  py-2 px-2 bg-meta-4 sm:py-7.5'>
                  <img src={noticeImage} className='h-full' alt="Notice" />
                </div>
              </div>

              <div className="flex justify-end gap-4.5 items-center">
                <button
                  className="flex justify-center rounded borderpy-2 px-6 font-medium hover:shadow-1 border-strokedark text-white"
                  onClick={handleCancelNotice}
                >
                  Cancel
                </button>
                <button
                  className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                  
                  onClick={openModal}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
        <NoticeSectionDashboard idGroup={idGroup} setLoadingSection={setLoadingSection}/>
      </div>
  )
}

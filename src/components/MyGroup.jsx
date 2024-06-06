import React, { useEffect, useState } from 'react'
import DashboardLayout from './DashboardLayout'
import Breadcrumb from './Breadcrumb'
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io'
import { AiFillEdit } from 'react-icons/ai'
import { background, user } from '../assets'
import { addBackgroundGroup, addImageGroup, getMyGroup, updateGroup } from '../services/groupService'
import Loading from './Loading'
import { useModal } from '../context/ModalContext'
import { useAlert } from '../context/AlertContext'

export default function MyGroup() {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [backgroundFile, setBackgroundFile] = useState(null);
  const [profileFile, setProfileFile] = useState(null);
  const [loading, setLoading] = useState(true)
  const [myGroup, setMyGroup] = useState(null)
  const { openModal } = useModal();
  const { addAlert } = useAlert();
  const [formData, setFormData] = useState({
    name: '',
    linkFacebook: '',
    linkWhatsapp: '',
    linkInstagram: '',
    description: ''
  });

  const handleImageChange = (e, setImage,setFile) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
      setFile(e.target.files[0])
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    const fecthUpdategroup=async ()=>{
      try{
        setLoading(true)
        const data=await updateGroup(myGroup._id,formData)
        console.log(data)
      }catch (error){
        console.error('Error fetching my group:', error)
      }finally{
        setLoading(false)
      }
    }
    fecthUpdategroup()
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCancel = (e) => {
    e.preventDefault()
    setFormData({
      name: myGroup.name,
      linkFacebook: myGroup.linkFacebook,
      linkWhatsapp: myGroup.linkWhatsapp,
      linkInstagram: myGroup.linkInstagram,
      description: myGroup.description
    });
  };
  const handleCancelBackground = (e) => {
    e.preventDefault()
    setBackgroundImage(myGroup.background.ref);
    setBackgroundFile(null)
  };
  const handleCancelProfile = (e) => {
    e.preventDefault()
    setProfileImage(myGroup.img.ref);
    setProfileFile(null)
  };
  const handleChangeBackground = async (e) => {
    e.preventDefault()
    if (!backgroundFile) {
      alert('Please select a different image before saving.');
      return;
    }

    const images = new FormData();
    images.append('file', backgroundFile);

    try {
      setLoading(true);
      const dataBackground = await addBackgroundGroup(images);
      console.log(dataBackground);
    } catch (error) {
      console.error('Error adding notice image:', error);
    } finally {
      setBackgroundFile(null);
      setLoading(false);
    }
  };
  const handleChangeProfile = async (e) => {
    e.preventDefault()
    if (!profileFile) {
      alert('Please select a different image before saving.');
      return;
    }

    const images = new FormData();
    images.append('file', profileFile);

    try {
      setLoading(true);
      const dataProfile = await addImageGroup(images);
      console.log(dataProfile);
    } catch (error) {
      console.error('Error adding notice image:', error);
    } finally {
      setProfileFile(null);
      setLoading(false);
    }
  };
  useEffect(() => {
    const fecthMyGroup = async () => {
      try {
        setLoading(true)
        const data = await getMyGroup()
        setBackgroundImage(data?.payload?.background?.ref||background)
        setProfileImage(data?.payload?.img?.ref||user)
        setMyGroup(data.payload)
        console.log(data.payload)
        setFormData({
          name: data.payload.name,
          linkFacebook: data.payload.linkFacebook,
          linkWhatsapp: data.payload.linkWhatsapp,
          linkInstagram: data.payload.linkInstagram,
          description: data.payload.description
        })
      } catch (error) {
        console.error('Error fetching my group:', error)
      } finally {
        setLoading(false)
      }

    }
    fecthMyGroup()
  }, [])
  if (loading) return <Loading />
  return (
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="My Group" />

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border shadow-default border-strokedark bg-boxdark">
              <div className="border-b py-4 px-7 border-strokedark">
                <h3 className="font-medium text-white">
                  Group Information
                </h3>
              </div>
              <div className="p-7">
                <form onSubmit={handleSubmit}>
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-white"
                      htmlFor="name"
                    >
                      Name Group
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-4">
                        <svg
                          className="fill-current"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.72039 12.887C4.50179 12.1056 5.5616 11.6666 6.66667 11.6666H13.3333C14.4384 11.6666 15.4982 12.1056 16.2796 12.887C17.061 13.6684 17.5 14.7282 17.5 15.8333V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0655C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0655C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2.5 17.9602 2.5 17.5V15.8333C2.5 14.7282 2.93899 13.6684 3.72039 12.887Z"
                              fill="white"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.99967 3.33329C8.61896 3.33329 7.49967 4.45258 7.49967 5.83329C7.49967 7.214 8.61896 8.33329 9.99967 8.33329C11.3804 8.33329 12.4997 7.214 12.4997 5.83329C12.4997 4.45258 11.3804 3.33329 9.99967 3.33329ZM5.83301 5.83329C5.83301 3.53211 7.69849 1.66663 9.99967 1.66663C12.3009 1.66663 14.1663 3.53211 14.1663 5.83329C14.1663 8.13448 12.3009 9.99996 9.99967 9.99996C7.69849 9.99996 5.83301 8.13448 5.83301 5.83329Z"
                              fill="white"
                            />
                          </g>
                        </svg>
                      </span>
                      <input
                        className="w-full rounded border py-3 pl-11.5 pr-4.5 focus-visible:outline-none border-strokedark bg-meta-4 text-white focus:border-primary"
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="My group"
                      />
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-white"
                      htmlFor="linkFacebook"
                    >
                      Link Facebook
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-4">
                        <FaFacebookF className='fill-white' />
                      </span>
                      <input
                        className="w-full rounded border py-3 pl-11.5 pr-4.5 focus-visible:outline-none border-strokedark bg-meta-4 text-white focus:border-primary"
                        type="text"
                        value={formData.linkFacebook}
                        name="linkFacebook"
                        onChange={handleChange}
                        id="linkFacebook"
                        placeholder="https://www.facebook.com/"
                      />
                    </div>
                  </div>
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-white"
                      htmlFor="linkWhatsapp"
                    >
                      Link Whatsapp
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-4">
                        <FaWhatsapp className='fill-white' />
                      </span>
                      <input
                        className="w-full rounded border py-3 pl-11.5 pr-4.5 focus-visible:outline-none border-strokedark bg-meta-4 text-white focus:border-primary"
                        type="text"
                        value={formData.linkWhatsapp}
                        name="linkWhatsapp"
                        onChange={handleChange}
                        id="linkWhatsapp"
                        placeholder="https://wa.me/"
                      />
                    </div>
                  </div>
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-white"
                      htmlFor="linkInstagram"
                    >
                      Link Instagram
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-4">
                        <IoLogoInstagram className='fill-white' />
                      </span>
                      <input
                        className="w-full rounded border py-3 pl-11.5 pr-4.5 focus-visible:outline-none border-strokedark bg-meta-4 text-white focus:border-primary"
                        type="text"
                        value={formData.linkInstagram}
                        onChange={handleChange}
                        name="linkInstagram"
                        id="linkInstagram"
                        placeholder="https://www.instagram.com/"
                      />
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-white"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-4">
                        <AiFillEdit className='fill-white' />
                      </span>

                      <textarea
                        className="w-full rounded border py-3 pl-11.5 pr-4.5 focus-visible:outline-none border-strokedark bg-meta-4 text-white focus:border-primary"
                        name="description"
                        id="description"
                        onChange={handleChange}
                        value={formData.description}
                        rows={6}
                        placeholder="Write your description here"
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded border  py-2 px-6 font-medium hover:shadow-1 border-strokedark text-white"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                    <button
                      className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-span-5 xl:col-span-2 m-auto w-full">
            <div className="rounded-sm border  shadow-default border-strokedark bg-boxdark">
              <div className="border-b  py-4 px-7 border-strokedark">
                <h3 className="font-medium  text-white">
                  Your Photo
                </h3>
              </div>
              <div className="p-7">
                <form onSubmit={handleChangeProfile}>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-14 w-14 rounded-full">
                      <div className="h-full w-full flex items-center justify-center rounded-full overflow-hidden">
                        <img
                          src={profileImage}
                          alt={myGroup?.img?.name || 'profile'} />
                      </div>
                    </div>
                    <div>
                      <span className="mb-1.5  text-white">
                        Edit your photo
                      </span>
                    </div>
                  </div>
                  <div
                    id="FileUpload"
                    className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary  py-4 px-4 bg-meta-4 sm:py-7.5"
                  >
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, setProfileImage,setProfileFile)}
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

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded borderpy-2 px-6 font-medium hover:shadow-1 border-strokedark text-white"
                      onClick={handleCancelProfile}
                    >
                      Cancel
                    </button>
                    <button
                      className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-span-5">
            <div className="overflow-hidden rounded-sm border shadow-default border-strokedark bg-boxdark">
              <div className="border-b  py-4 px-7 border-strokedark">
                <h3 className="font-medium  text-white">
                  Your Background Image
                </h3>
              </div>
              <div className="relative z-20 h-35 md:h-65">
                <img
                  src={backgroundImage}
                  alt={myGroup?.background?.name || 'background'}
                  className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
                />
              </div>
              <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">

                <div className="mt-4">

                  <div className="mt-6.5">
                    <form onSubmit={handleChangeBackground}>
                      <div className="mb-4 flex items-center gap-3">
                        <div>
                          <span className="mb-1.5  text-white">
                            Edit your Background Image
                          </span>
                        </div>
                      </div>
                      <div
                        id="FileUpload"
                        className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary  py-4 px-4 bg-meta-4 sm:py-7.5"
                      >
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageChange(e, setBackgroundImage,setBackgroundFile)}
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
                          <p>(max, 1920 X 1080px)</p>
                        </div>
                      </div>

                      <div className="flex justify-end gap-4.5">
                        <button
                          className="flex justify-center rounded borderpy-2 px-6 font-medium hover:shadow-1 border-strokedark text-white"
                          onClick={handleCancelBackground}
                        >
                          Cancel
                        </button>
                        <button
                          className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                          type="submit"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

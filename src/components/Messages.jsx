import React, { useEffect, useState } from 'react'
import Breadcrumb from './Breadcrumb'
import PaginationNumber from './PaginationNumber';
import { FaTrash } from 'react-icons/fa';
import { deleteMessage, getMessages, responseMessage } from '../services/messages';
import { BiMessageAdd } from 'react-icons/bi';
import Loading from './Loading';
import { useAlert } from '../context/AlertContext';
import { useModal } from '../context/ModalContext';

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(null)
  const [page, setPage] = useState(1)
  const { addAlert } = useAlert()
  const { openModal } = useModal()

  const fecthMessages = async () => {
    try {
      const data = await getMessages(5, page)
      if (data.payload.length == 0 && page > 1) {
        setPage(page - 1)
      }
      setTotalPages(data.totalPages)
      setMessages(data.payload);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true)
    fecthMessages();
  }, [page]);
  const handleDeleteMessage = (mid) => {
    const fecthDeleteMessage = async () => {
      try {
        setLoading(true)
        const data = await deleteMessage(mid)
        addAlert('success', data.message)
      } catch (error) {
        console.error('Error fetching delete message:', error);
        addAlert('error', error.response.data.message)
      } finally {
        fecthMessages()
      }
    };

    fecthDeleteMessage();
  }
  const handleResponseMessage = (mid,message) => {
    const fecthResponseMessages = async () => {
      try {
        setLoading(true)
        const data = await responseMessage(mid, { message })
        addAlert('success', data.message)
      } catch (error) {
        console.error('Error fetching groups:', error);
        addAlert('success', error.response.data.message)
      } finally {
        setLoading(false)
      }
    };

    fecthResponseMessages();
  }
  const columns = ["Name", "Email", "Message", "Actions"]
  if (loading) return <Loading dashboard />
  return (
    <>
      <Breadcrumb pageName="Messages" />
      <div className="flex flex-col gap-10">
        <PaginationNumber totalPages={totalPages} page={page} setPage={setPage} />
        <div className="rounded-sm border px-5 pt-6 pb-2.5 shadow-default border-strokedark bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className=" text-left bg-meta-4">
                  {columns.map((colum, index) => (
                    <th key={index} className="min-w-[220px] py-4 px-4 font-medium  text-white xl:pl-11">
                      {colum}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {messages.map((message, key) => (
                  <tr key={key}>
                    <td className="border-b  py-5 px-4 pl-9 border-strokedark xl:pl-11">
                      <h5 className="font-medium  text-white">
                        {message.name}
                      </h5>
                    </td>
                    <td className="border-b  py-5 px-4 border-strokedark">
                      <p className=" text-white">
                        {message.email}
                      </p>
                    </td>
                    <td className="border-b  py-5 px-4 border-strokedark">
                      <p className="text-white h-30 w-full scroll-py-px overflow-y-auto scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
                        {message.message}
                      </p>
                    </td>
                    <td className="border-b  py-5 px-4 border-strokedark">
                      <div className="flex items-center space-x-3.5 gap-5 justify-center">
                        <button onClick={() => openModal(
                          {
                            title: 'Escriba el mensaje',
                            body: <textarea name='responseMessage' id='responseMessage' className='w-60 sm:w-90 h-70 m-auto items-center justify-center ' placeholder='Escribe tu respuesta...' />
                          },
                          () => handleResponseMessage(message._id,document.getElementById('responseMessage').value))
                        } className="hover:text-primary">
                          <BiMessageAdd className='fill-white' />
                        </button>
                        <button onClick={() => openModal( {
                          title:'Eliminar mensaje',
                          body:'¿Quiere eliminar este mensaje?'
                        },
                          ()=>handleDeleteMessage(message._id))
                          } className="hover:text-primary">
                          <FaTrash className='fill-white' />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

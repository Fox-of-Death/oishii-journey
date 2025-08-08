import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import farmData from '../services/CardData';

const CardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const card = farmData.find(farm => farm.id === id);

  if (!card) {
    return (
      <main className='flex-grow min-h-screen'>
        <div className='container mx-auto py-10 px-4 text-center'>
          <h1 className='text-2xl font-bold text-gray-800'>ไม่พบข้อมูลแหล่งท่องเที่ยวนี้</h1>
          <button
            onClick={() => navigate('/')}
            className='mt-4 px-6 py-3 bg-[#ff759e] text-white rounded-lg shadow-md hover:bg-[#d87995] transition duration-300'
          >
            กลับหน้าหลัก
          </button>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className='flex-grow min-h-screen'>
        <div className='container mx-auto py-10 px-4'>
          <button
            onClick={() => navigate(-1)}
            className='my-3 px-6 py-3 bg-[#ff759e] text-white rounded-lg shadow-md hover:bg-[#d87995] transition duration-300'>
            ย้อนกลับ
          </button>
          <div className='md:flex md:flex-row rounded-lg shadow-lg overflow-hidden bg-white'>
            <div className='w-full md:w-1/2 h-120'>
              <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
            </div>
            <div className='md:w-1/2 w-full p-6 flex flex-col'>
              <h1 className='text-4xl font-bold text-amber-700 mb-4'>{card.title}</h1>
              <p className='text-gray-700 text-xl font-light leading-relaxed'>{card.description}</p>
              <p className='text-gray-600 text-lg mt-4 '>
                <strong>ที่อยู่:</strong> {card.address}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CardDetail;
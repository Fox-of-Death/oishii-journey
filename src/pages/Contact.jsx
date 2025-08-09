import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="bg-gray-50 flex items-start justify-center px-6 py-10 min-h-screen">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            ติดต่อเรา
          </h1>

          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            ข้อมูลการติดต่อ
          </h2>
          <p className="mb-4 text-gray-600">
            เราพร้อมที่จะตอบคำถามและให้ข้อมูลเพิ่มเติมเกี่ยวกับบริการของเรา
          </p>

          <div className="space-y-4 text-left">
            <p>
              📍 <strong>ที่อยู่:</strong> 999 หมู่ 9 อ.นครปฐม จ.นครปฐม 99999
            </p>
            <p>
              📞 <strong>โทร:</strong> 999-999999
            </p>
            <p>
              📧 <strong>อีเมล:</strong> hello@email.com
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default Contact
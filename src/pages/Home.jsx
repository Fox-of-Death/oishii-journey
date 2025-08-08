import React from "react";
import { Link } from "react-router-dom";
import bg_main from "../assets/img/BG-Main.jpg";

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <div className="min-h-screen bg-gray-100 font-sans">
                <div
                    className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
                    style={{ backgroundImage: `url(${bg_main})` }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 text-center p-4">
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-down">
                            เที่ยวฟาร์มญี่ปุ่น สัมผัสวิถีเกษตร
                        </h1>
                        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up">
                            วางแผนการเดินทางสู่ฟาร์มและโรงงานผลิตอาหารในญี่ปุ่น! สัมผัสประสบการณ์เก็บเกี่ยวผลผลิตสดใหม่ เรียนรู้วิถีเกษตร และลิ้มลองรสชาติอาหารท้องถิ่นแท้ๆ
                        </p>
                        <Link to="/collection" className="inline-block bg-[#ff759e] hover:bg-[#d87995] text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-bounce-in">
                            ดูฟาร์มทั้งหมด
                        </Link>
                    </div>
                </div>
                <div className="py-16 px-4 text-center bg-white">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        แนะนำการท่องเที่ยวเชิงเกษตรในญี่ปุ่น
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        ญี่ปุ่นมีฟาร์มและโรงงานผลิตอาหารที่น่าสนใจมากมายให้คุณได้สำรวจ ไม่ว่าจะเป็นฟาร์มสตรอว์เบอร์รีที่ให้คุณเก็บผลไม้สดๆ ได้ ฟาร์มโคนมที่คุณสามารถเรียนรู้การรีดนมวัว หรือโรงงานผลิตสาเกที่เปิดให้ชมกระบวนการทำเครื่องดื่มดั้งเดิม เตรียมตัวพบกับประสบการณ์ที่เต็มไปด้วยความรู้และความอร่อย!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
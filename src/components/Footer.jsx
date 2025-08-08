import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="bg-[#ff68a7] text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:justify-between items-center mb-4">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <h4 className="font-bold text-lg mb-2">ข้อมูลติดต่อ</h4>
                            <p className="text-sm">999 หมู่ 9 อ.นครปฐม จ.นครปฐม 99999</p>
                            <p className="text-sm">Tel. 999-999999</p>
                            <p className="text-sm">Mobile 999-9999999</p>
                            <p className="text-sm">Email: hello@email.com</p>
                        </div>

                        <div className="flex items-center space-x-4 mt-4 md:mt-0">
                            <span className="text-sm">Follow us on</span>
                            <a href="https://www.facebook.com" target="_blank" rel="facebook">
                                <i className="h-8 w-8 bi bi-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="instagram">
                                <i className="h-8 w-8 bi bi-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="youtube">
                                <i className="h-8 w-8 bi bi-youtube"></i>
                            </a>
                        </div>
                    </div>
                    <div className="text-center mt-6">
                        <p className="text-sm">
                            ©Copyright 2025 Oishii Journey. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;

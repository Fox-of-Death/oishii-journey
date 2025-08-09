const farmData = [
  // ฟาร์มผักและสวนผลไม้
  {
    id: 'f1',
    title: 'Kawatsura Strawberry Farm',
    tag: 'ฟาร์มผักและสวนผลไม้',
    description: 'ฟาร์มสตรอว์เบอร์รีที่เดินทางสะดวกจากโตเกียว สามารถเก็บและทานสตรอว์เบอร์รีสดๆ ได้ไม่อั้น',
    address: '363-1 Narita, Sanmu, Chiba Prefecture',
    image: 'https://github.com/Fox-of-Death/oishii-journey/blob/main/src/assets/img/ImgCard/image_f1.jpg?raw=true'
  },
  {
    id: 'f2',
    title: 'Sayama Berryland',
    tag: 'ฟาร์มผักและสวนผลไม้',
    description: 'ฟาร์มเก็บผลไม้ขนาดใหญ่ใกล้โตเกียว มีผลไม้หลากหลายตามฤดูกาล เช่น สตรอว์เบอร์รีและบลูเบอร์รี',
    address: '570 Higashisayama, Sayama-shi, Saitama Prefecture',
    image: 'https://github.com/Fox-of-Death/oishii-journey/blob/main/src/assets/img/ImgCard/image_f2.jpg?raw=true'
  },
  {
    id: 'f3',
    title: 'Hirosaki Apple Park',
    tag: 'ฟาร์มผักและสวนผลไม้',
    description: 'ฟาร์มแอปเปิลในแหล่งปลูกที่ใหญ่ที่สุดของญี่ปุ่น ที่นี่คุณจะได้เรียนรู้และเก็บแอปเปิลได้ตามฤดูกาล',
    address: '114 Shimizu-Tomita, Hirosaki-shi, Aomori Prefecture',
    image: 'https://github.com/Fox-of-Death/oishii-journey/blob/main/src/assets/img/ImgCard/image_f3.jpg?raw=true'
  },
  {
    id: 'f4',
    title: 'Kajitsu Kobo Honke-en Farm',
    tag: 'ฟาร์มผักและสวนผลไม้',
    description: 'ฟาร์มในแถบภูเขาที่มีผลไม้ให้เก็บหลากหลาย ทั้งแอปเปิล องุ่น และลูกพีช',
    address: '1836-1 Sarugakyo Onsen, Minakami-machi, Tone-gun, Gunma Prefecture',
    image: 'https://github.com/Fox-of-Death/oishii-journey/blob/main/src/assets/img/ImgCard/image_f4.jpeg?raw=true'
  },
  {
    id: 'f5',
    title: 'Yamamoto Strawberry Farm',
    tag: 'ฟาร์มผักและสวนผลไม้',
    description: 'ฟาร์มสตรอว์เบอร์รีขนาดใหญ่ในภูมิภาคโทโฮคุ มีทั้งกิจกรรมเก็บสตรอว์เบอร์รีและเวิร์คช็อปทำขนม',
    address: '17-2 Aza-Takadate, Yamashita, Watari-gun, Miyagi Prefecture',
    image: 'https://github.com/Fox-of-Death/oishii-journey/blob/main/src/assets/img/ImgCard/image_f5.jpeg?raw=true'
  },

  // ฟาร์มเลี้ยงสัตว์และผลิตภัณฑ์จากนม
  {
    id: 'd1',
    title: 'Koiwai Farm',
    tag: 'ฟาร์มเลี้ยงสัตว์และผลิตภัณฑ์จากนม',
    description: 'ฟาร์มโคนมเก่าแก่กว่า 100 ปี มีกิจกรรมรีดนมวัว ให้อาหารแกะ และร้านอาหารที่ใช้ผลิตภัณฑ์จากฟาร์ม',
    address: '36-1 Maruyachi, Shizukuishi, Iwate-gun, Iwate Prefecture',
    image: 'https://github.com/Fox-of-Death/oishii-journey/blob/main/src/assets/img/ImgCard/image_d1.jpg?raw=true'
  },
  {
    id: 'd2',
    title: 'Mother Farm',
    tag: 'ฟาร์มเลี้ยงสัตว์และผลิตภัณฑ์จากนม',
    description: 'ฟาร์มท่องเที่ยวขนาดใหญ่ใกล้โตเกียว มีการแสดงสัตว์และกิจกรรมเก็บผลไม้ เหมาะสำหรับครอบครัว',
    address: '940 Odagiri, Futtsu-shi, Chiba Prefecture',
    image: 'https://github.com/Fox-of-Death/oishii-journey/blob/main/src/assets/img/ImgCard/image_d2.jpg?raw=true'
  },
  {
    id: 'd3',
    title: 'Rokko Farm',
    tag: 'ฟาร์มเลี้ยงสัตว์และผลิตภัณฑ์จากนม',
    description: 'ฟาร์มโคนมในภูเขาร็อกโกะ ใกล้เมืองโกเบ ที่คุณจะได้เรียนรู้การผลิตชีสและชมวิวสวยงาม',
    address: '1-1 Rokkosan-o-aza, Nada-ku, Kobe-shi, Hyogo Prefecture',
    image: 'https://github.com/Fox-of-Death/oishii-journey/blob/main/src/assets/img/ImgCard/image_d3.jpg?raw=true'
  },
  {
    id: 'd4',
    title: 'Senbonmatsu Dairy Farm',
    tag: 'ฟาร์มเลี้ยงสัตว์และผลิตภัณฑ์จากนม',
    description: 'ฟาร์มโคนมขนาดใหญ่ที่มีกิจกรรมหลากหลาย เช่น การขี่ม้าและขี่จักรยาน',
    address: '799 Senbonmatsu, Nasushiobara-shi, Tochigi Prefecture',
    image: 'https://github.com/Fox-of-Death/oishii-journey/blob/main/src/assets/img/ImgCard/image_d4.png?raw=true' 
  },
  {
    id: 'd5',
    title: 'Niseko Takahashi Dairy Farm',
    tag: 'ฟาร์มเลี้ยงสัตว์และผลิตภัณฑ์จากนม',
    description: 'ฟาร์มชื่อดังในนิเซโกะ มีไอศกรีมโฮมเมดและผลิตภัณฑ์นมสดจากวัวพันธุ์เจอร์ซีย์',
    address: '888-1 Soga, Niseko-cho, Abuta-gun, Hokkaido Prefecture',
    image: 'https://github.com/Fox-of-Death/oishii-journey/blob/main/src/assets/img/ImgCard/image_d5.png?raw=true'
  },

  // โรงงานผลิตอาหารและเครื่องดื่มท้องถิ่น
  {
    id: 'p1',
    title: 'Gekkeikan Okura Sake Museum',
    tag: 'โรงงานผลิตอาหารและเครื่องดื่มท้องถิ่น',
    description: 'โรงงานสาเกเก่าแก่ที่เปิดให้ชมการผลิตสาเกแบบดั้งเดิม พร้อมกับการชิมสาเกหลากหลายชนิด',
    address: '247 Minamihama-cho, Fushimi-ku, Kyoto-shi, Kyoto Prefecture',
    image: 'https://github.com/Fox-of-Death/oishii-journey/blob/main/src/assets/img/ImgCard/image_p1.jpg?raw=true'
  },
  {
    id: 'p2',
    title: 'Furano Cheese Factory',
    tag: 'โรงงานผลิตอาหารและเครื่องดื่มท้องถิ่น',
    description: 'โรงงานผลิตชีสในเมืองฟุราโนะ คุณสามารถชมการทำชีสและเข้าร่วมเวิร์คช็อปได้',
    address: '6-1 Kisen, Furano-shi, Hokkaido Prefecture',
    image: 'https://github.com/Fox-of-Death/oishii-journey/blob/main/src/assets/img/ImgCard/image_p2.jpg?raw=true'
  },
  {
    id: 'p3',
    title: 'Shiroi Koibito Park',
    tag: 'โรงงานผลิตอาหารและเครื่องดื่มท้องถิ่น',
    description: 'โรงงานผลิตคุ้กกี้ "Shiroi Koibito" ชื่อดัง ที่ถูกออกแบบให้คล้ายสวนสนุก และมีเวิร์คช็อปทำคุ้กกี้',
    address: '2-11 Miyanosawa 2-jo, Nishi-ku, Sapporo-shi, Hokkaido Prefecture',
    image: 'https://github.com/Fox-of-Death/oishii-journey/blob/main/src/assets/img/ImgCard/image_p3.jpg?raw=true'
  },
  {
    id: 'p4',
    title: 'Asahi Breweries Factory',
    tag: 'โรงงานผลิตอาหารและเครื่องดื่มท้องถิ่น',
    description: 'โรงงานผลิตเบียร์ที่เปิดให้เข้าชมกระบวนการผลิตและมีการชิมเบียร์ฟรีในตอนท้าย',
    address: 'โปรดตรวจสอบที่อยู่โรงงานในแต่ละเมือง (เช่น ฟุกุโอกะ ซัปโปโร)',
    image: 'https://github.com/Fox-of-Death/oishii-journey/blob/main/src/assets/img/ImgCard/image_p4.jpg?raw=true' 
  },
  {
    id: 'p5',
    title: 'Otafuku Sauce Museum',
    tag: 'โรงงานผลิตอาหารและเครื่องดื่มท้องถิ่น',
    description: 'พิพิธภัณฑ์และโรงงานผลิตซอสโอโคโนมิยากิอันโด่งดังในเมืองฮิโรชิม่า คุณสามารถเรียนรู้ประวัติและกระบวนการผลิตซอสได้',
    address: '7-4-10 Shoko Center, Nishi-ku, Hiroshima-shi, Hiroshima Prefecture',
    image: 'https://github.com/Fox-of-Death/oishii-journey/blob/main/src/assets/img/ImgCard/image_p5.jpg?raw=true'
  }
];

export default farmData;
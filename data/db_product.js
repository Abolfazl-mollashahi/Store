

const db = [
    {
        id: 1, title: 'مردانه', products: [
            {
                id: 1, title: 'پیراهن', products: [
                    { id: 1, title: 'tst1', price: 9000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'pmb54ewf', size: ["sm", "md", "lg", "xl"], img: '/img/m/m-p001.webp', sliderimg: ['/img/m/m-p001.webp', '/img/m/m-p001.webp', '/img/m/m-p001.webp'] },
                    { id: 2, title: 'tst2', price: 2000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'pmbtrsvd', size: ["sm", "md", "lg", "xl"], img: '/img/m/m-p002.webp', sliderimg: ['/img/m/m-p002.webp', '/img/m/m-p002.webp', '/img/m/m-p002.webp'] },
                    { id: 3, title: 'tst3', price: 1000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'pmeyestsd', size: ["sm", "md", "lg", "xl"], img: '/img/m/m-p003.webp', sliderimg: ['/img/m/m-p003.webp', '/img/m/m-p003.webp', '/img/m/m-p003.webp'] },
                    { id: 4, title: 'tst4', price: 4000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'pm34rwefs', size: ["sm", "md", "lg", "xl"], img: '/img/m/m-p004.webp', sliderimg: ['/img/m/m-p004.webp', '/img/m/m-p004.webp', '/img/m/m-p004.webp'] },
                    { id: 5, title: 'tst5', price: 17000, quantity: 1, discount: 10, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'pmjyrthw42', size: ["sm", "md", "lg", "xl"], img: '/img/m/m-p005.webp', sliderimg: ['/img/m/m-p005.webp', '/img/m/m-p005.webp', '/img/m/m-p005.webp'] },
                    { id: 6, title: 'tst6', price: 6000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'pmt4y54erfs', size: ["sm", "md", "lg", "xl"], img: '/img/m/m-p006.webp', sliderimg: ['/img/m/m-p006.webp', '/img/m/m-p006.webp', '/img/m/m-p006.webp'] },
                    { id: 7, title: 'tst7', price: 7000, quantity: 1, discount: 60, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'pm7rtgdj', size: ["sm", "md", "lg", "xl"], img: '/img/m/m-p007.webp', sliderimg: ['/img/m/m-p007.webp', '/img/m/m-p007.webp', '/img/m/m-p007.webp'] },
                    { id: 8, title: 'tst8', price: 8000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'pmehgs3', size: ["sm", "md", "lg", "xl"], img: '/img/m/m-p008.webp', sliderimg: ['/img/m/m-p008.webp', '/img/m/m-p008.webp', '/img/m/m-p008.webp'] },
                    { id: 9, title: 'tst9', price: 9000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'pm43tegdg', size: ["sm", "md", "lg", "xl"], img: '/img/m/m-p009.webp', sliderimg: ['/img/m/m-p009.webp', '/img/m/m-p009.webp', '/img/m/m-p009.webp'] },
                    { id: 10, title: 'tst10', price: 14000, quantity: 1, discount: 30, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'pm9ikjh', size: ["sm", "md", "lg", "xl"], img: '/img/m/m-p010.webp', sliderimg: ['/img/m/m-p010.webp', '/img/m/m-p010.webp', '/img/m/m-p010.webp'] },
                    { id: 11, title: 'tst11', price: 11000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'pm2wrdy', size: ["sm", "md", "lg", "xl"], img: '/img/m/m-p011.webp', sliderimg: ['/img/m/m-p011.webp', '/img/m/m-p011.webp', '/img/m/m-p011.webp'] },
                ]
            },
            {
                id: 2, title: 'شلوار', products: [
                    { id: 1, title: 'tst1', price: 8000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'shmpuikuh55', size: ["sm", "md", "lg", "xl"], img: '/img/m/m-sh001.webp', sliderimg: ['/img/m/m-sh001.webp', '/img/m/m-sh001.webp', '/img/m/m-sh001.webp'] },
                    { id: 2, title: 'tst2', price: 1000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'shm4rdge5', size: ["sm", "md", "lg", "xl"], img: '/img/m/m-sh002.webp', sliderimg: ['/img/m/m-sh002.webp', '/img/m/m-sh002.webp', '/img/m/m-sh002.webp'] },
                    { id: 3, title: 'tst3', price: 3000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'shmhytre', size: ["sm", "md", "lg", "xl"], img: '/img/m/m-sh003.webp', sliderimg: ['/img/m/m-sh003.webp', '/img/m/m-sh003.webp', '/img/m/m-sh003.webp'] },
                    { id: 4, title: 'tst4', price: 2000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'shmdswrt', size: ["sm", "md", "lg", "xl"], img: '/img/m/m-sh004.webp', sliderimg: ['/img/m/m-sh004.webp', '/img/m/m-sh004.webp', '/img/m/m-sh004.webp'] },
                    { id: 5, title: 'tst5', price: 4000, quantity: 1, discount: 10, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'shmkuytf', size: ["sm", "md", "lg", "xl"], img: '/img/m/m-sh005.webp', sliderimg: ['/img/m/m-sh005.webp', '/img/m/m-sh005.webp', '/img/m/m-sh005.webp'] },
                    { id: 6, title: 'tst6', price: 6000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'shmu65redfghj', size: ["sm", "md", "lg", "xl"], img: '/img/m/m-sh006.webp', sliderimg: ['/img/m/m-sh006.webp', '/img/m/m-sh006.webp', '/img/m/m-sh006.webp'] },
                    { id: 7, title: 'tst7', price: 7000, quantity: 1, discount: 60, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'shm0ploikuj', size: ["sm", "md", "lg", "xl"], img: '/img/m/m-sh007.webp', sliderimg: ['/img/m/m-sh007.webp', '/img/m/m-sh007.webp', '/img/m/m-sh007.webp'] },
                    { id: 8, title: 'tst8', price: 8000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'shmujy65e', size: ["sm", "md", "lg", "xl"], img: '/img/m/m-sh008.webp', sliderimg: ['/img/m/m-sh008.webp', '/img/m/m-sh008.webp', '/img/m/m-sh008.webp'] },
                    { id: 9, title: 'tst9', price: 9000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'shm4wesdg', size: ["sm", "md", "lg", "xl"], img: '/img/m/m-sh009.webp', sliderimg: ['/img/m/m-sh009.webp', '/img/m/m-sh009.webp', '/img/m/m-sh009.webp'] },
                    { id: 10, title: 'tst10', price: 14000, quantity: 1, discount: 30, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'shmfgdfsd', size: ["sm", "md", "lg", "xl"], img: '/img/m/m-sh010.webp', sliderimg: ['/img/m/m-sh010.webp', '/img/m/m-sh010.webp', '/img/m/m-sh010.webp'] },
                    { id: 11, title: 'tst11', price: 11000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'shmqawzxd', size: ["sm", "md", "lg", "xl"], img: '/img/m/m-sh011.webp', sliderimg: ['/img/m/m-sh011.webp', '/img/m/m-sh011.webp', '/img/m/m-sh011.webp'] },
                ]
            },
        ]
    },
    {
        id: 2, title: 'زنانه', products: [
            {
                id: 1, title: 'پیراهن', products: [
                    { id: 1, title: 'tst1', price: 1000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'pzkmjnhbg', size: ["sm", "md", "lg", "xl"], img: '/img/z/z-p001.webp', sliderimg: ['/img/z/z-p001.webp', '/img/z/z-p001.webp', '/img/z/z-p001.webp'] },
                    { id: 2, title: 'tst2', price: 3000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'pzdvbstr', size: ["sm", "md", "lg", "xl"], img: '/img/z/z-p002.webp', sliderimg: ['/img/z/z-p002.webp', '/img/z/z-p002.webp', '/img/z/z-p002.webp'] },
                    { id: 3, title: 'tst3', price: 4000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'pzenym76s5hg', size: ["sm", "md", "lg", "xl"], img: '/img/z/z-p003.webp', sliderimg: ['/img/z/z-p003.webp', '/img/z/z-p003.webp', '/img/z/z-p003.webp'] },
                    { id: 4, title: 'tst4', price: 2000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'pzwadesfrv', size: ["sm", "md", "lg", "xl"], img: '/img/z/z-p004.webp', sliderimg: ['/img/z/z-p004.webp', '/img/z/z-p004.webp', '/img/z/z-p004.webp'] },
                    { id: 5, title: 'tst5', price: 5000, quantity: 1, discount: 10, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'pzrytjh', size: ["sm", "md", "lg", "xl"], img: '/img/z/z-p005.webp', sliderimg: ['/img/z/z-p005.webp', '/img/z/z-p005.webp', '/img/z/z-p005.webp'] },
                    { id: 6, title: 'tst6', price: 6000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'pzrwketttt', size: ["sm", "md", "lg", "xl"], img: '/img/z/z-p006.webp', sliderimg: ['/img/z/z-p006.webp', '/img/z/z-p006.webp', '/img/z/z-p006.webp'] },
                    { id: 7, title: 'tst7', price: 7000, quantity: 1, discount: 60, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'pzterwe', size: ["sm", "md", "lg", "xl"], img: '/img/z/z-p007.webp', sliderimg: ['/img/z/z-p007.webp', '/img/z/z-p007.webp', '/img/z/z-p007.webp'] },
                    { id: 8, title: 'tst8', price: 8000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'pze5h6', size: ["sm", "md", "lg", "xl"], img: '/img/z/z-p008.webp', sliderimg: ['/img/z/z-p008.webp', '/img/z/z-p008.webp', '/img/z/z-p008.webp'] },
                    { id: 9, title: 'tst9', price: 9000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'pzk86jt7h', size: ["sm", "md", "lg", "xl"], img: '/img/z/z-p009.webp', sliderimg: ['/img/z/z-p009.webp', '/img/z/z-p009.webp', '/img/z/z-p009.webp'] },
                    { id: 10, title: 'tst10', price: 14000, quantity: 1, discount: 30, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'pz5e4w3qw', size: ["sm", "md", "lg", "xl"], img: '/img/z/z-p010.webp', sliderimg: ['/img/z/z-p010.webp', '/img/z/z-p010.webp', '/img/z/z-p010.webp'] },
                    { id: 11, title: 'tst11', price: 11000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'pze66tgr', size: ["sm", "md", "lg", "xl"], img: '/img/z/z-p011.webp', sliderimg: ['/img/z/z-p011.webp', '/img/z/z-p011.webp', '/img/z/z-p011.webp'] },
                ]
            },
            {
                id: 2, title: 'شلوار', products: [
                    { id: 1, title: 'tst1', price: 1000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'shz32rwfs', size: ["sm", "md", "lg", "xl"], img: '/img/z/z-sh001.webp', sliderimg: ['/img/z/z-sh001.webp', '/img/z/z-sh001.webp', '/img/z/z-sh001.webp'] },
                    { id: 2, title: 'tst2', price: 3000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'shzsreg4w', size: ["sm", "md", "lg", "xl"], img: '/img/z/z-sh002.webp', sliderimg: ['/img/z/z-sh002.webp', '/img/z/z-sh002.webp', '/img/z/z-sh002.webp'] },
                    { id: 3, title: 'tst3', price: 5000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'shzrjf76dt', size: ["sm", "md", "lg", "xl"], img: '/img/z/z-sh003.webp', sliderimg: ['/img/z/z-sh003.webp', '/img/z/z-sh003.webp', '/img/z/z-sh003.webp'] },
                    { id: 4, title: 'tst4', price: 2000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'shzrydhtv', size: ["sm", "md", "lg", "xl"], img: '/img/z/z-sh004.webp', sliderimg: ['/img/z/z-sh004.webp', '/img/z/z-sh004.webp', '/img/z/z-sh004.webp'] },
                    { id: 5, title: 'tst5', price: 4000, quantity: 1, discount: 10, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'shztumydte', size: ["sm", "md", "lg", "xl"], img: '/img/z/z-sh005.webp', sliderimg: ['/img/z/z-sh005.webp', '/img/z/z-sh005.webp', '/img/z/z-sh005.webp'] },
                    { id: 6, title: 'tst6', price: 6000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'shzxzdsfe', size: ["sm", "md", "lg", "xl"], img: '/img/z/z-sh006.webp', sliderimg: ['/img/z/z-sh006.webp', '/img/z/z-sh006.webp', '/img/z/z-sh006.webp'] },
                    { id: 7, title: 'tst7', price: 7000, quantity: 1, discount: 60, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'shztyjnb', size: ["sm", "md", "lg", "xl"], img: '/img/z/z-sh007.webp', sliderimg: ['/img/z/z-sh007.webp', '/img/z/z-sh007.webp', '/img/z/z-sh007.webp'] },
                    { id: 8, title: 'tst8', price: 8000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'shzw4shgfsvd', size: ["sm", "md", "lg", "xl"], img: '/img/z/z-sh008.webp', sliderimg: ['/img/z/z-sh008.webp', '/img/z/z-sh008.webp', '/img/z/z-sh008.webp'] },
                    { id: 9, title: 'tst9', price: 9000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'shzawcwcrsrr', size: ["sm", "md", "lg", "xl"], img: '/img/z/z-sh009.webp', sliderimg: ['/img/z/z-sh009.webp', '/img/z/z-sh009.webp', '/img/z/z-sh009.webp'] },
                    { id: 10, title: 'tst10', price: 14000, quantity: 1, discount: 30, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'shz7efsc75u6y', size: ["sm", "md", "lg", "xl"], img: '/img/z/z-sh010.webp', sliderimg: ['/img/z/z-sh010.webp', '/img/z/z-sh010.webp', '/img/z/z-sh010.webp'] },
                    { id: 11, title: 'tst11', price: 11000, quantity: 1, discount: 0, rating: 3.8, brand: 'adidas', discription: 'lorem----', color: ['سفید', 'سیاه', 'قرمز'], code: 'shzwefv432', size: ["sm", "md", "lg", "xl"], img: '/img/z/z-sh011.webp', sliderimg: ['/img/z/z-sh011.webp', '/img/z/z-sh011.webp', '/img/z/z-sh011.webp'] },
                ]
            },
        ]
    },
    {
        id: 3, title: 'بچه گانه', products: [

        ]
    },
]


export default db
### Application Configuration
<hr>
<h4>React-Native Setup</h4>

1. Move to my-app folder ( <code>cd my-app</code>)
2. Run <code> npm install </code>
3. Find the IP address of your system and set it in <b>config/config.ts</b> -> MOBILE_BASE_URL (It should be like xyz.abc.d.efg)
4. Run <code>npm run web</code>
5. Download the <b> Expo Go </b> app in your android phone or IoS.
6. Scan the <b> QR Code </b> available on termainal from Expo Go App.

<h3>Backend Setup</h3>

1. Navigate to server folder <code>cd server</code>
2. run <code> npm install</code>
3. Configure mySQL setup : enter username and password for database connection in <b> congif/config.js</b>
4. In Database kindly create a database named <b> Astrology </b>
5. Run <code> node index.js </code>

<h2> All Good...</h2>

<h3>You can Do One More thing ....</h3>
<b> To test the application you can dump the following data in astrologer table...</b>

	1	Karan	4.2	["Vedic", "Numerology"]	["Hindi", "English", "Sanskrit"]	520.00	115	10	1	https://media.istockphoto.com/id/1347480665/photo/holy-indian-god-man-or-guru-with-rudrakshi-mala-using-laptop-concept-of-online-horoscope.jpg?s=1024x1024&w=is&k=20&c=ebV8IGHJIdHY7DGLa1dm78LLAjVzTQ5zD3Q6sxITasE=	Unlock the secrets of the cosmos with our dedicated astrologer. Delve into the depths of your birth chart, revealing hidden potentials, challenges, and life purpose. Our expert interprets complex planetary patterns and aspects, translating star speak int...	1161	2545	1	1	290
	2	Lakshay	4.3	["Vastu", "Prashana"]	["Marathi", "Telugu"]	340.00	95	9	0	https://media.istockphoto.com/id/523360117/photo/sadhu-pilgrim-india.jpg?s=612x612&w=0&k=20&c=z4Zn4xpL6Pyb9CgrZTRyiA-mfpm4xt_FIHQ8M8q4XVc=	Journey through the zodiac with our experienced astrologer as your cosmic navigator. Unravel the mysteries of your birth chart, revealing innate talents, relationship patterns, and life lessons. Our practitioner combines classical astrological wisdom wit...	2295	2288	1	0	102
	3	Manan	4.6	["Nadi", "Vedic"]	["Punjabi", "Tamil"]	460.00	130	12	1	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxW1S5tpCwaSw5IyiqN0VZEUY5R1b58BuLJDtjbnfjHuKFsgp1vb5MQFz7JK80ipJgIvI	Unravel the cosmic threads of your existence with our dedicated astrologer. Dive deep into the archetypal energies of planets and their impact on your psyche and life events. Our expert combines psychological astrology with traditional techniques to offe...	836	6159	1	0	935
	4	Nikhil	4.8	["Numerology", "Prashana"]	["English", "Hindi", "Marathi"]	380.00	105	11	1	https://indianbusinesscanada.com/admin/uploads/2020/06/21/best-astrologer-get-love-back-love-spell-60264-1-269.jpeg	Embark on a celestial exploration with our dedicated astrologer. Uncover the cosmic blueprint of your soul through expert natal chart analysis. Our practitioner blends traditional astrological techniques with intuitive insights for profound guidance. Exp...	2416	3960	1	0	953
	5	Omkar	4	["Vedic", "Vastu"]	["Sanskrit", "Telugu"]	400.00	80	7	0	https://images.click.in/classifieds/images/125/04_12_2021_13_41_44_983c2ce4e3be9410a566d851618868f3_s.jpg	Step into the realm of cosmic wisdom with our dedicated astrologer. Decode the celestial language written in the sky at your birth moment, revealing your unique soul blueprint. Our practitioner combines ancient astrological knowledge with modern psycholo...	2410	3507	0	1	85
	6	Pranav	4.7	["Nadi", "Numerology"]	["Hindi", "English", "Tamil"]	480.00	140	13	1	https://static.vecteezy.com/system/resources/previews/035/532/017/non_2x/ai-generated-agraph-of-traveler-or-backpaker-in-the-beach-with-a-many-style-and-many-angle-photo.jpg	Embark on a celestial odyssey with our skilled astrologer as your guide. Unlock the secrets encoded in your natal chart, revealing your soul's intentions and life lessons. Our practitioner interprets complex planetary aspects and configurations, translat...	1471	5665	1	0	771
	7	Rajesh	4.1	["Prashana", "Vedic"]	["Marathi", "Punjabi"]	310.00	75	8	0	https://indianbusinesscanada.com/admin/uploads/2020/06/21/best-astrologer-get-love-back-love-spell-60264-1-269.jpeg	Discover the celestial roadmap of your soul with our dedicated astrologer. Uncover the hidden potentials and challenges written in the stars at your birth moment. Our expert decodes planetary positions, aspects, and house placements to provide comprehens...	1153	2073	0	1	199
	8	Sagar	4.5	["Vastu", "Nadi"]	["Tamil", "Sanskrit"]	530.00	125	10	1	https://static.vecteezy.com/system/resources/thumbnails/036/376/293/small_2x/ai-generated-potrait-of-indian-saint-giving-blessing-photo.jpg	Unlock the secrets of the stars with our experienced astrologer. Delve into the depths of your birth chart, revealing hidden potentials, challenges, and life purpose. Our expert interprets complex planetary patterns and aspects, translating cosmic messag...	1503	3522	0	0	911
	9	Tarun	4.4	["Numerology", "Prashana"]	["Hindi", "English", "Telugu"]	420.00	110	9	0	https://static.vecteezy.com/system/resources/previews/035/532/017/non_2x/ai-generated-agraph-of-traveler-or-backpaker-in-the-beach-with-a-many-style-and-many-angle-photo.jpg	Unravel the cosmic threads of your existence with our dedicated astrologer. Dive deep into the archetypal energies of planets and their impact on your psyche and life events. Our expert combines psychological astrology with traditional techniques to offe...	223	4148	1	1	648
	10	Uday	4.9	["Vedic", "Vastu"]	["Marathi", "Punjabi", "English"]	570.00	150	14	1	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKNtmKi7e3oUWs5EiTTO91Gkxcehep8m1CpUxaAcuU7gZ_5XSJHUY-XIIt0kubKxA9P0&usqp=CAU	Dive into the cosmic ocean with our expert astrologer as your navigator. Decode the celestial symphony playing at the moment of your birth, revealing your unique soul signature. Our seasoned practitioner interprets complex astrological configurations, tr...	10	496	0	0	352
	11	Arjun	4.5	["Vedic"]	["Hindi", "English"]	500.00	120	10	1	https://static.vecteezy.com/system/resources/previews/035/532/017/non_2x/ai-generated-agraph-of-traveler-or-backpaker-in-the-beach-with-a-many-style-and-many-angle-photo.jpg	Embark on a transformative astrological journey with our skilled practitioner. Uncover the celestial imprint on your soul through comprehensive birth chart analysis. Our expert decodes planetary positions, aspects, and house placements to provide holisti...	1247	4857	0	1	228
	12	Bhavesh	4.2	["Vastu"]	["Marathi", "English"]	300.00	90	7	1	https://static.vecteezy.com/system/resources/thumbnails/036/376/293/small_2x/ai-generated-potrait-of-indian-saint-giving-blessing-photo.jpg	Embark on a celestial exploration with our dedicated astrologer. Uncover the cosmic blueprint of your soul through expert natal chart analysis. Our practitioner blends traditional astrological techniques with intuitive insights for profound guidance. Exp...	729	2370	0	0	893
	13	Chaitanya	4.8	["Nadi"]	["Telugu", "English"]	400.00	150	12	1	https://indianbusinesscanada.com/admin/uploads/2020/06/21/best-astrologer-get-love-back-love-spell-60264-1-269.jpeg	Step into the realm of cosmic wisdom with our dedicated astrologer. Decode the celestial language written in the sky at your birth moment, revealing your unique soul blueprint. Our practitioner combines ancient astrological knowledge with modern psycholo...	3114	4635	1	0	69
	14	Dhruv	4	["Numerology"]	["Punjabi", "Hindi"]	350.00	80	8	0	https://static.vecteezy.com/system/resources/thumbnails/036/376/293/small_2x/ai-generated-potrait-of-indian-saint-giving-blessing-photo.jpg	Step into the realm of cosmic wisdom with our dedicated astrologer. Decode the celestial language written in the sky at your birth moment, revealing your unique soul blueprint. Our practitioner combines ancient astrological knowledge with modern psycholo...	2813	5039	0	1	907
	15	Eshan	4.7	["Prashana"]	["Sanskrit", "English"]	450.00	110	9	1	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKNtmKi7e3oUWs5EiTTO91Gkxcehep8m1CpUxaAcuU7gZ_5XSJHUY-XIIt0kubKxA9P0&usqp=CAU	Step into the realm of celestial wisdom with our experienced astrologer. Decode the cosmic blueprint of your life through expert chart analysis. Our practitioner blends traditional astrological techniques with intuitive insights to provide holistic guida...	1857	6168	1	0	327
	16	Ujjwal	4.3	["Vedic", "Vastu"]	["Hindi", "Marathi"]	550.00	130	11	0	https://static.vecteezy.com/system/resources/thumbnails/036/376/293/small_2x/ai-generated-potrait-of-indian-saint-giving-blessing-photo.jpg	Unlock the secrets of the cosmos with our dedicated astrologer. Delve into the depths of your birth chart, revealing hidden potentials, challenges, and life purpose. Our expert interprets complex planetary patterns and aspects, translating star speak int...	1144	4367	0	1	647
	17	Gaurav	4.1	["Nadi", "Numerology"]	["Tamil", "Telugu"]	320.00	70	6	1	https://static.vecteezy.com/system/resources/previews/035/532/017/non_2x/ai-generated-agraph-of-traveler-or-backpaker-in-the-beach-with-a-many-style-and-many-angle-photo.jpg	Embark on an enlightening astrological odyssey with our seasoned practitioner. Unlock the secrets encoded in your natal chart, revealing your soul's intentions and life lessons. Our expert interprets complex planetary aspects and configurations, translat...	1824	4255	0	0	703
	18	Harsh	4.6	["Prashana", "Vedic"]	["English", "Punjabi"]	480.00	100	8	0	https://static.vecteezy.com/system/resources/thumbnails/036/376/293/small_2x/ai-generated-potrait-of-indian-saint-giving-blessing-photo.jpg	Embark on a celestial exploration with our dedicated astrologer. Uncover the cosmic blueprint of your soul through expert natal chart analysis. Our practitioner blends traditional astrological techniques with intuitive insights for profound guidance. Exp...	1131	3313	0	0	963
	19	Ishaan	4.9	["Vastu", "Numerology"]	["Hindi", "Sanskrit"]	600.00	160	13	1	https://indianbusinesscanada.com/admin/uploads/2020/06/21/best-astrologer-get-love-back-love-spell-60264-1-269.jpeg	Dive into the cosmic ocean with our expert astrologer as your navigator. Decode the celestial symphony playing at the moment of your birth, revealing your unique soul signature. Our seasoned practitioner interprets complex astrological configurations, tr...	2152	703	1	0	823
	20	Jayesh	4.4	["Vedic", "Nadi"]	["Marathi", "Tamil"]	370.00	85	7	0	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKNtmKi7e3oUWs5EiTTO91Gkxcehep8m1CpUxaAcuU7gZ_5XSJHUY-XIIt0kubKxA9P0&usqp=CAU	Step into the realm of cosmic wisdom with our dedicated astrologer. Decode the celestial language written in the sky at your birth moment, revealing your unique soul blueprint. Our practitioner combines ancient astrological knowledge with modern psycholo...	2062	2838	0	0	635



<b> The Array you are seeing in table is JSON  so consider it before inserting data.</b>

![Screenshot of the app](output/1.jpeg)
![Screenshot of the app](output/2.jpeg)
![Screenshot of the app](output/3.jpeg)
![Screenshot of the app](output/4.jpeg)
![Screenshot of the app](output/5.jpeg)
![Screenshot of the app](output/6.jpeg)
![Screenshot of the app](output/7.jpeg)
![Screenshot of the app](output/8.jpeg)



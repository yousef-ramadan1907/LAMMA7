// ====== كل النصوص هنا (عربي / English) — عدّل براحتك ======
export const social = {
  gmail: 'https://mail.google.com/mail/?view=cm&fs=1&to=lamma7.ai@gmail.com',
  instagram: 'https://www.instagram.com/lmma7.ai?psln=MTV0cnV6YjhlenAzZg==',
  facebook: 'https://www.facebook.com/share/1DWSRG1LK7/',
  tiktok: 'https://www.tiktok.com/@lamma7.ai?_r=1&_t=ZS-9B1lYYyERdc',
}

// photo: ضع مسار الصورة في src فقط. مثال: photo: '/team/ahmed.jpg' (حط الصور في public/team)
const m = (ar, en, photo = '') => ({ name: { ar, en }, photo })
export const teams = [
  {
    id: 'it', ar: 'تكنولوجيا المعلومات', en: 'Information Technology', members: [
      m('يوسف رمضان', 'Yousef Ramadan','/Team/yousef.png'), m('احمد بكر', 'Ahmed Bakr','/Team/ahmed bakr.jpg'), m('مهند احمد', 'Mohanad Ahmed','/Team/mohanad.jpg'),
      m('محمد الجندي', 'Mohamed Elgendy','/Team/elgendy.jpg'), m('احمد السعدني', 'Ahmed Elsadany','/Team/s333.jpg'), m('محمود فارس', 'Mahmoud Fares','/Team/mahmoud.jpg'),
      m('محمد ياسر', 'Mohamed Yasser','/Team/mohamed yasser.jpg'), m('سيف محمد', 'Saif Mohamed','/Team/seif.jpg'), m('يوسف عبدالمنعم', 'Youssef AbdelMoneim','/Team/s3ody.jpg'),
    ]
  },
  {
    id: 'ee', ar: 'تكنولوجيا الكهرباء', en: 'Electrical Technology', members: [
      m('علي السماواتي', 'Ali Elsamawati','/Team/Ali.jpg'), m('معاذ بخيت', 'Moaz Bakheet','/Team/moaz.jpg'), m('عمر مختار', 'Omar Mukhtar','/Team/omar.jpg'), m('عمرو محمد', 'Amr Moahmed','/Team/amr.jpg'),
    ]
  },
  {
    id: 'me', ar: 'تكنولوجيا الميكانيكا', en: 'Mechanical Technology', members: [
      m('زياد خيري', 'Ziad Khairi','/Team/ziad.jpg'), m('محمد غزال', 'Mohammad Ghazal','/Team/ghazal.jpg'),
    ]
  },
]

export const content = {
  ar: {
    toggle: 'English', scroll: 'اسحب للأسفل',
    tagline: 'روبوت زراعي ذكي يفحص كل نبتة، ويكتشف المرض قبل ما ينتشر.',
    marquee: ['ذكاء اصطناعي', 'روبوتات', 'زراعة ذكية', 'كشف مبكر', 'رؤية حاسوبية', 'استدامة'],
    aboutTitle: 'عين ذكية بتحرس كل نبتة في الحقل',
    about: [
      'Lamma7 روبوت زراعي ذكي صُمم لمساعدة المزارعين على مراقبة محاصيلهم وحمايتها بكفاءة. يتحرك بشكل مستقل بين النباتات وعلى أنواع مختلفة من الأراضي الزراعية، ومصمم للتعامل مع العوائق والأرض غير المستوية وظروف الحقول الصعبة.',
      'بكاميرات وحساسات متطورة يفحص النباتات باستمرار أثناء الحركة دون توقفات غير ضرورية، ويكتشف الآفات والأمراض وأي عوامل تؤثر في صحة المحصول.',
    ],
    chips: ['حركة مستقلة', 'فحص أثناء السير', 'تحديد مكان النبتة المصابة', 'تحكم يدوي آمن'],
    demoTitle: 'شوف الروبوت وهو شغال',
    demoSub: 'يمشي بين الصفوف، يفحص، يلاقي النبتة المصابة ويعلّم عليها.',
    detected: 'نبتة مصابة!',
    steps: [
      ['يتحرك', 'يمشي بين النباتات بشكل مستقل على أي نوع أرض.'],
      ['يفحص', 'كاميرا على ذراع متحركة تفحص من ارتفاعات وزوايا مختلفة.'],
      ['يكتشف', 'الذكاء الاصطناعي يميّز الآفات والأمراض مبكرًا.'],
      ['يحدد ويعلّم', 'يحدد موقع النبتة المصابة ويضع علامة عليها بطريقة آمنة.'],
    ],
    featTitle: 'ليه Lamma7؟',
    feats: [
      ['Camera', 'فحص مستمر', 'كاميرات وحساسات تفحص أثناء الحركة بدون توقف.'],
      ['Bug', 'كشف الآفات والأمراض', 'اكتشاف مبكر للعوامل التي تهدد صحة المحصول.'],
      ['MapPin', 'تحديد دقيق للموقع', 'معرفة مكان النبتة المصابة بالضبط ووضع علامة آمنة عليها.'],
      ['Mountain', 'يتحمل الحقول الصعبة', 'يتعامل مع العوائق والأرض غير المستوية.'],
      ['Database', 'بيانات تدعم القرار', 'يجمع بيانات بيئية وبيانات المحاصيل للمراقبة واتخاذ قرارات أفضل.'],
      ['Gamepad2', 'تحكم يدوي', 'خيار تحكم يدوي يمنح المزارع سيطرة وأمانًا عند الحاجة.'],
    ],
    goalTitle: 'هدفنا',
    goal: 'تطوير منظومة زراعية ذكية تعتمد على الروبوتات والذكاء الاصطناعي لمراقبة المحاصيل، والكشف المبكر عن الآفات والأمراض، وتحديد مواقع النباتات المصابة بدقة، بما يعزز كفاءة الإنتاج الزراعي ويقلل الخسائر ويرشّد استخدام الموارد ويدعم التحول نحو زراعة مستدامة.',
    instTitle: 'تحت رعاية',
    inst: [
      ['الكلية', 'الكلية التكنولوجية المصرية الالمانية'],
      ['الجامعة', 'جامعة اسيوط التكنولوجية الدولية'],
      ['تحت إشراف', 'د. هشام عبدالنبي'],
      ['عميد الكلية', 'أ.د. احمد سعد'],
    ],
    teamTitle: 'فريق العمل',
    teamSub: '١٥ طالبًا من ثلاثة أقسام، اشتغلوا كفريق واحد.',
    contactTitle: 'تواصل معنا',
    contactSub: 'عندك سؤال أو فكرة؟ هتلاقينا هنا.',
    foot: 'مشروع تخرج © 2026 Lamma7',
    labels: { gmail: 'Gmail', instagram: 'Instagram', facebook: 'Facebook', tiktok: 'TikTok' },
  },
  en: {
    toggle: 'عربي', scroll: 'Scroll down',
    tagline: 'A smart farming robot that checks every plant and spots disease before it spreads.',
    marquee: ['Artificial Intelligence', 'Robotics', 'Smart Farming', 'Early Detection', 'Computer Vision', 'Sustainability'],
    aboutTitle: 'A smart eye guarding every plant in the field',
    about: [
      'Lamma7 is an intelligent agricultural robot designed to help farmers monitor and protect their crops efficiently. It moves autonomously between plants and across different types of farmland, built to handle obstacles, uneven ground, and harsh field conditions.',
      'Using advanced cameras and sensors, it scans plants continuously while moving, with no unnecessary stops, and detects pests, diseases, and other factors that affect crop health.',
    ],
    chips: ['Autonomous movement', 'Scans while moving', 'Pinpoints infected plants', 'Safe manual control'],
    demoTitle: 'Watch the robot at work',
    demoSub: 'It rolls between rows, scans, finds the infected plant, and marks it.',
    detected: 'Infected plant!',
    steps: [
      ['Moves', 'Travels between plants on its own, on any kind of terrain.'],
      ['Scans', 'A camera on a movable arm checks plants from different heights and angles.'],
      ['Detects', 'AI recognizes pests and diseases early.'],
      ['Locates & marks', 'Finds the infected plant and marks it safely.'],
    ],
    featTitle: 'Why Lamma7?',
    feats: [
      ['Camera', 'Continuous scanning', 'Cameras and sensors inspect plants while the robot keeps moving.'],
      ['Bug', 'Pest & disease detection', 'Early detection of anything that threatens crop health.'],
      ['MapPin', 'Precise location', 'Knows exactly where the infected plant is and marks it safely.'],
      ['Mountain', 'Built for tough fields', 'Handles obstacles and uneven terrain.'],
      ['Database', 'Data for decisions', 'Collects environmental and crop data for better monitoring and decisions.'],
      ['Gamepad2', 'Manual control', 'An optional manual mode gives farmers extra control and safety.'],
    ],
    goalTitle: 'Our goal',
    goal: 'To develop a smart farming system built on robotics and artificial intelligence that monitors crops, detects pests and diseases early, and locates infected plants precisely, improving production efficiency, reducing losses, saving resources, and supporting sustainable agriculture.',
    instTitle: 'Under the patronage of',
    inst: [
      ['Faculty', 'Egyptian-German Technological College'],
      ['University', 'Assiut International Technological University'],
      ['Supervised by', 'Dr. Hisham Abdelnabi'],
      ['College Dean', 'Prof. Dr. Ahmed Saad'],
    ],
    teamTitle: 'The team',
    teamSub: 'Fifteen students from three departments, working as one.',
    contactTitle: 'Get in touch',
    contactSub: 'Have a question or an idea? Find us here.',
    foot: 'Graduation project © 2026 Lamma7',
    labels: { gmail: 'Gmail', instagram: 'Instagram', facebook: 'Facebook', tiktok: 'TikTok' },
  },
}

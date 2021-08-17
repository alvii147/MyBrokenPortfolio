import RouthHurwitzImage from '../../images/Projects/RouthHurwitz.png';
import AltruistImage from '../../images/Projects/Altruist.png';
import quickVaxImage from '../../images/Projects/quickVax.png';
import cramaiImage from '../../images/Projects/cramai.gif';
import pupilImage from '../../images/Projects/pupil.png';
import MangoUIImage from '../../images/Projects/MangoUI.gif';
import kkardImage from '../../images/Projects/kkard.png';
import HachikosJournalImage from '../../images/Projects/HachikosJournal.gif';
import DSLXAcademyImage from '../../images/Projects/DSLXAcademy.gif';
import EduSourceImage from '../../images/Projects/EduSource.png';
import GoodwillStudioImage from '../../images/Projects/GoodwillStudio.png';
import BuildAboutImage from '../../images/Projects/BuildAbout.png';
import BanglaNotepadImage from '../../images/Projects/BanglaNotepad.gif';
import SmartWardrobeImage from '../../images/Projects/SmartWardrobe.png';

import * as TechIcons from '../TechIcons/TechIcons';

const data = [
    {
        title: 'Routh-Hurwitz Table Generator',
        caption: 'Web application that computes the Routh-Hurwitz Stability Table for Control Systems Analysis',
        image: RouthHurwitzImage,
        description: [
            'Utilized <strong>Python</strong> library <strong>SymPy</strong> for symbolic mathematics to compute Routh-Hurwitz Table',
            'Accomodated complex mathematical computations using named variables',
            'Developed <strong>Flask</strong> web application using <strong>Bootstrap</strong> templates and deployed as <strong>Heroku</strong> app',
        ],
        github: 'https://github.com/alvii147/RouthHurwitz',
        website: 'https://routhhurwitz.herokuapp.com',
        milestones: [],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.SympyIcon,
            TechIcons.FlaskIcon,
            TechIcons.HerokuIcon,
            TechIcons.BootstrapIcon,
        ]
    },
    {
        title: 'Altruist',
        caption: 'Mobile & web platform to promote altruism and the assistance of senior citizens during a difficult time',
        image: AltruistImage,
        description: [
            'Assembled <strong>Django</strong> server with REST API using <strong>Django REST Framework</strong> including user login and registration web pages',
            'Designed and constructed elegant, cross-platform mobile application using <strong>React Native</strong> and <strong>Expo</strong>',
            'Arranged points system for users based on completed errands that may be redeemable for rewards',
        ],
        github: 'https://github.com/alvii147/Altruist',
        devpost: 'https://devpost.com/software/altruist-2fvaod',
        milestones: [],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.DjangoIcon,
            TechIcons.JavascriptIcon,
            TechIcons.ReactJsIcon,
            TechIcons.GooglemapsIcon,
        ],
    },
    {
        title: 'quickVax',
        caption: 'A web application that efficiently matches vaccine receivers with medical institutions using patient priority queue system',
        image: quickVaxImage,
        description: [
            'Employed backend <strong>Django</strong> server with REST API using <strong>Django REST Framework</strong> and <strong>SQLite3</strong> database using Django ORM to store user data',
            'Managed <strong>priority queue</strong> for vaccination to prioritize senior patients and patients with underlying health issues',
            'Developed interactive <strong>React.js</strong> application with <strong>React Bootstrap</strong> and <strong>Materials UI</strong> frontend libraries',
        ],
        github: 'https://github.com/alvii147/quickVax',
        devpost: 'https://devpost.com/software/quickvax',
        milestones: [],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.DjangoIcon,
            TechIcons.JavascriptIcon,
            TechIcons.ReactJsIcon,
            TechIcons.BootstrapIcon,
            TechIcons.MaterialuiIcon,
            TechIcons.SqliteIcon,
        ],
    },
    {
        title: 'cram.ai',
        caption: 'Web platform that uses natural language processing to analyze lecture videos and generate learning flashcards',
        image: cramaiImage,
        description: [
            'Utilized <strong>YouTube Transcript API</strong> to extract lecture video transcript and applied pre-trained <strong>RNN</strong> to add punctuation',
            'Incorporated <strong>Python NLTK</strong> library and <strong>Google Cloud Language</strong> to summarize key points from lecture videos',
            'Generated flashcards with questions and answers in a user-friendly frontend served by a <strong>Flask</strong> backend hosted on <strong>Heroku</strong>',
        ],
        github: 'https://github.com/alvii147/cram.ai',
        devpost: 'https://devpost.com/software/cram-ai',
        website: 'https://cram-ai.herokuapp.com',
        milestones: [
            ['Best Use of Google Cloud', 'WinterHacklympics'],
        ],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.FlaskIcon,
            TechIcons.GooglecloudIcon,
            TechIcons.HerokuIcon,
            TechIcons.YoutubeIcon,
            TechIcons.BootstrapIcon,
        ],
    },
    {
        title: 'pupil',
        caption: 'Computer vision application that detects pupil movement and develops eye-tracking communication for Cerebral Palsy patients',
        image: pupilImage,
        description: [
            'Applied <strong>Haar Cascade classifiers, blob detection</strong> and <strong>morphological transformations</strong> in <strong>OpenCV</strong> to process images in real-time',
            'Utilized <strong>multi-state sigmoid activation function</strong> to calibrate pupil coordinates',
            'Designed user-friendly <strong>multi-threaded</strong> interface in <strong>PyQt5</strong> and developed efficient mapping between pupil movement patterns and words',
        ],
        github: 'https://github.com/alvii147/pupil',
        devpost: 'https://devpost.com/software/pupil-3sctez',
        milestones: [
            ['Wolfram Award', 'HackDuke'],
        ],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.NumpyIcon,
            TechIcons.OpencvIcon,
            TechIcons.QtIcon,
        ],
    },
    {
        title: 'Mango.UI',
        caption: 'Python PyQt5 library that provides custom-styled widgets for sharper desktop app development',
        image: MangoUIImage,
        description: [
            'Incorporate <strong>Qt Style Sheets</strong> and QVariantAnimation object to configure hover-animated button widgets',
            'Utilized QPainter and QPixmap to build Canvas object for drawing on window',
            'Handled color operations and conversions between RGB, Hex and QColor objects',
        ],
        github: 'https://github.com/alvii147/MangoUI',
        milestones: [],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.QtIcon,
        ],
    },
    {
        title: 'k kard',
        caption: 'A mobile app that provides a fun, yet educational way for children and parents to manage their finances',
        image: kkardImage,
        description: [
            'Developed and Deployed fin-tech mobile application with stack and tab navigation using <strong>React Native</strong> and <strong>Expo</strong>',
            'Leveraged <strong>Google Cloud Vision</strong> to implement object detection and identification',
            'Assembled a document-based <strong>Firebase</strong> backend to store user credentials and information',
        ],
        github: 'https://github.com/christylo/kardv3',
        devpost: 'https://devpost.com/software/k-kard',
        milestones: [
            ['Perfect Pitch', 'HackWestern'],
            ['FuturFund: Women in Financial Literacy Award', 'HackWestern'],
        ],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.JavascriptIcon,
            TechIcons.ReactJsIcon,
            TechIcons.FirebaseIcon,
            TechIcons.GooglecloudIcon,
        ]
    },
    {
        title: 'Hachiko\'s Journal',
        caption: 'AI-based digital therapeutic journal writing application for mental health patients with interactive virtual assistant',
        image: HachikosJournalImage,
        description: [
            'Developed desktop application with user-friendly frontend and interactive virtual assistant using <strong>PyQt5</strong>',
            'Performed <strong>sentiment analysis</strong> using <strong>Google Cloud Language</strong> to provide real-time feedback and compliments',
            'Implemented <strong>multi-threading</strong> in <strong>Python</strong> to accommodate NLP computations while running frontend',
        ],
        github: 'https://github.com/alvii147/HachikosJournal',
        devpost: 'https://devpost.com/software/hachiko-s-journal',
        milestones: [
            ['1st Place Health Track', 'HackRU'],
        ],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.QtIcon,
            TechIcons.GooglecloudIcon,
        ],
    },
    {
        title: 'DSLX Academy',
        caption: 'Platform dedicated to helping children overcome dyslexia',
        image: DSLXAcademyImage,
        description: [
            'Assembled <strong>Python Flask</strong> server backend with <strong>Bootstrap</strong> templates for frontend',
            'Incorporated <strong>Azure Cognitive Services</strong> for Speech-To-Text conversion to develop app that helps overcome speech impediment',
            'Implemented optical character recognition using <strong>Google Cloud Vision</strong> to provide feedback for handwriting skills',
        ],
        github: 'https://github.com/alvii147/HachikosJournal',
        devpost: 'https://devpost.com/software/hachiko-s-journal',
        milestones: [],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.FlaskIcon,
            TechIcons.GooglecloudIcon,
            TechIcons.MicrosoftazureIcon,
            TechIcons.BootstrapIcon,
        ],
    },
    {
        title: 'EduSource',
        caption: 'Web application for enriched remote education, crowdsourcing course materials and scientific equation recognition',
        image: EduSourceImage,
        description: [
            'Constructed full-fledged <strong>Flask</strong> application in Python with HTML, CSS and Bootstrap',
            'Established and managed foreign key relations between ORM objects using <strong>Flask SQLAlchemy</strong> and <strong>SQLite3</strong>',
            'Employed <strong>Google Cloud Vision</strong> tool to implement scientific equation recognition from handwriting',
        ],
        github: 'https://github.com/alvii147/EduSource',
        devpost: 'https://devpost.com/software/edusource',
        milestones: [
            ['Best Use of Google Cloud', 'Hackrithmitic'],
            ['Best Use of Google Cloud', 'HackTheU'],
        ],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.FlaskIcon,
            TechIcons.GooglecloudIcon,
            TechIcons.BootstrapIcon,
        ]
    },
    {
        title: 'Goodwill Studio',
        caption: 'An efficient profanity-filtering tool to combat Tourette Syndrome',
        image: GoodwillStudioImage,
        description: [
            'Employed <strong>Google Cloud Speech</strong> to transcribe audio and censored profane language using <strong>natural language processing</strong>',
            'Incorporated <strong>multi-threading</strong> in <strong>PyQt5</strong> to develop interactive GUI with voice recording capabilities',
            'Filtered profanity from converted text using Python module <strong>better-profanity</strong>',
        ],
        github: 'https://github.com/alvii147/GoodwillStudio',
        devpost: 'https://devpost.com/software/goodwill-studio',
        milestones: [
            ['Best Use of Google Cloud', 'sunhacks'],
        ],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.QtIcon,
            TechIcons.GooglecloudIcon,
        ]
    },
    {
        title: 'BuildAbout',
        caption: 'Machine learning based web application for brainstorming eco-friendly project ideas for specified tools and materials',
        image: BuildAboutImage,
        description: [
            'Built <strong>Java Springboot</strong> backend with REST API',
            'Designed and developed interactive frontend in <strong>React.js</strong>',
            'Utilized <strong>Google Cloud Language API</strong> in <strong>Python</strong> to identify tools and materials from project descriptions',
        ],
        github: 'https://github.com/anouarh/ivyhacks-buildabout',
        devpost: 'https://devpost.com/software/buildabout-ewaopy',
        milestones: [
            ['Best Use of Google Cloud', 'IvyHacks'],
        ],
        technologies: [
            TechIcons.JavaIcon,
            TechIcons.SpringbootIcon,
            TechIcons.ReactJsIcon,
            TechIcons.PythonIcon,
            TechIcons.GooglecloudIcon,
        ]
    },
    {
        title: 'Bangla Notepad',
        caption: 'Deep learning application to recognize Bengali alphabets and numerals',
        image: BanglaNotepadImage,
        description: [
            'Trained and tested model using 4-layered <strong>neural network</strong> under <strong>Tensorflow</strong> and <strong>Keras</strong>',
            'Cleaned image dataset using customized <strong>sigmoid activation function</strong> to prevent overfitting',
            'Developed and deployed canvas-based web application for demo using a <strong>Flask</strong> server on <strong>Heroku</strong>',
        ],
        github: 'https://github.com/alvii147/BanglaNotepad',
        website: 'https://banglanotepad.herokuapp.com/',
        milestones: [],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.NumpyIcon,
            TechIcons.TensorflowIcon,
            TechIcons.KerasIcon,
            TechIcons.FlaskIcon,
            TechIcons.HerokuIcon,
        ]
    },
    {
        title: 'Smart Wardrobe',
        caption: 'Deep learning application that identifies pieces of clothing',
        image: SmartWardrobeImage,
        description: [
            'Trained machine learning model using <strong>neural network</strong> under <strong>Tensorflow</strong> and <strong>Keras</strong>',
            'Achieved <strong>73% model accuracy</strong> in 3 epochs',
            'Constructed <strong>PyQt5</strong> desktop user interface to accommodate GUI mode as well as command line mode',
        ],
        github: 'https://github.com/alvii147/SmartWardrobe',
        milestones: [],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.NumpyIcon,
            TechIcons.TensorflowIcon,
            TechIcons.KerasIcon,
            TechIcons.QtIcon,
        ]
    },
]

export default data;
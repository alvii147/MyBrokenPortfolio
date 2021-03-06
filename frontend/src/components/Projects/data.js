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
import DiscreteTimeLibImage from '../../images/Projects/DiscreteTimeLib.png';
import CrimeStatsAnalysisImage from '../../images/Projects/CrimeStatsAnalysis.png';
import ImageNoiseInterpolationImage from '../../images/Projects/ImageNoiseInterpolation.png';
import VentryImage from '../../images/Projects/Ventry.png';

import * as TechIcons from '../TechIcons/TechIcons';

const data = [
    {
        active: true,
        title: 'Ventry',
        caption: 'Inventory tracking CRUD application',
        image: VentryImage,
        description: [
            'Constructed REST API in <strong>Go</strong> with <strong>CRUD</strong> functionality using <strong>net/http</strong> package and <strong>PostgreSQL</strong> database',
            'Configured application for exporting inventory items to CSV format',
            'Dockerized application using <strong>Docker Compose</strong>',
        ],
        github: 'https://github.com/alvii147/Ventry',
        milestones: [],
        technologies: [
            TechIcons.GoIcon,
            TechIcons.PostgresqlIcon,
            TechIcons.DockerIcon,
        ]
    },
    {
        active: true,
        title: 'Image Noise Interpolation',
        caption: 'Replication of the color image interpolation methods to correct impulsive noise',
        image: ImageNoiseInterpolationImage,
        description: [
            'Applied methods described in research paper to detect salt-and-pepper noise in colored images and perform interpolation operation to retrieve original pixels',
            'Outlined functions for manipulation of <strong>NumPy</strong> arrays and used <strong>Matplotlib</strong> color maps for visualization',
            'Performed <strong>normalized mean-squared error</strong> as performance metric to measure effectiveness of implemented method',
        ],
        github: 'https://github.com/alvii147/ImageNoiseInterpolation',
        website: 'https://alvii147.github.io/ImageNoiseInterpolation/report/ECE_313_Course_Project',
        youtube: 'https://youtu.be/IIOEmZrXtrY',
        milestones: [],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.NumpyIcon,
        ]
    },
    {
        active: true,
        title: 'Crime Stats Analysis',
        caption: 'Crime statistics database design & analysis',
        image: CrimeStatsAnalysisImage,
        description: [
            'Analyzed crime records datasets of London, New York, Chicago, and Los Angeles, and outlined <strong>entity-relationship model</strong> for database',
            'Automated creation of <strong>MySQL</strong> database and built command-line interface in Python to handle basic queries',
            'Applied <strong>Spearman\'s Rank Correlation</strong> in SciPy and visualized data in <strong>Matplotlib</strong> to investigate factors that determine stop-and-search outcomes',
        ],
        github: 'https://github.com/alvii147/CrimeStatsAnalysis',
        website: 'https://alvii147.github.io/CrimeStatsAnalysis/report/Report',
        youtube: 'https://youtu.be/aTREWcHJalw',
        milestones: [],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.MysqlIcon,
            TechIcons.ScipyIcon,
        ]
    },
    {
        active: true,
        title: 'DiscreteTimeLib',
        caption: 'Python package for analysis of discrete time signals and systems',
        image: DiscreteTimeLibImage,
        description: [
            'Utilized object-oriented programming in Python to develop package for discrete-time signals and systems analysis',
            'Implemented discrete-time operations, including <strong>convolution</strong>, <strong>digital filtering</strong>, and <strong>inverse Z-transforms<strong>',
            'Incorporated Github actions to automate unit testing using <strong>pytest</strong> and <strong>coverage</strong>',
        ],
        github: 'https://github.com/alvii147/DiscreteTimeLib',
        milestones: [],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.NumpyIcon,
            TechIcons.PandasIcon,
            TechIcons.ScipyIcon,
            TechIcons.SympyIcon,
        ]
    },
    {
        active: true,
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
        active: true,
        title: 'Altruist',
        caption: 'Mobile and web platform to promote altruism and the assistance of senior citizens during a difficult time',
        image: AltruistImage,
        description: [
            'Assembled <strong>Django</strong> server with REST API using <strong>Django REST Framework</strong> including user login and registration web pages',
            'Designed and constructed elegant, cross-platform mobile application using <strong>React Native</strong> and <strong>Expo</strong>',
            'Arranged points system for users based on completed errands that may be redeemable for rewards',
        ],
        github: 'https://github.com/alvii147/Altruist',
        devpost: 'https://devpost.com/software/altruist-2fvaod',
        youtube: 'https://youtu.be/0xuxMHK1F9Y',
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
        active: true,
        title: 'quickVax',
        caption: 'A web application that efficiently matches vaccine receivers with medical institutions using patient priority queue system',
        image: quickVaxImage,
        description: [
            'Employed backend <strong>Django</strong> server with REST API using <strong>Django REST Framework</strong> and <strong>SQLite3</strong> database, using Django ORMs to store user data',
            'Managed <strong>priority queue</strong> for vaccination to prioritize senior patients and patients with underlying health issues',
            'Developed interactive <strong>React.js</strong> application with <strong>React Bootstrap</strong> and <strong>Materials UI</strong> frontend libraries',
        ],
        github: 'https://github.com/alvii147/quickVax',
        devpost: 'https://devpost.com/software/quickvax',
        youtube: 'https://youtu.be/CR-H_pygR2w',
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
        active: true,
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
        youtube: 'https://youtu.be/P16aGODx5OU',
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
        active: true,
        title: 'pupil',
        caption: 'Computer vision application that detects pupil movement and develops eye-tracking communication for Cerebral Palsy patients',
        image: pupilImage,
        description: [
            'Applied <strong>Haar Cascade classifiers, blob detection,</strong> and <strong>morphological transformations</strong> in <strong>OpenCV</strong> to process images in real-time',
            'Utilized <strong>multi-state sigmoid activation function</strong> to calibrate pupil coordinates',
            'Designed user-friendly <strong>multi-threaded</strong> interface in <strong>PyQt5</strong> and developed efficient mapping between pupil movement patterns and words',
        ],
        github: 'https://github.com/alvii147/pupil',
        devpost: 'https://devpost.com/software/pupil-3sctez',
        youtube: 'https://youtu.be/_9XTW2mqdjo',
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
        active: true,
        title: 'Mango.UI',
        caption: 'Python PyQt5 library that provides custom-styled widgets for sharper desktop app development',
        image: MangoUIImage,
        description: [
            'Incorporated <strong>Qt Style Sheets</strong> and QVariantAnimation object to configure hover-animated button widgets',
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
        active: true,
        title: 'k kard',
        caption: 'A mobile app that provides a fun, yet educational way for children and parents to manage their finances',
        image: kkardImage,
        description: [
            'Developed & deployed fin-tech mobile application with stack and tab navigation using <strong>React Native</strong> and <strong>Expo</strong>',
            'Leveraged <strong>Google Cloud Vision</strong> to implement object detection and identification',
            'Assembled a document-based <strong>Firebase</strong> backend to store user credentials and information',
        ],
        github: 'https://github.com/christylo/kardv3',
        devpost: 'https://devpost.com/software/k-kard',
        youtube: 'https://youtu.be/3eHyQgif-yI',
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
        active: true,
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
        youtube: 'https://youtu.be/eLksAlg7IP8',
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
        active: true,
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
        youtube: 'https://youtu.be/zFMFPs3CKh0',
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
        active: true,
        title: 'EduSource',
        caption: 'Web application for enriched remote education, crowdsourcing course materials, and scientific equation recognition',
        image: EduSourceImage,
        description: [
            'Constructed full-fledged <strong>Flask</strong> application in Python with HTML, CSS, and Bootstrap',
            'Established and managed foreign key relations between ORM objects using <strong>Flask SQLAlchemy</strong> and <strong>SQLite3</strong>',
            'Employed <strong>Google Cloud Vision</strong> tool to implement scientific equation recognition from handwriting',
        ],
        github: 'https://github.com/alvii147/EduSource',
        devpost: 'https://devpost.com/software/edusource',
        youtube: 'https://youtu.be/-2_g7Y_6jL8',
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
        active: true,
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
        youtube: 'https://youtu.be/s4MnD7pdQyg',
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
        active: true,
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
        youtube: 'https://youtu.be/Z5VhOhNzg80',
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
        active: true,
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
        active: true,
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
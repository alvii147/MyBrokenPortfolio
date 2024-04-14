import RouthHurwitzImage from '../../images/Projects/RouthHurwitz.png';
import AltruistImage from '../../images/Projects/Altruist.png';
import quickVaxImage from '../../images/Projects/quickVax.png';
import cramaiImage from '../../images/Projects/cramai.gif';
import pupilImage from '../../images/Projects/pupil.png';
import MangoUIImage from '../../images/Projects/MangoUI.gif';
import kkardImage from '../../images/Projects/kkard.png';
import STUMPYImage from '../../images/Projects/STUMPY.png';
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
import chromaticImage from '../../images/Projects/chromatic.png';
import TordleImage from '../../images/Projects/Tordle.png';
import gitmsgImage from '../../images/Projects/gitmsg.png';
import FunFakerImage from '../../images/Projects/FunFaker.png';
import SigmoidAcademyImage from '../../images/Projects/SigmoidAcademy.png';
import MyBrokenPortfolioImage from '../../images/Projects/MyBrokenPortfolio.png';
import RemarkImage from '../../images/Projects/Remark.png';
import OpenChromaImage from '../../images/Projects/OpenChroma.png';
import SHRIMPImage from '../../images/Projects/SHRIMP.png';
import DataCheeseImage from '../../images/Projects/DataCheese.png';
import FlaggerImage from '../../images/Projects/Flagger.png';

import * as TechIcons from '../TechIcons/TechIcons';

const data = [
    {
        active: true,
        title: 'Flagger',
        caption: 'Platform that unifies feature flag automation',
        image: FlaggerImage,
        description: [
            'Implemented JWT authentication and repository pattern web server in <strong>Go</strong>',
            'Incorporated <strong>PostgreSQL</strong> database using <strong>pgx</strong> driver in Go',
            '<strong>Dockerized</strong> application using Docker Compose',
        ],
        github: 'https://github.com/alvii147/flagger-api',
        milestones: [],
        technologies: [
            TechIcons.GoIcon,
            TechIcons.PostgresqlIcon,
            TechIcons.DockerIcon,
        ]
    },
    {
        active: true,
        title: 'DataCheese',
        caption: 'Popular data science and machine learning algorithms',
        image: DataCheeseImage,
        description: [
            'Implemented data science and machine learning algorithms using <strong>NumPy</strong>',
            'Supports <strong>Multi-Layer Perceptron</strong>, <strong>Convolution</strong>, <strong>KNN</strong>, <strong>K-Means Clustering</strong>, and <strong>K-Fold Cross-Validation</strong>',
            'Rigorously tested using <strong>Pytest</strong>',
        ],
        github: 'https://github.com/alvii147/DataCheese',
        website: 'https://alvii147.github.io/DataCheese/build/html/index.html',
        milestones: [],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.NumpyIcon,
            TechIcons.PytestIcon,
        ]
    },
    {
        active: false,
        title: 'SHRIMP',
        caption: 'Scalable Heuristic Robust Iterative Matrix Profile',
        image: SHRIMPImage,
        description: [
            'Formulated novel matrix profile approximation algorithm using a variation  of <strong>Hill Climbing</strong> algorithm',
            'Parallelized array manipulation using <strong>NumPy</strong> and <strong>Numba</strong>',
            'Improved convergence percentage of current industry-standard approximation algorithm',
        ],
        milestones: [],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.NumpyIcon,
            TechIcons.NumbaIcon,
        ]
    },
    {
        active: false,
        title: 'OpenChroma',
        caption: 'Python library for image processing & operations',
        image: OpenChromaImage,
        description: [
            'Implemented image operations using array manipulation algorithms in <strong>NumPy</strong>',
            'Supported color conversion algorithms',
            'Rigorously tested library using <strong>pytest</strong>',
        ],
        github: 'https://github.com/alvii147/OpenChroma',
        website: 'https://alvii147.github.io/OpenChroma/build/html/index.html',
        milestones: [],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.NumpyIcon,
            TechIcons.PytestIcon,
        ]
    },
    {
        active: true,
        title: 'Remark',
        caption: 'Minimalistic Markdown and reStructuredText editor',
        image: RemarkImage,
        description: [
            'Developed minimalistic desktop UI application using <strong>PyQt6</strong>',
            'Accommodated support for both Markdown and reStructuredText modes',
            'Implemented configurable settings, including dark mode and font support',
        ],
        github: 'https://github.com/alvii147/ReMark',
        milestones: [],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.QtIcon,
        ]
    },
    {
        active: true,
        title: 'My Broken Portfolio',
        caption: 'My broken, barely functional, not-so-professional portfolio',
        image: MyBrokenPortfolioImage,
        description: [
            'Designed Ubuntu-themed responsive website using <strong>React.js</strong>',
            'Developed <strong>Django</strong> backend to support endorsement submissions and contact form',
            'Utilized <strong>textblob</strong> models to perform sentiment analysis on endorsements',
        ],
        github: 'https://github.com/alvii147/MyBrokenPortfolio',
        website: 'https://zahin-zaman.vercel.app/',
        milestones: [],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.JavascriptIcon,
            TechIcons.DjangoIcon,
            TechIcons.SqliteIcon,
            TechIcons.ReactJsIcon,
        ]
    },
    {
        active: true,
        title: 'Sigmoid Academy',
        caption: 'Data science learning platform with coding challenges for developers',
        image: SigmoidAcademyImage,
        description: [
            'Orchestrated backend <strong>Django</strong> application that handles JWT-based authentication, database management, and remote-code execution',
            'Composed user-friendly frontend using <strong>React.js</strong> and <strong>TypeScript</strong> that accommodates coding challenge submissions and test cases',
            'Incorporated combination of <strong>SQL</strong> and <strong>NoSQL</strong> databases using <strong>PostgreSQL</strong> and <strong>Redis</strong>',
        ],
        website: 'https://sigmoid-academy.netlify.app/',
        milestones: [],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.TypescriptIcon,
            TechIcons.DjangoIcon,
            TechIcons.PostgresqlIcon,
            TechIcons.RedisIcon,
            TechIcons.ReactJsIcon,
        ]
    },
    {
        active: true,
        title: 'FunFaker',
        caption: 'Web API for generating fake data with pop culture references',
        image: FunFakerImage,
        description: [
            'Developed <strong>Go</strong>-based web API from scratch with routers, handlers, and unit testing, using Go net/http package',
            'Configured multi-staged <strong>Docker</strong> builds and hosted API as service on Northflank',
            'Gathered and structured datasets based on pop-culture, and implemented management actions for data validation',
        ],
        github: 'https://github.com/alvii147/FunFaker',
        website: 'https://funfaker--api--cgvttg4279tq.code.run/',
        milestones: [],
        technologies: [
            TechIcons.GoIcon,
            TechIcons.DockerIcon,
        ]
    },
    {
        active: true,
        title: 'gitmsg',
        caption: 'App for writing git commit messages using 50/72 rule',
        image: gitmsgImage,
        description: [
            'Developed & illustrated user-friendly <strong>PyQt6</strong>-based cross-platform desktop application with commit message preview',
            'Implemented interactive command-line interface in <strong>Go</strong> with commit message exporting and clipboard copying capabilities',
            'Devised thorough unit testing in multiple platforms with GitHub actions using QTest module and Go testing package',
        ],
        github: 'https://github.com/alvii147/gitmsg',
        milestones: [],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.GoIcon,
            TechIcons.QtIcon,
        ]
    },
    {
        active: true,
        title: 'Tordle',
        caption: 'Terminal-based clone of Wordle',
        image: TordleImage,
        description: [
            'Devised <strong>Python</strong> command-line interface program',
            'Employed Dictionary API to present word definition on the terminal',
            'Implemented colored terminal output with cross-platform compatibility',
        ],
        github: 'https://github.com/alvii147/Tordle',
        milestones: [],
        technologies: [
            TechIcons.PythonIcon,
        ]
    },
    {
        active: false,
        title: 'chromatic',
        caption: 'Image repository with facial detection features',
        image: chromaticImage,
        description: [
            'Engineered full-stack <strong>Django</strong> application with user authentication and static file storage',
            'Implemented facial detection using Haar Cascade classifiers in <strong>OpenCV</strong>',
            'Formulated Python unit tests for Django views, URLs, models, and facial detection features',
        ],
        github: 'https://github.com/alvii147/chromatic',
        website: 'https://devpostman404.pythonanywhere.com/',
        milestones: [],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.DjangoIcon,
            TechIcons.OpencvIcon,
        ]
    },
    {
        active: false,
        title: 'Ventry',
        caption: 'Inventory tracking CRUD application',
        image: VentryImage,
        description: [
            'Constructed REST API in <strong>Go</strong> with <strong>CRUD</strong> functionality using <strong>net/http</strong> package and <strong>PostgreSQL</strong> database',
            'Configured application for exporting inventory items to CSV format',
            'Dockerized application using <strong>Docker Compose</strong>',
        ],
        github: 'https://github.com/alvii147/Ventry',
        website: 'https://ventry.zahinzaman1.repl.co/',
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
            'Utilized libraries <strong>NumPy</strong> and <strong>SymPy</strong> for scientific computation and symbolic mathematics in <strong>Python</strong>',
            'Accomodated complex mathematical computations using named variables',
            'Developed and deployed as live <strong>Streamlit</strong> web application',
        ],
        github: 'https://github.com/alvii147/RouthHurwitz',
        website: 'https://routhhurwitz.streamlit.app',
        milestones: [],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.NumpyIcon,
            TechIcons.SympyIcon,
            TechIcons.StreamlitIcon,
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
        caption: 'Python PyQt6 library that provides custom-styled widgets for sharper desktop app development',
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
        title: 'STUMPY',
        caption: 'A powerful and scalable library that efficiently computes the Matrix Profile for time series data',
        image: STUMPYImage,
        description: [
            'Composed comprehensive tutorials on <a href="https://stumpy.readthedocs.io/en/latest/Tutorial_Annotation_Vectors.html" target="_blank" rel="noopener noreferrer" class="experience-link">Annotation Vectors</a> and <a href="https://stumpy.readthedocs.io/en/latest/Tutorial_Advanced_Annotation_Vectors.html" target="_blank" rel="noopener noreferrer" class="experience-link">Advanced Annotation Vectors</a> based on Matrix Profile research paper',
            'Implemented tiling scheme algorithm that leverages cache lines to improve Matrix Profile computation speeds by up to 50% using <strong>NumPy</strong> arrays and <strong>Numba</strong> just-in-time compilation',
            'Devised heuristic algorithm, SHRIMP, that can provide fast approximations to Matrix Profiles',
        ],
        github: 'https://github.com/TDAmeritrade/stumpy',
        milestones: [],
        technologies: [
            TechIcons.PythonIcon,
            TechIcons.NumpyIcon,
            TechIcons.NumbaIcon,
        ]
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
        github: 'https://github.com/alvii147/DSLX_Academy',
        devpost: 'https://devpost.com/software/dslx-academy',
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
        active: false,
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
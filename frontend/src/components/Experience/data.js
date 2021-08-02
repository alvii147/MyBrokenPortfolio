import NokiaLogo from '../../images/Experience/nokia_logo.png';
import NokiaLogoThumbnail from '../../images/Experience/nokia_logo_thumbnail.png';
import codePrenticeLogo from '../../images/Experience/codeprentice_logo.png';
import codePrenticeLogoThumbnail from '../../images/Experience/codeprentice_logo_thumbnail.png';
import WindRiverLogo from '../../images/Experience/windriver_logo.png';
import WindRiverLogoThumbnail from '../../images/Experience/windriver_logo_thumbnail.png';
import QualcommLogo from '../../images/Experience/qualcomm_logo.png';
import QualcommLogoThumbnail from '../../images/Experience/qualcomm_logo_thumbnail.png';
import ImagineCommunicationsLogo from '../../images/Experience/imaginecommunications_logo.png';
import ImagineCommunicationsThumbnail from '../../images/Experience/imaginecommunications_logo_thumbnail.png';
import WatonomousLogo from '../../images/Experience/watonomous_logo.png';
import WatonomousLogoThumbnail from '../../images/Experience/watonomous_logo_thumbnail.png';
import SJWSPythonClubLogo from '../../images/Experience/sjwspythonclub_logo.png';
import SJWSPythonClubLogoThumbnail from '../../images/Experience/sjwspythonclub_logo_thumbnail.png';

const data = [
    {
        company: 'Nokia Corporation',
        role: 'Full-Stack Developer',
        logo: NokiaLogo,
        thumbnail: NokiaLogoThumbnail,
        interval: 'May 2021 - Present',
        description: [
            'Developed & managed account authentication security, content management system and lab request automation for <a href="https://network.developer.nokia.com/" target="_blank" rel="noopener noreferrer" class="experience-link">Nokia Network Developer Portal</a> on <span class="experience-strong">Django</span> server</a>',
            'Secured backend server using <span class="experience-strong">Django REST framework</span> API authentication, cross site scripting protection and honeypot setups',
            'Installed unit tests in <span class="experience-strong">Python</span> using <span class="experience-strong">unittest</span> module for Django forms, models and REST API enpoints',
            'Designed responsive frontend in <span class="experience-strong">Jinja2</span> templates using <span class="experience-strong">jQuery</span> and <span class="experience-strong">Bootstrap</span>',
        ],
    },
    {
        company: 'codePrentice',
        role: 'Open Source Software Developer',
        logo: codePrenticeLogo,
        thumbnail: codePrenticeLogoThumbnail,
        interval: 'Sept 2020 - Present',
        description: [
            'Expanded <span class="experience-strong">Python</span> multiparty-computation library, <span class="experience-strong">MP-SPDZ,</span> to support <span class="experience-strong">Convolutional Neural Networks,</span> including <span class="experience-strong">SqueezeNet</span>, <span class="experience-strong">ResNet</span> and <span class="experience-strong">DenseNet</span> models',
            'Composed comprehensive tutorial based on Matrix Profile research paper for Python time series analysis library, <span class="experience-strong">STUMPY</span>',
            'Implemented <span class="experience-strong">k-nearest-neighbors</span> algorithm in STUMPY using <span class="experience-strong">NumPy</span> for time series motifs',
        ],
    },
    {
        company: 'Wind River Systems',
        role: 'Software Developer',
        logo: WindRiverLogo,
        thumbnail: WindRiverLogoThumbnail,
        interval: 'Sept 2020 - Dec 2020',
        description: [
            'Rectified multi-threading and memory-based defects for VxWorks RTOS and Helix Virtualization Platform',
            'Debugged and reconfigured source code in <span class="experience-strong">C</span> and utilized inline <span class="experience-strong">Assembly</span> to write thread-safe functions',
            'Developed interactive program in <span class="experience-strong">PyQt5</span> that assists in writing git commit messages, and verifies status of Jira issues and code reviews',
            'Formulated git hook script to detect and block commits on restricted files and identify file author',
        ],
        rating: 'Excellent',
    },
    {
        company: 'Qualcomm Inc.',
        role: 'Display Verification Engineer',
        logo: QualcommLogo,
        thumbnail: QualcommLogoThumbnail,
        interval: 'Jan 2020 - May 2020',
        description: [
            'Engineered <span class="experience-strong">SystemVerilog</span> assertions and <span class="experience-strong">C++</span> simulation tests to verify display processor design',
            'Attained <span class="experience-strong">20%</span> increase in functional coverages by debugging waveform using Synopsys Verdi tool',
            'Automated formal verification using <span class="experience-strong">Perl</span> scripting to extract design hierarchy and formulate assertions',
            'Web-scraped design database and employed <span class="experience-strong">PyQt5</span> to build interactive GUI for managing hardware registers',
        ],
        rating: 'Excellent',
    },
    {
        company: 'Imagine Communications Corp',
        role: 'Embedded Software Developer',
        logo: ImagineCommunicationsLogo,
        thumbnail: ImagineCommunicationsThumbnail,
        interval: 'May 2019 - Aug 2019',
        description: [
            'Reconstructed source code in <span class="experience-strong">C/C++</span> on a Linux environment to fix firmware bugs',
            'Extracted IP routing data from data structures and developed troubleshooting functions and mapping tables',
            'Utilized SoapUI to inspect and track REST API processes',
        ],
        rating: 'Very Good',
    },
    {
        company: 'WATonomous',
        role: 'CAN Interfacing Team Member',
        logo: WatonomousLogo,
        thumbnail: WatonomousLogoThumbnail,
        interval: 'Jan 2019 - April 2019',
        description: [
            'Developed <span class="experience-strong">Python</span> code in <span class="experience-strong">ROS</span> for car\'s lock and turn signals and inertial navigation system driver',
            'Enhanced low-speed <span class="experience-strong">CAN</span> interfacing system of the car and performed simulation in Virtual CAN Driver',
        ],
    },
    {
        company: 'SJWS Python Club',
        role: 'Co-Founder & Tutor',
        logo: SJWSPythonClubLogo,
        thumbnail: SJWSPythonClubLogoThumbnail,
        interval: 'Feb 2017 - Jan 2018',
        description: [
            'Co-founded Python Programming Club and provided Python programming lessons to students of grades 5-9',
            'Supervised and collaborated on programming projects',
        ],
    },
]

export default data;
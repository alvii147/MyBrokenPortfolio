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
        company: 'SJWS Python Club',
        role: 'Co-Founder & Tutor',
        logo: SJWSPythonClubLogo,
        thumbnail: SJWSPythonClubLogoThumbnail,
        interval: 'Feb 2017 - Jan 2018',
        description: [
            'Co-founded <strong>Python Programming Club</strong> and provided Python programming lessons to students of grades 5-9',
            'Supervised and collaborated on programming projects',
        ],
    },
    {
        company: 'WATonomous',
        role: 'CAN Interfacing Team Member',
        logo: WatonomousLogo,
        thumbnail: WatonomousLogoThumbnail,
        interval: 'Jan 2019 - April 2019',
        description: [
            'Developed <strong>Python</strong> code in <strong>ROS</strong> for car\'s lock and turn signals and inertial navigation system driver',
            'Enhanced low-speed <strong>CAN</strong> interfacing system of the car and performed simulation in Virtual CAN Driver',
        ],
    },
    {
        company: 'Imagine Communications',
        role: 'Embedded Software Developer',
        logo: ImagineCommunicationsLogo,
        thumbnail: ImagineCommunicationsThumbnail,
        interval: 'May 2019 - Aug 2019',
        description: [
            'Reconstructed source code in <strong>C/C++</strong> on a Linux environment to fix firmware bugs',
            'Extracted IP routing data from data structures and developed troubleshooting functions and mapping tables',
            'Utilized SoapUI to inspect and track REST API processes',
        ],
    },
    {
        company: 'Qualcomm',
        role: 'Display Verification Engineer',
        logo: QualcommLogo,
        thumbnail: QualcommLogoThumbnail,
        interval: 'Jan 2020 - May 2020',
        description: [
            'Engineered <strong>SystemVerilog</strong> assertions and <strong>C++ simulation</strong> tests to verify display processor design',
            'Attained <strong>20%</strong> increase in functional coverages by debugging waveform using Synopsys Verdi tool',
            'Automated formal verification using <strong>Perl</strong> scripting to extract design hierarchy and formulate assertions',
            'Web-scraped design database and employed <strong>PyQt5</strong> to build interactive GUI for managing hardware registers',
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
            'Debugged and reconfigured source code in <strong>C</strong> and utilized inline <strong>Assembly</strong> to write thread-safe functions',
            'Developed interactive program in <strong>PyQt5</strong> that assists in writing git commit messages, and verifies status of Jira issues and code reviews',
            'Formulated git hook script to detect and block commits on restricted files and identify file author',
        ],
    },
    {
        company: 'codePrentice',
        role: 'Open Source Software Developer',
        logo: codePrenticeLogo,
        thumbnail: codePrenticeLogoThumbnail,
        interval: 'Sept 2020 - Present',
        description: [
            'Expanded <strong>Python</strong> multiparty-computation library, <strong>MP-SPDZ,</strong> to support <strong>Convolutional Neural Networks,</strong> including <strong>SqueezeNet</strong>, <strong>ResNet</strong> and <strong>DenseNet</strong> models',
            'Composed comprehensive tutorial based on Matrix Profile research paper for Python time series analysis library, <strong>STUMPY</strong>',
            'Implemented <strong>k-nearest-neighbors</strong> algorithm in STUMPY using <strong>NumPy</strong> for time series motifs',
        ],
    },
    {
        company: 'Nokia',
        role: 'Full-Stack Developer',
        logo: NokiaLogo,
        thumbnail: NokiaLogoThumbnail,
        interval: 'May 2021 - Present',
        description: [
            'Developed & managed account authentication security, content management system and lab request automation for <a href="https://network.developer.nokia.com/">Nokia Network Developer Portal on <strong>Django</strong> server</a>',
            'Secured backend server using <strong>Django REST framework</strong> API authentication, cross site scripting protection and honeypot setups',
            'Installed unit tests in <strong>Python</strong> using <strong>unittest</strong> module for Django forms, models and REST API enpoints',
            'Designed responsive frontend in <strong>Jinja2</strong> templates using <strong>jQuery</strong> and <strong>Bootstrap</strong>',
        ],
    },
]

export default data;
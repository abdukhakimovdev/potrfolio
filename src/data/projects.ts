import { Project } from '../types';

import roboticsImg from '../assets/images/project_robotics_lab_1790432431310.jpg';
import pythonImg from '../assets/images/project_python_edu_1790432451730.jpg';
import iotImg from '../assets/images/project_smart_iot_1790432465979.jpg';
import mobileImg from '../assets/images/project_app_mobile_1790432484786.jpg';

export const projectsList: Project[] = [
  {
    id: 'arduino-robotic-arm',
    titleKey: 'projects.items.robotics.title',
    descriptionKey: 'projects.items.robotics.desc',
    longDescriptionKey: 'projects.items.robotics.longDesc',
    category: 'robotics',
    technologies: ['Arduino IDE', 'C++', 'Servo Motors', 'mBlock', 'Sensors'],
    image: roboticsImg,
    imageAlt: 'Arduino robotic arm lab project',
    githubUrl: 'https://github.com',
    demoUrl: '#contact',
    featured: true
  },
  {
    id: 'python-learning-suite',
    titleKey: 'projects.items.python.title',
    descriptionKey: 'projects.items.python.desc',
    longDescriptionKey: 'projects.items.python.longDesc',
    category: 'python',
    technologies: ['Python 3', 'Tkinter', 'Algorithms', 'Interactive Exercises'],
    image: pythonImg,
    imageAlt: 'Python educational interactive suite',
    githubUrl: 'https://github.com',
    demoUrl: '#contact',
    featured: true
  },
  {
    id: 'iot-smart-station',
    titleKey: 'projects.items.iot.title',
    descriptionKey: 'projects.items.iot.desc',
    longDescriptionKey: 'projects.items.iot.longDesc',
    category: 'robotics',
    technologies: ['Arduino', 'DHT22 Sensor', 'OLED Display', 'C++', 'Automation'],
    image: iotImg,
    imageAlt: 'IoT Environmental Monitoring Station',
    githubUrl: 'https://github.com',
    demoUrl: '#contact',
    featured: true
  },
  {
    id: 'mit-edu-mobile-app',
    titleKey: 'projects.items.mobile.title',
    descriptionKey: 'projects.items.mobile.desc',
    longDescriptionKey: 'projects.items.mobile.longDesc',
    category: 'android',
    technologies: ['MIT App Inventor', 'Android SDK', 'Block Programming', 'UI Design'],
    image: mobileImg,
    imageAlt: 'Student Quiz and Educational Android App',
    githubUrl: 'https://github.com',
    demoUrl: '#contact',
    featured: true
  },
  {
    id: 'ilmhub-student-portal',
    titleKey: 'projects.items.portal.title',
    descriptionKey: 'projects.items.portal.desc',
    longDescriptionKey: 'projects.items.portal.longDesc',
    category: 'web',
    technologies: ['HTML5', 'CSS3', 'Modern JavaScript', 'Responsive UI'],
    image: pythonImg, // reliable fallback image
    imageAlt: 'Educational Lab and Resources Platform',
    githubUrl: 'https://github.com',
    demoUrl: '#contact',
    featured: false
  },
  {
    id: 'ai-prompt-curriculum',
    titleKey: 'projects.items.ai.title',
    descriptionKey: 'projects.items.ai.desc',
    longDescriptionKey: 'projects.items.ai.longDesc',
    category: 'ai',
    technologies: ['Prompt Engineering', 'AI Tools', 'Workflow Design', 'Curriculum'],
    image: iotImg,
    imageAlt: 'Prompt Engineering & AI Tools Educational Guide',
    githubUrl: 'https://github.com',
    demoUrl: '#contact',
    featured: false
  }
];

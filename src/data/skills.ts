import { Skill } from '../types';

export const skillsList: Skill[] = [
  // Programming & Web
  {
    id: 'python',
    name: 'Python',
    category: 'programming',
    proficiencyKey: 'skills.levels.practical',
    descriptionKey: 'skills.items.python.desc',
    iconName: 'Code2'
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    category: 'programming',
    proficiencyKey: 'skills.levels.practical',
    descriptionKey: 'skills.items.frontend.desc',
    iconName: 'Layout'
  },
  {
    id: 'html',
    name: 'HTML5',
    category: 'programming',
    proficiencyKey: 'skills.levels.experienced',
    descriptionKey: 'skills.items.html.desc',
    iconName: 'FileCode2'
  },
  {
    id: 'css',
    name: 'CSS3 & Modern Styling',
    category: 'programming',
    proficiencyKey: 'skills.levels.experienced',
    descriptionKey: 'skills.items.css.desc',
    iconName: 'Palette'
  },

  // Robotics & Hardware
  {
    id: 'arduino',
    name: 'Arduino IDE',
    category: 'robotics',
    proficiencyKey: 'skills.levels.teaching',
    descriptionKey: 'skills.items.arduino.desc',
    iconName: 'Cpu'
  },
  {
    id: 'robotics',
    name: 'Applied Robotics',
    category: 'robotics',
    proficiencyKey: 'skills.levels.teaching',
    descriptionKey: 'skills.items.robotics.desc',
    iconName: 'Bot'
  },
  {
    id: 'mblock',
    name: 'mBlock Platform',
    category: 'robotics',
    proficiencyKey: 'skills.levels.teaching',
    descriptionKey: 'skills.items.mblock.desc',
    iconName: 'Blocks'
  },
  {
    id: 'scratch',
    name: 'Scratch Visual Coding',
    category: 'robotics',
    proficiencyKey: 'skills.levels.teaching',
    descriptionKey: 'skills.items.scratch.desc',
    iconName: 'Gamepad2'
  },

  // Mobile App Development
  {
    id: 'mit-app-inventor',
    name: 'MIT App Inventor',
    category: 'appdev',
    proficiencyKey: 'skills.levels.teaching',
    descriptionKey: 'skills.items.mit.desc',
    iconName: 'Smartphone'
  },
  {
    id: 'android-dev',
    name: 'Android App Basics',
    category: 'appdev',
    proficiencyKey: 'skills.levels.practical',
    descriptionKey: 'skills.items.android.desc',
    iconName: 'Tablet'
  },

  // AI & Automation
  {
    id: 'prompt-eng',
    name: 'Prompt Engineering',
    category: 'ai',
    proficiencyKey: 'skills.levels.practical',
    descriptionKey: 'skills.items.prompt.desc',
    iconName: 'Brain'
  },
  {
    id: 'ai-tools',
    name: 'AI Tools & Productivity',
    category: 'ai',
    proficiencyKey: 'skills.levels.teaching',
    descriptionKey: 'skills.items.aitools.desc',
    iconName: 'Sparkles'
  },

  // Digital Literacy
  {
    id: 'computer-literacy',
    name: 'Computer Literacy',
    category: 'digital',
    proficiencyKey: 'skills.levels.teaching',
    descriptionKey: 'skills.items.literacy.desc',
    iconName: 'Monitor'
  },
  {
    id: 'digital-tools',
    name: 'Digital Tools & OS',
    category: 'digital',
    proficiencyKey: 'skills.levels.experienced',
    descriptionKey: 'skills.items.digitaltools.desc',
    iconName: 'Settings2'
  }
];

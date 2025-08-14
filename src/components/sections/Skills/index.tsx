import React, { useState } from 'react';
import SkillCard from './SkillCard';
import {
  FaCode,
  FaCss3,
  FaSass,
  FaBootstrap,
  FaJsSquare,
  FaVuejs,
  FaReact,
  FaServer,
  FaDatabase,
  FaAws,
  FaGithub,
  FaPython,
  FaInfoCircle,
  FaUserAlt,
  FaLanguage,
  FaWrench,
  FaRulerCombined,
  FaCubes,
  FaCarSide,
  FaMotorcycle,
} from 'react-icons/fa';

interface Skill {
  skill: string;
  icon?: React.ReactNode;
  imageLink?: string;
  items: string[];
}

const Skills: React.FC = () => {
  const [showProgramming, setShowProgramming] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);

  const programmingSkills: Skill[] = [
    { skill: 'HTML', icon: <FaCode />, items: ['WEBページの制作ができます'] },
    { skill: 'CSS3', icon: <FaCss3 />, items: ['WEBページの制作ができます'] },
    { skill: 'Sass', icon: <FaSass />, items: ['プログラマラブルにスタイルを記述'] },
    {
      skill: 'Bootstrap',
      icon: <FaBootstrap />,
      items: ['趣味程度です。このサイトはBootstrapを利用しています。'],
    },
    {
      skill: 'JavaScript / TypeScript',
      icon: <FaJsSquare />,
      items: ['2022年から実務利用', '画面'],
    },
    {
      skill: 'Vue.js',
      icon: <FaVuejs />,
      items: ['趣味程度です。このサイトはVueで作られています。'],
    },
    {
      skill: 'React',
      icon: <FaReact />,
      items: ['2024年から実務利用', 'コンポーネントベースの画面開発'],
    },
    { skill: 'C#', icon: <FaServer />, items: ['2020年から実務利用', 'サーバーサイドの開発'] },
    {
      skill: '.NET',
      imageLink: '/images/NET-core.png',
      items: ['2020年から実務利用', 'サーバーサイドの開発'],
    },
    {
      skill: 'SQL',
      icon: <FaDatabase />,
      items: ['2020年から実務利用', '対象データを取得するクエリの発行など'],
    },
    {
      skill: 'AWS',
      icon: <FaAws />,
      items: ['2023年から実務利用', 'アプリケーションサーバーのインフラ構築など'],
    },
    {
      skill: 'Terraform',
      imageLink: '/images/HashiCorpTerraform.png',
      items: ['2023年から実務利用', 'インフラの構成管理'],
    },
    {
      skill: 'GitHub Enterprise',
      icon: <FaGithub />,
      items: ['2022年から実務利用', 'OrganizationOwnerとして組織管理'],
    },
    {
      skill: 'Python3',
      icon: <FaPython />,
      items: ['大学院での研究に使用', '競技プログラミングで使用'],
    },
  ];

  const certifications: Skill[] = [
    { skill: 'ITパスポート試験', icon: <FaInfoCircle />, items: ['2015年10月-合格'] },
    { skill: '基本情報技術者試験(FE)', icon: <FaUserAlt />, items: ['2018年4月-合格'] },
    { skill: '応用情報技術者試験(AP)', icon: <FaUserAlt />, items: ['2021年4月−合格'] },
    {
      skill: 'AWS SAA-C03',
      icon: <FaAws />,
      items: ['2024年12月−合格', 'AWS認定ソリューションアーキテクト-アソシエイト'],
    },
    { skill: 'TOEIC', icon: <FaLanguage />, items: ['2019年3月受験', 'Score:555'] },
    { skill: '機械設計技術者試験', icon: <FaWrench />, items: ['2016年11月−合格', '3級'] },
    {
      skill: '2次元CAD利用技術者試験',
      icon: <FaRulerCombined />,
      items: ['2015年11月−合格', '2級'],
    },
    { skill: '3次元CAD利用技術者試験', icon: <FaCubes />, items: ['2016年12月−合格', '準1級'] },
    { skill: '普通自動車免許', icon: <FaCarSide />, items: ['サンデードライバー'] },
    { skill: '普通二輪免許', icon: <FaMotorcycle />, items: ['稀にツーリング'] },
  ];

  return (
    <section id="skills" className="py-16 scroll-mt-20">
      <div className="bg-gray-100 rounded-3xl p-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>

        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setShowProgramming(!showProgramming)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
            >
              Programming Language / Framework / Skill
            </button>
          </div>
          {showProgramming && (
            <div className="bg-blue-50 p-6 rounded-lg">
              <ul className="flex flex-wrap justify-center">
                {programmingSkills.map((skill, index) => (
                  <SkillCard
                    key={index}
                    skill={skill.skill}
                    icon={skill.icon}
                    imageLink={skill.imageLink}
                    items={skill.items}
                    bgColor="bg-blue-600"
                  />
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setShowCertifications(!showCertifications)}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
            >
              Certification / Licence
            </button>
          </div>
          {showCertifications && (
            <div className="bg-green-50 p-6 rounded-lg">
              <ul className="flex flex-wrap justify-center">
                {certifications.map((cert, index) => (
                  <SkillCard
                    key={index}
                    skill={cert.skill}
                    icon={cert.icon}
                    items={cert.items}
                    bgColor="bg-green-600"
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;

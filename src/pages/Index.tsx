import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'production', 'portfolio', 'advantages', 'certificates', 'partnership', 'contacts'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <Icon name="Zap" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-gray-900">ElectroTech</span>
            </div>
            <div className="hidden md:flex space-x-6">
              {['about', 'production', 'portfolio', 'advantages', 'certificates', 'partnership', 'contacts'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section ? 'text-primary' : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {section === 'about' && 'О компании'}
                  {section === 'production' && 'Производство'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'advantages' && 'Преимущества'}
                  {section === 'certificates' && 'Сертификаты'}
                  {section === 'partnership' && 'Партнерство'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="bg-primary hover:bg-primary/90">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Contract Electronics Manufacturing
            </Badge>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Производство электроники<br />полного цикла
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Российский контрактный производитель с международными стандартами качества. 
              Готовы стать вашим надежным партнером на азиатском рынке.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('partnership')} className="bg-primary hover:bg-primary/90">
                Начать сотрудничество
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')}>
                Посмотреть проекты
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">О компании</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Современное производство с опытом работы на международном рынке
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: 'Calendar', value: '15+', label: 'Лет на рынке' },
                { icon: 'Factory', value: '12000', label: 'м² площадь производства' },
                { icon: 'Users', value: '200+', label: 'Квалифицированных специалистов' },
                { icon: 'Globe', value: '25+', label: 'Стран-партнеров' }
              ].map((stat, idx) => (
                <Card key={idx} className="text-center border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 pb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={stat.icon} className="text-primary" size={32} />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="production" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Производственные мощности</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Полный цикл производства электроники с автоматизированным контролем качества
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://cdn.poehali.dev/projects/3f0f646d-5934-45d2-b500-29162ede1859/files/beb84223-f875-43f8-801c-dfb59af9e7cc.jpg" 
                  alt="Production facility"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="space-y-4">
                {[
                  { icon: 'Cpu', title: 'SMT монтаж', desc: 'Автоматические линии поверхностного монтажа' },
                  { icon: 'Wrench', title: 'THT монтаж', desc: 'Установка компонентов с выводами' },
                  { icon: 'TestTube', title: 'Тестирование', desc: 'AOI, рентген-контроль, функциональное тестирование' },
                  { icon: 'PackageCheck', title: 'Финализация', desc: 'Покрытие, упаковка, логистика' }
                ].map((item, idx) => (
                  <Card key={idx} className="border-gray-200">
                    <CardContent className="p-4 flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon} className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Портфолио проектов</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Успешно реализованные решения для различных отраслей
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Автомобильная электроника', category: 'Automotive', img: 'https://cdn.poehali.dev/projects/3f0f646d-5934-45d2-b500-29162ede1859/files/b5fedd30-7fcc-46a3-ba25-ac94acb0b460.jpg' },
                { title: 'Медицинское оборудование', category: 'Medical', img: 'https://cdn.poehali.dev/projects/3f0f646d-5934-45d2-b500-29162ede1859/files/b5fedd30-7fcc-46a3-ba25-ac94acb0b460.jpg' },
                { title: 'Промышленная автоматика', category: 'Industrial', img: 'https://cdn.poehali.dev/projects/3f0f646d-5934-45d2-b500-29162ede1859/files/b5fedd30-7fcc-46a3-ba25-ac94acb0b460.jpg' }
              ].map((project, idx) => (
                <Card key={idx} className="overflow-hidden border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                    <Badge className="absolute top-4 left-4 bg-primary">{project.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-600">Полный цикл от разработки до серийного производства</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Конкурентные преимущества</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Почему выбирают нас в качестве партнера
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: 'TrendingDown', title: 'Конкурентная цена', desc: 'Оптимальное соотношение цены и качества' },
                { icon: 'Zap', title: 'Быстрые сроки', desc: 'Гибкая система производства, короткий цикл' },
                { icon: 'Shield', title: 'Контроль качества', desc: 'Многоуровневая система проверки' },
                { icon: 'Truck', title: 'Логистика', desc: 'Отлаженная международная доставка' },
                { icon: 'FileCheck', title: 'Документация', desc: 'Полный пакет документов по стандартам' },
                { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Техническая поддержка на всех этапах' }
              ].map((adv, idx) => (
                <Card key={idx} className="border-gray-200 hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={adv.icon} className="text-primary" size={28} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">{adv.title}</h3>
                    <p className="text-sm text-gray-600">{adv.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Сертификаты и стандарты</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Соответствие международным требованиям качества
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: 'ISO 9001', desc: 'Система менеджмента качества' },
                { name: 'ISO 14001', desc: 'Экологический менеджмент' },
                { name: 'IATF 16949', desc: 'Автомобильный стандарт' },
                { name: 'IPC-A-610', desc: 'Стандарт монтажа электроники' }
              ].map((cert, idx) => (
                <Card key={idx} className="text-center border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Award" className="text-primary" size={32} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{cert.name}</h3>
                    <p className="text-sm text-gray-600">{cert.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="partnership" className="py-20 bg-gradient-to-br from-primary/5 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Партнерство</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Гибкие условия сотрудничества для азиатского рынка
            </p>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://cdn.poehali.dev/projects/3f0f646d-5934-45d2-b500-29162ede1859/files/87f3c681-1e61-4f54-a811-014b56de1d25.jpg" 
                  alt="Partnership"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Мы предлагаем:</h3>
                  <ul className="space-y-3">
                    {[
                      'Гибкие объемы производства от прототипа до серии',
                      'Индивидуальный подход к каждому проекту',
                      'Техническая поддержка на этапе разработки',
                      'Конкурентные цены без скрытых платежей',
                      'Прозрачная отчетность на всех этапах',
                      'Юридическое сопровождение контрактов'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button size="lg" onClick={() => scrollToSection('contacts')} className="w-full bg-primary hover:bg-primary/90">
                  Обсудить проект
                  <Icon name="MessageCircle" className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Контакты</h2>
            <p className="text-lg text-gray-400 text-center mb-12">
              Свяжитесь с нами для обсуждения партнерства
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" className="text-primary" size={28} />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-400">export@electrotech.ru</p>
                  <p className="text-gray-400">asia@electrotech.ru</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" className="text-primary" size={28} />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Телефон</h3>
                  <p className="text-gray-400">+7 (495) 123-45-67</p>
                  <p className="text-gray-400">WhatsApp: +7 (900) 123-45-67</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" className="text-primary" size={28} />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Адрес</h3>
                  <p className="text-gray-400">Москва, Россия</p>
                  <p className="text-gray-400">ул. Производственная, 1</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p>&copy; 2024 ElectroTech. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
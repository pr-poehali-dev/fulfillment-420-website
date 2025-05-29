import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Package",
      title: "Обработка товаров",
      description:
        "Приемка, маркировка, упаковка и подготовка товаров к отправке",
    },
    {
      icon: "Warehouse",
      title: "Складские услуги",
      description: "Хранение товаров в современных складских помещениях",
    },
    {
      icon: "Truck",
      title: "Логистика",
      description: "Организация доставки и транспортировки грузов",
    },
  ];

  const pricing = [
    {
      service: "Приемка товара",
      price: "от 15₽/кг",
      description: "Разгрузка, пересчет, оформление",
    },
    {
      service: "Хранение",
      price: "от 250₽/м³",
      description: "Месячная аренда складского места",
    },
    {
      service: "Упаковка",
      price: "от 25₽/шт",
      description: "Индивидуальная упаковка товаров",
    },
    {
      service: "Отгрузка",
      price: "от 20₽/кг",
      description: "Комплектация и передача в доставку",
    },
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      company: "ООО Торговый Дом",
      rating: 5,
      text: "Отличный сервис! Все товары хранятся в идеальном состоянии, быстрая обработка заказов.",
    },
    {
      name: "Михаил Сидоров",
      company: "ИП Сидоров",
      rating: 5,
      text: "Работаем уже полгода. Профессиональный подход, прозрачные цены, всегда на связи.",
    },
    {
      name: "Елена Козлова",
      company: "Интернет-магазин Стиль",
      rating: 4,
      text: "Качественные складские услуги. Помогли оптимизировать логистику нашего бизнеса.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Package" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">
                Фулфилмент 420
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Услуги
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Прайс
              </a>
              <a
                href="#reviews"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="hidden md:block">
              <Icon name="Phone" size={16} />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Профессиональный фулфилмент</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Надежные
                <span className="text-primary"> складские услуги</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Обработка товаров, складское хранение и логистика для вашего
                бизнеса. Работаем 24/7, гарантируем сохранность и качество.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Calculator" size={20} />
                  Рассчитать стоимость
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Icon name="Play" size={20} />
                  Смотреть видео
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
                alt="Современный склад"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircle"
                    className="text-green-500"
                    size={24}
                  />
                  <div>
                    <p className="font-semibold">99.9% сохранность</p>
                    <p className="text-sm text-gray-600">товаров на складе</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный комплекс складских и логистических услуг для
              интернет-магазинов и торговых компаний
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-primary"
                    />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Прайс-лист
            </h2>
            <p className="text-xl text-gray-600">
              Прозрачные цены без скрытых платежей
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{item.service}</CardTitle>
                  <div className="text-2xl font-bold text-primary">
                    {item.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg">
              <Icon name="FileText" size={20} />
              Скачать полный прайс-лист
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600">
              Что говорят о нас наши партнеры
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={
                          i < review.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {review.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Контакты и местоположение
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg">Адрес склада</h3>
                    <p className="text-gray-600">
                      г. Москва, Варшавское шоссе, 42к1
                    </p>
                    <p className="text-gray-600">
                      Промышленная зона "Южные ворота"
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Phone" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 420-42-04</p>
                    <p className="text-sm text-gray-500">Работаем 24/7</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Icon name="Mail" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">info@fulfillment420.ru</p>
                  </div>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Обратная связь</CardTitle>
                <CardDescription>
                  Оставьте заявку и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <Button className="w-full">
                  <Icon name="Send" size={16} />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Package" size={24} className="text-primary" />
                <span className="text-xl font-bold">Фулфилмент 420</span>
              </div>
              <p className="text-gray-400">
                Профессиональные складские услуги для вашего бизнеса
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Складское хранение</li>
                <li>Обработка товаров</li>
                <li>Логистика</li>
                <li>Упаковка</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 420-42-04</li>
                <li>info@fulfillment420.ru</li>
                <li>Варшавское шоссе, 42к1</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Режим работы</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Пн-Вс: 24/7</li>
                <li>Прием заявок круглосуточно</li>
                <li>Обработка в рабочие дни</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Фулфилмент 420. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

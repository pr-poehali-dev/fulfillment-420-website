import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
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
      <Header />
      <HeroSection />
      <ServicesSection />

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

      <Footer />
    </div>
  );
};

export default Index;

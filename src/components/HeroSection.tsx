import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
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
                <Icon name="CheckCircle" className="text-green-500" size={24} />
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
  );
};

export default HeroSection;

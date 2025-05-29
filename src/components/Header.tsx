import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Icon name="Package" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-gray-900">Фулфилмент 420</h1>
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
  );
};

export default Header;

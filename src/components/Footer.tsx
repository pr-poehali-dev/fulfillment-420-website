import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
  );
};

export default Footer;

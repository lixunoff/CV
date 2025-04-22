import { NextResponse } from 'next/server';
import { XMLParser } from 'fast-xml-parser';

// Интерфейс для данных вакансии
interface JobItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  guid: string;
}

// Вспомогательная функция для получения и парсинга RSS фида
async function fetchAndParseRSS(url: string) {
  try {
    const response = await fetch(url, {
      cache: 'no-store' // Не кэшируем ответ, чтобы всегда получать актуальные данные
    });
    
    if (!response.ok) {
      console.warn(`Failed to fetch RSS from ${url}: ${response.statusText}`);
      return [];
    }
    
    const xmlData = await response.text();
    
    // Парсим XML
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "", // Убираем префикс для атрибутов
    });
    
    const result = parser.parse(xmlData);
    
    // Проверяем структуру данных
    const items = result?.rss?.channel?.item || [];
    console.log(`Found ${Array.isArray(items) ? items.length : 0} items in feed from ${url}`);
    
    return Array.isArray(items) ? items : [];
  } catch (error) {
    console.error(`Error fetching RSS from ${url}:`, error);
    return [];
  }
}

// Список компаний с RSS-фидами вакансий и URL логотипов
const companies = [
  { 
    name: 'Kyivstar.Tech', 
    url: 'https://jobs.dou.ua/vacancies/kyivstar-tech/feeds/',
    logo: 'https://s.dou.ua/CACHE/images/img/static/companies/Kyivstar-Tech-Logo/64be9c1616aed9fb9c07c4104cf95a85.png', 
    companyPage: 'https://jobs.dou.ua/companies/kyivstar-tech/'
  },
  { 
    name: 'ПУМБ', 
    url: 'https://jobs.dou.ua/vacancies/fuib/feeds/',
    logo: 'https://s.dou.ua/CACHE/images/img/static/companies/5445375227287691647/9a99b65058c27a80bfae85c4c880a695.png', 
    companyPage: 'https://jobs.dou.ua/companies/fuib/'
  },
  { 
    name: 'Wix', 
    url: 'https://jobs.dou.ua/vacancies/wix/feeds/',
    logo: 'https://s.dou.ua/CACHE/images/img/static/companies/wix_360_160/4bbcbe48a4aea276bc9a34371bcb5479.png', 
    companyPage: 'https://jobs.dou.ua/companies/wix/'
  },
  { 
    name: 'Ajax Systems', 
    url: 'https://jobs.dou.ua/vacancies/ajax-systems/feeds/',
    logo: 'https://s.dou.ua/CACHE/images/img/static/companies/Name_black_1_m0jargt/541f59645a0f28afe4ed02c82a1fa087.png', 
    companyPage: 'https://jobs.dou.ua/companies/ajax-systems/'
  },
  { 
    name: 'Reface', 
    url: 'https://jobs.dou.ua/vacancies/reface/feeds/',
    logo: 'https://s.dou.ua/CACHE/images/img/static/companies/dou-reface-logo/0a6de17cf3f922fe93eb85ea93b67768.png', 
    companyPage: 'https://jobs.dou.ua/companies/reface/'
  },
  { 
    name: 'ПриватБанк', 
    url: 'https://jobs.dou.ua/vacancies/privatbank/feeds/',
    logo: 'https://s.dou.ua/CACHE/images/img/static/companies/360%D1%85160_4SHvdLC/309febbff58274c80504a0e1f18df9c4.png', 
    companyPage: 'https://jobs.dou.ua/companies/privatbank/'
  },
  { 
    name: 'Мінцифри', 
    url: 'https://jobs.dou.ua/vacancies/ministerstvo-tsifrovoi-transformatsii-ukraini/feeds/',
    logo: 'https://s.dou.ua/CACHE/images/img/static/companies/logo_etgc5sP/af3610be7860e1c79df47abf287d6217.png', 
    companyPage: 'https://jobs.dou.ua/companies/ministerstvo-tsifrovoi-transformatsii-ukraini/'
  },
  { 
    name: 'UKRSIBTECH', 
    url: 'https://jobs.dou.ua/vacancies/ukrsibbank/feeds/',
    logo: 'https://s.dou.ua/CACHE/images/img/static/companies/UkrsibTech_FXJpVeH__/2417dd02cfe4092d31f2f60a24747ac6.png', 
    companyPage: 'https://jobs.dou.ua/companies/ukrsibbank/'
  },
  { 
    name: 'MacPaw', 
    url: 'https://jobs.dou.ua/vacancies/macpaw/feeds/',
    logo: 'https://s.dou.ua/CACHE/images/img/static/companies/macpaw_logo/eba986ef88a39cbad21dcc025f5a4fc1.png', 
    companyPage: 'https://jobs.dou.ua/companies/macpaw/'
  },
  { 
    name: 'TemaBit Fozzy Group', 
    url: 'https://jobs.dou.ua/vacancies/fozzy/feeds/',
    logo: 'https://s.dou.ua/CACHE/images/img/static/companies/logo_temabit-fozzy_djinni_398x131_2_v526jLw/1fdec358b2e8a6fc36c00d858d70370d.png', 
    companyPage: 'https://jobs.dou.ua/companies/fozzy/'
  },
  { 
    name: 'Дія', 
    url: 'https://jobs.dou.ua/vacancies/thedigital/feeds/',
    logo: 'https://s.dou.ua/CACHE/images/img/static/companies/Group_1814_1/8a5c0f61ee9383bbe3db2a94ccb346cf.png', 
    companyPage: 'https://jobs.dou.ua/companies/thedigital/'
  },
  { 
    name: 'Uklon', 
    url: 'https://jobs.dou.ua/vacancies/uklon/feeds/',
    logo: 'https://s.dou.ua/CACHE/images/img/static/companies/image_31/9a8447b1989a9ede034cd29533750643.png', 
    companyPage: 'https://jobs.dou.ua/companies/uklon/'
  },
  { 
    name: 'Nova Digital', 
    url: 'https://jobs.dou.ua/vacancies/nova-digital/feeds/',
    logo: 'https://s.dou.ua/CACHE/images/img/static/companies/logo_pn1nGDb/a12910d821dc77744eee8b2f0fd82922.png', 
    companyPage: 'https://jobs.dou.ua/companies/nova-digital/'
  },
  { 
    name: 'MEGOGO', 
    url: 'https://jobs.dou.ua/vacancies/megogonet-/feeds/',
    logo: 'https://s.dou.ua/CACHE/images/img/static/companies/megogo_logo/23e96f8184dc571b9682b1b7f0879447.png', 
    companyPage: 'https://jobs.dou.ua/companies/megogonet-/'
  },
  { 
    name: 'mono', 
    url: 'https://jobs.dou.ua/vacancies/mono/feeds/',
    logo: 'https://s.dou.ua/CACHE/images/img/static/companies/photo_originals/1fa4ba42fdef744f0e291e632b5ef3d1.png', 
    companyPage: 'https://jobs.dou.ua/companies/mono/'
  },
];

// Ключевые слова для дизайнерских вакансий
const designerKeywords = ['designer', 'дизайнер'];

export async function GET() {
  try {
    console.log("Started fetching jobs from RSS feeds");
    
    // Загружаем и парсим RSS фиды от всех компаний параллельно
    const jobPromises = companies.map(company => 
      fetchAndParseRSS(company.url).then(items => ({ company, items }))
    );
    
    const results = await Promise.all(jobPromises);
    console.log(`Received results from ${results.length} companies`);
    
    // Собираем все вакансии в один массив
    let allJobs: any[] = [];
    let totalItems = 0;
    let totalDesignerJobs = 0;
    
    results.forEach(result => {
      totalItems += result.items.length;
      console.log(`Processing ${result.items.length} items from ${result.company.name}`);
      
      // Фильтруем только дизайнерские вакансии
      const designerJobs = result.items.filter((item: JobItem) => {
        const title = item.title?.toLowerCase() || '';
        return designerKeywords.some(keyword => title.includes(keyword.toLowerCase()));
      });
      
      totalDesignerJobs += designerJobs.length;
      console.log(`Found ${designerJobs.length} designer jobs from ${result.company.name}`);
      
      // Форматируем данные
      const formattedJobs = designerJobs.map((job: JobItem) => {
        // Извлекаем название позиции из заголовка (обычно формат "Position в Company, Location")
        const titleParts = job.title.split(' в ');
        const position = titleParts[0].trim();
        
        // Форматируем дату
        const pubDate = new Date(job.pubDate);
        const formattedDate = pubDate.toLocaleDateString('uk-UA', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        });
        
        return {
          id: job.guid?.split('/?')[0] || job.link,
          title: position,
          company: result.company.name,
          logo: result.company.logo,
          companyPage: result.company.companyPage,
          date: formattedDate,
          pubDate: job.pubDate, // Для правильной сортировки добавляем оригинальную дату
          link: job.link
        };
      });
      
      allJobs = [...allJobs, ...formattedJobs];
    });
    
    console.log(`Total items: ${totalItems}, Total designer jobs: ${totalDesignerJobs}`);
    
    // Сортируем по дате публикации (самые новые сверху)
    allJobs.sort((a, b) => {
      try {
        const dateA = new Date(a.pubDate);
        const dateB = new Date(b.pubDate);
        return dateB.getTime() - dateA.getTime();
      } catch (e) {
        console.error('Error sorting dates:', e);
        return 0;
      }
    });
    
    // Ограничиваем количество вакансий для отображения и удаляем поле pubDate из выходных данных
    const limitedJobs = allJobs.slice(0, 21).map(job => {
      // Удаляем поле pubDate, оно было нужно только для сортировки
      const { pubDate, ...jobWithoutPubDate } = job;
      return jobWithoutPubDate;
    });
    
    console.log(`Returning ${limitedJobs.length} jobs`);
    
    return NextResponse.json(limitedJobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
  }
}
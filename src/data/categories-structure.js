const categoriesStructure = [
  {
    topCategoryId: 1,
    topCategoryName: 'telefonia',
    productLines: [
      {
        productLineId: 1.1,
        productLineName: 'smartphones',
        typeOfProducts: [
          'Iphones',
          'smartphones Android',
          'smartphones Windows',
          'smartphones Blackberry',
          'acessórios para smartphones',
          'outros sistemas operacionais',
        ],
      },
      {
        productLineId: 1.2,
        productLineName: 'telefones Voip',
        typeOfProducts: [
          'telefones Voip',
        ],
      },
    ],
  },
  {
    topCategoryId: 2,
    topCategoryName: 'informática',
    productLines: [
      {
        productLineId: 2.1,
        productLineName: 'desktops, mini-pcs e all-in-ones',
        typeOfProducts: [
          'sistema operacional Apple',
          'sistema operacional Microsoft',
          'sistema operacional Linux',
          'sistema operacional Chrome',
          'outros sistemas operacionais',
        ],
      },
      {
        productLineId: 2.2,
        productLineName: 'notebooks',
        typeOfProducts: [
          'sistema operacional Apple',
          'sistema operacional Microsoft',
          'sistema operacional Linux',
          'sistema operacional Chrome',
          'outros sistemas operacionais',
        ],
      },
      {
        productLineId: 2.3,
        productLineName: 'tablets',
        typeOfProducts: [
          'Ipads',
          'tablets Android',
          'tablets Windows',
          'e-readers',
          'acessórios para tablets',
          'outros tipos de tablets',
        ],
      },
      {
        productLineId: 2.4,
        productLineName: 'processadores',
        typeOfProducts: [
          'processadores AMD',
          'processadores Intel',
          'outros processadores',
        ],
      },
      {
        productLineId: 2.5,
        productLineName: 'placas de vídeo e placas de som',
        typeOfProducts: [
          'placas de vídeo',
          'placas de som',
          'placas de captura',
        ],
      },
      {
        productLineId: 2.6,
        productLineName: 'placas mãe',
        typeOfProducts: [
          'placas mãe',
        ],
      },
      {
        productLineId: 2.7,
        productLineName: 'memória interna (RAM)',
        typeOfProducts: [
          'DDR3',
          'DDR4',
          'DDR5',
          'memórias para notebook',
          'outros tipos de memórias internas',
        ],
      },
      {
        productLineId: 2.8,
        productLineName: 'armazenamento de dados',
        typeOfProducts: [
          'SSDs NVMe',
          'SSDs SATA III',
          'HDs SATA III',
          'HDs IDE',
          'SSDs externos',
          'HDs externos',
          'network-attached storage (NAS)',
          'flash drives USB',
          'cartões de memória (SD)',
          'outros',
        ],
      },
      {
        productLineId: 2.9,
        productLineName: 'fontes',
        typeOfProducts: [
          'fontes de alimentação',
        ],
      },
      {
        productLineId: 2.10,
        productLineName: 'gabinetes',
        typeOfProducts: [
          'gabinetes',
        ],
      },
      {
        productLineId: 2.11,
        productLineName: 'refrigeração',
        typeOfProducts: [
          'water cooler',
          'cooler para CPU',
          'cooler para gabinete',
          'outros dispositivos de refrigeração',
        ],
      },
      {
        productLineId: 2.12,
        productLineName: 'monitores',
        typeOfProducts: [
          'monitores tradicionais',
          'monitores gamers',
        ],
      },
      {
        productLineId: 2.13,
        productLineName: 'rede e internet',
        typeOfProducts: [
          'placas wifi',
          'roteadores wireless',
          'switch',
          'repetidores wireless',
          'no-breaks',
          'estabilizadores',
          'outros dispositivos de rede e internet',
        ],
      },
      {
        productLineId: 2.14,
        productLineName: 'drives ópticos',
        typeOfProducts: [
          'drives Blu-Ray',
          'drives DVD-RW',
        ],
      },
      {
        productLineId: 2.15,
        productLineName: 'periféricos',
        typeOfProducts: [
          'teclados',
          'mouses',
          'mousepads',
          'webcams',
          'caixas de som',
          'headsets',
          'dongles',
          'controles para PC gamer',
          'cabos',
          'outros periféricos',
        ],
      },
      {
        productLineId: 2.16,
        productLineName: 'impressão',
        typeOfProducts: [
          'impressoras tradicionais',
          'impressoras 3D',
          'scanners',
          'outros',
        ],
      },
    ],
  },
  {
    topCategoryId: 3,
    topCategoryName: 'games',
    productLines: [
      {
        productLineId: 3.1,
        productLineName: 'PC',
        typeOfProducts: [
          'jogos para PC',
        ],
      },
      {
        productLineId: 3.2,
        productLineName: 'Playstation 5',
        typeOfProducts: [
          'consoles PS5',
          'jogos para PS5',
          'acessórios para PS5',
          'peças de reposição para PS5',
        ],
      },
      {
        productLineId: 3.3,
        productLineName: 'Playstation 4 ou Playstation 4 Pro',
        typeOfProducts: [
          'consoles PS4 ou PS4 Pro',
          'jogos para PS4 ou PS4 Pro',
          'acessórios para PS4 ou PS4 Pro',
          'peças de reposição para PS4 ou PS4 Pro',
        ],
      },
      {
        productLineId: 3.4,
        productLineName: 'Playstation 3',
        typeOfProducts: [
          'consoles PS3',
          'jogos para PS3',
          'acessórios para PS3',
          'peças de reposição para PS3',
        ],
      },
      {
        productLineId: 3.5,
        productLineName: 'Playstation 2',
        typeOfProducts: [
          'consoles PS2',
          'jogos para PS2',
          'acessórios para PS2',
          'peças de reposição para PS2',
        ],
      },
      {
        productLineId: 3.6,
        productLineName: 'PSP',
        typeOfProducts: [
          'consoles PSP',
          'jogos para PSP',
          'acessórios para PSP',
          'peças de reposição para PSP',
        ],
      },
      {
        productLineId: 3.7,
        productLineName: 'PSP Vita',
        typeOfProducts: [
          'consoles PSP Vita',
          'jogos para PSP Vita',
          'acessórios para PSP Vita',
          'peças de reposição para PSP Vita',
        ],
      },
      {
        productLineId: 3.8,
        productLineName: 'Xbox Series S ou Xbox Series X',
        typeOfProducts: [
          'consoles Xbox Series S ou Xbox Series X',
          'jogos para Xbox Series S ou Xbox Series X',
          'acessórios para Xbox Series S ou Xbox Series X',
          'peças de reposição para Xbox Series S ou Xbox Series X',
        ],
      },
      {
        productLineId: 3.9,
        productLineName: 'Xbox One S ou Xbox One X',
        typeOfProducts: [
          'consoles Xbox One S ou Xbox One X',
          'jogos para Xbox One S ou Xbox One X',
          'acessórios para Xbox One S ou Xbox One X',
          'peças de reposição para Xbox One S ou Xbox One X',
        ],
      },
      {
        productLineId: 3.10,
        productLineName: 'Xbox 360',
        typeOfProducts: [
          'consoles Xbox 360',
          'jogos para Xbox 360',
          'acessórios para Xbox 360',
          'peças de reposição para Xbox 360',
        ],
      },
      {
        productLineId: 3.11,
        productLineName: 'Xbox',
        typeOfProducts: [
          'consoles Xbox',
          'jogos para Xbox',
          'acessórios para Xbox',
          'peças de reposição para Xbox',
        ],
      },
      {
        productLineId: 3.12,
        productLineName: 'Nintendo Switch OLED',
        typeOfProducts: [
          'consoles Nintendo Switch OLED',
          'jogos para Nintendo Switch OLED',
          'acessórios para Nintendo Switch OLED',
          'peças de reposição para Nintendo Switch OLED',
        ],
      },
      {
        productLineId: 3.13,
        productLineName: 'Nintendo Switch Lite',
        typeOfProducts: [
          'consoles Nintendo Switch Lite',
          'jogos para Nintendo Switch Lite',
          'acessórios para Nintendo Switch Lite',
          'peças de reposição para Nintendo Switch Lite',
        ],
      },
      {
        productLineId: 3.14,
        productLineName: 'Nintendo Switch v2',
        typeOfProducts: [
          'consoles Nintendo Switch v2',
          'jogos para Nintendo Switch v2',
          'acessórios para Nintendo Switch v2',
          'peças de reposição para Nintendo Switch v2',
        ],
      },
      {
        productLineId: 3.15,
        productLineName: 'Nintendo Switch v1',
        typeOfProducts: [
          'consoles Nintendo Switch v1',
          'jogos para Nintendo Switch v1',
          'acessórios para Nintendo Switch v1',
          'peças de reposição para Nintendo Switch v1',
        ],
      },
      {
        productLineId: 3.16,
        productLineName: 'Nintendo Wii U',
        typeOfProducts: [
          'consoles Nintendo Wii U',
          'jogos para Nintendo Wii U',
          'acessórios para Nintendo Wii U',
          'peças de reposição para Nintendo Wii U',
        ],
      },
      {
        productLineId: 3.17,
        productLineName: 'Nintendo 3DS',
        typeOfProducts: [
          'consoles Nintendo 3DS',
          'jogos para Nintendo 3DS',
          'acessórios para Nintendo 3DS',
          'peças de reposição para Nintendo 3DS',
        ],
      },
      {
        productLineId: 3.18,
        productLineName: 'Nintendo Wii',
        typeOfProducts: [
          'consoles Nintendo Wii',
          'jogos para Nintendo Wii',
          'acessórios para Nintendo Wii',
          'peças de reposição para Nintendo Wii',
        ],
      },
      {
        productLineId: 3.19,
        productLineName: 'Retrô',
        typeOfProducts: [
          'consoles Retrô',
          'jogos para consoles Retrô',
          'acessórios para consoles Retrô',
          'peças de reposição para consoles Retrô',
        ],
      },
    ],
  },
  {
    topCategoryId: 4,
    topCategoryName: 'eletrônicos, áudio e vídeo',
    productLines: [
      {
        productLineId: 4.1,
        productLineName: 'dispositivos inteligentes',
        typeOfProducts: [
          'smartwatches',
          'assistentes inteligentes',
          'lâmpadas inteligentes',
          'dispositivos inteligentes para monitoramento físico',
          'dispositivos inteligentes para monitoramento de saúde',
          'dispositivos inteligentes para segurança',
          'dispositivos inteligentes domiciliares',
          'robôs aspiradores de pó',
          'babás eletrônicas',
          'outros dispositivos inteligentes',
        ],
      },
      {
        productLineId: 4.2,
        productLineName: 'TVs e smart TVs',
        typeOfProducts: [
          'LCD',
          'LED',
          'OLED',
          'QLED',
          'MicroLED',
          'outras TVs e smart TVs',
        ],
      },
      {
        productLineId: 4.3,
        productLineName: 'dispositivos de streaming de mídia',
        typeOfProducts: [
          'Amazon Fire TV',
          'Apple TV',
          'Roku Express',
          'Xiaomi Mi TV',
          'Google Chromecast',
          'outros dispositivos de streaming de mídia',
        ],
      },
      {
        productLineId: 4.4,
        productLineName: 'dispositivos de vídeo',
        typeOfProducts: [
          'projetores',
          'retrôprojetores',
          'telas',
          'DVD e Blu-Ray players',
          'outros dispositivos de vídeo',
        ],
      },
      {
        productLineId: 4.5,
        productLineName: 'dispositivos de áudio',
        typeOfProducts: [
          'headphones',
          'earbuds',
          'caixas de som',
          'home theaters',
          'mini system',
          'amplificadores e receivers',
          'interface de áudio',
          'divisores de frequência',
          'DJ decks e DJ mixers',
          'controladores MIDI',
          'unidade de efeitos',
          'equalizadores',
          'microfones e pré amplificadores',
          'Ipods',
          'outros dispositivos de áudio',
        ],
      },
      {
        productLineId: 4.6,
        productLineName: 'câmeras',
        typeOfProducts: [
          'câmeras',
          'acessórios para câmeras',
          'outros'
        ],
      },
      {
        productLineId: 4.7,
        productLineName: 'drones',
        typeOfProducts: [
          'drones',
          'acessórios para drones',
          'outros'
        ],
      },
    ],
  },
  {
    topCategoryId: 5,
    topCategoryName: 'veículos elétricos leves',
    productLines: [
      {
        productLineId: 5.1,
        productLineName: 'veículos elétricos leves',
        typeOfProducts: [
          'patinetes elétricos',
          'skates elétricos',
          'bicicletas elétricas',
          'scooters elétricas',
          'monociclo elétrico',
          'outros veículos elétricos leves',
        ],
      },
    ],
  },
];

export default categoriesStructure;

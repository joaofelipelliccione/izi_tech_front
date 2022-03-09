/* eslint-disable max-lines */
/* eslint-disable max-len */

import appleTvPic1 from './publishedProductsPictures/appleTvPic1.jpg';
import appleTvPic2 from './publishedProductsPictures/appleTvPic2.jpg';
import controleXboxPic1 from './publishedProductsPictures/controleXboxPic1.jpg';
import controleXboxPic2 from './publishedProductsPictures/controleXboxPic2.jpg';
import dellInspironPic1 from './publishedProductsPictures/dellInspironPic1.jpg';
import dellInspironPic2 from './publishedProductsPictures/dellInspironPic2.jpg';
import dellInspironPic3 from './publishedProductsPictures/dellInspironPic3.jpg';
import echoDotPic1 from './publishedProductsPictures/echoDotPic1.jpg';
import echoDotPic2 from './publishedProductsPictures/echoDotPic2.jpg';
import echoDotPic3 from './publishedProductsPictures/echoDotPic3.jpg';
import headphoneSonyPic1 from './publishedProductsPictures/headphoneSonyPic1.jpg';
import headphoneSonyPic2 from './publishedProductsPictures/headphoneSonyPic2.jpg';
import intelI7Pic1 from './publishedProductsPictures/intelI7Pic1.jpg';
import intelI7Pic2 from './publishedProductsPictures/intelI7Pic2.jpg';
import iphoneXPic1 from './publishedProductsPictures/iphoneXPic1.jpg';
import iphoneXPic2 from './publishedProductsPictures/iphoneXPic2.jpg';
import placaDeVideoPic1 from './publishedProductsPictures/placaDeVideoPic1.jpg';
import ps4ProPic1 from './publishedProductsPictures/ps4ProPic1.jpg';
import ps4ProPic2 from './publishedProductsPictures/ps4ProPic2.jpg';

const RIO_DE_JANEIRO = 'Rio de Janeiro';
const EMAIL_JF = 'jf.pelliccione@gmail.com';
const EMAIL_LU = 'luizasayao2009@hotmail.com';
const EMAIL_VIVI = 'vivica.pelli@yahoo.com.br';
const EMAIL_ANDRE = 'arcunha_br@yahoo.com.br';
const EMAIL_PIPA = 'pipathedog@outlook.com';
const E_A_V_TOP_CAT = 'eletrônicos, áudio e vídeo';
const INFORMATICA_TOP_CAT = 'informática';

const dummyPublishedProducts = [
  {
    userMail: EMAIL_JF,
    userPublishedProducts: [
      {
        productId: 3,
        publicationDate: '15/10/2021',
        productTitle: 'Apple Tv 4k [32gb] - Modelo A1842',
        productDescription: 'Comprada nos EUA ao final de 2020.\nUnidade com pouquíssimo uso, extremamente conservada.\nAcompanha caixa com todos os acessórios originais.',
        productAcceptChange: false,
        productTopCategory: E_A_V_TOP_CAT,
        productLine: 'dispositivos de streaming de mídia',
        productType: 'Apple TV',
        productCondition: 'C',
        productPrice: '1.200,00',
        productPictures: [appleTvPic1, appleTvPic2],
        productLocation: {
          productCEP: '22451-130',
          productNeighborhood: 'Gávea',
          productCity: RIO_DE_JANEIRO,
          productUF: 'RJ',
          productDDD: '21',
        },
        productContact: {
          productMail: EMAIL_JF,
          productCellphone: '(21) 97257-4272',
        },
      },
      {
        productId: 6,
        publicationDate: '03/12/2021',
        productTitle: 'Controle lacrado para Xbox Series X ou S - Modelo Electric Volt',
        productDescription: '- Nunca utilizado.\n- Não aceito troca.\n- Caso tenha interesse, entrego no Shopping da Gávea ou no Shopping Leblon.',
        productAcceptChange: false,
        productTopCategory: 'games',
        productLine: 'Xbox Series S ou Xbox Series X',
        productType: 'acessórios para Xbox Series S ou Xbox Series X',
        productCondition: 'AA',
        productPrice: '445,00',
        productPictures: [controleXboxPic1, controleXboxPic2],
        productLocation: {
          productCEP: '22451-130',
          productNeighborhood: 'Gávea',
          productCity: RIO_DE_JANEIRO,
          productUF: 'RJ',
          productDDD: '21',
        },
        productContact: {
          productMail: EMAIL_JF,
          productCellphone: '(21) 97257-4272',
        },
      },
    ],
  },
  {
    userMail: EMAIL_LU,
    userPublishedProducts: [
      {
        productId: 1,
        publicationDate: '03/01/2021',
        productTitle: 'Dell Inspiron 5490 - i5 - 10210U - 12GB RAM - 256GB nvme - NF',
        productDescription: 'Notebook Dell (Somente VENDA)\nGarantia até 30/11/2021\nCom Nota Fiscal em meu nome\nCompra realizada em 30/11/2020\n\nProduto sem defeitos e em estado de novo.\nMotivo da Venda: Tenho outro para trabalho.\n\nAcompanha Itens Originais: Carregador (bivolt), NF e Folhetos\n\nModelo Inspiron 5490\nCor: Prata\nPeso: 1,4kg\nTela: 14" Full-HD Anti-Glare (Matte)\nProcessador: Intel i5-10210U (10ª geração)\nMemória RAM: 12GB DDR4 (expansível até 20GB)\nArmazenamento: SSD NVMe 256GB\nBateria: 53Whr (10h a 12h de duração dependendo do tipo de uso)\nConexão USB-C com DisplayPort e PowerDelivery\nTeclado: Retro iluminado ABNT2 com leitor Biométrico\nWebcam: HD\nSistema Operacional: Windows 11 Home (PT-BR)',
        productAcceptChange: false,
        productTopCategory: INFORMATICA_TOP_CAT,
        productLine: 'notebooks',
        productType: 'sistema operacional Microsoft',
        productCondition: 'C',
        productPrice: '4.000,00',
        productPictures: [dellInspironPic1, dellInspironPic2, dellInspironPic3],
        productLocation: {
          productCEP: '22431-001',
          productNeighborhood: 'Leblon',
          productCity: RIO_DE_JANEIRO,
          productUF: 'RJ',
          productDDD: '21',
        },
        productContact: {
          productMail: EMAIL_LU,
          productCellphone: '(21) 99945-1971',
        },
      },
      {
        productId: 2,
        publicationDate: '09/06/2021',
        productTitle: 'Alexa Echo Dot - 4a Geração',
        productDescription: 'Utilizada por pouquíssimo tempo. Foi comprada na Amazon no início de 2021.\nAcompanha caixa com todos os acessórios originais.',
        productAcceptChange: true,
        productTopCategory: E_A_V_TOP_CAT,
        productLine: 'dispositivos inteligentes',
        productType: 'assistentes inteligentes',
        productCondition: 'B',
        productPrice: '380,00',
        productPictures: [echoDotPic1, echoDotPic2, echoDotPic3],
        productLocation: {
          productCEP: '22431-001',
          productNeighborhood: 'Leblon',
          productCity: RIO_DE_JANEIRO,
          productUF: 'RJ',
          productDDD: '21',
        },
        productContact: {
          productMail: 'luizasayao2009@hotmail.com',
          productCellphone: '(21) 99945-1971',
        },
      },
    ],
  },
  {
    userMail: EMAIL_VIVI,
    userPublishedProducts: [
      {
        productId: 4,
        publicationDate: '06/11/2021',
        productTitle: 'Headphone bluetooth Sony WH-1000XM4',
        productDescription: 'O melhor fone da Sony, muito novo, quase não usado. Comprado no site oficial da Sony no Brasil.\nAcompanha Nota fiscal e todos os acessorios, dentro da caixa original.\nEspuma de couro intacta, fone sem nenhum arranhao.\nAceito troca somente por Bose 700, com nota fiscal.',
        productAcceptChange: true,
        productTopCategory: E_A_V_TOP_CAT,
        productLine: 'dispositivos de áudio',
        productType: 'headphones',
        productCondition: 'A',
        productPrice: '2.000,00',
        productPictures: [headphoneSonyPic1, headphoneSonyPic2],
        productLocation: {
          productCEP: '22261-005',
          productNeighborhood: 'Humaitá',
          productCity: RIO_DE_JANEIRO,
          productUF: 'RJ',
          productDDD: '21',
        },
        productContact: {
          productMail: EMAIL_VIVI,
          productCellphone: '(21) 99519-4210',
        },
      },
      {
        productId: 8,
        publicationDate: '10/01/2022',
        productTitle: 'Processador Intel Core I7 - 9700KF',
        productDescription: 'Processador Intel Core i7-9700K de 9ª geração, frequência de 3,6GHz @ 4.9GHz Boost, desbloqueado para overclock, 8 núcleos + 8 threads, 64-bit, 12MB Cache, compatível c/ socket LGA1151.\n\nProduto na caixa e funcionando perfeitamente. Acompanha nota fiscal e está dentro da garantia da Intel.',
        productAcceptChange: false,
        productTopCategory: INFORMATICA_TOP_CAT,
        productLine: 'processadores',
        productType: 'processadores Intel',
        productCondition: 'A',
        productPrice: '1.300,00',
        productPictures: [intelI7Pic1, intelI7Pic2],
        productLocation: {
          productCEP: '22261-005',
          productNeighborhood: 'Humaitá',
          productCity: RIO_DE_JANEIRO,
          productUF: 'RJ',
          productDDD: '21',
        },
        productContact: {
          productMail: 'vivica.pelli@yahoo.com.br',
          productCellphone: '(21) 99519-4210',
        },
      },
    ],
  },
  {
    userMail: EMAIL_ANDRE,
    userPublishedProducts: [
      {
        productId: 5,
        publicationDate: '14/11/2021',
        productTitle: 'Iphone X com caixa e nota fiscal',
        productDescription: 'Iphone X com caixa e nota fiscal, intacto e nunca aberto para conserto.',
        productAcceptChange: true,
        productTopCategory: 'telefonia',
        productLine: 'smartphones',
        productType: 'Iphones',
        productCondition: 'B',
        productPrice: '3.000,00',
        productPictures: [iphoneXPic1, iphoneXPic2],
        productLocation: {
          productCEP: '22451-130',
          productNeighborhood: 'Gávea',
          productCity: RIO_DE_JANEIRO,
          productUF: 'RJ',
          productDDD: '21',
        },
        productContact: {
          productMail: EMAIL_ANDRE,
          productCellphone: '(21) 99917-1710',
        },
      },
    ],
  },
  {
    userMail: EMAIL_PIPA,
    userPublishedProducts: [
      {
        productId: 9,
        publicationDate: '12/01/2022',
        productTitle: 'Placa De Vídeo Nvidia Asus Tuf Gaming Geforce Gtx 16 Series',
        productDescription: 'Nvidia Asus TUF Gaming GeForce GTX 16 Series GTX 1660 SUPER TUF-GTX1660S-O6G-GAMING OC Edition 6GB / em perfeito estado (menos de um ano de uso)',
        productAcceptChange: false,
        productTopCategory: INFORMATICA_TOP_CAT,
        productLine: 'placas de vídeo e placas de som',
        productType: 'placas de vídeo',
        productCondition: 'B',
        productPrice: '3.200,00',
        productPictures: [placaDeVideoPic1],
        productLocation: {
          productCEP: '20531-590',
          productNeighborhood: 'Alto da Boa Vista',
          productCity: RIO_DE_JANEIRO,
          productUF: 'RJ',
          productDDD: '21',
        },
        productContact: {
          productMail: EMAIL_PIPA,
          productCellphone: 'não informado',
        },
      },
      {
        productId: 7,
        publicationDate: '29/12/2021',
        productTitle: 'PS4 PRO 1TB - CUH-7115B (Semi-novo, na caixa)',
        productDescription: 'VENDO/TROCO PS4 PRO 1TB - MODELO CUH- 7115B (SEMI-NOVO) APARELHO MUITO BEM CONSERVADO\n\nO CONSOLE ACOMPANHA:\n* 1 CONTROLE ORIGINAL\n* 2 JOGOS MÍDIA FÍSICA\n* 5 JOGOS NA MEMÓRIA INTERNA\n* 1 CABO DE HDMI\n* 1 CABO DE ENERGIA\n* 1 CABO DE CARREGAR O CONTROLE\n* NA CAIXA COMPLETO',
        productAcceptChange: true,
        productTopCategory: 'games',
        productLine: 'Playstation 4 ou Playstation 4 Pro',
        productType: 'consoles PS4 ou PS4 Pro',
        productCondition: 'B',
        productPrice: '2.390,00',
        productPictures: [ps4ProPic1, ps4ProPic2],
        productLocation: {
          productCEP: '20531-590',
          productNeighborhood: 'Alto da Boa Vista',
          productCity: RIO_DE_JANEIRO,
          productUF: 'RJ',
          productDDD: '21',
        },
        productContact: {
          productMail: EMAIL_PIPA,
          productCellphone: 'não informado',
        },
      },
    ],
  },
];

export default dummyPublishedProducts;

import jfPic from './registeredUsersPictures/jfProfilePic.jpeg';
import luPic from './registeredUsersPictures/luProfilePic.jpeg';
import viviPic from './registeredUsersPictures/viviProfilePic.jpeg';
import andrePic from './registeredUsersPictures/andreProfilePic.jpeg';

const RIO_DE_JANEIRO = 'Rio de Janeiro';
const RJ = 'RJ';
const DDD_21 = '21';
const NOT_INFORMED = 'não informado';

const dummyRegisteredUsers = [
  {
    dateOfRegister: '05/08/2018',
    userName: 'João Felipe Pelliccione',
    userMail: 'jf.pelliccione@gmail.com',
    userPassword: 'Jonyfoot1',
    userBirthday: '1998-10-23',
    userCPF: '180.559.177-01',
    userCellphone: '(21) 97257-4272',
    userPicture: jfPic,
    userAddress: {
      userCEP: '22451-130',
      userStreet: 'Rua Piratininga',
      userComplement: 'número 15, APTO 801',
      userNeighborhood: 'Gávea',
      userCity: RIO_DE_JANEIRO,
      userUF: RJ,
      userDDD: DDD_21,
    },
  },
  {
    dateOfRegister: '19/10/2019',
    userName: 'Luiza Sayão',
    userMail: 'luizasayao2009@hotmail.com',
    userPassword: 'Luiza1234',
    userBirthday: '1998-12-12',
    userCPF: '180.143.187-65',
    userCellphone: '(21) 99945-1971',
    userPicture: luPic,
    userAddress: {
      userCEP: '22431-001',
      userStreet: 'Avenida Bartolomeu Mitre',
      userComplement: 'número 72, APTO 402',
      userNeighborhood: 'Leblon',
      userCity: RIO_DE_JANEIRO,
      userUF: RJ,
      userDDD: DDD_21,
    },
  },
  {
    dateOfRegister: '05/06/2020',
    userName: 'Ana Victória Pelliccione',
    userMail: 'vivica.pelli@yahoo.com.br',
    userPassword: 'Vivi1234',
    userBirthday: '1994-09-02',
    userCPF: '154.328.037-47',
    userCellphone: '(21) 99519-4210',
    userPicture: viviPic,
    userAddress: {
      userCEP: '22261-005',
      userStreet: 'Rua do Humaitá"',
      userComplement: 'número 243, APTO 701',
      userNeighborhood: 'Humaitá',
      userCity: RIO_DE_JANEIRO,
      userUF: RJ,
      userDDD: DDD_21,
    },
  },
  {
    dateOfRegister: '13/11/2021',
    userName: 'André Cunha',
    userMail: 'arcunha_br@yahoo.com.br',
    userPassword: 'Andre1234',
    userBirthday: '1960-09-17',
    userCPF: '667.446.877-01',
    userCellphone: '(21) 99917-1710',
    userPicture: andrePic,
    userAddress: {
      userCEP: '22451-130',
      userStreet: 'Rua Piratininga',
      userComplement: 'número 15, APTO 801',
      userNeighborhood: 'Gávea',
      userCity: RIO_DE_JANEIRO,
      userUF: RJ,
      userDDD: DDD_21,
    },
  },
  {
    dateOfRegister: '05/01/2022',
    userName: 'Pipa The Dog',
    userMail: 'pipathedog@outlook.com',
    userPassword: 'Pipa1234',
    userBirthday: 'yyyy-mm-dd',
    userCPF: NOT_INFORMED,
    userCellphone: NOT_INFORMED,
    userPicture: '',
    userAddress: {
      userCEP: NOT_INFORMED,
      userStreet: NOT_INFORMED,
      userComplement: NOT_INFORMED,
      userNeighborhood: NOT_INFORMED,
      userCity: NOT_INFORMED,
      userUF: NOT_INFORMED,
      userDDD: NOT_INFORMED,
    },
  },
];

export default dummyRegisteredUsers;

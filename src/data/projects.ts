export interface Project {
  id: string;
  name: string;
  nameEn: string;
  location: string;
  description: string;
  heroImage: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 'apgujeong',
    name: '압구정 삼성',
    nameEn: 'RAEMIAN APGUJEONG SAMSUNG',
    location: '서울 강남구 압구정동',
    description: '한강과 서울숲을 동시에 조망하는 강남 최고의 프리미엄 주거 단지',
    heroImage: '/images/apgujeong/DJI_0806-aerial.jpg',
    category: '초고층 주거',
  },
  {
    id: 'onebailey',
    name: '원베일리',
    nameEn: 'RAEMIAN ONE BAILEY',
    location: '서울 서초구 반포동',
    description: '한강 조망의 정점, 반포의 새로운 랜드마크',
    heroImage: '/images/onebailey/exterior-01.jpg',
    category: '프리미엄 주거',
  },
  {
    id: 'onepentas',
    name: '원펜타스',
    nameEn: 'RAEMIAN ONE PENTAS',
    location: '서울 서초구 반포동',
    description: '갤러리 포레와 클럽 래미안이 만드는 프리미엄 라이프스타일',
    heroImage: '/images/onepentas/panorama-01.jpg',
    category: '프리미엄 주거',
  },
  {
    id: 'firstige',
    name: '퍼스티지',
    nameEn: 'RAEMIAN FIRSTIGE',
    location: '서울 서초구 반포동',
    description: '반포의 자부심, 한강변 프리미엄 주거의 기준',
    heroImage: '/images/firstige/exterior-01.jpg',
    category: '프리미엄 주거',
  },
  {
    id: 'chelitus',
    name: '첼리투스',
    nameEn: 'RAEMIAN CHELITUS',
    location: '서울 서초구 반포동',
    description: '한강과 함께하는 품격 있는 일상',
    heroImage: '/images/chelitus/exterior-01.jpg',
    category: '프리미엄 주거',
  },
  {
    id: 'trinione',
    name: '트리니원',
    nameEn: 'RAEMIAN TRINIONE',
    location: '서울 서초구 반포동',
    description: '반포 3지구, 미래를 설계하는 차세대 프리미엄 단지',
    heroImage: '/images/trinione/aerial-south.jpg',
    category: '차세대 주거',
  },
];

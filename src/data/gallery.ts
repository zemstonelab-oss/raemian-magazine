export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export const galleryItems: GalleryItem[] = [
  { id: '1', title: '래미안 원베일리 외관', category: 'Architecture', image: '/images/apgujeong/RAEMIAN-063s.jpg', aspect: 'portrait' },
  { id: '2', title: '한강 파노라마 뷰', category: 'View', image: '/images/apgujeong/DJI_0795-aerial.jpg', aspect: 'landscape' },
  { id: '3', title: '원베일리 전경', category: 'Architecture', image: '/images/apgujeong/RAEMIAN-004s.jpg', aspect: 'square' },
  { id: '4', title: '원베일리 야경', category: 'View', image: '/images/apgujeong/RAEMIAN-057s.jpg', aspect: 'portrait' },
  { id: '5', title: '도시와 자연의 조화', category: 'View', image: '/images/apgujeong/DJI_0806-aerial.jpg', aspect: 'landscape' },
  { id: '6', title: '원베일리 타워', category: 'Architecture', image: '/images/apgujeong/RAEMIAN-116s.jpg', aspect: 'square' },
  { id: '7', title: '한강변 스카이라인', category: 'View', image: '/images/apgujeong/RAEMIAN-197s.jpg', aspect: 'landscape' },
  { id: '8', title: '원베일리 랜드마크', category: 'Architecture', image: '/images/apgujeong/RAEMIAN-205s.jpg', aspect: 'portrait' },
];

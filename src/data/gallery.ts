export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export const galleryItems: GalleryItem[] = [
  { id: '1', title: '래미안 원베일리 외관', category: 'Architecture', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=1200&fit=crop', aspect: 'portrait' },
  { id: '2', title: '한강 파노라마 뷰', category: 'View', image: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=1200&h=800&fit=crop', aspect: 'landscape' },
  { id: '3', title: '프리미엄 인테리어', category: 'Interior', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=800&fit=crop', aspect: 'square' },
  { id: '4', title: '중앙 정원', category: 'Landscape', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=1200&fit=crop', aspect: 'portrait' },
  { id: '5', title: '커뮤니티 라운지', category: 'Interior', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop', aspect: 'landscape' },
  { id: '6', title: '야경', category: 'View', image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=800&fit=crop', aspect: 'square' },
  { id: '7', title: '모던 키친', category: 'Interior', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop', aspect: 'landscape' },
  { id: '8', title: '스카이라운지', category: 'Architecture', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=1200&fit=crop', aspect: 'portrait' },
];

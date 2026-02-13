export type Category = 'lifestyle' | 'architecture' | 'film' | 'community';

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: Category;
  categoryLabel: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content: string[];
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: 'raemian-one-bailey',
    title: '래미안 원베일리, 한강을 품은 프리미엄 라이프',
    subtitle: '서초의 중심에서 만나는 새로운 주거 패러다임',
    category: 'architecture',
    categoryLabel: 'Architecture',
    date: '2026.02.10',
    author: '래미안 에디터',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
    excerpt: '한강변 최고의 입지에서 펼쳐지는 래미안 원베일리의 프리미엄 라이프스타일을 만나보세요.',
    content: [
      '서울 서초구 반포동, 한강을 마주한 최고의 입지에 래미안 원베일리가 자리잡고 있습니다. 2,990세대 규모의 이 단지는 래미안이 추구하는 프리미엄 주거의 정수를 보여줍니다.',
      '단지 내부로 들어서면 가장 먼저 눈에 띄는 것은 광활한 중앙 정원입니다. 약 1만 평 규모의 조경 공간에는 산책로, 수경시설, 그리고 계절마다 변화하는 식재가 어우러져 도심 속 자연을 선사합니다.',
      '각 세대는 한강 조망을 극대화한 설계로, 거실에서 바라보는 한강의 파노라마는 말 그대로 압도적입니다. 천장고 2.5m의 넉넉한 공간감과 대형 창호가 만들어내는 개방감은 래미안만의 차별화된 주거 경험입니다.',
      '커뮤니티 시설 또한 호텔급으로 조성되어 있습니다. 인피니티 풀, 사우나, 피트니스 센터, 골프 연습장, 독서실 등 다양한 시설이 입주민의 라이프스타일을 풍요롭게 합니다.',
    ],
    featured: true,
  },
  {
    id: 'interior-trend-2026',
    title: '2026 인테리어 트렌드: 미니멀 럭셔리',
    subtitle: '절제된 아름다움이 만드는 품격 있는 공간',
    category: 'lifestyle',
    categoryLabel: 'Lifestyle',
    date: '2026.01.28',
    author: '김소현 에디터',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop',
    excerpt: '2026년 주거 인테리어의 핵심 키워드는 "미니멀 럭셔리". 적게, 그러나 깊게.',
    content: [
      '2026년 인테리어 트렌드의 핵심은 "미니멀 럭셔리"입니다. 화려한 장식 대신 소재의 질감과 공간의 비례로 품격을 만들어내는 것이 핵심입니다.',
      '자연 소재의 귀환이 두드러집니다. 대리석, 원목, 리넨 등 자연에서 온 소재들이 공간에 따뜻함과 고급스러움을 동시에 부여합니다. 특히 래미안의 프리미엄 마감재는 이러한 트렌드를 완벽하게 반영합니다.',
      '조명 디자인도 중요한 요소입니다. 간접 조명과 포인트 조명의 조합으로 공간에 깊이감을 더하고, 시간대에 따라 변화하는 분위기를 연출할 수 있습니다.',
      '컬러 팔레트는 따뜻한 뉴트럴 톤이 주를 이룹니다. 베이지, 그레이지, 웜 화이트 등 차분하면서도 세련된 색상이 공간 전체를 아우릅니다.',
    ],
  },
  {
    id: 'raemian-film-archive',
    title: '"당신의 내일을 짓다" — 래미안 브랜드 필름',
    subtitle: '래미안이 전하는 주거의 새로운 이야기',
    category: 'film',
    categoryLabel: 'Film',
    date: '2026.01.15',
    author: '래미안 브랜드팀',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&h=800&fit=crop',
    excerpt: '래미안 브랜드 필름 "당신의 내일을 짓다" 비하인드 스토리와 제작 과정을 공개합니다.',
    content: [
      '래미안의 새로운 브랜드 필름 "당신의 내일을 짓다"가 공개되었습니다. 이 필름은 단순한 광고를 넘어, 래미안이 추구하는 주거 철학을 담아낸 작품입니다.',
      '감독은 "집은 단순한 건물이 아니라 삶의 이야기가 쌓이는 곳"이라는 메시지를 전달하고 싶었다고 말합니다. 영상 속에서 한 가족의 일상이 래미안의 공간 안에서 아름답게 펼쳐집니다.',
      '촬영은 실제 래미안 단지에서 진행되었으며, 자연광을 최대한 활용한 시네마틱한 영상미가 특징입니다.',
      '이 필름은 공개 2주 만에 1,000만 뷰를 돌파하며 큰 화제를 모았습니다.',
    ],
  },
  {
    id: 'banpo-neighborhood-guide',
    title: '반포, 일상이 예술이 되는 동네',
    subtitle: '래미안 입주민이 전하는 반포 라이프',
    category: 'community',
    categoryLabel: 'Community',
    date: '2026.01.05',
    author: '박지윤 에디터',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop',
    excerpt: '반포 주민들이 추천하는 카페, 레스토랑, 문화 공간을 소개합니다.',
    content: [
      '반포는 서울에서도 가장 품격 있는 주거지 중 하나로 꼽힙니다. 한강과 가까운 입지, 우수한 학군, 그리고 풍부한 문화 인프라가 어우러진 이곳은 많은 이들이 꿈꾸는 동네입니다.',
      '반포 한강공원은 주민들의 일상적인 산책 코스입니다. 특히 반포대교 달빛무지개분수는 밤이면 환상적인 야경을 선사하며, 주말 가족 나들이의 명소이기도 합니다.',
      '맛집과 카페도 다양합니다. 고메이494, 더현대 서울 등 쇼핑과 미식을 동시에 즐길 수 있는 공간이 가까이에 있습니다.',
      '래미안 입주민들은 단지 내 커뮤니티 활동도 활발합니다. 독서 모임, 와인 클럽, 요가 클래스 등 다양한 프로그램이 운영되고 있습니다.',
    ],
  },
];

export const categoryMap: Record<string, string> = {
  all: 'All',
  lifestyle: 'Lifestyle',
  architecture: 'Architecture',
  film: 'Film',
  community: 'Community',
};

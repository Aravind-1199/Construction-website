export interface Post {
  id: number;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
}

export const posts: Post[] = [
{
      id: 2,
      title: 'Sustainable Building Materials: The Future of Construction',
      excerpt: 'Explore eco-friendly materials and sustainable construction practices that are shaping the future of the industry.',
      image: 'https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Sarah Johnson',
      date: 'March 10, 2024',
      readTime: '7 min read',
      category: 'Sustainability'
    },
    {
      id: 3,
      title: 'How to Plan Your Commercial Construction Project',
      excerpt: 'A comprehensive guide to planning successful commercial construction projects from concept to completion.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Mike Davis',
      date: 'March 5, 2024',
      readTime: '8 min read',
      category: 'Planning'
    },
    {
      id: 4,
      title: 'Latest Technology Trends in Construction',
      excerpt: 'Discover how BIM, drones, and AI are revolutionizing the construction industry and improving project outcomes.',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Emily Wilson',
      date: 'February 28, 2024',
      readTime: '6 min read',
      category: 'Technology'
    },
    {
      id: 5,
      title: 'Cost-Effective Home Renovation Ideas',
      excerpt: 'Transform your home without breaking the bank with these practical and budget-friendly renovation strategies.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'David Brown',
      date: 'February 20, 2024',
      readTime: '4 min read',
      category: 'Renovation'
    },
    {
      id: 6,
      title: 'Understanding Building Codes and Permits',
      excerpt: 'Navigate the complex world of building codes and permits with this essential guide for property owners.',
      image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Lisa Chen',
      date: 'February 15, 2024',
      readTime: '9 min read',
      category: 'Regulations'
    }
];
